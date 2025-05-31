import React from 'react'

const LinksDashboard = () => {
  return (
    <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  My Links
                </h1>
                <p className="text-gray-600">
                  Manage all your links in one place.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    Your Links
                  </h2>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center cursor-pointer whitespace-nowrap">
                    <i className="fas fa-plus mr-2"></i>
                    Add New Link
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        {["Title", "URL", "Clicks", "Status", "Actions"].map(
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
                          url: "instagram.com/alexjohnson",
                          clicks: 1245,
                          active: true,
                        },
                        {
                          title: "Twitter",
                          url: "twitter.com/alexjohnson",
                          clicks: 863,
                          active: true,
                        },
                        {
                          title: "Portfolio",
                          url: "alexjohnson.design",
                          clicks: 421,
                          active: true,
                        },
                        {
                          title: "YouTube Channel",
                          url: "youtube.com/alexjohnson",
                          clicks: 317,
                          active: false,
                        },
                        {
                          title: "LinkedIn",
                          url: "linkedin.com/in/alexjohnson",
                          clicks: 289,
                          active: true,
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
                          <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                            {link.url}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">
                              {link.clicks}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div
                                className={`h-6 w-12 rounded-full flex items-center ${
                                  link.active ? "bg-indigo-600" : "bg-gray-300"
                                } transition-colors duration-200 cursor-pointer`}
                              >
                                <span
                                  className={`h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${
                                    link.active
                                      ? "translate-x-6"
                                      : "translate-x-1"
                                  }`}
                                ></span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-600 hover:text-indigo-600 cursor-pointer">
                                <i className="fas fa-edit"></i>
                              </button>
                              <button className="p-2 text-gray-600 hover:text-red-600 cursor-pointer">
                                <i className="fas fa-trash-alt"></i>
                              </button>
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

export default LinksDashboard