import React from "react";
import ColorSchemesExample from "./components/navbar";
import Video1 from "./components/mahkaleeshwara";
import Video2 from "./components/goldentemple";
import Video3 from "./components/chennakeshava";
import Video4 from "./components/tirupati";
import Video5 from "./components/1000pillars";
import Video6 from "./components/Badrinath";

import { Routes, Route } from "react-router-dom";
import DarkVariantExample from "./pages/homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BasicExample from "./pages/Welcome";
import Otp from "./pages/otp";

function App() {
  return (
    <>
      <ColorSchemesExample />
      <Routes>
        <Route path="/" element={<DarkVariantExample />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Welcome" element={<BasicExample />} />
        <Route path="/Video1" element={<Video1 />} />
        <Route path="/Video2" element={<Video2 />} />
        <Route path="/Video3" element={<Video3 />} />
        <Route path="/Video4" element={<Video4 />} />
        <Route path="/Video5" element={<Video5 />} />
        <Route path="/Video6" element={<Video6 />} />
      </Routes>
    </>
  );
}

export default App;
