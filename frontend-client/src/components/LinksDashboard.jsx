import React, { useState } from "react";
import { useAnalytics } from "../context/AnalyticsContext";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const LinksDashboard = () => {
  const { links, rawData, fetchData, refreshAnalytics } = useAnalytics();

  const { token } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [currentLink, setCurrentLink] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    thumbnailUrl: "",
  });

  // Handle form input changes
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
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



  // Create new link
  const handleCreate = async () => {
    try {
      await axios.post("https://linkstack-wjl6.onrender.com/api/link/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // fetchData(); // Refresh links
        refreshAnalytics();

      setIsCreateModalOpen(false);
      setFormData({ title: "", url: "", description: "", thumbnailUrl: "" });
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  // Edit link
  const handleEdit = async () => {
    try {
      await axios.patch(
        `https://linkstack-wjl6.onrender.com/api/link/update/${currentLink.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // fetchData(); // Refresh links

      setIsEditModalOpen(false);
        refreshAnalytics();

    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // Delete link
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://linkstack-wjl6.onrender.com/api/link/delete/${currentLink}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log("cureent link", currentLink);

      // fetchData(); // Refresh links
      setIsDeleteModalOpen(false);
        refreshAnalytics();

    } catch (error) {
      console.error("Delete error:", error);
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

      {/* Links Table */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Your Links</h2>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center cursor-pointer whitespace-nowrap"
          >
            <i className="fas fa-plus mr-2"></i>
            Add New Link
          </button>
        </div>

        {/* Links Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table Headers */}
            <thead>
              <tr>
                {["Title", "URL", "Clicks", "Status", "Actions"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {links.map((link) => (
                <tr key={link.id}>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-20 h-10 rounded-lg overflow-hidden bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                        {/* <i className="fas fa-link"></i> */}
                        <img src={link.thumbnailUrl} alt={link.title} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">
                          {link.title}
                        </span>

                        <span className="text-sm text-gray-600">
                          {link.description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600"
                    >
                      {link.url}
                    </a>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-gray-800 font-medium">
                      {link.clicks}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className={`h-6 w-12 rounded-full flex items-center ${
                          link.isVisible ? "bg-indigo-600" : "bg-gray-300"
                        } transition-colors duration-200 cursor-pointer`}
                      >
                        <span
                          className={`h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${
                            link.isVisible ? "translate-x-6" : "translate-x-1"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditModal(link)}
                        className="p-2 text-gray-600 hover:text-indigo-600 cursor-pointer"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => openDeleteModal(link.id)}
                        className="p-2 text-gray-600 hover:text-red-600 cursor-pointer"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Link Modal */}
      {isCreateModalOpen && (
        <LinkModal
          title="Create New Link"
          formData={formData}
          handleChange={handleChange}
          onSubmit={handleCreate}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}

      {/* Edit Link Modal */}
      {isEditModalOpen && (
        <LinkModal
          title="Edit Link"
          formData={formData}
          handleChange={handleChange}
          onSubmit={handleEdit}
          onClose={() => setIsEditModalOpen(false)}
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

const LinkModal = ({ title, formData, handleChange, onSubmit, onClose }) => {

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
            Thumbnail URL
          </label>
          <input
            type="url"
            name="thumbnailUrl"
            placeholder="Thumbnail URL here!....."

            value={formData.thumbnailUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
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
