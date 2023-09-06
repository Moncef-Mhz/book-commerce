import { model, models, Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: String,
    slug: String,
    // image: {
    //   public_id: {
    //     type: String,
    //     required: true,
    //   },
    //   url: {
    //     type: String,
    //     required: true,
    //   },
    // },
    description: String,
    price: Number,
    category: [String],
    author: String,
    job: String,
  },
  { timeseries: true }
);

const Books = models.Books || model("Books", BookSchema);

export default Books;
