import Tags from "@models/Tag";
import { connectToDB } from "@utils/ConnectToDB";

export const GET = async () => {
  try {
    connectToDB();
    const tags = await Tags.find({});
    return new Response(JSON.stringify(tags), { status: 200 });
  } catch (err) {
    return new Response("Faild to fetch all Tags", {
      status: 500,
    });
  }
};
