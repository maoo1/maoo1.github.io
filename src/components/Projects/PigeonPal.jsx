import "../../style/Project.css";

// assets
import Demo1 from "../../assets/pigeon-pal/pigeon-pal-demo-1.gif";
import Demo2 from "../../assets/pigeon-pal/pigeon-pal-demo-2.gif";
import Demo3 from "../../assets/pigeon-pal/pigeon-pal-demo-3.gif";
import PigeonPoop from "../../assets/pigeon-pal/pigeon-pal-pooping.gif";
import PigeonEat from "../../assets/pigeon-pal/pigeon-pal-eating.gif";
import PigeonSleep from "../../assets/pigeon-pal/pigeon-pal-sleeping.gif";
import PigeonWalk from "../../assets/pigeon-pal/pigeon-pal-walking-left.gif";

export default function PigeonPal() {
    return (
        <div className="pigeon-pal">
            <div className="pigeon-pal-overview">
                <div className="video-demo">
                    <iframe
                        src="https://www.youtube.com/embed/6A5m9ziLBVM"
                        allowFullScreen
                    />
                </div>
                <div className="project-bio">
                    <div className="project-title">
                        <h1>Pigeon Pal</h1>
                    </div>
                    <div className="project-context">
                        <p>2024 March, DevFest Hackathon</p>
                        <p>
                            A desktop pigeon pet that frolics around your desktop. You can feed it, 
                            interact with it, as well as many other Easter eggs to explore!
                        </p>
                        <div className="project-technicals">
                            <h3>Technical</h3>
                            <p> Built in Python using Tkinter with custom gif-animations.</p>
                            <h3>Custom Animations</h3>
                            <div className="pigeon-pal-custom-animations">
                                <img src={PigeonEat} alt="pigeon-pal-eating" />
                                <img src={PigeonSleep} alt="pigeon-pal-sleeping" />
                                <img src={PigeonWalk} alt="pigeon-pal-walking" />
                                <img src={PigeonPoop} alt="pigeon-pal-pooping" />
                            </div>
                        </div>
                    </div>
                    <div className="project-github">
                        <a href="https://github.com/yearofglad/pigeon-pal" target="_blank" rel="noopener noreferrer">
                            View on Github!
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-tryout">
                <h3>More Demos!</h3>
                <div className="pigeon-demo-animations">
                    <img src={Demo1} alt="pigeon-pal-demo-1" />
                    <img src={Demo2} alt="pigeon-pal-demo-2" />
                    <img src={Demo3} alt="pigeon-pal-demo-3" />
                </div>
            </div>
        </div>
    )
}