import mongoose, { Schema } from "mongoose";
const WebinarSchema = new Schema({
    title: { type: String, required: true }, slug: { type: String, required: true, unique: true },
    summary: String, description: String, date: String, time: String, duration: String,
    host: String, hostRole: String, category: String, meetLink: String,
    imageUrl: String, videoUrl: String,
    status: { type: String, enum: ["upcoming", "previous"], default: "upcoming" },
    accent: { type: String, default: "violet" }, attendees: { type: Number, default: 0 },
    takeaways: [String],
    soundFamiliarKicker: String,
    soundFamiliarTitle: String,
    soundFamiliarDescription: String,
    soundFamiliarPoints: [String],
    soundFamiliarImageUrl: String,
}, { timestamps: true });
export default mongoose.models.Webinar || mongoose.model("Webinar", WebinarSchema);
