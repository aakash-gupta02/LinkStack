import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "username") setUsernameTaken(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUsernameError('');
    setGeneralError('');

    try {
      const res = await axios.post("https://linkstack-wjl6.onrender.com/api/auth/register", {
        ...formData
      });

      // console.log("Registered:", res.data);
      navigate("/"); // Redirect on success
    } catch (err) {
      console.log(err);
      console.log("err.reponse", err.response);
      console.log("err.response.data", err.response.data);
      
      if (err.response && err.response.data) {
        const { message } = err.response.data;
        if (message === "Username already taken") {
          setUsernameError("Username is already taken");
          setUsernameTaken(true);
        } else if (message === "Email already in use") {
          setGeneralError("Email is already in use");
        } else if (message === "All fields are required") {
          setGeneralError("Please fill in all required fields");
        } else {
          setGeneralError(message || "An error occurred during registration");
        }
      } else {
        setGeneralError("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0F172A] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Cosmic Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-indigo-500 blur-xl opacity-40"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Form Section */}
      <div className="w-full max-w-md space-y-6 bg-indigo-900/50 border border-indigo-500/30 rounded-xl p-8 backdrop-blur-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-indigo-100">Create your LinkStack</h1>
          <p className="text-indigo-200 mt-2">Connect all your important links in one place.</p>
        </div>

        {/* Error Messages */}
        {usernameError && (
          <div className="p-3 bg-red-500/20 text-red-400 text-sm rounded-lg">
            {usernameError}
          </div>
        )}
        {generalError && (
          <div className="p-3 bg-red-500/20 text-red-400 text-sm rounded-lg">
            {generalError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg bg-indigo-800/50 text-indigo-100 placeholder-indigo-300/50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
            required
          />

          <div>
            <input
              type="text"
              name="username"
              placeholder="linkstack.me/username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-indigo-800/50 text-indigo-100 placeholder-indigo-300/50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all ${usernameTaken ? 'border-red-400' : 'border-indigo-500/30'}`}
              required
            />
            {usernameTaken && (
              <p className="text-sm text-red-400 mt-1">Username is already taken.</p>
            )}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg bg-indigo-800/50 text-indigo-100 placeholder-indigo-300/50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg bg-indigo-800/50 text-indigo-100 placeholder-indigo-300/50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 text-indigo-100 rounded-lg hover:bg-indigo-500 transition-all font-medium flex justify-center items-center"
          >
            {loading ? (
              <>
                <ArrowPathIcon className="animate-spin -ml-1 mr-2 h-4 w-4 text-indigo-100" />
                Creating...
              </>
            ) : (
              "Continue"
            )}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-indigo-200">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}