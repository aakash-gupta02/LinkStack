import React, { useState } from "react";
import { useAnalytics } from "../context/AnalyticsContext";
import { useAuth } from "../context/AuthContext";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import API from "../utilits/API";
import { toast } from "react-toastify";

const socialInputs = [
  { name: "github", placeholder: "GitHub URL", icon: <FaGithub className="text-gray-700" /> },
  { name: "linkedin", placeholder: "LinkedIn URL", icon: <FaLinkedin className="text-blue-700" /> },
  { name: "twitter", placeholder: "Twitter URL", icon: <FaTwitter className="text-blue-500" /> },
  { name: "facebook", placeholder: "Facebook URL", icon: <FaFacebook className="text-blue-600" /> },
  { name: "instagram", placeholder: "Instagram URL", icon: <FaInstagram className="text-pink-500" /> },
  { name: "youtube", placeholder: "YouTube URL", icon: <FaYoutube className="text-red-600" /> },
];

const ProfileDashboard = () => {
  const { user } = useAnalytics();
  const { user: currentUser, updateUser } = useAuth();

  const [formData, setFormData] = useState({
    name: user.name || "",
    bio: user.bio || "",
    email: user.email || "",
    username: user.username || "",
    profilePicture: user.profilePicture || "",
    socialLinks: {
      github: user.socialLinks?.github || "",
      linkedin: user.socialLinks?.linkedin || "",
      facebook: user.socialLinks?.facebook || "",
      instagram: user.socialLinks?.instagram || "",
      youtube: user.socialLinks?.youtube || "",
      twitter: user.socialLinks?.twitter || "",
    },
    media: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Generic top-level field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Social link change handler
  const handleSocialChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [name]: value },
    }));
  };

  // File change handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError(null);

    setFormData((prev) => ({
      ...prev,
      media: file,
      profilePicture: URL.createObjectURL(file),
    }));

    setUploading(false);
    toast.success("Profile picture updated!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const data = new FormData();

      // Append top-level fields
      ["name", "bio", "email", "username"].forEach((key) => {
        if (formData[key]) data.append(key, formData[key]);
      });



      // Append socials
      data.append("socialLinks", JSON.stringify(formData.socialLinks));



      // Append media if selected
      if (formData.media) data.append("media", formData.media);

      const response = await API.patch(
        `/api/auth/update/${currentUser.id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const res = response.data?.updatedUser;

      setSuccess(true);

      updateUser({
        name: res.name,
        email: res.email,
        username: res.username,
        photo: res.profilePicture,
      });

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Update failed");
      toast.error("Failed to update profile.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h2>

      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm">Profile updated successfully!</div>}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture & Socials */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-indigo-100 mb-4 overflow-hidden">
              <img src={formData.profilePicture} alt="Profile" className="w-full h-full object-cover object-top" />
            </div>

            <label className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap mb-2">
              <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" disabled={uploading} />
              {uploading ? "Uploading..." : "Change Photo"}
            </label>

            <div className="w-full max-w-md space-y-4 mt-4">
              {socialInputs.map(({ name, placeholder, icon }) => (
                <div key={name} className="flex items-center gap-2">
                  {icon}
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={formData.socialLinks[name]}
                    onChange={(e) => handleSocialChange(name, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Profile Fields */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" value={formData.name} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea name="bio" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" rows={3} value={formData.bio} onChange={handleChange}></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-sm">linkstack.io/</span>
                  <input type="text" name="username" className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm" value={formData.username} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" disabled={isLoading} className={`px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}>
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileDashboard;
