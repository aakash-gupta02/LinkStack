import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       required: true,
//     },

//     password: {
//       type: String,
//       required: true,
//     },

//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },

//     profilePic: {
//       type: String,
//       default:
//         "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png", // Optional: can be updated later
//     },
//     bio: {
//       type: String,
//       default: "",
//     },
//     isCreatedAt: {},
//   },
//   { timestamps: true }
// );

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  profilePicture: {
    type: String,
    default:
      "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png",
  },
  bio: {
    type: String,
    maxlength: 500,
    default: "Ctrl + Z doesn’t work in real life, so I code with intention.",
  },

  socialLinks: {
    youtube: { type: String, default: "" },
    instagram: { type: String, default: "" },
    facebook: { type: String, default: "" },
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    twitter: { type: String, default: "" },
    portfolio: { type: String, default: "" },
  },
  profileViews: { type: Number, default: 0 },
  viewerCountries: [String], // Simple array of country codes

  lastLogin: { type: Date },
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model("Users", userSchema);
