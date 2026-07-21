import {Link} from "react-router-dom";

import "../style/Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <Link to="/">Madeline Ou</Link>
            </div>
            <div className="nav-right">
                <div className="nav-playground">
                    <Link to="/playground">Playground</Link>
                </div>
                <div className="nav-about">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    )
}