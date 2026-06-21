import "../style/Project.css";

export default function ProjectCard({ preview, name, desc, stack, link}) {
    return (
        <div className="project-card">
            <div className="project-preview">
                <a href={link} >
                    <img src={preview} alt={name} />
                </a>
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