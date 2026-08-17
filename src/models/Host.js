import mongoose, { Schema } from "mongoose";

const HostSchema = new Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  position: { type: Number, default: 1 },
}, { timestamps: true });

export default mongoose.models.Host || mongoose.model("Host", HostSchema);
