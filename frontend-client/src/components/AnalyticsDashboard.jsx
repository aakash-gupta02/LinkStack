import React from 'react'

const AnalyticsDashboard = () => {
  return (
    <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Analytics
                </h1>
                <p className="text-gray-600">
                  Track your performance and engagement metrics.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
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
                  {[
                    {
                      label: "Total Views",
                      value: "4,827",
                      change: "+12.5%",
                    },
                    {
                      label: "Total Clicks",
                      value: "3,527",
                      change: "+8.3%",
                    },
                    {
                      label: "Click Rate",
                      value: "73.1%",
                      change: "-2.1%",
                    },
                    {
                      label: "Avg. Time",
                      value: "1m 23s",
                      change: "+16.2%",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-2xl font-bold text-gray-800">
                          {stat.value}
                        </p>
                        <p
                          className={`text-sm ${
                            stat.change.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stat.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-80" id="analytics-chart"></div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Top Performing Links
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        {["Link", "Views", "Clicks", "CTR", "Trend"].map(
                          (header) => (
                            <th
                              key={header}
                              className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        {
                          title: "Instagram",
                          views: 1823,
                          clicks: 1245,
                          ctr: "68.3%",
                          trend: [3, 7, 5, 12, 15, 9, 17],
                        },
                        {
                          title: "Twitter",
                          views: 1254,
                          clicks: 863,
                          ctr: "68.8%",
                          trend: [5, 9, 6, 8, 4, 10, 12],
                        },
                        {
                          title: "Portfolio",
                          views: 986,
                          clicks: 421,
                          ctr: "42.7%",
                          trend: [2, 4, 3, 5, 8, 10, 9],
                        },
                        {
                          title: "LinkedIn",
                          views: 754,
                          clicks: 289,
                          ctr: "38.3%",
                          trend: [4, 6, 5, 3, 2, 4, 7],
                        },
                        {
                          title: "YouTube",
                          views: 512,
                          clicks: 317,
                          ctr: "61.9%",
                          trend: [6, 5, 4, 7, 8, 9, 10],
                        },
                      ].map((link, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                                <i className="fas fa-link"></i>
                              </div>
                              <span className="font-medium text-gray-800">
                                {link.title}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">
                              {link.views.toLocaleString()}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">
                              {link.clicks.toLocaleString()}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">
                              {link.ctr}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-1 h-6">
                              {link.trend.map((value, i) => (
                                <div
                                  key={i}
                                  className="w-1 bg-indigo-600 rounded-sm"
                                  style={{ height: `${value * 4}px` }}
                                ></div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>  )
}

export default AnalyticsDashboard