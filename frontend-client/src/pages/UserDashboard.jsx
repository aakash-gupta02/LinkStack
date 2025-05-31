import React, { useEffect, useState } from "react";
import ProfileDashboard from "../components/ProfileDashboard";
import DashDAshboard from "../components/DashDAshboard";
import LinksDashboard from "../components/LinksDashboard";
import ThemeDashboard from "../components/ThemeDashboard";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import { Link, useNavigate } from "react-router-dom";
import { useAnalytics } from "../context/AnalyticsContext";

const UserDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const naviagte = useNavigate();
  
  const { user} = useAnalytics();

  // Dummy data
  const userData = {
    name: "Alex Johnson",
    profileViews: 1248,
    linkClicks: 3527,
    totalLinks: 12,
    conversionRate: "4.2%",
  };

  // // Initialize chart
  // useEffect(() => {
  //   const chartDom = document.getElementById("analytics-chart");
  //   if (chartDom) {
  //     const myChart = echarts.init(chartDom);
  //     const option = {
  //       animation: false,
  //       tooltip: { trigger: "axis" },
  //       grid: {
  //         left: "3%",
  //         right: "4%",
  //         bottom: "3%",
  //         containLabel: true,
  //       },
  //       xAxis: {
  //         type: "category",
  //         boundaryGap: false,
  //         data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //       },
  //       yAxis: { type: "value" },
  //       series: [
  //         {
  //           name: "Link Clicks",
  //           type: "line",
  //           data: [120, 132, 101, 134, 90, 230, 210],
  //           smooth: true,
  //           lineStyle: { color: "#6366f1" },
  //           areaStyle: {
  //             color: {
  //               type: "linear",
  //               x: 0,
  //               y: 0,
  //               x2: 0,
  //               y2: 1,
  //               colorStops: [
  //                 { offset: 0, color: "rgba(99, 102, 241, 0.3)" },
  //                 { offset: 1, color: "rgba(99, 102, 241, 0.05)" },
  //               ],
  //             },
  //           },
  //         },
  //       ],
  //     };
  //     myChart.setOption(option);

  //     const handleResize = () => myChart.resize();
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //       myChart.dispose();
  //     };
  //   }
  // }, []);

  return (
    <div className="flex h-screen bg-gray-50">


      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-indigo-600">LinkStack</h1>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4 space-y-1">
            {[
              "dashboard",
              "profile",
              "links",
              "theme",
              "analytics",
              "support",
            ].map((menu) => (
              <button
                key={menu}
                onClick={() => setActiveMenu(menu)}
                className={`flex items-center px-4 py-3 w-full text-left rounded-lg ${
                  activeMenu === menu
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-indigo-50"
                } cursor-pointer whitespace-nowrap`}
              >
                <i
                  className={`fas fa-${
                    menu === "dashboard"
                      ? "home"
                      : menu === "profile"
                      ? "user"
                      : menu === "links"
                      ? "link"
                      : menu === "theme"
                      ? "paint-brush"
                      : menu === "analytics"
                      ? "chart-line"
                      : "question-circle"
                  } mr-3`}
                ></i>
                <span>
                  {menu.charAt(0).toUpperCase() +
                    menu.slice(1).replace("-", " ")}
                </span>
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => {
              naviagte("/");
            }}
            className="flex items-center px-4 py-2 w-full text-left text-indigo-600 rounded-lg hover:bg-indigo-50 cursor-pointer whitespace-nowrap"
          >
            <i className="fas fa-home mr-3"></i>
            <span>Home</span>
          </button>

          <button className="flex items-center px-4 py-2 w-full text-left text-red-600 rounded-lg hover:bg-red-50 cursor-pointer whitespace-nowrap">
            <i className="fas fa-sign-out-alt mr-3"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">

        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <div>
            <h2 className="text-lg font-medium text-gray-800">
              Welcome back, {user.name}
            </h2>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center space-x-3 cursor-pointer whitespace-nowrap"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 overflow-hidden">
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-gray-700">{user.name}</span>
              <i
                className={`fas fa-chevron-down text-gray-400 transition-transform ${
                  isProfileDropdownOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200">
                {["Your Profile", "Settings", "Billing", "Sign out"].map(
                  (item, index) => (
                    <a
                      key={item}
                      href="#"
                      className={`block px-4 py-2 ${
                        item === "Sign out"
                          ? "text-red-600 hover:bg-red-50"
                          : "text-gray-700 hover:bg-indigo-50"
                      } ${index === 3 ? "border-t border-gray-200 mt-1" : ""}`}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </header>


        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {activeMenu === "dashboard" && <DashDAshboard />}

          {activeMenu === "profile" && <ProfileDashboard />}

          {activeMenu === "links" && <LinksDashboard />}

          {activeMenu === "analytics" && <AnalyticsDashboard />}

          {activeMenu === "theme" && <ThemeDashboard />}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
