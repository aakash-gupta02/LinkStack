import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useAnalytics } from "../context/AnalyticsContext";
import { presetThemes } from "../assets/PresetThemes";
import API from "../utilits/API";
import { toast } from "react-toastify";


const ThemeDashboard = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [customTheme, setCustomTheme] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [activeThemeIndex, setActiveThemeIndex] = useState(
    presetThemes.length - 1
  ); // Default to Custom
  const [initialThemeSet, setInitialThemeSet] = useState(false);

  const { user, links, analytics } = useAnalytics();
  const { user: currentUser, token, updateUser } = useAuth();

  // Initialize with user's theme
  useEffect(() => {
    if (currentUser?.theme && !initialThemeSet) {
      const matchingIndex = presetThemes.findIndex(
        (preset) =>
          preset.theme &&
          JSON.stringify(preset.theme) === JSON.stringify(currentUser.theme)
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
      // When selecting Custom, use the customTheme state (which contains your color selections)
      setSelectedTheme({
        ...customTheme,
        // Include all theme properties with customTheme values or fallbacks
        bgPage: customTheme.bgPage || currentUser?.theme?.bgPage || "#ffffff",
        headerGradientStart:
          customTheme.headerGradientStart ||
          currentUser?.theme?.headerGradientStart ||
          "#6366f1",
        headerGradientEnd:
          customTheme.headerGradientEnd ||
          currentUser?.theme?.headerGradientEnd ||
          "#8b5cf6",
        // Include all other theme properties...
        linkCardBg:
          customTheme.linkCardBg || currentUser?.theme?.linkCardBg || "#ffffff",
        // Add all other theme properties here
      });
    } else {
      // For preset themes, use the theme object directly
      setSelectedTheme(theme.theme);
    }
  };

  // Update the useEffect for applying preview
  useEffect(() => {
    if (activeThemeIndex === presetThemes.length - 1 && customTheme) {
      // When custom theme is active, apply customTheme
      applyPreviewTheme(customTheme);
    } else if (selectedTheme) {
      // Otherwise apply selectedTheme
      applyPreviewTheme(selectedTheme);
    }
  }, [selectedTheme, customTheme, activeThemeIndex]);

  // Update the handleSaveTheme function
  const handleSaveTheme = async () => {
    let themeToSave;

    if (activeThemeIndex === presetThemes.length - 1) {
      themeToSave = customTheme;
    } else {
      // Otherwise use selectedTheme
      themeToSave = selectedTheme;
    }

    if (!themeToSave) return;

    setIsLoading(true);
    try {
      const response = await API.patch(
        `/api/auth/updatetheme/${currentUser.id}`,
        { theme: themeToSave },
      );

      // Update user context with new theme
      updateUser({ ...currentUser, theme: themeToSave });
      toast.success("Theme saved successfully!");
    } catch (error) {
      console.error("Error saving theme:", error);
      toast.error("Failed to save theme");
    } finally {
      setIsLoading(false);
    }
  };

  const isCurrentTheme = (theme) => {
    return (
      currentUser?.theme &&
      JSON.stringify(theme) === JSON.stringify(currentUser.theme)
    );
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
                          <span className="ml-2 text-xs text-green-600">
                            (Current)
                          </span>
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
                          <span className="text-white text-sm font-medium">
                            Current Theme
                          </span>
                        </div>
                      )}
                      <div
                        className="h-1/2 w-full"
                        style={{
                          background: theme.theme
                            ? `linear-gradient(to right, ${theme.theme.headerGradientStart}, ${theme.theme.headerGradientEnd})`
                            : "#d1d5db",
                        }}
                      ></div>
                      <div className="flex justify-center mt-2">
                        <div
                          className="w-12 h-12 rounded-full"
                          style={{
                            backgroundColor:
                              theme.theme?.profileBg || "#e5e7eb",
                            borderColor:
                              theme.theme?.profileBorder || "#f3f4f6",
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
                    value={
                      customTheme.bgPage ||
                      currentUser?.theme?.bgPage ||
                      "#ffffff"
                    }
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
                    value={
                      customTheme.headerGradientStart ||
                      currentUser?.theme?.headerGradientStart ||
                      "#6366f1"
                    }
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
                    value={
                      customTheme.headerGradientEnd ||
                      currentUser?.theme?.headerGradientEnd ||
                      "#8b5cf6"
                    }
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
                    value={
                      customTheme.linkCardBg ||
                      currentUser?.theme?.linkCardBg ||
                      "#ffffff"
                    }
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
                  ? `Previewing ${
                      activeThemeIndex === presetThemes.length - 1
                        ? "custom"
                        : presetThemes[activeThemeIndex].name
                    } theme`
                  : "No theme set yet"}
              </p>
              {currentUser?.theme && (
                <button
                  className="mt-2 text-sm text-indigo-600 hover:underline"
                  onClick={() => {
                    setSelectedTheme(currentUser.theme);
                    setActiveThemeIndex(
                      presetThemes.findIndex(
                        (preset) =>
                          preset.theme &&
                          JSON.stringify(preset.theme) ===
                            JSON.stringify(currentUser.theme)
                      )
                    );
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
