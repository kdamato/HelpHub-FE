import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import Login from "./pages/Login"
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
