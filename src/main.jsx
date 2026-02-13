import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./App.jsx";
import HeartBlog from "./heart-blog.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog/heart-heart" element={<HeartBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
