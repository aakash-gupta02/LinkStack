import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path as needed
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import Background from "../components/laningPageCompo/Background";
import { toast } from "react-toastify";
import API from "../utilits/API";


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
      const res = await API.post("/api/auth/login", {
        ...formData,
      });

      const { token, user } = res.data;

      login(token, user);
      toast.success("Login successful!");

      navigate("/"); // Redirect on success
    } catch (err) {
      setGeneralError("Login failed. Please check your credentials.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0F172A] relative isolate overflow-hidden">
      {/* Cosmic Background Overlay */}
      <Background />

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