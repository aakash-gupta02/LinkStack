import User from "../models/userModel.js";
import Link from "../models/linkSchema.js";
import { trackProfileView } from "../middleware/trackProfileView.js";

export const getUserProfile = async (req, res) => {
  try {
    const { username } = req.params;

      await trackProfileView(req, req.params.username);


    // 1. Find user by username
    const user = await User.findOne({ username })
      .select("-password -email -isAdmin") // Exclude sensitive data
      .lean();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Find all links for this user
    const links = await Link.find({ userId: user._id })
      .sort({ position: 1 }) // Sort by position if you have ordering
      .lean();

      

    // 3. Return combined profile data
    res.status(200).json({
      success: true,
      profile: {
        ...user,
        links,
      },
    });
  } catch (err) {
    console.error("Profile fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
