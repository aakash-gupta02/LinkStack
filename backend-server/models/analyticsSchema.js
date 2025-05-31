import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    linkId: { type: mongoose.Schema.Types.ObjectId, ref: "Links" },

    eventType: {
      type: String,
      enum: ["profile_visit", "link_click"],
      required: true,
    },

    ipAddress: { type: String },

    country: { type: String },

    deviceType: { type: String },

    timestamp: { type: Date, default: Date.now },
  },
  
  { timestamps: true }
);

export default mongoose.model("analytics", analyticsSchema);
