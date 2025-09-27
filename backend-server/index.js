import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "../backend-server/config/db.js";
import authRoutes from "../backend-server/routes/authRoute.js";
import linkRoutes from "../backend-server/routes/linkRoute.js";
import profileRoutes from "../backend-server/routes/profileRoutes.js";
import analyticsRoutes from "../backend-server/routes/analyticsRoutes.js";
import { mediaUpload } from "./middleware/multerCloudinary.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to LinkStack Backend Server</h1>");
});

app.post("/upload/test-upload", mediaUpload, async (req, res) => {
  try {
    const text = req.body;
    const image = req.file;
    let imageurl;
    console.log(text);

    if (image) {
      const uploadedImageUrl = await cloudinary.uploader.upload(image.path, {
        folder: "LinkStack/test"
      });
      imageurl = uploadedImageUrl.secure_url;
      console.log(imageurl);
    } else {
      return res.status(400).json({ message: "No image file provided" });
    }
    res.status(200).json({ message: "Test upload successful", text, imageurl });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/link", linkRoutes);
app.use("/", analyticsRoutes);
app.use("/user-link", profileRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
