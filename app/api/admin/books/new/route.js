import Books from "@models/Books";
import { connectToDB } from "@utils/ConnectToDB";

export const POST = async (req) => {
  const { title, img, price, description, category, author, job } =
    await req.json();
  try {
    await connectToDB();
    const newBook = new Books({
      title,
      img,
      price,
      description,
      category,
      author,
      job,
    });

    await newBook.save();
    return new Response(JSON.stringify(newBook), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new book", { status: 500 });
  }
};
