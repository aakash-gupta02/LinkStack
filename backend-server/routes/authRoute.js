import express from "express"
import { registerUser, loginUser, getAllUsers, getUserProfile, deleteUser, updateUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all", getAllUsers)
router.get("/profile",protect, getUserProfile)

router.delete("/delete/:id", protect, deleteUser)
router.patch("/update/:id", protect, updateUser)

router.get("/protected", protect, (req, res) => {
  res.json({ message: `Hello ${req.user}, you accessed a protected route!` });
// res.json("hello")
});

export default router
