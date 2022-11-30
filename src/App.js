import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyJobs from "./pages/MyJobs";
import Jobs from "./pages/Jobs";
import "./App.css";
import SignUp from "./pages/SignUp";
import CurrentUserProvider from "./context/CurrentUser";
import Profile from "./pages/Profile";
import NewJobForm from "./pages/NewJobForm";

function App() {
  
  return (
    <CurrentUserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/searchjobs" element={<Jobs />} />
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/newjob" element={<NewJobForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserProvider>
  );
}

export default App;
