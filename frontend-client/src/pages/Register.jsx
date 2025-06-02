import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

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

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "username") setUsernameTaken(false);
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setUsernameError(''); // Reset username error
        setGeneralError(''); // Reset general error

        try {
          const res = await axios.post("http://localhost:3000/api/auth/register", {
            ...formData
          });

          console.log("Registered:", res.data);
          navigate("/"); // Redirect on success
        } catch (err) {

            console.log(err);
            console.log("err.reponse", err.response);
            console.log("err.response.data", err.response.data);
            
            
            
          if (err.response && err.response.data) {



            const { message } = err.response.data;
            if (message === "Username already taken") {
              setUsernameError("Username is already taken");
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:3000/api/auth/register", formData);
//       console.log("Registered:", res.data);
//       // Redirect or show success message here

//       navigate("/")

      
//     } catch (err) {
//       if (err.response?.data?.error === "Username already taken") {
//         setUsernameTaken(true);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

return (
  <div className="min-h-screen flex bg-white">
    {/* Left Section - Form */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create your LinkStack</h1>
          <p className="text-gray-500">Connect all your important links in one place.</p>
        </div>

        {/* Error Messages */}
        {usernameError && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
            {usernameError}
          </div>
        )}
        {generalError && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
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
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            required
          />

          <div>
            <input
              type="text"
              name="username"
              placeholder="linkstack.me/username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent ${usernameTaken ? 'border-red-500' : 'border-gray-200'}`}
              required
            />
            {usernameTaken && (
              <p className="text-sm text-red-500 mt-1">Username is already taken.</p>
            )}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3.5 text-sm text-indigo-600 hover:text-indigo-800"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium flex justify-center items-center"
          >
            {loading ? "Creating..." : "Continue"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>

    {/* Right Section - Illustration */}
    <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-700 to-purple-900 items-center justify-center p-12">
      <div className="max-w-md text-center text-white space-y-6">
        <h2 className="text-4xl font-bold">Build your digital identity</h2>
        <p className="text-lg opacity-90">
          Share all your links, social profiles, and more – all in one place.
        </p>
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="LinkStack illustration"
          className="w-full mt-6 rounded-xl shadow-2xl"
        />
      </div>
    </div>
  </div>
);

}
