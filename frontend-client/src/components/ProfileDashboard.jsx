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

const ProfileDashboard = () => {
  const { user, links, analytics } = useAnalytics();

  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio,
    email: user.email,
    username: user.username,
    profilePicture: user.profilePicture,
    socialLinks: {
      github: user.socialLinks?.github || "",
      linkedin: user.socialLinks?.linkedin || "",
      facebok: user.socialLinks?.facebok || "",
      instagram: user.socialLinks?.instagram || "",
      youtube: user.socialLinks?.youtube || "",
      twitter: user.socialLinks?.twitter || "",
    },
  });

  const { user: currentUser, token, updateUser } = useAuth();


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await API.patch(
        `/api/auth/update/${currentUser.id}`,
        formData,

      );

      if (response.data.success) {
        setSuccess(true);

        const selectedFields = {
          id: response.data.user._id,
          name: response.data.user.name,
          email: response.data.user.email,
          username: response.data.user.username,
          photo: response.data.user.profilePicture,
        };

        updateUser(selectedFields);
        
      }
    } catch (err) {
      console.log(err);

      setError(err.response?.data?.message || "Update failed");
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

            {/* <label className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              Change Photo
            </label> */}

            {/* Social Link Inputs */}
            <div className="w-full max-w-md space-y-4 mt-4">
  {/* GitHub */}
  <div className="flex items-center gap-2">
    <FaGithub className="text-gray-700" />
    <input
      type="text"
      placeholder="GitHub URL"
      className="w-full border border-gray-300 rounded px-3 py-2"
      value={formData.socialLinks.github}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          socialLinks: { ...prev.socialLinks, github: e.target.value },
        }))
      }
    />
  </div>

  {/* LinkedIn */}
  <div className="flex items-center gap-2">
    <FaLinkedin className="text-blue-700" />
    <input
      type="text"
      placeholder="LinkedIn URL"
      className="w-full border border-gray-300 rounded px-3 py-2"
      value={formData.socialLinks.linkedin}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          socialLinks: { ...prev.socialLinks, linkedin: e.target.value },
        }))
      }
    />
  </div>

  {/* Twitter */}
  <div className="flex items-center gap-2">
    <FaTwitter className="text-blue-500" />
    <input
      type="text"
      placeholder="Twitter URL"
      className="w-full border border-gray-300 rounded px-3 py-2"
      value={formData.socialLinks.twitter}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          socialLinks: { ...prev.socialLinks, twitter: e.target.value },
        }))
      }
    />
  </div>

  {/* Facebook */}
  <div className="flex items-center gap-2">
    <FaFacebook className="text-blue-600" />
    <input
      type="text"
      placeholder="Facebook URL"
      className="w-full border border-gray-300 rounded px-3 py-2"
      value={formData.socialLinks.facebook}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          socialLinks: { ...prev.socialLinks, facebook: e.target.value },
        }))
      }
    />
  </div>

  {/* Instagram */}
  <div className="flex items-center gap-2">
    <FaInstagram className="text-pink-500" />
    <input
      type="text"
      placeholder="Instagram URL"
      className="w-full border border-gray-300 rounded px-3 py-2"
      value={formData.socialLinks.instagram}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          socialLinks: { ...prev.socialLinks, instagram: e.target.value },
        }))
      }
    />
  </div>

  {/* YouTube */}
  <div className="flex items-center gap-2">
    <FaYoutube className="text-red-600" />
    <input
      type="text"
      placeholder="YouTube URL"
      className="w-full border border-gray-300 rounded px-3 py-2"
      value={formData.socialLinks.youtube}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          socialLinks: { ...prev.socialLinks, youtube: e.target.value },
        }))
      }
    />
  </div>
</div>



          </div>

          {/* Form Fields Section */}
          <div className="lg:col-span-2 space-y-10">
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

            {/* image */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image Url{" "}
              </label>
              <input
                type="text"
                name="profilePicture"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                value={formData.profilePicture}
                onChange={handleChange}
              />
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
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
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
