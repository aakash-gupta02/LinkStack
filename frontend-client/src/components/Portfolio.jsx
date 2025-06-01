// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";

const Portfolio = () => {
    
  const [activeTab, setActiveTab] = useState("about");
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-8">
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack web developer specializing in the
                MERN stack (MongoDB, Express, React, Node.js). My focus is
                building clean, efficient, and scalable applications that solve
                real-world problems. I'm driven by independence, creativity, and
                the goal to create impact-driven digital solutions — especially
                projects that blend practical functionality with user-centric
                design.
              </p>
            </section>
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Core Competencies</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                  <span>
                    React.js, Node.js, Express.js, MongoDB, Tailwind CSS
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                  <span>
                    Authentication with JWT, RESTful APIs, CRUD operations
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                  <span>
                    Frontend architecture (React Context/Redux), clean UI
                    structure
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                  <span>Version control with Git & GitHub</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                  <span>
                    Problem-solving, project structuring, and UI optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                  <span>Design translation and responsive web layouts</span>
                </li>
              </ul>
            </section>
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">What I'm Doing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#333] p-5 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-900 flex items-center justify-center mr-3">
                      <i className="fas fa-code text-indigo-400"></i>
                    </div>
                    <h3 className="text-lg font-semibold">Web Development</h3>
                  </div>
                  <p className="text-gray-300">
                    Building dynamic, scalable full-stack apps using MERN &
                    modern hosting solutions.
                  </p>
                </div>
                <div className="bg-[#333] p-5 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-900 flex items-center justify-center mr-3">
                      <i className="fas fa-paint-brush text-indigo-400"></i>
                    </div>
                    <h3 className="text-lg font-semibold">
                      UI & Code Optimization
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Creating clean, accessible, responsive layouts, and
                    optimized UIs.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
      case "resume":
        return (
          <div className="space-y-8">
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Resume</h2>
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors !rounded-button whitespace-nowrap">
                  <i className="fas fa-download mr-2"></i>Download CV
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                    Work Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-indigo-400 pl-4">
                      <h4 className="font-semibold">
                        Senior Full Stack Developer
                      </h4>
                      <p className="text-sm text-gray-400">
                        TechCorp Inc. | 2023 - Present
                      </p>
                      <p className="text-gray-300 mt-2">
                        Led development of enterprise-level web applications
                        using React and Node.js. Implemented microservices
                        architecture and improved system performance by 40%.
                      </p>
                    </div>
                    <div className="border-l-2 border-indigo-400 pl-4">
                      <h4 className="font-semibold">Full Stack Developer</h4>
                      <p className="text-sm text-gray-400">
                        WebSolutions Co. | 2021 - 2023
                      </p>
                      <p className="text-gray-300 mt-2">
                        Developed and maintained multiple client projects.
                        Specialized in MERN stack applications with focus on
                        scalability and performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                    Education
                  </h3>
                  <div className="border-l-2 border-indigo-400 pl-4">
                    <h4 className="font-semibold">BSc in Computer Science</h4>
                    <p className="text-sm text-gray-400">
                      Tech University | 2017 - 2021
                    </p>
                    <p className="text-gray-300 mt-2">
                      Focus on Software Engineering and Web Technologies.
                      Graduated with Honors.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                    Frontend
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>React.js</span>
                        <span>95%</span>
                      </div>
                      <div className="h-2 bg-[#333] rounded-full">
                        <div className="h-full w-[95%] bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>TypeScript</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-[#333] rounded-full">
                        <div className="h-full w-[90%] bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Tailwind CSS</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-[#333] rounded-full">
                        <div className="h-full w-[85%] bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400 mb-4">
                    Backend
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Node.js</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-[#333] rounded-full">
                        <div className="h-full w-[90%] bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>MongoDB</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-[#333] rounded-full">
                        <div className="h-full w-[85%] bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>GraphQL</span>
                        <span>80%</span>
                      </div>
                      <div className="h-2 bg-[#333] rounded-full">
                        <div className="h-full w-[80%] bg-indigo-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case "projects":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20ecommerce%20website%20interface%20with%20dark%20theme%20showing%20product%20grid%20and%20shopping%20cart%2C%20professional%20UI%20design%20with%20clean%20layout%20and%20minimal%20style&width=600&height=400&seq=2&orientation=landscape"
                  alt="E-Commerce Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A full-featured online store with product catalog, user
                    authentication, shopping cart, and secure payment
                    processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Stripe
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=task%20management%20dashboard%20interface%20with%20dark%20theme%20showing%20kanban%20board%20and%20team%20collaboration%20features%2C%20professional%20UI%20design%20with%20clean%20layout%20and%20minimal%20style&width=600&height=400&seq=3&orientation=landscape"
                  alt="Task Management App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Task Management App
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Real-time collaborative task management with drag-and-drop
                    interface, notifications, and team permissions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Express
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Socket.io
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=weather%20dashboard%20interface%20with%20dark%20theme%20showing%20weather%20data%20visualization%20and%20forecast%20charts%2C%20professional%20UI%20design%20with%20clean%20layout%20and%20minimal%20style&width=600&height=400&seq=4&orientation=landscape"
                  alt="Weather Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
                  <p className="text-gray-300 mb-4">
                    Interactive weather application with location search, 7-day
                    forecasts, and data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      Chart.js
                    </span>
                    <span className="px-3 py-1 bg-indigo-900 text-indigo-300 rounded-full text-sm">
                      API
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "github":
        return (
          <div className="space-y-8">
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">GitHub Activity</h2>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <i className="fab fa-github mr-2"></i>View Profile
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#333] rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-code-branch text-indigo-400"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Total Repositories</h3>
                      <p className="text-gray-400">45 Public Repos</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-indigo-400">45</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#333] rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-star text-indigo-400"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Total Stars</h3>
                      <p className="text-gray-400">Across All Repositories</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-indigo-400">
                    128
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#333] rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-code text-indigo-400"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Lines of Code</h3>
                      <p className="text-gray-400">Total Contribution</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-indigo-400">
                    50k+
                  </span>
                </div>
              </div>
            </section>
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Recent Contributions</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-indigo-400 pl-4">
                  <h4 className="font-semibold">
                    Feature: Add Dark Mode Support
                  </h4>
                  <p className="text-sm text-gray-400">
                    E-Commerce Platform | 2 days ago
                  </p>
                  <p className="text-gray-300 mt-2">
                    Implemented system-wide dark mode support with user
                    preference persistence.
                  </p>
                </div>
                <div className="border-l-2 border-indigo-400 pl-4">
                  <h4 className="font-semibold">
                    Bug Fix: API Response Handling
                  </h4>
                  <p className="text-sm text-gray-400">
                    Weather Dashboard | 5 days ago
                  </p>
                  <p className="text-gray-300 mt-2">
                    Improved error handling for API responses and added retry
                    mechanism.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
      case "contact":
        return (
          <div className="space-y-8">
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 h-32"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </section>
            <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-6">Other Ways to Connect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-[#333] rounded-lg">
                  <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-indigo-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">alex.morgan@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#333] rounded-lg">
                  <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-indigo-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#333] rounded-lg">
                  <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                    <i className="fab fa-linkedin text-indigo-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-gray-400">@alexmorgan</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#333] rounded-lg">
                  <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                    <i className="fab fa-twitter text-indigo-400"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Twitter</h3>
                    <p className="text-gray-400">@alexmorgandev</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };
};

export default Portfolio;
