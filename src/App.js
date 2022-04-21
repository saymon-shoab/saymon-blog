import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../src/configureAmplify'
import Navbar from "./Components/Navbar";
import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CreatePost" element={<CreatePost/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App