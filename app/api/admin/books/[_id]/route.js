import Books from "@models/Books";
import { connectToDB } from "@utils/ConnectToDB";

export const DELETE = async ({ params }) => {
  try {
    connectToDB();
    const books = await Books.findByIdAndDelete(params._id);

    books.save();
    return new Response(JSON.stringify(books), { status: 200 });
  } catch (err) {
    return new Response("Faild to fetch all Books", {
      status: 500,
    });
  }
};
