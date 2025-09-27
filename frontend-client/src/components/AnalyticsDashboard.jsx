import React from "react";
import { useAnalytics } from "../context/AnalyticsContext";
import AnalyticsChart from "./AnalyticsChart";

const AnalyticsDashboard = () => {
  const { user, links, analytics } = useAnalytics();
  


  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Analytics</h1>
        <p className="text-gray-600">
          Track your performance and engagement metrics.
        </p>
      </div>

      <div className="space-y-6">
        {/* Performance Overview Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
              Performance Overview
            </h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select className="appearance-none bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                  <option>Last year</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition cursor-pointer whitespace-nowrap">
                <i className="fas fa-download mr-2"></i>
                Export
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Profile Views */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Profile Views</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">
                  {analytics.profileViews.toLocaleString()}
                </p>
                <p className="text-sm text-green-600">+12.5%</p>
              </div>
            </div>

            {/* Total Clicks */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Total Clicks</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">
                  {analytics.totalClicks.toLocaleString()}
                </p>
                <p className="text-sm text-green-600">+8.3%</p>
              </div>
            </div>

            {/* Click Rate */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Click Rate</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">
                  {analytics.totalClicks > 0
                    ? `${Math.round(
                      (analytics.totalClicks / analytics.profileViews) * 100
                    )}%`
                    : "0%"}
                </p>
                <p className="text-sm text-red-600">-2.1%</p>
              </div>
            </div>

            {/* Link Count */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Total Links</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">
                  {analytics.linkCount}
                </p>
                <p className="text-sm text-green-600">+3</p>
              </div>
            </div>
          </div>

          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <AnalyticsChart links={links} />
          </div>
        </div>

        {/* Top Performing Links Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Top Performing Links
          </h2>

          {/* Header row - hidden on mobile */}
          <div className="hidden md:grid grid-cols-4 gap-4 px-2 pb-2 border-b border-gray-100">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Link</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</div>
          </div>

          {/* List */}
          <div className="flex flex-col divide-y divide-gray-100">
            {links
              .sort((a, b) => b.clicks - a.clicks)
              .slice(0, 5)
              .map((link) => (
                <div
                  key={link.id}
                  className="flex flex-col md:grid md:grid-cols-4 gap-4 py-4"
                >
                  {/* Link */}
                  <div className="flex items-center">
                    {link.thumbnailUrl ? (
                      <img
                        src={link.thumbnailUrl}
                        alt={link.title}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                        <i className="fas fa-link"></i>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-800">{link.title}</p>
                      {/* Show URL only on mobile */}
                      {/* <p className="text-xs text-gray-500 truncate md:hidden">{link.url}</p> */}
                    </div>
                  </div>

                  {/* Mobile-friendly row items */}
                  <div className="flex justify-between w-full text-sm text-gray-700 md:hidden">
                    <span className="font-medium">Clicks:</span> {link.clicks}
                  </div>

                  <div className="flex justify-between w-full text-sm text-gray-700 md:hidden">
                    <span className="font-medium">CTR:</span>{" "}
                    {analytics.profileViews > 0
                      ? `${Math.round((link.clicks / analytics.profileViews) * 100)}%`
                      : "0%"}
                  </div>

                  <div className="flex justify-between w-full text-sm text-gray-500 md:hidden">
                    <span className="font-medium">Date:</span>{" "}
                    {link.createdAt
                      ? new Date(link.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                      : "-"}
                  </div>

                  {/* Desktop-only cells */}
                  <div className="hidden md:block text-gray-800 font-medium">
                    {link.clicks}
                  </div>
                  <div className="hidden md:block text-gray-800 font-medium">
                    {analytics.profileViews > 0
                      ? `${Math.round((link.clicks / analytics.profileViews) * 100)}%`
                      : "0%"}
                  </div>
                  <div className="hidden md:block text-gray-500 text-sm">
                    {link.createdAt
                      ? new Date(link.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                      : "-"}
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};
export default AnalyticsDashboard;
