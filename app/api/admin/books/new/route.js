import Books from "@models/Books";
import { connectToDB } from "@utils/ConnectToDB";
import cloudinary from "@utils/Cloudinary";

export const POST = async (req) => {
  const { title, price, image, description, slug, category, author, job } =
    await req.json();
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "book images",
    });
    await connectToDB();
    const newBook = new Books({
      title,
      // slug,
      price,
      description,
      category,
      author,
      job,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    await newBook.save();
    return new Response(JSON.stringify(newBook), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new book", { status: 500 });
  }
};
