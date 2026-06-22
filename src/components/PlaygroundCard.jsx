import { useRef, useEffect } from "react";

import "../style/Playground.css";

function PlaygroundCardImage({image, caption, desc}) {
    return (
        <div className="playground-card">
            <div className="playground-card-image">
                <img src={image} alt={caption} />
            </div>
            <div className="playground-card-desc">
                <p>{desc}</p>
            </div>
        </div>
    )
}

function PlaygroundCardIFrame({ src, desc }) {
    return (
        <div className="playground-card">
            <div className="playground-card-iframe">
                <iframe 
                    src={src} 
                />
            </div>
            <div className="playground-card-desc">
                <p>{desc}</p>
            </div>
        </div>
    )
}

function PlaygroundCardVideo({ video, desc}) {
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
        <div className="playground-card">
            <div className="playground-card-video">
               <video 
                    ref={videoRef} 
                    src={video} 
                    muted loop
                />       
            </div>
            <div className="playground-card-desc">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export { PlaygroundCardImage, PlaygroundCardIFrame, PlaygroundCardVideo };



