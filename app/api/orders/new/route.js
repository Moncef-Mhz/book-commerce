import Orders from "@models/Orders";
import { connectToDB } from "@utils/ConnectToDB";

export const POST = async (req) => {
  const { FullName, Wilaya, Adress, Number, Items } = await req.json();

  try {
    await connectToDB();
    const newOrder = new Orders({
      FullName,
      Wilaya,
      Adress,
      Number,
      Items,
    });

    await newOrder.save();
    return new Response(JSON.stringify(newOrder), { status: 200 });
  } catch (err) {
    return new Response("Failed to create a new Order", { status: 500 });
  }
};
