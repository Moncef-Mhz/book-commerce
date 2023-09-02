import Books from "@models/Books";
import { connectToDB } from "@utils/ConnectToDB";

export const GET = async () => {
  try {
    connectToDB();
    const books = await Books.find({});
    return new Response(JSON.stringify(books), { status: 200 });
  } catch (err) {
    return new Response("Faild to fetch all Books", {
      status: 500,
    });
  }
};
