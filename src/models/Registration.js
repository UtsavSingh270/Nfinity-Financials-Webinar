import mongoose, { Schema } from "mongoose";
const RegistrationSchema = new Schema({
    webinarId: { type: String, required: true },
    webinarTitle: { type: String, required: true },
    source: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: String,
    role: String,
    question: String,
    submittedAt: Date,
}, { timestamps: true });
export default mongoose.models.Registration || mongoose.model("Registration", RegistrationSchema);
