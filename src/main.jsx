import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Portfolio from "./App.jsx";
import HeartBlog from "./heart-blog.jsx";
import AhhBlog from "./ahh-blog.jsx";
import DrumBlog from "./drum-blog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog/heart-heart" element={<HeartBlog />} />
        <Route path="/blog/ahh" element={<AhhBlog />} />
        <Route path="/blog/drum-pad" element={<rDumBlog />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
