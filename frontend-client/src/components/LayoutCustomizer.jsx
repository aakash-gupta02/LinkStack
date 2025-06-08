import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useAnalytics } from "../context/AnalyticsContext";

const LayoutDashboard = () => {
  const { user } = useAnalytics();
  const { user: currentUser, token, updateUser } = useAuth();

  const [selectedLayout, setSelectedLayout] = useState(null);
  const [customLayout, setCustomLayout] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeLayoutIndex, setActiveLayoutIndex] = useState(0);

  // Predefined layout configurations
  const presetLayouts = [
    {
      name: "Classic",
      layout: {
        cardStyle: "rounded-lg",
        spacing: "normal",
        shadow: "medium",
        headerPosition: "top",
        profileAlign: "center",
        socialIconsStyle: "rounded-full",
        linkStyle: "simple",
        animation: "none",
      },
    },
    {
      name: "Modern",
      layout: {
        cardStyle: "rounded-none",
        spacing: "compact",
        shadow: "none",
        headerPosition: "top",
        profileAlign: "left",
        socialIconsStyle: "square",
        linkStyle: "minimal",
        animation: "fade",
      },
    },
    {
      name: "Elegant",
      layout: {
        cardStyle: "rounded-xl",
        spacing: "spacious",
        shadow: "large",
        headerPosition: "overlap",
        profileAlign: "center",
        socialIconsStyle: "rounded-lg",
        linkStyle: "card",
        animation: "slide-up",
      },
    },
    {
      name: "Bold",
      layout: {
        cardStyle: "rounded-full",
        spacing: "normal",
        shadow: "medium",
        headerPosition: "top",
        profileAlign: "center",
        socialIconsStyle: "circle",
        linkStyle: "pill",
        animation: "scale",
      },
    },
    {
      name: "Custom",
      layout: null,
    },
  ];

  // Initialize with user's current layout
  useEffect(() => {
    if (currentUser?.layout) {
      const matchingIndex = presetLayouts.findIndex(
        (preset) =>
          preset.layout &&
          JSON.stringify(preset.layout) === JSON.stringify(currentUser.layout)
      );

      if (matchingIndex >= 0) {
        setActiveLayoutIndex(matchingIndex);
        setSelectedLayout(presetLayouts[matchingIndex].layout);
      } else {
        setCustomLayout(currentUser.layout);
        setSelectedLayout(currentUser.layout);
        setActiveLayoutIndex(presetLayouts.length - 1);
      }
    }
  }, [currentUser]);

  // Apply layout to preview
  useEffect(() => {
    const root = document.getElementById("layout-preview");
    if (!root || !selectedLayout) return;

    // Apply layout classes
    root.className = `layout-preview ${selectedLayout.cardStyle} ${selectedLayout.spacing} ${selectedLayout.shadow}`;

    // Apply other layout properties as data attributes
    root.setAttribute("data-header-position", selectedLayout.headerPosition);
    root.setAttribute("data-profile-align", selectedLayout.profileAlign);
    root.setAttribute("data-social-style", selectedLayout.socialIconsStyle);
    root.setAttribute("data-link-style", selectedLayout.linkStyle);
    root.setAttribute("data-animation", selectedLayout.animation);
  }, [selectedLayout]);

  const handleLayoutSelect = (layout, index) => {
    setActiveLayoutIndex(index);
    if (layout.name === "Custom") {
      setSelectedLayout(customLayout);
    } else {
      setSelectedLayout(layout.layout);
    }
  };

  const handleSaveLayout = async () => {
    let layoutToSave;

    if (activeLayoutIndex === presetLayouts.length - 1) {
      layoutToSave = customLayout;
    } else {
      layoutToSave = selectedLayout;
    }

    if (!layoutToSave) return;

    setIsLoading(true);
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/auth/updatelayout/${currentUser.id}`,
        { layout: layoutToSave },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      updateUser({ ...currentUser, layout: layoutToSave });
      alert("Layout saved successfully!");
    } catch (error) {
      console.error("Error saving layout:", error);
      alert("Failed to save layout");
    } finally {
      setIsLoading(false);
    }
  };

  const isCurrentLayout = (layout) => {
    return (
      currentUser?.layout &&
      JSON.stringify(layout) === JSON.stringify(currentUser.layout)
    );
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Layout Customizer
        </h1>
        <p className="text-gray-600">
          Customize how your LinkStack profile is structured and displayed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Choose a Layout
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {presetLayouts.map((layout, index) => {
                const isActive = activeLayoutIndex === index;
                const isCurrent =
                  layout.layout && isCurrentLayout(layout.layout);

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
                    onClick={() => handleLayoutSelect(layout, index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-800">
                        {layout.name}
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
                    <div className="h-24 rounded-lg overflow-hidden relative bg-gray-100">
                      {isCurrent && !isActive && (
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            Current Layout
                          </span>
                        </div>
                      )}
                      <div
                        className={`h-full p-2 ${
                          layout.layout?.cardStyle || "rounded-lg"
                        } ${
                          layout.layout?.spacing === "compact"
                            ? "p-1"
                            : layout.layout?.spacing === "spacious"
                            ? "p-3"
                            : "p-2"
                        }`}
                      >
                        <div
                          className={`h-1/4 w-full mb-1 ${
                            layout.layout?.headerPosition === "overlap"
                              ? "bg-indigo-500 -mt-2 relative z-10"
                              : "bg-indigo-500"
                          }`}
                        ></div>
                        <div
                          className={`flex ${
                            layout.layout?.profileAlign === "left"
                              ? "justify-start"
                              : "justify-center"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 ${
                              layout.layout?.socialIconsStyle === "rounded-full"
                                ? "rounded-full"
                                : layout.layout?.socialIconsStyle ===
                                  "rounded-lg"
                                ? "rounded-lg"
                                : layout.layout?.socialIconsStyle === "square"
                                ? "rounded-none"
                                : "rounded-full"
                            } bg-white border border-gray-200`}
                          ></div>
                        </div>
                        <div
                          className={`mt-2 ${
                            layout.layout?.linkStyle === "simple"
                              ? "h-2 bg-white"
                              : layout.layout?.linkStyle === "card"
                              ? "h-4 rounded bg-white"
                              : layout.layout?.linkStyle === "pill"
                              ? "h-3 rounded-full bg-white"
                              : "h-2 bg-gray-200"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {activeLayoutIndex === presetLayouts.length - 1 && (
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Customize Your Layout
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Card Style</h3>
                  <select
                    value={
                      customLayout.cardStyle ||
                      currentUser?.layout?.cardStyle ||
                      "rounded-lg"
                    }
                    onChange={(e) =>
                      setCustomLayout({
                        ...customLayout,
                        cardStyle: e.target.value,
                      })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="rounded-none">Sharp</option>
                    <option value="rounded-lg">Rounded</option>
                    <option value="rounded-xl">Extra Rounded</option>
                    <option value="rounded-full">Pill</option>
                  </select>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Spacing</h3>
                  <select
                    value={
                      customLayout.spacing ||
                      currentUser?.layout?.spacing ||
                      "normal"
                    }
                    onChange={(e) =>
                      setCustomLayout({
                        ...customLayout,
                        spacing: e.target.value,
                      })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="compact">Compact</option>
                    <option value="normal">Normal</option>
                    <option value="spacious">Spacious</option>
                  </select>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Shadows</h3>
                  <select
                    value={
                      customLayout.shadow ||
                      currentUser?.layout?.shadow ||
                      "medium"
                    }
                    onChange={(e) =>
                      setCustomLayout({
                        ...customLayout,
                        shadow: e.target.value,
                      })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">
                    Header Position
                  </h3>
                  <select
                    value={
                      customLayout.headerPosition ||
                      currentUser?.layout?.headerPosition ||
                      "top"
                    }
                    onChange={(e) =>
                      setCustomLayout({
                        ...customLayout,
                        headerPosition: e.target.value,
                      })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="top">Top</option>
                    <option value="overlap">Overlap</option>
                  </select>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">
                    Profile Alignment
                  </h3>
                  <select
                    value={
                      customLayout.profileAlign ||
                      currentUser?.layout?.profileAlign ||
                      "center"
                    }
                    onChange={(e) =>
                      setCustomLayout({
                        ...customLayout,
                        profileAlign: e.target.value,
                      })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                  </select>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Link Style</h3>
                  <select
                    value={
                      customLayout.linkStyle ||
                      currentUser?.layout?.linkStyle ||
                      "simple"
                    }
                    onChange={(e) =>
                      setCustomLayout({
                        ...customLayout,
                        linkStyle: e.target.value,
                      })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="simple">Simple</option>
                    <option value="card">Card</option>
                    <option value="pill">Pill</option>
                    <option value="minimal">Minimal</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={handleSaveLayout}
              disabled={isLoading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save Layout"}
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Preview</h2>
            <div className="mb-4 p-3 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-700">
                {currentUser?.layout
                  ? `Previewing ${
                      activeLayoutIndex === presetLayouts.length - 1
                        ? "custom"
                        : presetLayouts[activeLayoutIndex].name
                    } layout`
                  : "No layout set yet"}
              </p>
              {currentUser?.layout && (
                <button
                  className="mt-2 text-sm text-indigo-600 hover:underline"
                  onClick={() => {
                    setSelectedLayout(currentUser.layout);
                    setActiveLayoutIndex(
                      presetLayouts.findIndex(
                        (preset) =>
                          preset.layout &&
                          JSON.stringify(preset.layout) ===
                            JSON.stringify(currentUser.layout)
                      )
                    );
                  }}
                >
                  Revert to current layout
                </button>
              )}
            </div>
            <div
              id="layout-preview"
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div
                className={`h-20 ${
                  selectedLayout?.headerPosition === "overlap"
                    ? "bg-indigo-600 -mb-10 relative z-0"
                    : "bg-indigo-600"
                }`}
              ></div>
              <div className="px-4 pt-4 pb-6 relative">
                <div
                  className={`w-20 h-20 rounded-full border-4 shadow-md absolute ${
                    selectedLayout?.headerPosition === "overlap"
                      ? "-top-10"
                      : "-top-10"
                  } left-1/2 transform -translate-x-1/2 overflow-hidden`}
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                  }}
                >
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div
                  className={`mt-12 text-center mb-6 ${
                    selectedLayout?.profileAlign === "left"
                      ? "text-left"
                      : "text-center"
                  }`}
                >
                  <h3 className="font-bold text-lg text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">{user.bio}</p>
                </div>
                <div
                  className={`flex justify-${
                    selectedLayout?.profileAlign === "left" ? "start" : "center"
                  } space-x-4 mb-6`}
                >
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 flex items-center justify-center ${
                        selectedLayout?.socialIconsStyle === "rounded-full"
                          ? "rounded-full"
                          : selectedLayout?.socialIconsStyle === "rounded-lg"
                          ? "rounded-lg"
                          : selectedLayout?.socialIconsStyle === "square"
                          ? "rounded-none"
                          : "rounded-full"
                      } bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer`}
                    >
                      <i className="fas fa-link text-gray-600"></i>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className={`p-3 flex items-center ${
                        selectedLayout?.linkStyle === "simple"
                          ? "border-b border-gray-200"
                          : selectedLayout?.linkStyle === "card"
                          ? "rounded-lg bg-white shadow-sm"
                          : selectedLayout?.linkStyle === "pill"
                          ? "rounded-full bg-white shadow-sm"
                          : "border-b border-gray-200"
                      } ${
                        selectedLayout?.animation === "fade"
                          ? "hover:opacity-80"
                          : selectedLayout?.animation === "slide-up"
                          ? "hover:-translate-y-1"
                          : selectedLayout?.animation === "scale"
                          ? "hover:scale-105"
                          : ""
                      } transition-all duration-300 cursor-pointer`}
                    >
                      <div className="w-8 h-8 rounded bg-gray-200 mr-3"></div>
                      <span className="font-medium text-gray-800">
                        Link {i}
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

export default LayoutDashboard;
