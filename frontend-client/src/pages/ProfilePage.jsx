import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";

const UserLinksPage = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`https://linkstack-wjl6.onrender.com/${username}`);
        setProfile(res.data.profile);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  const socialIcons = {
    github: { icon: "fab fa-github", color: "text-gray-800" },
    linkedin: { icon: "fab fa-linkedin", color: "text-blue-700" },
    twitter: { icon: "fab fa-twitter", color: "text-blue-400" },
    youtube: { icon: "fab fa-youtube", color: "text-red-600" },
    instagram: { icon: "fab fa-instagram", color: "text-pink-600" },
    facebook: { icon: "fab fa-facebook", color: "text-blue-600" },
    // portfolio: { icon: "fab fa-portfolio", color: "text-blue-600" },
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!profile) return <div className="">{<NotFoundPage/>}</div>;

  return (
    <div className="relative min-h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Cosmic Background Grid ONLY */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {/* Grid Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500 blur-xl opacity-10"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* YOUR EXISTING CONTENT - COMPLETELY UNCHANGED */}
      <div className="min-h-screen py-6 md:py-10 px-4 sm:px-6 lg:px-8">
        {/* Header with gradient background */}
        <div className="relative w-full bg-gradient-to-br from-indigo-600 to-purple-600 h-24 sm:h-28 md:h-32 lg:h-36 rounded-lg overflow-hidden"></div>

        {/* Rest of your existing code remains exactly the same... */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 md:-mt-20">
          {/* Profile section */}
          <div className="flex flex-col items-center">
            {/* profile photo */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* name & bio */}
            <h1 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {profile.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              @{profile.username}
            </p>
            <p className="mt-2 text-center text-sm sm:text-base text-gray-700 max-w-xs sm:max-w-md md:max-w-lg">
              {profile.bio}
            </p>

            {/* Social media icons */}
            <div className="flex justify-center space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              {Object.entries(profile.socialLinks).map(([platform, url]) => {
                const { icon, color } = socialIcons[platform] || {
                  icon: "fas fa-external-link-alt",
                  color: "text-gray-500",
                };

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                    aria-label={`Visit ${platform} profile`}
                  >
                    <i
                      className={`${icon} ${color} text-sm sm:text-base md:text-lg`}
                    ></i>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links section */}
          <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 pb-16 sm:pb-20">
            {profile.links
              .filter((link) => link.isVisible)
              .map((link) => (
                <a
                  key={link.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://linkstack-wjl6.onrender.com/l/${link._id}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-center p-3 sm:p-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={link.thumbnailUrl}
                        alt={link.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                        {link.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {link.description}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <i className="fas fa-chevron-right text-indigo-500 text-sm sm:text-base"></i>
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* Footer */}
          <div className="text-center pb-6 sm:pb-8 text-xs sm:text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Link Stack. All rights reserved.</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default UserLinksPage;
