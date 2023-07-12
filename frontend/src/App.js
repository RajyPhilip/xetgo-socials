import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import axios from "axios";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
