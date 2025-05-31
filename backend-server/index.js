import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"

import "../backend-server/config/db.js";
import authRoutes from "../backend-server/routes/authRoute.js";
import linkRoutes from "../backend-server/routes/linkRoute.js"
import profileRoutes from "../backend-server/routes/profileRoutes.js"
import analyicsRiutes from "../backend-server/routes/analyticsRoutes.js"

// import blogRoutes from "../backend-server/routes/blogRoute.js"

const app = express();
dotenv.config();

app.use(express.json()); 
// app.use(bodyParser.json());

app.use(cors())


app.use("/api/auth", authRoutes);
app.use("/api/link", linkRoutes)
app.use('/', linkRoutes);

app.use("/", analyicsRiutes)
app.use('/', profileRoutes);
// app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
