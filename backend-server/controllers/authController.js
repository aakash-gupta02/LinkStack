import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import dotenv from "dotenv";
import { protect } from "../middleware/authMiddleware.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();


export const registerUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // Validation - Check required fields
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email or username already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already in use" });
      } else {
        return res.status(400).json({ message: "Username already taken" });
      }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const savedUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    // Return response (excluding password)
    const userResponse = {
      _id: savedUser._id,
      name: savedUser.name,
      username: savedUser.username,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
    };

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userResponse,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        photo: user.profilePicture,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
    console.log(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id || req.user._id; 
    const { name, username, bio, socialLinks } = req.body;
    const image = req.file;
    let imageUrl;

    // Find the user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Security check: only the user themselves can update
    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You are not authorized to update this profile" });
    }

    // Check if username is already taken
    if (username && username !== user.username) {
      const exists = await User.findOne({ username, _id: { $ne: userId } });
      if (exists) return res.status(400).json({ message: "Username already taken" });
    }

    // Upload image if provided
    if (image) {
      const uploaded = await cloudinary.uploader.upload(image.path, {
        folder: "LinkStack/profile",
      });
      imageUrl = uploaded.secure_url;
    }

    // Build update object
    const updateObj = {
      ...(name && { name }),
      ...(username && { username }),
      ...(bio && { bio }),
      ...(socialLinks && { socialLinks }),
      ...(imageUrl && { profilePicture: imageUrl }),
    };

    // Update user
    const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateObj }, { new: true, select: "-password -__v" });

    res.status(200).json({ message: "Profile updated successfully", updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating profile" });
  }
};


export const updateUserTheme = async (req, res) => {
  try {
    const userId = req.user._id;
    const { theme } = req.body;

    if (!theme || typeof theme !== 'object') {
      return res.status(400).json({ message: "Invalid or missing theme object" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { theme } },
      {
        new: true,
        runValidators: true,
        select: '-password -__v'
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Theme updated successfully",
      user: updatedUser
    });

  } catch (err) {
    console.error('Theme update error:', err);

    if (err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: Object.values(err.errors).map(val => val.message)[0]
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error during theme update"
    });
  }
};



export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const findUser = await User.findById(userId);

    if (!findUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Only allow if user is deleting their own account
    if (req.user.id !== userId) {
      return res.status(403).json({ message: "Unauthorized action" });
    }

    // const deletedUser =  await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "User account deleted", findUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error deleting user" });
  }
};




export const getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(201).json(allUser);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error: err });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getUsernLink = async (req, res) => {

}