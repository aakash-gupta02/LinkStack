import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path as needed
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("https://linkstack-wjl6.onrender.com/api/auth/login", {
        ...formData,
      });

      // console.log("login:", res.data);

      const { token, user } = res.data; // e.g., { token: '...', user: {...} }

      login(token, user);

      // console.log("apna wala console log :", { token, user });

      navigate("/"); // Redirect on success
    } catch (err) {
      console.log(err);
      console.log("err.reponse", err.response);
      console.log("err.response.data", err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0F172A] relative overflow-hidden">
      {/* Cosmic Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
      {/* Floating Orbs */}

      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-indigo-500 blur-xl opacity-40"
          style={{
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Left Side: Login Form */}
      <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md space-y-6 bg-indigo-900/50 border border-indigo-500/30 rounded-xl p-8 backdrop-blur-sm">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2 text-indigo-100">
              Welcome back to LinkStack
            </h1>
            <p className="text-indigo-200">Login to access your dashboard.</p>
          </div>

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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-indigo-500/30 rounded-lg bg-indigo-800/50 text-indigo-100 placeholder-indigo-300/50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                required
              />
            </div>

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
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>

            <p className="text-center text-sm text-indigo-200">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-white font-medium hover:text-indigo-300 transition-colors"
              >
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>


    </div>
  );
}