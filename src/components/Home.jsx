import ProjectCard from "./ProjectCard.jsx";
import ProjectVideoCard from "./ProjectVideoCard.jsx";
import "../style/Home.css";

// images
import Meownet from "../assets/meownet-images/meownet-closeup.jpg";
import PigeonPal from "../assets/pigeon-pal/pigeon-pal.png"
import LionDanceDrum from "../assets/lion-dance-drum/copper-lion-dance-drum.jpg"
import MagicTiles from "../assets/magic-tiles.png";
import ThirstyLions from "../assets/thirsty-lions.png";
import Ahh from "../assets/ahh-cover.PNG";
import MemeProp from "../assets/meme-prop-detector.png";
import TestVideo from "../assets/ahh-installation-video.MOV";

export default function Home() {
    return (
        <div className="container">
            <ProjectCard 
                preview={Meownet}
                name="Meownet the Pachinko Cat"
                desc="Japanese inspired pachinko machine that intervenes when 
                    not enough balls are going to the treat channels."
                stack={["ESP32", "Arduino", "RTLola", "C+"]}
                link="#"
            />
            <ProjectCard 
                preview={MagicTiles}
                name="Magic Tiles"
                desc="A computer vision powered music maker. Tracking hand movements to
                    play different drum and synth beats."
                stack={["Mediapipe", "React", "Web Audio API", "Three.js"]}
                link="#"
            />
            <ProjectCard 
                preview={PigeonPal}
                name="Pigeon Pal"
                desc="An interactive desktop pigeon pal to keep you company!"
                stack={["Python", "Tkinter", "OpenCV", "TensorFlow"]}
                link="#"
            />
            <ProjectCard 
                preview={ThirstyLions}
                name="Thirsty Lions"
                desc="Collaborative project to find the best water fountains on campus. Click to learn more about the 
                    design process!"
                stack={["Figma", "React", "Firebase" ]}
                link="#"
            />
            <ProjectCard 
                preview={LionDanceDrum}
                name="Lion Dance Drum"
                desc="A cardboard drum that mimics a real life lion dance drum via. capacitative touch."
                stack={["ESP32", "Arduino", "Python", "C+"]}
                link="#"
            />
            <ProjectCard 
                preview={MemeProp}
                name="Meme Propaganda Detector"
                desc="A mult-classification model to identify different propaganda techniques in memes, 
                    achieving an F1 score of 0.46."
                stack={["Python", "PyTorch", "NumPy", "" ]}
                link="#"
            />
        </div>
    )
}