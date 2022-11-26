import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpProvider from "./pages/SignUpProvider";
import SignUpCustomer from "./pages/SignUpCustomer";
import "./App.css";
import CurrentUserProvider from "./context/CurrentUser";
import Profile from "./pages/Profile"

function App() {
  return (
    <CurrentUserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/provider-signup" element={<SignUpProvider />} />
            <Route path="/customer-signup" element={<SignUpCustomer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserProvider>
  );
}

export default App;
