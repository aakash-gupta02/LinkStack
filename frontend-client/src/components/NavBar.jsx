import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  FaUser,
  FaLink,
  FaPlus,
  FaSignOutAlt,
  FaCog,
  FaChartLine,
  FaPalette,
} from "react-icons/fa";
import { FiX, FiExternalLink } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleProfileModal = () => setIsProfileOpen(!isProfileOpen);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsProfileOpen(false);
  };

  const profileLinks = [
    {
      icon: <FaUser className="text-indigo-500" />,
      text: "My Profile",
      action: () => navigate(`/${user?.username}`),
    },
    {
      icon: <FaPlus className="text-indigo-500" />,
      text: "Create New Link",
      action: () => navigate("/dashboard/links/new"),
    },
    {
      icon: <FaLink className="text-indigo-500" />,
      text: "View My Links",
      action: () => navigate("/dashboard/links"),
    },
    {
      icon: <FaPalette className="text-indigo-500" />,
      text: "Dash Board",
      action: () => navigate("/dashboard"),
    },
    {
      icon: <FaChartLine className="text-indigo-500" />,
      text: "Analytics",
      action: () => navigate("/dashboard/analytics"),
    },
    {
      icon: <FaCog className="text-indigo-500" />,
      text: "Settings",
      action: () => navigate("/dashboard/settings"),
    },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto  text-white">
      {/* Logo and nav links */}
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <FaLink className="mr-2 text-purple-300" />
          <span>LinkStack</span>
        </Link>

        <div className="hidden md:flex ml-10 space-x-6">
          <Link
            to="/features"
            className="hover:text-purple-300 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            className="hover:text-purple-300 transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="hover:text-purple-300 transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/testimonials"
            className="hover:text-purple-300 transition-colors"
          >
            Testimonials
          </Link>
        </div>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center space-x-4 relative">
        {user ? (
          <>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleProfileModal}
            >
              <img
                src={user.photo || "/default-avatar.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-purple-300"
              />
              <span className="text-sm font-medium hidden md:inline">
                {user.username}
              </span>
            </div>

            {/* Profile Modal */}

            {isProfileOpen && (
              <div className="absolute right-0 top-12 mt-1 w-64 bg-white border border-indigo-100 rounded-xl shadow-lg z-50 overflow-hidden">
                {/* Pointer/Arrow */}
                <div className="absolute -top-2 right-4 w-3 h-3 bg-white border-l border-t border-indigo-100 transform rotate-45 z-[-1]" />

                {/* Profile Section */}
                <div className="px-4 py-3 border-b border-indigo-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photo || "/default-avatar.png"}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border border-indigo-300"
                    />
                    <div>
                      <p className="font-medium text-sm text-gray-800">
                        {user.name || "User"}
                      </p>
                      <p className="text-xs text-gray-500">@{user.username}</p>
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="py-2">
                  {profileLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        link.action();
                        setIsProfileOpen(false);
                      }}
                      className="flex items-center w-full px-5 py-3 text-left hover:bg-indigo-50 transition-colors duration-200"
                    >
                      <span className="mr-3 text-indigo-600">{link.icon}</span>
                      <span className="text-gray-700 font-medium">
                        {link.text}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Logout */}
                <div className="border-t border-indigo-100">
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-5 py-3 text-left hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <FaSignOutAlt className="mr-3 text-red-500" />
                    <span className="font-medium text-red-500">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium hover:text-purple-300 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium bg-white text-indigo-900 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
