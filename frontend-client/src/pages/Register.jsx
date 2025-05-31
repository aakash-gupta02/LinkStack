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


// xcxcxccc

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
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-black">Welcome to LinkStack!</h1>
        <p className="text-gray-600 mb-4">Choose your LinkStack username. You can always change it later.</p>


     {usernameError && (
              <p className="text-red-500 text-sm mb-4">{usernameError}</p>
            )}
            {generalError && (
              <p className="text-red-500 text-sm mb-4">{generalError}</p>
            )}

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md bg-gray-100"
            required
          />
          <div>
            <input
              type="text"
              name="username"
              placeholder="linkstack.me/username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md bg-gray-100 ${usernameTaken ? 'border-red-500' : ''}`}
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
            className="w-full px-4 py-2 border rounded-md bg-gray-100"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-sm text-indigo-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            {loading ? "Creating..." : "Continue"}
          </button>
        </form>
      </div>

      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-purple-800 relative">
        {/* Right Side Mockup Preview */}
        <div className="absolute bottom-12 right-12 flex gap-4">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <div className="bg-black w-10 h-10 rounded-full"></div>
        </div>
        <div className="bg-purple-700 p-6 rounded-xl text-white max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-white rounded-full" />
            <span className="text-sm">/superwintendo</span>
          </div>
          <h2 className="text-lg font-bold">Super Wintendo</h2>
          <p className="text-sm mb-4">Streaming every Tuesday</p>
          <button className="bg-purple-600 w-full py-2 mb-2 rounded">Watch now on Twitch</button>
          <button className="bg-purple-600 w-full py-2 mb-2 rounded">Join my Discord</button>
          <button className="bg-purple-600 w-full py-2 rounded">Playlists</button>
        </div>
      </div>
    </div>
  );
}
