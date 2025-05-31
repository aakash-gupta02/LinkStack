import { getAnalytics } from "../controllers/analyticsController.js";
import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/analytics", protect , async (req, res) => {
  try {
    const data = await getAnalytics(req.user._id);
    res.json(data);
    
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router    