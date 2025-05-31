// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const UserLinksPage = () => {
//   const { username } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3000/${username}`);
//         setProfile(res.data.profile);
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [username]);

//   const handleLink = async ({ link }) => {
//     await axios.get(`http://localhost:3000/l/${link}`);
//   };

// if (loading) return <div className="text-center py-10">Loading...</div>;
// if (!profile) return <div className="text-center py-10">User not found</div>;

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
//       {/* Profile section */}
//       <div className="flex flex-col items-center mb-6">
//         <img
//           src={profile.profilePicture}
//           alt={profile.name}
//           className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
//         />
//         <h1 className="text-2xl font-bold mt-3 text-indigo-700">
//           @{profile.username}
//         </h1>
//         {profile.bio && (
//           <p className="text-gray-600 mt-1 text-center">{profile.bio}</p>
//         )}
//       </div>

//       {/* Links section */}
//       <div className="w-full max-w-md space-y-4">
//         {profile.links
//           .filter((link) => link.isVisible)
//           .map((link) => (

//             <a
//               key={link._id}
//               href={`http://localhost:3000/l/${link._id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-4 px-5 py-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl transition"
//             >
//               <img
//                 src={link.thumbnailUrl}
//                 alt={link.title}
//                 className="w-10 h-10 rounded-lg object-cover"
//               />
//               <span className="text-indigo-800 font-medium text-lg">
//                 {link.title}
//               </span>
//             </a>
//           ))}
//       </div>

//       {/* Footer */}
//       <p className="text-xs text-gray-400 mt-12">Built with ❤️ by DevLink</p>
//     </div>
//   );
// };

// export default UserLinksPage;

// import React from "react";
// import {
//   FaYoutube,
//   FaInstagram,
//   FaFacebook,
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaGlobe,
// } from "react-icons/fa";

// const socialIconMap = {
//   youtube: FaYoutube,
//   instagram: FaInstagram,
//   facebook: FaFacebook,
//   github: FaGithub,
//   linkedin: FaLinkedin,
//   twitter: FaTwitter,
//   portfolio: FaGlobe,
// };

// const profile = {
//   _id: "68373bfe9c10ad8dfa62b493",
//   name: "sumit",
//   username: "sumitdev99",
//   profilePicture:
//     "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png",
//   bio: "Ctrl + Z doesn’t work in real life, so I code with intention.",

//   socialLinks: {
//     youtube: "",
//     instagram: "",
//     facebook: "",
//     github: "",
//     linkedin: "",
//     twitter: "",
//     portfolio: "",
//   },
//   profileViews: 9,
//   viewerCountries: [],
//   __v: 0,
//   links: [
//     {
//       _id: "68373c449c10ad8dfa62b497",
//       userId: "68373bfe9c10ad8dfa62b493",
//       title: "LinkedIn",
//       url: "https://www.linkedin.com/in/sumitdev",
//       thumbnailUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
//       icon: "",
//       isVisible: true,
//       order: 0,
//       clicks: 3,
//       createdAt: "2025-05-28T16:39:32.739Z",
//       updatedAt: "2025-05-28T16:42:03.044Z",
//       __v: 0,
//     },
//     {
//       _id: "68373fa17833b3eb3468b87c",
//       userId: "68373bfe9c10ad8dfa62b493",
//       title: "Github",
//       url: "https://www.github.com/in/sumitdev",
//       thumbnailUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
//       icon: "",
//       isVisible: true,
//       order: 0,
//       clicks: 0,
//       createdAt: "2025-05-28T16:53:53.631Z",
//       updatedAt: "2025-05-28T16:53:53.631Z",
//       __v: 0,
//     },
//   ],
// };

// const ProfilePage = () => {
//   return (
//     <div className="min-h-screen p-8 bg-white flex flex-col items-center">
//       {/* Aurora static background */}
//       <div className="w-full h-40 bg-gradient-to-tr from-indigo-600 via-purple-300 to-blue-200 rounded-3xl relative">
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//           <img
//             src={profile.profilePicture}
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
//           />
//         </div>
//       </div>

//       {/* User Info */}
//       <div className="mt-20 text-center">
//         <h2 className="text-3xl font-semibold text-gray-800">{profile.name}</h2>
//         <p className="text-gray-600 max-w-md mx-auto mt-1">{profile.bio}</p>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-4 mt-4">
//           {Object.entries(profile.socialLinks).map(([key, value]) => {
//             if (!value) return null;
//             const Icon = socialIconMap[key];
//             return (
//               <a
//                 key={key}
//                 href={value}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 hover:text-indigo-800 text-xl"
//               >
//                 <Icon />
//               </a>
//             );
//           })}
//         </div>

//         {/* <div className="flex justify-center gap-4 mt-4" >

//             {profile.socialLinks.map((social , index)=>{
//                 <h1>{social.title}</h1>
//             })}

//         </div> */}
//       </div>

//       {/* Links Section */}
//       <div className="mt-10 w-full max-w-xl px-4">
//         {profile.links
//           .filter((link) => link.isVisible)
//           .map((link) => (
//             <a
//               key={link._id}
//               href={`/l/${link._id}`}
//               className="flex items-center gap-4 bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 mb-4 hover:bg-indigo-100 transition"
//             >
//               <img
//                 src={link.thumbnailUrl || "https://via.placeholder.com/50"}
//                 alt={link.title}
//                 className="w-10 h-10 rounded"
//               />
//               <span className="text-indigo-700 font-medium">{link.title}</span>
//             </a>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserLinksPage = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/${username}`);
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

  // const profile = {
  //   _id: "6836af3017c69fed0897862a",
  //   name: "Aakash Dev 2",
  //   username: "aakashdev99",
  //   profilePicture:
  //     "https://mrwallpaper.com/images/hd/cool-profile-pictures-panda-man-gsl2ntkjj3hrk84s.jpg",
  //   bio: "Full Stack Developer || Building DevLink Stack ",
  //   socialLinks: {
  //     github: "https://github.com/aakashdev",
  //     linkedin: "https://linkedin.com/in/aakashdev",
  //     twitter: "https://twitter.com/aakash_dev",
  //   },
  //   __v: 0,
  //   profileViews: 1,
  //   viewerCountries: [],
  //   links: [
  //     {
  //       _id: "6836b6e4954734aadeeccc54",
  //       userId: "6836af3017c69fed0897862a",
  //       title: "portfolio",
  //       url: "https://youtu.be/mIVB-SNycKI?si=M4njQZcPhjLqgTzA",
  //       thumbnailUrl:
  //         "https://i.ytimg.com/vi/eoCCx3pFzFg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAPXI7eu1Vs5OjKryl1mHW5q4STDA",
  //       icon: "",
  //       isVisible: true,
  //       order: 0,
  //       clicks: 4,
  //       createdAt: "2025-05-28T07:10:28.435Z",
  //       updatedAt: "2025-05-28T16:20:57.405Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "6836b72c954734aadeeccc57",
  //       userId: "6836af3017c69fed0897862a",
  //       title: "My Portfolio",
  //       url: "https://aakashdev.vercel.app",
  //       thumbnailUrl: "https://i.imgur.com/XsZCfrA.png",
  //       icon: "",
  //       isVisible: true,
  //       order: 0,
  //       clicks: 0,
  //       createdAt: "2025-05-28T07:11:40.062Z",
  //       updatedAt: "2025-05-28T07:11:40.062Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "6836b73c954734aadeeccc5a",
  //       userId: "6836af3017c69fed0897862a",
  //       title: "GitHub",
  //       url: "https://github.com/aakashdev",
  //       description: "Visit my github....Stars are appreciated",
  //       thumbnailUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  //       icon: "",
  //       isVisible: true,
  //       order: 0,
  //       clicks: 0,
  //       createdAt: "2025-05-28T07:11:56.179Z",
  //       updatedAt: "2025-05-28T07:11:56.179Z",
  //       __v: 0,
  //     },
  //     {
  //       _id: "6836b753954734aadeeccc5d",
  //       userId: "6836af3017c69fed0897862a",
  //       title: "LinkedIn",
  //       url: "https://www.linkedin.com/in/aakashdev",
  //       thumbnailUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  //       icon: "",
  //       isVisible: true,
  //       order: 0,
  //       clicks: 0,
  //       createdAt: "2025-05-28T07:12:19.814Z",
  //       updatedAt: "2025-05-28T07:12:19.814Z",
  //       __v: 0,
  //     },
  //   ],
  // };

  const profileLinks = [
    {
      id: 1,
      title: "My Personal Website",
      description: "Check out my portfolio and latest projects",
      thumbnail:
        "https://readdy.ai/api/search-image?query=modern%20minimalist%20website%20design%20with%20clean%20interface%2C%20professional%20portfolio%20layout%2C%20subtle%20blue%20accents%2C%20organized%20project%20gallery%2C%20responsive%20design%20showcase%20on%20white%20background%2C%20high%20quality%20render&width=100&height=100&seq=link1&orientation=squarish",
      url: "#",
    },
    {
      id: 2,
      title: "Latest YouTube Video",
      description: "Watch my tutorial on React and Tailwind CSS",
      thumbnail:
        "https://readdy.ai/api/search-image?query=video%20production%20setup%20with%20professional%20camera%20equipment%2C%20lighting%2C%20microphone%2C%20editing%20software%20interface%20visible%20on%20screen%2C%20modern%20youtube%20studio%20setup%2C%20clean%20minimal%20background&width=100&height=100&seq=link2&orientation=squarish",
      url: "#",
    },
    {
      id: 3,
      title: "My Design Resources",
      description: "Free UI kits and design templates",
      thumbnail:
        "https://readdy.ai/api/search-image?query=graphic%20design%20resources%20featuring%20color%20palettes%2C%20typography%20samples%2C%20UI%20components%2C%20organized%20neatly%20on%20white%20background%2C%20professional%20design%20toolkit%2C%20modern%20minimal%20style&width=100&height=100&seq=link3&orientation=squarish",
      url: "#",
    },
    {
      id: 4,
      title: "Join My Newsletter",
      description: "Weekly tips on web development and design",
      thumbnail:
        "https://readdy.ai/api/search-image?query=digital%20newsletter%20concept%20with%20elegant%20email%20template%2C%20organized%20content%20blocks%2C%20modern%20typography%2C%20clean%20layout%20design%20on%20white%20background%2C%20professional%20communication%20design&width=100&height=100&seq=link4&orientation=squarish",
      url: "#",
    },
    {
      id: 5,
      title: "My Latest E-book",
      description: "The Complete Guide to Modern Web Development",
      thumbnail:
        "https://readdy.ai/api/search-image?query=professional%20e-book%20cover%20design%20with%20modern%20typography%2C%20clean%20layout%2C%20subtle%20blue%20gradient%2C%20web%20development%20theme%2C%20digital%20book%20mockup%20on%20white%20background&width=100&height=100&seq=link5&orientation=squarish",
      url: "#",
    },
  ];

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!profile) return <div className="text-center py-10">User not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 font-sans py-10 px-18 ">
      {/* Header with gradient background */}
      <div className="relative w-full bg-gradient-to-br from-indigo-600 to-purple-600 h-34 rounded-lg overflow-hidden"></div>

      {/* Main content container */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 -mt-20">
        {/* Profile section */}
        <div className="flex flex-col items-center">
          {/* profile photo */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* name & bio */}
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
          <p className="text-gray-600 font-medium">@{profile.username}</p>
          <p className="mt-2 text-center text-gray-700 max-w-md">
            {profile.bio}
          </p>

          {/* Social media icons */}
          {/* <div className="flex justify-center mt-6 space-x-3 sm:space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fab fa-youtube text-red-600"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fab fa-instagram text-pink-600"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fab fa-github text-gray-800"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fab fa-twitter text-blue-400"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <i className="fab fa-linkedin text-blue-700"></i>
            </a>
          </div> */}

          <div className="flex justify-center space-x-4 mt-6">
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
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label={`Visit ${platform} profile`}
                >
                  <i className={`${icon} ${color} text-lg`}></i>
                </a>
              );
            })}
          </div>
        </div>

        {/* Links section */}
        <div className="mt-10 space-y-4 pb-20">
          {/* {profileLinks.map((link) => (
            // {link.isVisible && () }
            <a
              key={link.id}
              href={link.url}
              className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer !rounded-button whitespace-nowrap"
            >
              <div className="flex items-center p-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={link.thumbnail}
                    alt={link.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{link.title}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
                <div className="ml-auto">
                  <i className="fas fa-chevron-right text-indigo-500"></i>
                </div>
              </div>
            </a>
          ))} */}

          {profile.links
            .filter((link) => link.isVisible)
            .map((link) => (
              <a
                key={link.id}
                target="_blank"
                rel="noopener noreferrer"
                href={`http://localhost:3000/l/${link._id}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <div className="flex items-center p-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={link.thumbnailUrl}
                      alt={link.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                  <div className="ml-auto">
                    <i className="fas fa-chevron-right text-indigo-500"></i>
                  </div>
                </div>
              </a>
            ))}
        </div>

        {/* Footer */}
        <div className="text-center pb-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Link Stack. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default UserLinksPage;
