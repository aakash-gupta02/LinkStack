import mongoose from "mongoose";

const themeSchema = new mongoose.Schema({
  bgPage: { type: String, default: "#ffffff" }, // white
  textPrimary: { type: String, default: "#0f172a" }, // slate-900
  textSecondary: { type: String, default: "#334155" }, // slate-700
  textTertiary: { type: String, default: "#64748b" }, // slate-500

  headerGradientStart: { type: String, default: "#e2e8f0" }, // slate-200
  headerGradientEnd: { type: String, default: "#cbd5e1" }, // slate-300

  profileBorder: { type: String, default: "#cbd5e1" }, // slate-300
  profileBg: { type: String, default: "#f1f5f9" }, // slate-100

  socialBg: { type: String, default: "#f8fafc" }, // slate-50
  socialDefault: { type: String, default: "#475569" }, // slate-600
  socialGithub: { type: String, default: "#0f172a" }, // slate-900
  socialLinkedin: { type: String, default: "#0a66c2" },
  socialTwitter: { type: String, default: "#1da1f2" },
  socialYoutube: { type: String, default: "#ff0000" },
  socialInstagram: { type: String, default: "#e1306c" },
  socialFacebook: { type: String, default: "#1877f2" },

  linkCardBg: { type: String, default: "#f1f5f9" }, // slate-100
  linkCardText: { type: String, default: "#0f172a" }, // slate-900
  linkCardTextSecondary: { type: String, default: "#475569" }, // slate-600
  linkCardIcon: { type: String, default: "#0f766e" }, // teal-800
  linkCardRadius: { type: String, default: "12px" },
  linkThumbnailBg: { type: String, default: "#e2e8f0" }, // slate-200

  footerText: { type: String, default: "#94a3b8" }, // slate-400

  // Legacy
  primary: { type: String, default: "#0f172a" },
  secondary: { type: String, default: "#334155" },
  text: { type: String, default: "#0f172a" },
},{ _id: false });

export default themeSchema;
