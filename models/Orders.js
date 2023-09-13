import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    FullName: { type: String, required: true },
    Wilaya: { type: String, required: true },
    Adress: { type: String, required: true },
    Number: { type: String, required: true },
    Items: { type: [Object], required: true },
    Price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Orders = models.Orders || model("Orders", OrderSchema);
export default Orders;
