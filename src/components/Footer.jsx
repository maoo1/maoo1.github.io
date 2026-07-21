import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState } from 'react';

import "../style/Footer.css";

export default function Footer({ toggleContact }) {
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="https://github.com/maoo1" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="www.linkedin.com/in/madeline-ou" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
                <MdMailOutline 
                    onClick={toggleContact}
                />
            </div>
        </footer>
    )
}