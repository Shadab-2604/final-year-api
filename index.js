import express from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import userRouter from "./router/user.routes.js";
import connectDB from "./config/database.js";
import cors from "cors";
import assignmentRouter from "./router/assignment.routes.js";
import notesRoutes from "./router/notes.routes.js";

dotenv.config();

// Cloudinary Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to DB
connectDB();

// Base route
app.get('/', (req, res) => {
    res.send("SHADAB-API Server Running 🚀");
});

// Routes
app.use('/user', userRouter);
app.use('/assignment', assignmentRouter);
app.use("/notes", notesRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});