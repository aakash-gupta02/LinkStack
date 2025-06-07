import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import dotenv from "dotenv";
import { protect } from "../middleware/authMiddleware.js";

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
    const userId = req.user._id; // Assuming you have auth middleware setting req.user
    const { username, ...otherFields } = req.body;

    // 1. Check if username is being updated and if it's available
    if (username) {
      const userExists = await User.findOne({ 
        username,
        _id: { $ne: userId } // Check other users with same username
      });

      if (userExists) {
        return res.status(400).json({ message: "Username already taken" });
      }
    }

    // 2. Create update object with only provided fields
    const updateObj = {};
    const allowedFields = ['name', 'username', 'bio', 'profilePicture', 'socialLinks'];
    
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) { // Only add if field exists in request
        updateObj[field] = req.body[field];
      }
    });

    // 3. Update only if there are valid fields to update
    if (Object.keys(updateObj).length === 0) {
      return res.status(400).json({ message: "No valid fields provided for update" });
    }

    // 4. Perform the update
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateObj },
      { 
        new: true,
        runValidators: true, // Validate updated fields
        select: '-password -__v' // Exclude sensitive/uneeded fields
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser
    });

  } catch (err) {
    console.error('Update error:', err);
    
    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: Object.values(err.errors).map(val => val.message)[0]
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error during profile update"
    });
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

export const getUsernLink = async(req, res)=>{
  
}