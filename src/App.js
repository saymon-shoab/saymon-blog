import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../src/configureAmplify'
import Navbar from "./Components/Navbar";
import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import MyPosts from "./Pages/MyPosts";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";
function App() {
  return (
    <div className=" mx-24">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createPost" element={<CreatePost/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/myPosts" element={<MyPosts/>} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
    </div>
  );
}

export default App