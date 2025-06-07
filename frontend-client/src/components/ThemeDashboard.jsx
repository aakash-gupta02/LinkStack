import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useAnalytics } from "../context/AnalyticsContext";

// Add preset themes array at the top level
const presetThemes = [
  {
    name: "Minimal",
    theme: {
      bgPage: "#ffffff",
      textPrimary: "#111827",
      textSecondary: "#6b7280",
      textTertiary: "#4b5563",
      headerGradientStart: "#6366f1",
      headerGradientEnd: "#8b5cf6",
      profileBorder: "#ffffff",
      profileBg: "#ffffff",
      socialBg: "#ffffff",
      socialDefault: "#6b7280",
      socialGithub: "#181717",
      socialLinkedin: "#0a66c2",
      socialTwitter: "#1da1f2",
      socialYoutube: "#ff0000",
      socialInstagram: "#e4405f",
      socialFacebook: "#1877f2",
      linkCardBg: "#ffffff",
      linkCardText: "#111827",
      linkCardTextSecondary: "#6b7280",
      linkCardIcon: "#8b5cf6",
      linkCardRadius: "12px",
      linkThumbnailBg: "#f3f4f6",
      footerText: "#9ca3af",
    }
  },
  {
    name: "Midnight",
    theme: {
      bgPage: "#0f172a",
      textPrimary: "#f1f5f9",
      textSecondary: "#cbd5e1",
      textTertiary: "#94a3b8",
      headerGradientStart: "#334155",
      headerGradientEnd: "#1e293b",
      profileBorder: "#1e293b",
      profileBg: "#334155",
      socialBg: "#1e293b",
      socialDefault: "#94a3b8",
      socialGithub: "#f1f5f9",
      socialLinkedin: "#7dd3fc",
      socialTwitter: "#38bdf8",
      socialYoutube: "#f87171",
      socialInstagram: "#f472b6",
      socialFacebook: "#60a5fa",
      linkCardBg: "#1e293b",
      linkCardText: "#f1f5f9",
      linkCardTextSecondary: "#cbd5e1",
      linkCardIcon: "#7dd3fc",
      linkCardRadius: "12px",
      linkThumbnailBg: "#334155",
      footerText: "#64748b",
    }
  },
  {
    name: "Emerald",
    theme: {
      bgPage: "#ecfdf5",
      textPrimary: "#064e3b",
      textSecondary: "#065f46",
      textTertiary: "#10b981",
      headerGradientStart: "#34d399",
      headerGradientEnd: "#10b981",
      profileBorder: "#10b981",
      profileBg: "#6ee7b7",
      socialBg: "#d1fae5",
      socialDefault: "#047857",
      socialGithub: "#064e3b",
      socialLinkedin: "#0e7490",
      socialTwitter: "#0891b2",
      socialYoutube: "#dc2626",
      socialInstagram: "#db2777",
      socialFacebook: "#2563eb",
      linkCardBg: "#a7f3d0",
      linkCardText: "#064e3b",
      linkCardTextSecondary: "#065f46",
      linkCardIcon: "#047857",
      linkCardRadius: "12px",
      linkThumbnailBg: "#6ee7b7",
      footerText: "#047857",
    }
  },
  {
    name: "Sunset",
    theme: {
      bgPage: "#fef2f2",
      textPrimary: "#7f1d1d",
      textSecondary: "#991b1b",
      textTertiary: "#ef4444",
      headerGradientStart: "#f97316",
      headerGradientEnd: "#ef4444",
      profileBorder: "#ef4444",
      profileBg: "#fca5a5",
      socialBg: "#fee2e2",
      socialDefault: "#b91c1c",
      socialGithub: "#7f1d1d",
      socialLinkedin: "#0369a1",
      socialTwitter: "#0ea5e9",
      socialYoutube: "#dc2626",
      socialInstagram: "#db2777",
      socialFacebook: "#1d4ed8",
      linkCardBg: "#fecaca",
      linkCardText: "#7f1d1d",
      linkCardTextSecondary: "#991b1b",
      linkCardIcon: "#b91c1c",
      linkCardRadius: "12px",
      linkThumbnailBg: "#fca5a5",
      footerText: "#b91c1c",
    }
  },
  {
    name: "Ocean",
    theme: {
      bgPage: "#f0f9ff",
      textPrimary: "#083344",
      textSecondary: "#164e63",
      textTertiary: "#0ea5e9",
      headerGradientStart: "#0ea5e9",
      headerGradientEnd: "#0369a1",
      profileBorder: "#0ea5e9",
      profileBg: "#7dd3fc",
      socialBg: "#e0f2fe",
      socialDefault: "#0c4a6e",
      socialGithub: "#083344",
      socialLinkedin: "#0369a1",
      socialTwitter: "#0284c7",
      socialYoutube: "#dc2626",
      socialInstagram: "#db2777",
      socialFacebook: "#1d4ed8",
      linkCardBg: "#bae6fd",
      linkCardText: "#083344",
      linkCardTextSecondary: "#164e63",
      linkCardIcon: "#0c4a6e",
      linkCardRadius: "12px",
      linkThumbnailBg: "#7dd3fc",
      footerText: "#0c4a6e",
    }
  },
  {
    name: "Custom",
    theme: null
  }
];

const ThemeDashboard = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [customTheme, setCustomTheme] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeThemeIndex, setActiveThemeIndex] = useState(presetThemes.length - 1); // Default to Custom
  const [initialThemeSet, setInitialThemeSet] = useState(false);

  const { user, links, analytics } = useAnalytics();
  const { user: currentUser, token, updateUser } = useAuth();

  // Initialize with user's theme
  useEffect(() => {
    if (currentUser?.theme && !initialThemeSet) {
      // Check if user's theme matches any preset
      const matchingIndex = presetThemes.findIndex(preset => 
        preset.theme && JSON.stringify(preset.theme) === JSON.stringify(currentUser.theme)
      );
      
      if (matchingIndex >= 0) {
        setActiveThemeIndex(matchingIndex);
        setSelectedTheme(presetThemes[matchingIndex].theme);
      } else {
        // It's a custom theme
        setCustomTheme(currentUser.theme);
        setSelectedTheme(currentUser.theme);
      }
      setInitialThemeSet(true);
    }
  }, [currentUser, initialThemeSet]);

  // Apply the selected theme to preview
  useEffect(() => {
    if (selectedTheme) {
      applyPreviewTheme(selectedTheme);
    }
  }, [selectedTheme]);

  const applyPreviewTheme = (theme) => {
    const root = document.getElementById("theme-preview");
    if (!root) return;

    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  };

  const handleThemeSelect = (theme, index) => {
    setActiveThemeIndex(index);
    if (theme.name === "Custom") {
      setSelectedTheme(customTheme);
    } else {
      setSelectedTheme(theme.theme);
    }
  };

  const handleSaveTheme = async () => {
    if (!selectedTheme) return;

    setIsLoading(true);
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/auth/updatetheme/${currentUser.id}`,
        { theme: selectedTheme },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      // Update user context with new theme
      updateUser({ ...currentUser, theme: selectedTheme });
      alert("Theme saved successfully!");
    } catch (error) {
      console.error("Error saving theme:", error);
      alert("Failed to save theme");
    } finally {
      setIsLoading(false);
    }
  };

  // Check if a theme is the user's current theme
  const isCurrentTheme = (theme) => {
    return currentUser?.theme && JSON.stringify(theme) === JSON.stringify(currentUser.theme);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Theme Customizer
        </h1>
        <p className="text-gray-600">
          Personalize your LinkStack profile appearance.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Choose a Theme
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {presetThemes.map((theme, index) => {
                const isActive = activeThemeIndex === index;
                const isCurrent = theme.theme && isCurrentTheme(theme.theme);
                
                return (
                  <div
                    key={index}
                    className={`border rounded-xl p-4 cursor-pointer transition ${
                      isActive
                        ? "border-indigo-600 ring-2 ring-indigo-100"
                        : isCurrent
                          ? "border-green-500 ring-2 ring-green-100"
                          : "border-gray-200 hover:border-indigo-300"
                    }`}
                    onClick={() => handleThemeSelect(theme, index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-800">
                        {theme.name}
                        {isCurrent && !isActive && (
                          <span className="ml-2 text-xs text-green-600">(Current)</span>
                        )}
                      </h3>
                      {isActive && (
                        <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                          <i className="fas fa-check text-xs"></i>
                        </div>
                      )}
                    </div>
                    <div
                      className="h-24 rounded-lg overflow-hidden relative"
                      style={{ background: theme.theme?.bgPage || "#f5f5f5" }}
                    >
                      {isCurrent && !isActive && (
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">Current Theme</span>
                        </div>
                      )}
                      <div
                        className="h-1/2 w-full"
                        style={{
                          background: theme.theme
                            ? `linear-gradient(to right, ${theme.theme.headerGradientStart}, ${theme.theme.headerGradientEnd})`
                            : "#d1d5db"
                        }}
                      ></div>
                      <div className="flex justify-center mt-2">
                        <div
                          className="w-12 h-12 rounded-full"
                          style={{
                            backgroundColor: theme.theme?.profileBg || "#e5e7eb",
                            borderColor: theme.theme?.profileBorder || "#f3f4f6",
                            borderWidth: "4px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {activeThemeIndex === presetThemes.length - 1 && (
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Customize Your Theme
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Background</h3>
                  <input
                    type="color"
                    value={customTheme.bgPage || currentUser?.theme?.bgPage || "#ffffff"}
                    onChange={(e) =>
                      setCustomTheme({ ...customTheme, bgPage: e.target.value })
                    }
                    className="w-full h-10 rounded border border-gray-300"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">
                    Header Gradient Start
                  </h3>
                  <input
                    type="color"
                    value={customTheme.headerGradientStart || currentUser?.theme?.headerGradientStart || "#6366f1"}
                    onChange={(e) =>
                      setCustomTheme({
                        ...customTheme,
                        headerGradientStart: e.target.value,
                      })
                    }
                    className="w-full h-10 rounded border border-gray-300"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">
                    Header Gradient End
                  </h3>
                  <input
                    type="color"
                    value={customTheme.headerGradientEnd || currentUser?.theme?.headerGradientEnd || "#8b5cf6"}
                    onChange={(e) =>
                      setCustomTheme({
                        ...customTheme,
                        headerGradientEnd: e.target.value,
                      })
                    }
                    className="w-full h-10 rounded border border-gray-300"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">
                    Card Background
                  </h3>
                  <input
                    type="color"
                    value={customTheme.linkCardBg || currentUser?.theme?.linkCardBg || "#ffffff"}
                    onChange={(e) =>
                      setCustomTheme({
                        ...customTheme,
                        linkCardBg: e.target.value,
                      })
                    }
                    className="w-full h-10 rounded border border-gray-300"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={handleSaveTheme}
              disabled={isLoading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save Theme"}
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Preview</h2>
            <div className="mb-4 p-3 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-700">
                {currentUser?.theme 
                  ? `Previewing ${activeThemeIndex === presetThemes.length - 1 ? "custom" : presetThemes[activeThemeIndex].name} theme`
                  : "No theme set yet"}
              </p>
              {currentUser?.theme && (
                <button 
                  className="mt-2 text-sm text-indigo-600 hover:underline"
                  onClick={() => {
                    setSelectedTheme(currentUser.theme);
                    setActiveThemeIndex(presetThemes.findIndex(preset => 
                      preset.theme && JSON.stringify(preset.theme) === JSON.stringify(currentUser.theme)
                    ));
                  }}
                >
                  Revert to current theme
                </button>
              )}
            </div>
            <div
              id="theme-preview"
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
              style={{
                backgroundColor: "var(--bgPage, #f9fafb)",
                color: "var(--textPrimary, #111827)",
              }}
            >
              <div
                className="h-20"
                style={{
                  background:
                    "linear-gradient(to right, var(--headerGradientStart, #6366f1), var(--headerGradientEnd, #8b5cf6))",
                }}
              ></div>
              <div className="px-4 pt-4 pb-6 relative">
                <div
                  className="w-20 h-20 rounded-full border-4 shadow-md absolute -top-10 left-1/2 transform -translate-x-1/2 overflow-hidden"
                  style={{
                    backgroundColor: "var(--profileBg, #ffffff)",
                    borderColor: "var(--profileBorder, #ffffff)",
                  }}
                >
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-12 text-center mb-6">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "var(--textPrimary, #111827)" }}
                  >
                    {user.name}{" "}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--textSecondary, #6b7280)" }}
                  >
                    {user.bio}
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: "Instagram",
                      icon: "fab fa-instagram",
                      color: "var(--socialInstagram, #e4405f)",
                    },
                    {
                      name: "Twitter",
                      icon: "fab fa-twitter",
                      color: "var(--socialTwitter, #1da1f2)",
                    },
                    {
                      name: "Portfolio",
                      icon: "fas fa-globe",
                      color: "var(--socialDefault, #6b7280)",
                    },
                  ].map((link, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 p-3 flex items-center shadow-sm hover:shadow-md transition cursor-pointer"
                      style={{
                        backgroundColor: "var(--linkCardBg, #ffffff)",
                        borderColor: "var(--linkCardBg, #e5e7eb)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.1)",
                          color: link.color,
                        }}
                      >
                        <i className={link.icon}></i>
                      </div>
                      <span
                        className="font-medium"
                        style={{ color: "var(--linkCardText, #111827)" }}
                      >
                        {link.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDashboard;