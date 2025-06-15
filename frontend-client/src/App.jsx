import React from "react";
import { Route, Routes } from "react-router-dom";

import Home2 from "./pages/Home2";
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
        <Route path="/" element={<Home2 />} />

        {/* Protected route */}
        <Route
          path="/link/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route */}
        <Route path="/:username" element={<Link2 />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
