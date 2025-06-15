import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { applyTheme } from "../utilits/applyTheme";
import LinkNav from "../components/LinkNav";

const Link2 = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // const user = {

  //   theme: {
  //     bgPage: "#fff7ed",
  //     textPrimary: "#431407",
  //     textSecondary: "#b45309",
  //     textTertiary: "#f97316",

  //     headerGradientStart: "#f59e0b",
  //     headerGradientEnd: "#ea580c",

  //     profileBorder: "#b45309",
  //     profileBg: "#fed7aa",

  //     socialBg: "#ffe4e6",
  //     socialDefault: "#f97316",
  //     socialGithub: "#7c2d12",
  //     socialLinkedin: "#fb923c",
  //     socialTwitter: "#f97316",
  //     socialYoutube: "#ef4444",
  //     socialInstagram: "#ec4899",
  //     socialFacebook: "#3b82f6",

  //     linkCardBg: "#ffedd5",
  //     linkCardText: "#431407",
  //     linkCardTextSecondary: "#b45309",
  //     linkCardIcon: "#f97316",
  //     linkCardRadius: "12px",
  //     linkThumbnailBg: "#fdba74",

  //     footerText: "#c2410c",

  //     primary: "#f97316",
  //     secondary: "#ea580c",
  //     text: "#431407",
  //   },

  // };

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

    if (profile?.theme) {
      applyTheme(profile.theme);
    }

    fetchProfile();
  }, [username, profile]);

  const socialIcons = {
    github: { icon: "fab fa-github", color: "text-[var(--social-github)]" },
    linkedin: {
      icon: "fab fa-linkedin",
      color: "text-[var(--social-linkedin)]",
    },
    twitter: { icon: "fab fa-twitter", color: "text-[var(--social-twitter)]" },
    youtube: { icon: "fab fa-youtube", color: "text-[var(--social-youtube)]" },
    instagram: {
      icon: "fab fa-instagram",
      color: "text-[var(--social-instagram)]",
    },
    facebook: {
      icon: "fab fa-facebook",
      color: "text-[var(--social-facebook)]",
    },
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!profile) return <div className="text-center py-10">User not found</div>;

  return (
    <div
      className="min-h-screen font-sans py-10 px-18"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      {/* <div className="absolute top-2 left-2 right-2 z-50 sm:top-4 sm:left-4 sm:right-4">
  <LinkNav />
</div> */}


      {/* Header with gradient background */}
      <div
        className="relative w-full h-34 rounded-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, var(--header-gradient-start), var(--header-gradient-end))",
        }}
      >
        <LinkNav/>
      </div>

      {/* Main content container */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-20">
        {/* Profile section */}
        <div className="flex flex-col items-center">
          {/* profile photo */}
          <div
            className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 shadow-xl"
            style={{
              borderColor: "var(--profile-border)",
              backgroundColor: "var(--profile-bg)",
            }}
          >
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* name & bio */}
          <h1
            className="mt-4 text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {profile.name}
          </h1>
          <p className="font-medium" style={{ color: "var(--text-secondary)" }}>
            @{profile.username}
          </p>
          <p
            className="mt-2 text-center max-w-md"
            style={{ color: "var(--text-tertiary)" }}
          >
            {profile.bio}
          </p>

          <div className="flex justify-center space-x-4 mt-6">
            {Object.entries(profile.socialLinks).map(([platform, url]) => {
              const { icon, color } = socialIcons[platform] || {
                icon: "fas fa-external-link-alt",
                color: "text-[var(--social-default)]",
              };

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ backgroundColor: "var(--social-bg)" }}
                  aria-label={`Visit ${platform} profile`}
                >
                  <i className={`${icon} ${color} text-lg`}></i>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-4 pb-20">
          {profile.links
            .filter((link) => link.isVisible)
            .map((link) => (
              <a
                key={link.id}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://linkstack-wjl6.onrender.com/l/${link._id}`}
                className="block rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                style={{
                  backgroundColor: "var(--link-card-bg)",
                  color: "var(--link-card-text)",
                  borderRadius: "var(--link-card-radius)",
                }}
              >
                <div className="flex items-center p-4">
                  <div
                    className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: "var(--link-thumbnail-bg)" }}
                  >
                    <img
                      src={link.thumbnailUrl}
                      alt={link.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="ml-4">
                    <h3
                      className="font-semibold"
                      style={{ color: "var(--link-card-text)" }}
                    >
                      {link.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--link-card-text-secondary)" }}
                    >
                      {link.description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <i
                      className="fas fa-chevron-right"
                      style={{ color: "var(--link-card-icon)" }}
                    ></i>
                  </div>
                </div>
              </a>
            ))}
        </div>

        {/* Footer */}
        <div
          className="text-center pb-8 text-sm"
          style={{ color: "var(--footer-text)" }}
        >
          <p>© {new Date().getFullYear()} Link Stack. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Link2;
