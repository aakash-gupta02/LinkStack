import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 200,
    },

    description: {
      type: String,
      default: "",
      maxlength: 200,
    },

    url: {
      type: String,
      required: true,
      match: [/^https?:\/\/.+/, "Please enter a valid URL"],
    },

    thumbnailUrl: {
      type: String,
      required: true,
      match: [/^https?:\/\/.+/, "Please enter a valid URL"],
    },
    icon: {
      type: String,
      default: "", // optional icon (e.g. "github", "linkedin")
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0, // for manual ordering (drag-drop support)
    },
    clicks: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Links", linkSchema);
