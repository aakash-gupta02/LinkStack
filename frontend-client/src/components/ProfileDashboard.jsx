// import React from "react";
// import { useAnalytics } from "../context/AnalyticsContext";

// const ProfileDashboard = () => {

//   const {user} = useAnalytics()

//   const handleChange = async ()=>{

//     try {
      
//     } catch (error) {
      
//     }

//   }


//   return (
//     <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
//       <h2 className="text-xl font-bold text-gray-800 mb-6">
//         Profile Information
//       </h2>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//         <div className="flex flex-col items-center">
//           <div className="w-32 h-32 rounded-full bg-indigo-100 mb-4 overflow-hidden">
//             <img
//               src={user.profilePicture}
//               alt="Profile"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
//             Change Photo
//           </button>
//         </div>


//         <div className="lg:col-span-2 space-y-4">

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
            
//             <input
//               type="text"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//               defaultValue={user.name}
//             />
//           </div>


//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Bio
//             </label>
//             <textarea
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//               rows={3}
//               defaultValue={user.bio}
//             ></textarea>
//           </div>


//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//                 defaultValue={user.email}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Username
//               </label>
//               <div className="flex">
//                 <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-sm">
//                   linkstack.io/
//                 </span>
//                 <input
//                   type="text"
//                   className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//                   defaultValue={user.username}
//                 />
//               </div>
//             </div>
//           </div>


//           <div className="pt-4">
//             <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
//               Save Changes
//             </button>
//           </div>



//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDashboard;


import React, { useState } from "react";
import { useAnalytics } from "../context/AnalyticsContext";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const ProfileDashboard = () => {
  const { user, rawData } = useAnalytics();
  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio,
    email: user.email,
    username: user.username,
    profilePicture: user.profilePicture
  });

  const { user: currentUser, token } = useAuth();

  console.log(currentUser);
  


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePicture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.patch(
        `http://localhost:3000/api/auth/update/${currentUser.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        setSuccess(true);
        // Optionally update context or trigger refetch
        
        console.log("updated user",response.data);
        
      }
    } catch (err) {
      console.log(err);
      
      setError(err.response?.data?.message || 'Update failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Profile Information
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm">
          Profile updated successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-indigo-100 mb-4 overflow-hidden">
              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <label className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              Change Photo
            </label>
          </div>

          {/* Form Fields Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Bio Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                name="bio"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Email and Username Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={formData.email}
                  onChange={handleChange}
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
                    name="username"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileDashboard;