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
                    Madeline Ou graduated Spring 2026 from Barnard College of Columbia University with a degree in Computer Science, specializing in creative technology, fullstack development, and LLMs.
                    Their work centers around making tech more accessible, equitable, and sometimes even whimsical,
                    looking to push and explore the different ways we imagine technology in our lives.
                </p>
                <br></br>
                <p>
                    Previously, Madeline was awarded an HKSTP fellowship, a Hong Kong government program that pairs young international talent with startups. There, Madeline worked for DRESIO, a health-tech startup utilizing computer vision for physical therapy and health checkups. At DRESIO, Madeline architected their front to back end pipeline, from designing their website flow to database structure. Additionally, they designed and prototyped DRESIO’s AI physician chatbot, connecting the LLM to the large medical database in order to provide tailored answers to patients.
                </p>
                <br></br>
                <p>
                    Madeline is currently teaching themselves TouchDesigner and DaVinci Resolve in hopes of
                    creating more cool projects!
                </p>
                <div className="bio-links">
                    <span onClick={toggleContact} className="contact-link">Contact Me</span>
                </div>
            </div>
        </div>
    )
}