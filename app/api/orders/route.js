import Orders from "@models/Orders";
import { connectToDB } from "@utils/ConnectToDB";

export const GET = async () => {
  try {
    connectToDB();
    const orders = await Orders.find({});
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new Response("Faild to fetch all Orders", {
      status: 500,
    });
  }
};
