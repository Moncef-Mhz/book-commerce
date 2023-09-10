import mongoose, { model, models, Schema } from "mongoose";
import slugGenerator from "mongoose-slug-generator/lib/slug-generator";

mongoose.plugin(slugGenerator);

const BookSchema = new Schema(
  {
    title: String,
    slug: { type: String, slugGenerator: "title" },
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
