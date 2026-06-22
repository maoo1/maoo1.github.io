import { Link } from "react-router-dom";
import "../style/Project.css";

export default function ProjectCard({ preview, name, desc, stack, link, newTab}) {
    return (
        <div className="project-card">
            <div className="project-preview">
                {newTab 
                     ? <a href={link} target="_blank" rel="noopener noreferrer"><img src={preview} alt={name} /></a>
                    : <Link to={link}><img src={preview} alt={name} /></Link>
                }
            </div>
            <div className="project-name">
                <h2>{name}</h2>
            </div>
            <div className="project-desc">
                <p>{desc}</p>
            </div>
            <div className="project-stack">
                {
                    stack.map((item, index) => (<p key={index}>{item}</p>))
                }
            </div>
        </div>
    )
}