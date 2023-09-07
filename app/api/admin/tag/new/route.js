import Tags from "@models/Tag";
import { connectToDB } from "@utils/ConnectToDB";

export const POST = async (req) => {
  const { tag } = await req.json();

  try {
    console.log(tag);
    await connectToDB();

    const newTag = new Tags({
      tag,
    });

    await newTag.save();
    return new Response(JSON.stringify(newTag), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new tag", { status: 500 });
  }
};
