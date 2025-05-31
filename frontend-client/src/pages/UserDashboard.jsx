
import React, { useState } from 'react';
import * as echarts from 'echarts';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Dummy data
  const userData = {
    name: "Alex Johnson",
    profileViews: 1248,
    linkClicks: 3527,
    totalLinks: 12,
    conversionRate: "4.2%"
  };



  // Initialize chart
  useEffect(() => {
    const chartDom = document.getElementById('analytics-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Link Clicks',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
            lineStyle: {
              color: '#6366f1'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(99, 102, 241, 0.3)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(99, 102, 241, 0.05)'
                  }
                ]
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      
      // Resize chart on window resize
      const handleResize = () => {
        myChart.resize();
      };
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return (

    <>
    
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-indigo-600">LinkStack</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4 space-y-1">
            <button 
              onClick={() => setActiveMenu('dashboard')}
              className={flex items-center px-4 py-3 w-full text-left rounded-lg ${activeMenu === 'dashboard' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'} cursor-pointer whitespace-nowrap !rounded-button}
            >
              <i className="fas fa-home mr-3"></i>
              <span>Dashboard</span>
            </button>
            
            <button 
              onClick={() => setActiveMenu('profile')}
              className={flex items-center px-4 py-3 w-full text-left rounded-lg ${activeMenu === 'profile' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'} cursor-pointer whitespace-nowrap !rounded-button}
            >
              <i className="fas fa-user mr-3"></i>
              <span>Profile Settings</span>
            </button>
            
            <button 
              onClick={() => setActiveMenu('links')}
              className={flex items-center px-4 py-3 w-full text-left rounded-lg ${activeMenu === 'links' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'} cursor-pointer whitespace-nowrap !rounded-button}
            >
              <i className="fas fa-link mr-3"></i>
              <span>My Links</span>
            </button>
            
            <button 
              onClick={() => setActiveMenu('theme')}
              className={flex items-center px-4 py-3 w-full text-left rounded-lg ${activeMenu === 'theme' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'} cursor-pointer whitespace-nowrap !rounded-button}
            >
              <i className="fas fa-paint-brush mr-3"></i>
              <span>Theme Customizer</span>
            </button>
            
            <button 
              onClick={() => setActiveMenu('analytics')}
              className={flex items-center px-4 py-3 w-full text-left rounded-lg ${activeMenu === 'analytics' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'} cursor-pointer whitespace-nowrap !rounded-button}
            >
              <i className="fas fa-chart-line mr-3"></i>
              <span>Analytics</span>
            </button>
            
            <button 
              onClick={() => setActiveMenu('support')}
              className={flex items-center px-4 py-3 w-full text-left rounded-lg ${activeMenu === 'support' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50'} cursor-pointer whitespace-nowrap !rounded-button}
            >
              <i className="fas fa-question-circle mr-3"></i>
              <span>Support / Help</span>
            </button>
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center px-4 py-2 w-full text-left text-red-600 rounded-lg hover:bg-red-50 cursor-pointer whitespace-nowrap !rounded-button">
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
            <h2 className="text-lg font-medium text-gray-800">Welcome back, {userData.name}</h2>
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center space-x-3 cursor-pointer whitespace-nowrap !rounded-button"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 overflow-hidden">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20young%20professional%20with%20neutral%20expression%2C%20high%20quality%2C%20studio%20lighting%2C%20professional%20photography%2C%20detailed%20facial%20features%2C%20clean%20background&width=100&height=100&seq=1&orientation=squarish" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-gray-700">{userData.name}</span>
              <i className={fas fa-chevron-down text-gray-400 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}}></i>
            </button>
            
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Billing</a>
                <div className="border-t border-gray-200 my-1"></div>
                <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50">Sign out</a>
              </div>
            )}
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {activeMenu === 'dashboard' && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
                <p className="text-gray-600">Monitor your performance and manage your LinkStack profile.</p>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 font-medium">Profile Views</h3>
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <i className="fas fa-eye"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-800">{userData.profileViews.toLocaleString()}</p>
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1"></i> 12% from last week
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 font-medium">Link Clicks</h3>
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <i className="fas fa-mouse-pointer"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-800">{userData.linkClicks.toLocaleString()}</p>
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-up mr-1"></i> 8% from last week
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 font-medium">Total Links</h3>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <i className="fas fa-link"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-800">{userData.totalLinks}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    <span className="text-indigo-600 font-medium">3 active</span> links
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 font-medium">Conversion Rate</h3>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <i className="fas fa-chart-pie"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-800">{userData.conversionRate}</p>
                  <p className="text-red-600 text-sm mt-2 flex items-center">
                    <i className="fas fa-arrow-down mr-1"></i> 2% from last week
                  </p>
                </div>
              </div>
              
              {/* Profile Management */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-indigo-100 mb-4 overflow-hidden">
                      <img 
                        src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20young%20professional%20with%20neutral%20expression%2C%20high%20quality%2C%20studio%20lighting%2C%20professional%20photography%2C%20detailed%20facial%20features%2C%20clean%20background&width=300&height=300&seq=2&orientation=squarish" 
                        alt="Profile" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap !rounded-button">
                      Change Photo
                    </button>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                          defaultValue={userData.name}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                          rows={3}
                          defaultValue="Digital marketing specialist with a passion for growth hacking and content creation. Helping brands tell their story."
                        ></textarea>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input 
                            type="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            defaultValue="alex.johnson@example.com"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
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
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap !rounded-button">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">
                    View All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: "fas fa-eye", text: "Someone viewed your profile", time: "2 minutes ago", color: "bg-blue-100 text-blue-600" },
                    { icon: "fas fa-mouse-pointer", text: "New click on Instagram link", time: "15 minutes ago", color: "bg-purple-100 text-purple-600" },
                    { icon: "fas fa-plus", text: "You added a new link: Portfolio", time: "1 hour ago", color: "bg-green-100 text-green-600" },
                    { icon: "fas fa-paint-brush", text: "You changed your theme to Midnight", time: "3 hours ago", color: "bg-indigo-100 text-indigo-600" },
                    { icon: "fas fa-mouse-pointer", text: "New click on Twitter link", time: "5 hours ago", color: "bg-purple-100 text-purple-600" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className={w-10 h-10 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0 mt-1}>
                        <i className={activity.icon}></i>
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
          )}
          
          {activeMenu === 'links' && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">My Links</h1>
                <p className="text-gray-600">Manage all your links in one place.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Your Links</h2>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                    <i className="fas fa-plus mr-2"></i>
                    Add New Link
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { title: "Instagram", url: "instagram.com/alexjohnson", clicks: 1245, active: true },
                        { title: "Twitter", url: "twitter.com/alexjohnson", clicks: 863, active: true },
                        { title: "Portfolio", url: "alexjohnson.design", clicks: 421, active: true },
                        { title: "YouTube Channel", url: "youtube.com/alexjohnson", clicks: 317, active: false },
                        { title: "LinkedIn", url: "linkedin.com/in/alexjohnson", clicks: 289, active: true },
                      ].map((link, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                                <i className="fas fa-link"></i>
                              </div>
                              <span className="font-medium text-gray-800">{link.title}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                            {link.url}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">{link.clicks}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={h-6 w-12 rounded-full flex items-center ${link.active ? 'bg-indigo-600' : 'bg-gray-300'} transition-colors duration-200 cursor-pointer}>
                                <span className={h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${link.active ? 'translate-x-6' : 'translate-x-1'}}></span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-600 hover:text-indigo-600 cursor-pointer whitespace-nowrap !rounded-button">
                                <i className="fas fa-edit"></i>
                              </button>
                              <button className="p-2 text-gray-600 hover:text-red-600 cursor-pointer whitespace-nowrap !rounded-button">
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
            </div>
          )}
          
          {activeMenu === 'analytics' && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Analytics</h1>
                <p className="text-gray-600">Track your performance and engagement metrics.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Performance Overview</h2>
                  
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
                    
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fas fa-download mr-2"></i>
                      Export
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Total Views", value: "4,827", change: "+12.5%" },
                    { label: "Total Clicks", value: "3,527", change: "+8.3%" },
                    { label: "Click Rate", value: "73.1%", change: "-2.1%" },
                    { label: "Avg. Time", value: "1m 23s", change: "+16.2%" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        <p className={text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}}>
                          {stat.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="h-80" id="analytics-chart"></div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Top Performing Links</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { title: "Instagram", views: 1823, clicks: 1245, ctr: "68.3%", trend: [3, 7, 5, 12, 15, 9, 17] },
                        { title: "Twitter", views: 1254, clicks: 863, ctr: "68.8%", trend: [5, 9, 6, 8, 4, 10, 12] },
                        { title: "Portfolio", views: 986, clicks: 421, ctr: "42.7%", trend: [2, 4, 3, 5, 8, 10, 9] },
                        { title: "LinkedIn", views: 754, clicks: 289, ctr: "38.3%", trend: [4, 6, 5, 3, 2, 4, 7] },
                        { title: "YouTube", views: 512, clicks: 317, ctr: "61.9%", trend: [6, 5, 4, 7, 8, 9, 10] },
                      ].map((link, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                                <i className="fas fa-link"></i>
                              </div>
                              <span className="font-medium text-gray-800">{link.title}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">{link.views.toLocaleString()}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">{link.clicks.toLocaleString()}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-800 font-medium">{link.ctr}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-1 h-6">
                              {link.trend.map((value, i) => (
                                <div 
                                  key={i}
                                  className="w-1 bg-indigo-600 rounded-sm" 
                                  style={{ height: ${value * 4}px }}
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
            </div>
          )}
          
          {activeMenu === 'theme' && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Theme Customizer</h1>
                <p className="text-gray-600">Personalize your LinkStack profile appearance.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Choose a Theme</h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { name: "Minimal", colors: ["#ffffff", "#6366f1"], active: true },
                        { name: "Midnight", colors: ["#1e293b", "#818cf8"] },
                        { name: "Sunset", colors: ["#fef2f2", "#f43f5e"] },
                        { name: "Forest", colors: ["#f0fdf4", "#22c55e"] },
                        { name: "Ocean", colors: ["#f0f9ff", "#0ea5e9"] },
                        { name: "Custom", colors: ["#f5f5f5", "#d1d5db"] },
                      ].map((theme, index) => (
                        <div 
                          key={index} 
                          className={border rounded-xl p-4 cursor-pointer transition ${theme.active ? 'border-indigo-600 ring-2 ring-indigo-100' : 'border-gray-200 hover:border-indigo-300'}}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium text-gray-800">{theme.name}</h3>
                            {theme.active && (
                              <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                <i className="fas fa-check text-xs"></i>
                              </div>
                            )}
                          </div>
                          
                          <div className="h-24 rounded-lg overflow-hidden" style={{ background: theme.colors[0] }}>
                            <div className="h-1/2 w-full" style={{ background: theme.colors[1] }}></div>
                            <div className="flex justify-center mt-2">
                              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Custom Settings</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Font</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Button Style</label>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: "Rounded", value: "rounded", active: true },
                            { label: "Pill", value: "pill" },
                            { label: "Square", value: "square" },
                          ].map((style, index) => (
                            <div 
                              key={index} 
                              className={border rounded-lg p-3 flex flex-col items-center cursor-pointer transition ${style.active ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}}
                            >
                              <div 
                                className={w-full h-8 bg-indigo-600 mb-2 ${style.value === 'rounded' ? 'rounded-lg' : style.value === 'pill' ? 'rounded-full' : ''}}
                              ></div>
                              <span className="text-sm text-gray-700">{style.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap !rounded-button">
                          Save Theme
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 sticky top-24">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Preview</h2>
                    
                    <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                      <div className="h-20 bg-indigo-600"></div>
                      <div className="px-4 pt-4 pb-6 relative">
                        <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md absolute -top-10 left-1/2 transform -translate-x-1/2 overflow-hidden">
                          <img 
                            src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20young%20professional%20with%20neutral%20expression%2C%20high%20quality%2C%20studio%20lighting%2C%20professional%20photography%2C%20detailed%20facial%20features%2C%20clean%20background&width=100&height=100&seq=3&orientation=squarish" 
                            alt="Profile" 
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        
                        <div className="mt-12 text-center mb-6">
                          <h3 className="font-bold text-gray-800 text-lg">Alex Johnson</h3>
                          <p className="text-gray-600 text-sm mt-1">Digital marketing specialist with a passion for growth hacking and content creation.</p>
                        </div>
                        
                        <div className="space-y-3">
                          {[
                            { name: "Instagram", icon: "fab fa-instagram" },
                            { name: "Twitter", icon: "fab fa-twitter" },
                            { name: "Portfolio", icon: "fas fa-globe" },
                          ].map((link, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 p-3 flex items-center shadow-sm hover:shadow-md transition cursor-pointer">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                                <i className={link.icon}></i>
                              </div>
                              <span className="font-medium text-gray-800">{link.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
    
     </>
  );
}

export default App;