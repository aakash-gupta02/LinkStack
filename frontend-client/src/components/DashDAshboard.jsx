import React from 'react'

const DashDAshboard = () => {

      const userData = {
    name: "Alex Johnson",
    profileViews: 1248,
    linkClicks: 3527,
    totalLinks: 12,
    conversionRate: "4.2%",
  };
  return (
    <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Dashboard
                </h1>
                <p className="text-gray-600">
                  Monitor your performance and manage your LinkStack profile.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    label: "Profile Views",
                    value: userData.profileViews.toLocaleString(),
                    icon: "eye",
                    color: "indigo",
                    change: "+12% from last week",
                    changeColor: "green",
                  },
                  {
                    label: "Link Clicks",
                    value: userData.linkClicks.toLocaleString(),
                    icon: "mouse-pointer",
                    color: "purple",
                    change: "+8% from last week",
                    changeColor: "green",
                  },
                  {
                    label: "Total Links",
                    value: userData.totalLinks,
                    icon: "link",
                    color: "blue",
                    change: "3 active links",
                    changeColor: "indigo",
                  },
                  {
                    label: "Conversion Rate",
                    value: userData.conversionRate,
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
                      <h3 className="text-gray-500 font-medium">
                        {stat.label}
                      </h3>
                      <div
                        className={`w-10 h-10 rounded-full bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600`}
                      >
                        <i className={`fas fa-${stat.icon}`}></i>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">
                      {stat.value}
                    </p>
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


              {/* <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Profile Information
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-indigo-100 mb-4 overflow-hidden">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="Profile"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
                      Change Photo
                    </button>
                  </div>
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        defaultValue={userData.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        rows={3}
                        defaultValue="Digital marketing specialist with a passion for growth hacking and content creation. Helping brands tell their story."
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                          defaultValue="alex.johnson@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-sm">
                            linkstack.io/
                          </span>
                          <input
                            type="text"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            defaultValue="alexjohnson"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    Recent Activity
                  </h2>
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
            </div>  )
}

export default DashDAshboard