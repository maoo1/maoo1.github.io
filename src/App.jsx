import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// components
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Playground from "./components/Playground.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleContact = () => setIsOpen(!isOpen);

  return (
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About toggleContact={toggleContact} />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </div>
        {isOpen && <Contact toggleContact={toggleContact} />}
        <Footer toggleContact={toggleContact} />
      </div>
    </HashRouter>
  );
}