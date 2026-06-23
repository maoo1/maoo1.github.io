import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// components
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Playground from "./components/Playground.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

// specific projects
import Meownet from "./components/Projects/Meownet.jsx";
import MagicTiles from "./components/Projects/MagicTiles.jsx";
import PigeonPal from "./components/Projects/PigeonPal.jsx";
import ThirstyLions from "./components/Projects/ThirstyLions.jsx";
import LionDanceDrum from "./components/Projects/LionDanceDrum.jsx";

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
            /* specific project routes */
            <Route path="/projects/meownet" element={<Meownet />} />
            <Route path="/projects/magic-tiles" element={<MagicTiles />} />
            <Route path="/projects/pigeon-pal" element={<PigeonPal />} />
            <Route path="/projects/thirsty-lions" element={<ThirstyLions />} />
            <Route path="/projects/lion-dance-drum" element={<LionDanceDrum />} />
          </Routes>
        </div>
        {isOpen && <Contact toggleContact={toggleContact} />}
        <Footer toggleContact={toggleContact} />
      </div>
    </HashRouter>
  );
}