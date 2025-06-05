import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/NavBar";
import Home from "./pages/HomePage";
import Home2 from "./pages/Home2"
import RegisterPage from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Adjust path accordingly
import Link2 from "./pages/Link2";

const App = () => {

return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home2" element={<Home2/>} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/link2/:username" element={<Link2/>} />

      <Route path="/:username" element={<ProfilePage />} />
    </Routes>
  </div>
);

}

export default App;
