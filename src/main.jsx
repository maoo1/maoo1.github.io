import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Portfolio from "./App.jsx";
import HeartBlog from "./heart-blog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog/heart-heart" element={<HeartBlog />} />
        <Rout path="/blog/ahh" element={<AhhBlog />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
