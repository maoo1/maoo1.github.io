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
                <iframe src={src} />
            </div>
            <div className="playground-card-desc">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export { PlaygroundCardImage, PlaygroundCardIFrame };



