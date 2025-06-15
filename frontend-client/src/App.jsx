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
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {

return (
  <div>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={<Home2/>} />
      <Route path="*" element={<NotFoundPage/>}/>

      <Route
        path="/link/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/:username" element={<Link2/>} />

      {/* <Route path="/:username" element={<ProfilePage />} /> */}
    </Routes>
  </div>
);

}

export default App;
