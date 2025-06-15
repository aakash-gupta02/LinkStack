import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path as needed
import {
  UserIcon,
  Squares2X2Icon,
  ArrowRightStartOnRectangleIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

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
      icon: <LinkIcon className="h-5 w-5 text-indigo-400" />,
      text: "My Links Page",
      action: () => navigate(`/${user?.username}`),
    },
    {
      icon: <Squares2X2Icon className="h-5 w-5 text-indigo-400" />,
      text: "Dashboard",
      action: () => navigate("/link/dashboard"),
    },
    {
      icon: <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-red-400" />,
      text: "Logout",
      action: handleLogout,
    },
  ];

  return (
    <nav className=" flex items-center justify-between px-6 py-4 max-w-7xl mx-auto text-white">
      {/* Cosmic Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

      {/* Logo and Nav Links */}
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <LinkIcon className="mr-2 h-6 w-6 text-indigo-300" />
          <span className="text-indigo-100">LinkStack</span>
        </Link>

        <div className="hidden md:flex ml-10 space-x-6">
          <Link
            to="/features"
            className="text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            className="text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            to="/testimonials"
            className="text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
          >
            Testimonials
          </Link>
        </div>
      </div>

      {/* Auth Buttons / Profile */}
      <div className="flex items-center space-x-4 relative">
        {user ? (
          <>
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={toggleProfileModal}
            >
              <img
                src={user.photo || "/default-avatar.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-indigo-400 group-hover:border-indigo-300 transition-colors duration-200"
              />
              <span className="text-sm font-medium text-indigo-200 hidden md:inline group-hover:text-indigo-300 transition-colors duration-200">
                {user.username}
              </span>
            </div>

            {/* Profile Modal */}
            {isProfileOpen && (
              <div className="absolute right-0 top-12 w-64 bg-indigo-900/00 border border-indigo-500/30 rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm">
                {/* Pointer/Arrow */}
                <div className="absolute -top-2 right-4 w-3 h-3 bg-indigo-900/50 border-l border-t border-indigo-500/30 transform rotate-45 z-[-1]" />

                {/* Profile Section */}
                <div className="px-4 py-3 border-b border-indigo-500/30">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photo || "/default-avatar.png"}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border border-indigo-400"
                    />
                    <div>
                      <p className="font-medium text-sm text-indigo-100">
                        {user.name || "User"} / @{user.username}
                      </p>
                      <p className="text-xs mt-1 text-indigo-300/80">
                       {user.email}
                      </p>
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
                      className="flex items-center w-full px-5 py-3 text-left text-indigo-200 hover:bg-indigo-800/50 transition-colors duration-200"
                    >
                      <span className="mr-3">{link.icon}</span>
                      <span className="text-sm font-medium">{link.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors duration-200"
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
