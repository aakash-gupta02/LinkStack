import React from "react";
import { Route, Routes } from "react-router-dom";

import Home2 from "./pages/Home2";
import RegisterPage from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute"; 
import Link2 from "./pages/Link2";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

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
