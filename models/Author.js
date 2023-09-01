import { Schema, model, models } from "mongoose";

const AuthorSchema = new Schema({
  name: String,
  img: String,
  job: String,
});

const Author = models.Author || model("Author", AuthorSchema);

export default Author;
