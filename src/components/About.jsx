import "../style/About.css";

import Headshot from "../assets/grad_photo_pfp.jpg";

export default function About({ toggleContact }) {
    return (
        <div className="about">
            <div className="headshot">
                <img 
                    src={Headshot}
                    alt="Photo of me!"
                />
            </div>
            <div className="bio">
                <p> 
                    Madeline Ou is TBD.
                </p>
                <div className="bio-links">
                    <span onClick={toggleContact} className="contact-link">Contact Me</span>
                </div>
            </div>
        </div>
    )
}