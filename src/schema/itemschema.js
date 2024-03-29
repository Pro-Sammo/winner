import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const itemSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  images: [
    {
      publicId: {
        type: String,
      },
    },
  ],
  shortDescription: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  size: {
    type: String,
  },
  brand: {
    type: String,
  },
  voltage: {
    type: String,
  },
  power: {
    type: String,
  },
  temperature: {
    type: String,
  },
  time: {
    type: String,
  },
  averageSpeed: {
    type: String,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category"
  }
});

const Item = models.Item || model("Item", itemSchema);

export default Item;
