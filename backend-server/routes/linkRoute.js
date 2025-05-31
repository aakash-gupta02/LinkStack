import express from "express"
import { createLink, deleteLink, updateLink } from "../controllers/linkController.js"
import { protect } from "../middleware/authMiddleware.js"
import Link from "../models/linkSchema.js"

const router = express.Router()

router.get('/l/:linkId', async (req, res) => {

  const link = await Link.findByIdAndUpdate(
    req.params.linkId,
    { $inc: { clicks: 1 } },
    { new: true }
  );
  
  // 2. Redirect
  res.redirect(link.url);
});


router.post("/create",protect, createLink)
router.delete("/delete/:id", protect, deleteLink)
router.patch("/update/:id", protect, updateLink)




export default router

