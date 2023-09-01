import { model, models, Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: String,
    img: String,
    description: String,
    price: Number,
    category: [String],
    author: { type: Schema.Types.ObjectId, ref: "Author" },
  },
  { timeseries: true }
);

const Books = models.Books || model("Books", BookSchema);

export default Books;
