import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    notesText: { type: String },
    images: {
        public_id: { type: String },
        url: { type: String }
    },
    date: { type: Date, default: Date.now },
    course: { type: String, required: true },
    year: { type: String, required: true },
    subject: { type: String, required: true }
});

export default mongoose.model('Note', notesSchema);