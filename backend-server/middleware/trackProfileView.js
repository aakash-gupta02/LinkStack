import User from '../models/userModel.js';

export const trackProfileView = async (req, username) => {
  try {
    await User.findOneAndUpdate(
      { username },
      { $inc: { profileViews: 1 } },
      { upsert: true }
    );
  } catch (err) {
    console.error("Profile view tracking failed:", err);
  }
};
