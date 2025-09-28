import React, { useState } from "react";
import { useAnalytics } from "../context/AnalyticsContext";
import { useAuth } from "../context/AuthContext";
import API from "../utilits/API";
import { toast } from "react-toastify";

const LinksDashboard = () => {
  const { links, rawData, fetchData, refreshAnalytics } = useAnalytics();

  const { token } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const [currentLink, setCurrentLink] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    thumbnailUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "description") {
      if (value.length <= 200) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Update handleChange to handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnailFile(file);

    // For preview, optional:
    setFormData((prev) => ({
      ...prev,
      thumbnailUrl: URL.createObjectURL(file),
    }));
  };

  // Update handleCreate and handleEdit to use FormData
  const handleCreate = async () => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key !== "thumbnailUrl") data.append(key, formData[key]);
      });
      if (thumbnailFile) data.append("media", thumbnailFile);

      await API.post("/api/link/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      refreshAnalytics();
      setIsCreateModalOpen(false);
      setFormData({ title: "", url: "", description: "", thumbnailUrl: "" });
      setThumbnailFile(null);
      toast.success("Link created successfully!");
    } catch (error) {
      console.error("Create error:", error);
      toast.error("Failed to create link. Please try again.");
    }
  };

  const handleEdit = async () => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key !== "thumbnailUrl") data.append(key, formData[key]);
      });
      if (thumbnailFile) data.append("media", thumbnailFile);

      await API.patch(`/api/link/update/${currentLink.id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setIsEditModalOpen(false);
      refreshAnalytics();
      setThumbnailFile(null);
      toast.success("Link updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update link. Please try again.");
    }
  };


  // Delete link
  const handleDelete = async () => {
    try {
      await API.delete(`/api/link/delete/${currentLink}`);
      setIsDeleteModalOpen(false);
      refreshAnalytics();
      toast.success("Link deleted successfully!");

    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete link. Please try again.");
    }
  };

  // Open edit modal with link data
  const openEditModal = (link) => {
    setCurrentLink(link);

    // console.log("edit model link", link);
    // console.log("current link of update", currentLink);

    setFormData({
      title: link.title,
      url: link.url,
      description: link.description,
      thumbnailUrl: link.thumbnailUrl,
    });

    // console.log(formData);

    setIsEditModalOpen(true);

  };

  // Open delete confirmation modal
  const openDeleteModal = (link) => {
    setCurrentLink(link);
    // console.log("dlt model", link);

    setIsDeleteModalOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">My Links</h1>
        <p className="text-gray-600">Manage all your links in one place.</p>
      </div>

      {/* Responsive Links List */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-xl font-bold text-gray-800">Your Links</h2>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center cursor-pointer whitespace-nowrap"
          >
            <i className="fas fa-plus mr-2"></i>
            Add New Link
          </button>
        </div>

        {/* Links List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-col bg-gray-50 rounded-lg shadow p-4 border border-gray-100"
            >
              <div className="flex items-center mb-3">
                <div className="w-20 h-10 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                  <img
                    src={link.thumbnailUrl}
                    alt={link.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-gray-800 block truncate">
                    {link.title}
                  </span>
                  <span className="text-sm text-gray-600 block truncate">
                    {link.description}
                  </span>
                </div>
              </div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline text-sm mb-2 break-all"
              >
                {link.url}
              </a>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 text-xs">Clicks:</span>
                  <span className="text-gray-800 font-medium">{link.clicks}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`h-6 w-12 rounded-full flex items-center ${link.isVisible ? "bg-indigo-600" : "bg-gray-300"
                      } transition-colors duration-200 cursor-pointer`}
                  >
                    <span
                      className={`h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${link.isVisible ? "translate-x-6" : "translate-x-1"
                        }`}
                    ></span>
                  </div>
                  <button
                    onClick={() => openEditModal(link)}
                    className="p-2 text-gray-600 hover:text-indigo-600 cursor-pointer"
                    title="Edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => openDeleteModal(link.id)}
                    className="p-2 text-gray-600 hover:text-red-600 cursor-pointer"
                    title="Delete"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {links.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-8">
              No links found.
            </div>
          )}
        </div>
      </div>
      {isCreateModalOpen && (
        <LinkModal
          title="Create New Link"
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          onSubmit={handleCreate}
          onClose={() => {
            setIsCreateModalOpen(false)
            setFormData({ title: "", url: "", description: "", media: "" })
          }} />
      )}

      {/* Edit Link Modal */}
      {isEditModalOpen && (
        <LinkModal
          title="Edit Link"
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          onSubmit={handleEdit}
          onClose={() => {
            setIsEditModalOpen(false)
            setFormData({ title: "", url: "", description: "", media: "" })
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Delete Link</h3>
            <p className="mb-6">
              Are you sure you want to delete "{currentLink?.title}"?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LinkModal = ({ title, formData, handleChange, handleFileChange, onSubmit, onClose }) => {

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 border border-indigo-100">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-6">{title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title here!....."
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              URL
            </label>
            <input
              type="url"
              placeholder="URL here!....."

              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description here!....."

              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            <p className={`text-sm mt-1 text-right ${formData.description.length >= 190 ? "text-red-500" : "text-gray-500"}`}>
              {formData.description.length} / 200 characters
            </p>


          </div>


          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {formData.thumbnailUrl && (
              <img
                src={formData.thumbnailUrl}
                alt="Thumbnail Preview"
                className="mt-2 w-32 h-20 object-cover rounded-lg border border-gray-200"
              />
            )}
          </div>



        </div>

        <div className="flex justify-end mt-8 space-x-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );

};

export default LinksDashboard;
