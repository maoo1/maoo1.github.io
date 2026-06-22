import "../../style/project-styles/Meownet.css";

import MeownetMisc from "../../assets/meownet-images/meownet-3D-prints.jpg";
import MeownetChannels from "../../assets/meownet-images/meownet-copper-channels.jpg";
import MeownetEye from "../../assets/meownet-images/meownet-eye.JPEG";
import MeownetMotors from "../../assets/meownet-images/meownet-motors-and-wires.JPG";
import MeownetWiring from "../../assets/meownet-images/meownet-back-wiring.jpg";
export default function Meownet() {
    return (
        <div className="meownet">
            <div className="meownet-overview">
                <div className="video-demo">
                    <iframe
                        src="https://www.youtube.com/embed/wQ-lHXyv-WM"
                        allowFullScreen
                    />
                </div>
                <div className="project-bio">
                    <div className="project-title">
                        <h1>Meownet the Pachinko Cat</h1>
                    </div>
                    <div className="project-context">
                        <p>2026 May, Creative Embedded Systems Final</p>
                        <p>
                            Inspired by Japanese pachinko machines, Meownet is a cat-shaped pachinko machine 
                            that uses live run-time monitoring via. RTLola and ESP-NOW communication to actively control the game. 
                            The balls can fall into 5 different channels -- 3 channels are "treats" and 2 channels are "poison," with them 
                            corresponding to positive and negative points respectively. When the run-time monitoring detects that the distribution
                            of balls is unfavorable, Meownet will intervene by activating the stepper motors to redirect the balls towards
                            the treat channels; thus, Meownet is smart cat that will always be fed and will always win!
                        </p>
                        <div className="project-github">
                            <a href="https://github.com/mimansakant/meownet" target="_blank" rel="noopener noreferrer">
                                View on Github!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-technicals">
                <div className="technical-section">
                    <h3>System Architecture</h3>
                    <p>Meownet is composed of 3 different ESP32 nodes, communicating over ESP-NOW:

                        1. Ball Collector: Reads the 5 separate channels at the bottom of the board and 
                        counts each ball that passes, broadcasting the distribution data.

                        2. Motor Controllers: Receive the distribution data updates and controls the stepper motors 
                        to swing the deflection arms when triggered.

                        3. Cat Eye Display: An ESP32 in a cutout of Meownet's face running an animated cat eye
                        independently on battery power. 
                    </p>
                </div>
                <div className="technical-section">
                    <h3>Ball Detection</h3>
                    <p> 
                        For ball detection, copper tape was placed onto each channel of the 3D printed
                        ball collector with a small gap inbetween. When a metal ball rolled through, it completed the 
                        circuit wiring by bridging the gap into the copper strips. This happens because
                        one copper strip was connected to 3.3V through a pull-up resistor while the other goes to 
                        a digital input on the ESP32. As a result, when a ball closes the circuit, the ESP32 sees a "High" to "Low"
                        transition that signals a ball has passed. 
                    </p>
                    <p>
                        Each channel triggers an interrupt on the ball counter ESP32, which increments a per-channel count and a
                        rolling history. Debouncing was done in software to ensure that a single ball wasn't double counted.
                    </p>
                    <div className="technical-image-grid">
                        <figure>
                            <img src={MeownetChannels} alt="Ball Collector Copper Channels"></img>
                            <figcaption>Ball collector channels, two copper strips on each side</figcaption>
                        </figure>
                        <figure>
                            <img src={MeownetWiring} alt="Back Wiring"></img>
                            <figcaption>Wiring on the back of the ball collector</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="technical-section">
                    <h3>RTLola Run-Time Monitoring</h3>
                    <p> 
                        The ESP32s all communicate via. ESP-NOW, where the ball collector ESP32 would broadcast messages
                        to the stepper motor ESP32s to trigger a change. However, if messages were broadcasted everytime 
                        a ball was received, the ESP32s would be flooded with information; thus, RTLola was used to write
                        a runtime monitoring specification that watched for specific count variables and only triggered when 
                        meaningful inflection points occured. For example, if two balls rolled into both "poison" channels at the same
                        time, a message would be broadcasted telling the motors to move. 
                    </p>
                    <iframe
                        src="https://www.youtube.com/embed/rHKe-5PzoEk"
                        allowFullScreem
                    />
                    <p className="video-caption">Demo of motors moving when triggered</p>
                </div>
                <div className="technical-section">
                    <h3> Cat Eye </h3>
                    <p>
                        The cat eye was hosted on a LilyGO T0Display: a tiny ESP32 dev board with a 1.14" ST7789 color TFT built in, run 
                        entirely independent on its own battery. The eye was drawn using TFT_eSPI, where the pupil would drift
                        to new random positions every couple seconds and blink. 
                    </p>
                    <div className="technical-image-grid">
                        <figure>
                            <img src={MeownetEye} alt="Cat Eye"></img>
                            <figcaption>Cat Eye</figcaption>
                        </figure>
                        <figure>
                            <img src={MeownetMisc} alt="Misc"></img>
                            <figcaption>Misc 3D printed cats</figcaption>
                        </figure>
                    </div>
                </div>
            </div>   
        </div>
    )
}