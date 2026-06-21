import { PlaygroundCardImage, PlaygroundCardIFrame } from "../components/PlaygroundCard.jsx";

import "../style/Playground.css";

// images
import Feet from "../assets/misc-hardware/pair-of-feet.png";
import Feet2 from "../assets/misc-hardware/pair-of-feet-closeup.JPEG";
import Heart from "../assets/misc-hardware/heart-pendant-led.JPEG";
import HeartSchematic from "../assets/misc-hardware/heart-pendant-schematic.png";



export default function Playground() {
    return (
        <div className="playground">
            <div className="header">
                <p>Welcome to my playground! Here's an assortment of various projects and ideas I've been working on!
                Some are complete while others are still in the works, but I'd like to share them all!</p>
            </div>
            <div className="playground-grid">
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