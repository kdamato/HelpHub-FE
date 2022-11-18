import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import LoginCustomer from "./pages/LoginCustomer"
import LoginProvider from "./pages/LoginProvider"
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <Home />
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route path="/customer-login" element={<LoginCustomer />} />
          <Route
            path="/customer-login"
            element={
              <LoginCustomer />
            }
          />
          <Route
            path="/provider-login"
            element={
              <LoginProvider />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
