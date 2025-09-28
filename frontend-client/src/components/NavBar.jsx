import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  Squares2X2Icon,
  ArrowRightStartOnRectangleIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

const LinkNav = ({onNavClick}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleProfileModal = () => setIsProfileOpen(!isProfileOpen);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsProfileOpen(false);
  };

  const navLinks = [
    { name: "Home",
      onClick: onNavClick.heroRef,
      href: "/" },
    { name: "Features",
      onClick: onNavClick.featuresRef,
       href: "/features" },
    { name: "Pricing",
      onClick: onNavClick.pricingRef,
      href: "/pricing" },
    { name: "About",
      onClick: onNavClick.aboutRef,
      href: "/about" },
  
  ];

  const profileLinks = [
    {
      icon: <UserIcon className="h-5 w-5 text-indigo-400" />,
      text: "My Profile",
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
    <header className="relative">
      {/* Cosmic Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-xl font-bold">
            <LinkIcon className="mr-2 h-6 w-6 text-indigo-300" />
            <span className="text-indigo-100">LinkStack</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              onClick={link.onClick}
              className="text-sm font-medium text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
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
                <span className="hidden md:inline text-sm font-medium text-indigo-200 group-hover:text-indigo-300 transition-colors duration-200">
                  {user.username}
                </span>
              </div>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 top-12 w-64 bg-indigo-900/80 border border-indigo-500/30 rounded-xl shadow-xl z-50 backdrop-blur-sm">
                  <div className="px-4 py-3 border-b border-indigo-500/30">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.photo || "/default-avatar.png"}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border border-indigo-400"
                      />
                      <div>
                        <p className="font-medium text-sm text-indigo-100">
                          {user.name || "User"}
                        </p>
                        <p className="text-xs text-indigo-300/80">
                          @{user.username}
                        </p>
                      </div>
                    </div>
                  </div>
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
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 rounded-full transition-colors duration-200"
              >
                Your Link!
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-indigo-200 hover:text-indigo-300"
            onClick={toggleMobileMenu}
          >
            {isMobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-[#0F172A] border-t border-indigo-500/30">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              onClick={() => {setIsMobileOpen(false)
              link.onClick()
              }}
              className="block text-indigo-200 hover:text-indigo-300 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          {!user ? (
            <div className="flex flex-col space-y-2">
              <Link
                to="/register"
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 rounded-full text-center transition-colors duration-200"
              >
                Your Link!
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full text-center hover:bg-indigo-500 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </header>
  );
};

export default LinkNav;
