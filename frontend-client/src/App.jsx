import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/NavBar";
import Home from "./pages/HomePage";
import RegisterPage from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  
  return (
    <div>
      {/* <Navbar/> */}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<RegisterPage/>} /> 
        <Route path="/login" element={<Login/>}  />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
