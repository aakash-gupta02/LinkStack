import React from 'react'

const ThemeDashboard = () => {
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
                      {[
                        {
                          name: "Minimal",
                          colors: ["#ffffff", "#6366f1"],
                          active: true,
                        },
                        {
                          name: "Midnight",
                          colors: ["#1e293b", "#818cf8"],
                        },
                        {
                          name: "Sunset",
                          colors: ["#fef2f2", "#f43f5e"],
                        },
                        {
                          name: "Forest",
                          colors: ["#f0fdf4", "#22c55e"],
                        },
                        { name: "Ocean", colors: ["#f0f9ff", "#0ea5e9"] },
                        {
                          name: "Custom",
                          colors: ["#f5f5f5", "#d1d5db"],
                        },
                      ].map((theme, index) => (
                        <div
                          key={index}
                          className={`border rounded-xl p-4 cursor-pointer transition ${
                            theme.active
                              ? "border-indigo-600 ring-2 ring-indigo-100"
                              : "border-gray-200 hover:border-indigo-300"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium text-gray-800">
                              {theme.name}
                            </h3>
                            {theme.active && (
                              <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                <i className="fas fa-check text-xs"></i>
                              </div>
                            )}
                          </div>
                          <div
                            className="h-24 rounded-lg overflow-hidden"
                            style={{ background: theme.colors[0] }}
                          >
                            <div
                              className="h-1/2 w-full"
                              style={{ background: theme.colors[1] }}
                            ></div>
                            <div className="flex justify-center mt-2">
                              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                      Custom Settings
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Background Color
                        </label>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-white border border-gray-300 mr-3 overflow-hidden">
                            <div className="w-full h-full bg-white"></div>
                          </div>
                          <input
                            type="text"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            defaultValue="#FFFFFF"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Accent Color
                        </label>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-indigo-600 mr-3"></div>
                          <input
                            type="text"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            defaultValue="#6366F1"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Font
                        </label>
                        <div className="relative">
                          <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                            <option>Inter (Default)</option>
                            <option>Roboto</option>
                            <option>Poppins</option>
                            <option>Montserrat</option>
                            <option>Open Sans</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <i className="fas fa-chevron-down text-xs"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Button Style
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            {
                              label: "Rounded",
                              value: "rounded",
                              active: true,
                            },
                            { label: "Pill", value: "pill" },
                            { label: "Square", value: "square" },
                          ].map((style, index) => (
                            <div
                              key={index}
                              className={`border rounded-lg p-3 flex flex-col items-center cursor-pointer transition ${
                                style.active
                                  ? "border-indigo-600 bg-indigo-50"
                                  : "border-gray-200 hover:border-indigo-300"
                              }`}
                            >
                              <div
                                className={`w-full h-8 bg-indigo-600 mb-2 ${
                                  style.value === "rounded"
                                    ? "rounded-lg"
                                    : style.value === "pill"
                                    ? "rounded-full"
                                    : ""
                                }`}
                              ></div>
                              <span className="text-sm text-gray-700">
                                {style.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4">
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
                          Save Theme
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 sticky top-24">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                      Preview
                    </h2>
                    <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <div className="h-20 bg-indigo-600"></div>
                      <div className="px-4 pt-4 pb-6 relative">
                        <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md absolute -top-10 left-1/2 transform -translate-x-1/2 overflow-hidden">
                          <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="mt-12 text-center mb-6">
                          <h3 className="font-bold text-gray-800 text-lg">
                            Alex Johnson
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Digital marketing specialist with a passion for
                            growth hacking and content creation.
                          </p>
                        </div>
                        <div className="space-y-3">
                          {[
                            {
                              name: "Instagram",
                              icon: "fab fa-instagram",
                            },
                            { name: "Twitter", icon: "fab fa-twitter" },
                            { name: "Portfolio", icon: "fas fa-globe" },
                          ].map((link, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-lg border border-gray-200 p-3 flex items-center shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                                <i className={link.icon}></i>
                              </div>
                              <span className="font-medium text-gray-800">
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
            </div>  )
}

export default ThemeDashboard