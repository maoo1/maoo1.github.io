import { useRef, useEffect } from "react";

import "../style/Project.css";

export default function ProjectVideoCard({ video, name, desc, stack, link}) {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        }, {});
        observer.observe(videoRef.current);
        return () => {
            observer.disconnect();
        }
    }, [])
    return (
        <div className="project-card">
            <div className="project-preview">
                <a href={link}>
                    <video ref={videoRef}src={video} />
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