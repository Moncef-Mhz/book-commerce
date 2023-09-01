import { Schema, model, models } from "mongoose";

const TagSchema = new Schema({
  tag: String,
});

const Tags = models.Tags || model("Tags", TagSchema);

export default Tags;
