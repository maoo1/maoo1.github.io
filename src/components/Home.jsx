import ProjectCard from "./ProjectCard.jsx";
import ProjectVideoCard from "./ProjectVideoCard.jsx";
import "../style/Home.css";

// images
import Meownet from "../assets/meownet-images/meownet-closeup.jpg";
import PigeonPal from "../assets/pigeon-pal/pigeon-pal.png"
import LionDanceDrum from "../assets/lion-dance-drum/copper-lion-dance-drum.jpg"
import MagicTiles from "../assets/magic-tiles.png";
import ThirstyLions from "../assets/thirsty-lions.png";
// import Ahh from "../assets/ahh-cover.PNG";
import MemeProp from "../assets/meme-prop-detector.png";
import MemePropPDF from "../assets/meme-prop-detector-report.pdf";

export default function Home() {
    return (
        <div className="container">
            <ProjectCard 
                preview={Meownet}
                name="Meownet the Pachinko Cat"
                desc="Japanese inspired pachinko machine that intervenes when 
                    not enough balls are going to the treat channels."
                stack={["ESP32", "Arduino", "RTLola", "C+"]}
                link="/projects/meownet"
            />
            <ProjectCard 
                preview={MagicTiles}
                name="Magic Tiles"
                desc="A computer vision powered music maker."
                stack={["Mediapipe", "React", "Web Audio API", "Three.js"]}
                link="/projects/magic-tiles"
            />
            <ProjectCard 
                preview={PigeonPal}
                name="Pigeon Pal"
                desc="An interactive desktop pigeon pal to keep you company!"
                stack={["Python", "Tkinter"]}
                link="/projects/pigeon-pal"
            />
            <ProjectCard 
                preview={ThirstyLions}
                name="Thirsty Lions"
                desc="Collaborative project to find the best water fountains on campus. Click to learn more about the 
                    design process!"
                stack={["Figma", "React", "Firebase" ]}
                link="/projects/thirsty-lions"
            />
            <ProjectCard 
                preview={LionDanceDrum}
                name="Lion Dance Drum"
                desc="A cardboard drum that mimics a real life lion dance drum via. capacitative touch."
                stack={["ESP32", "Arduino", "Python", "C+"]}
                link="/projects/lion-dance-drum"
            />
            <ProjectCard 
                preview={MemeProp}
                name="Meme Propaganda Detector"
                desc="A multi-classification model to identify different propaganda techniques in memes."
                stack={["Python", "PyTorch", "NumPy"]}
                link={MemePropPDF}
                newTab={true}
            />
        </div>
    )
}