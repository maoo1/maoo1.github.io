import { PlaygroundCardImage, PlaygroundCardIFrame, PlaygroundCardVideo } from "../components/PlaygroundCard.jsx";

import "../style/Playground.css";

// images
import Feet from "../assets/misc-hardware/pair-of-feet.png";
import Feet2 from "../assets/misc-hardware/pair-of-feet-closeup.JPEG";
import Heart from "../assets/misc-hardware/heart-pendant-led.JPEG";
import HeartSchematic from "../assets/misc-hardware/heart-pendant-schematic.png";

// videos
import ScreamVideo from "../assets/ahh/ahh-video.mp4";



export default function Playground() {
    return (
        <div className="playground">
            <div className="header">
                <p>Welcome to my playground! Here's an assortment of various projects and ideas I've been working on!
                Some are complete while others are still in the works, but I'd like to share them all!</p>
            </div>
            <div className="playground-grid">
                <div className="playground-item">
                    <PlaygroundCardVideo
                        video={ScreamVideo}
                        desc="Scream in a Box - emotions through a generative scream at 60 FPS."
                    />
                </div>
                <div className="playground-item">
                    <PlaygroundCardIFrame
                        src="https://maoo1.github.io/keyboard-cat/"
                        desc="Try typing with the first and third row of the keyboard. Project I did
                            to learn about web audio, from ADSR envelopes to different frequency synthesis."
                    />
                </div>
                <div className="playground-item">
                    <PlaygroundCardImage
                        image={Feet}
                        caption="A Soldering sculpture"
                        desc="My first time soldering! Bent wire through a board
                            to mimic a pair of flipflops for a solder sculpture."
                    />  
                </div>
                <div className="playground-item">
                    <PlaygroundCardImage
                        image={Feet2}
                        caption="Close up of the soldering"
                        desc="A close up of the soldering."
                    />  
                </div>
                <div className="playground-item">
                    <PlaygroundCardImage
                        image={Heart}
                        caption="Heart LED circuit"
                        desc="A heart-shaped battery powered LED circuit. PCB board milled and soldered."
                    />  
                </div>
                <div className="playground-item">
                    <PlaygroundCardImage
                        image={HeartSchematic}
                        caption="Heart LED circuit Schedmatic"
                        desc="The schematic mocked up on KiCad, with the circuitry attempting to also mimic
                            a heart."
                    />  
                </div>
            </div>
        </div>
    )
}