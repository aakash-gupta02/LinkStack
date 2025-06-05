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
