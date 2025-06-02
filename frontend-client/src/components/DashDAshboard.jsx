import React from "react";
import { useAnalytics } from "../context/AnalyticsContext";

const DashDAshboard = () => {
  const { analytics } = useAnalytics();
  // const userData = {
  //   name: "Alex Johnson",
  //   profileViews: 1248,
  //   linkClicks: 3527,
  //   totalLinks: 12,
  //   conversionRate: "4.2%",
  // };
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Monitor your performance and manage your LinkStack profile.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: "Profile Views",
            value: analytics.profileViews,
            icon: "eye",
            color: "indigo",
            change: "+12% from last week",
            changeColor: "green",
          },
          {
            label: "Link Clicks",
            value: analytics.totalClicks,
            icon: "mouse-pointer",
            color: "purple",
            change: "+8% from last week",
            changeColor: "green",
          },
          {
            label: "Total Links",
            value: analytics.linkCount,
            icon: "link",
            color: "blue",
            change: "3 active links",
            changeColor: "indigo",
          },
          {
            label: "Conversion Rate",
            // value: userData.conversionRate,
            value: 200,
            icon: "chart-pie",
            color: "green",
            change: "-2% from last week",
            changeColor: "red",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">{stat.label}</h3>
              <div
                className={`w-10 h-10 rounded-full bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600`}
              >
                <i className={`fas fa-${stat.icon}`}></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <p
              className={`text-${stat.changeColor}-600 text-sm mt-2 flex items-center`}
            >
              {stat.change.includes("from") && (
                <i
                  className={`fas fa-arrow-${
                    stat.changeColor === "green" ? "up" : "down"
                  } mr-1`}
                ></i>
              )}
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer whitespace-nowrap">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {[
            {
              icon: "eye",
              text: "Someone viewed your profile",
              time: "2 minutes ago",
              color: "blue",
            },
            {
              icon: "mouse-pointer",
              text: "New click on Instagram link",
              time: "15 minutes ago",
              color: "purple",
            },
            {
              icon: "plus",
              text: "You added a new link: Portfolio",
              time: "1 hour ago",
              color: "green",
            },
            {
              icon: "paint-brush",
              text: "You changed your theme to Midnight",
              time: "3 hours ago",
              color: "indigo",
            },
            {
              icon: "mouse-pointer",
              text: "New click on Twitter link",
              time: "5 hours ago",
              color: "purple",
            },
          ].map((activity, index) => (
            <div key={index} className="flex items-start">
              <div
                className={`w-10 h-10 rounded-full bg-${activity.color}-100 flex items-center justify-center text-${activity.color}-600 flex-shrink-0 mt-1`}
              >
                <i className={`fas fa-${activity.icon}`}></i>
              </div>
              <div className="ml-4">
                <p className="text-gray-800">{activity.text}</p>
                <p className="text-gray-500 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashDAshboard;
