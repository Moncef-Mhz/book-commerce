import { model, models, Schema } from "mongoose";

const BookSchema = new Schema(
  {
    title: String,
    slug: String,
    description: String,
    price: Number,
    category: [String],
    author: String,
    job: String,
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Books = models.Books || model("Books", BookSchema);

export default Books;
