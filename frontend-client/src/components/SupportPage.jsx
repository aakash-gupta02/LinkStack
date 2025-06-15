import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

// Predefined support categories
const supportCategories = [
  {
    name: "Account Issues",
    description: "Problems with login, profile updates, or account deletion.",
    faqs: [
      { question: "I can't log in to my account.", answer: "Try resetting your password or check your email for verification." },
      { question: "How do I update my profile?", answer: "Go to your profile settings and edit your details." },
    ],
  },
  {
    name: "Billing",
    description: "Issues with payments, refunds, or subscription plans.",
    faqs: [
      { question: "My payment failed. What should I do?", answer: "Check your payment method and try again, or contact support." },
      { question: "How do I request a refund?", answer: "Submit a refund request through this form with your order details." },
    ],
  },
  {
    name: "Technical Support",
    description: "Bugs, crashes, or performance issues.",
    faqs: [
      { question: "The app keeps crashing.", answer: "Ensure you're using the latest version and clear your cache." },
      { question: "Why is the site slow?", answer: "Check your internet connection or report the issue to us." },
    ],
  },
  {
    name: "Feature Request",
    description: "Suggestions for new features or improvements.",
    faqs: [
      { question: "How do I suggest a new feature?", answer: "Use this form to submit your feature request." },
      { question: "Will my suggestion be implemented?", answer: "We review all suggestions and prioritize based on user demand." },
    ],
  },
  {
    name: "Other",
    description: "Miscellaneous issues not covered by the above categories.",
    faqs: [
      { question: "I have a different issue.", answer: "Please describe your issue in detail using the form." },
    ],
  },
];

const SupportPage = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [ticket, setTicket] = useState({
    category: supportCategories[0].name,
    subject: "",
    description: "",
  });

  const { user: currentUser, token } = useAuth();

  const handleCategorySelect = (category, index) => {
    setActiveCategoryIndex(index);
    setTicket({ ...ticket, category: category.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmitTicket = async () => {
    if (!ticket.subject || !ticket.description) {
      alert("Please fill out all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://linkstack-wjl6.onrender.com/api/support/submit/${currentUser.id}`,
        { ticket },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Support ticket submitted successfully!");
      setTicket({ category: supportCategories[0].name, subject: "", description: "" });
    } catch (error) {
      console.error("Error submitting ticket:", error);
      alert("Failed to submit ticket. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Support Center</h1>
        <p className="text-gray-600">Get help with your LinkStack account.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Support Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportCategories.map((category, index) => (
                <div
                  key={index}
                  className={`border rounded-xl p-4 cursor-pointer transition ${
                    activeCategoryIndex === index
                      ? "border-indigo-600 ring-2 ring-indigo-100"
                      : "border-gray-200 hover:border-indigo-300"
                  }`}
                  onClick={() => handleCategorySelect(category, index)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-800">{category.name}</h3>
                    {activeCategoryIndex === index && (
                      <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="space-y-2">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex}>
                        <p className="text-sm font-medium text-gray-800">{faq.question}</p>
                        <p className="text-xs text-gray-500">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Submit a Support Ticket</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={ticket.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  {supportCategories.map((category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={ticket.subject}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter the subject of your issue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={ticket.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Describe your issue in detail"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleSubmitTicket}
              disabled={isLoading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Ticket"}
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Ticket Preview</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm p-4">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-gray-800">Ticket Details</h3>
                <p className="text-sm text-gray-600">Submitted by: {currentUser?.name || "User"}</p>
                <p className="text-sm text-gray-600">Date: June 08, 2025, 03:30 PM IST</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Category</p>
                  <p className="text-sm text-gray-600">{ticket.category || "Not selected"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Subject</p>
                  <p className="text-sm text-gray-600">{ticket.subject || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Description</p>
                  <p className="text-sm text-gray-600">{ticket.description || "Not provided"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;