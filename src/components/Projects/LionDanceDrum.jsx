import "../../style/Project.css";

export default function LionDanceDrum() {
    return (
        <div className="lion-dance-drum">
            <div className="lion-dance-drum-overview">
                <div className="video-demo">
                    <iframe
                        src="https://www.youtube.com/embed/QHDVeE-Eeis"
                        allowFullScreen
                    />
                </div>
                <div className="project-bio">
                    <div className="project-title">
                        <h1>Lion Dance Drum</h1>
                    </div>
                    <div className="project-context">
                        <p>2026 March, Creative Embedded Systems Project</p>
                        <p>
                            A cardboard lion dance drum that plays upon touch. 
                            The drum mimics playing the center, the rims, and mute 
                            beats. 
                        </p>
                        <div className="project-technicals">
                            <h3>Technical</h3>
                            <p> Built with an ESP32 using the Arduino framework in C+. Copper fabric
                                lines 5 different pads: inner center, outer center, and 3 rims. Using
                                capacitative touch, the signal would be transmitted over WIFI to a Python file, 
                                triggering sounds sampled from a real lion dance drum. Touching the inner or outer pad
                                would play a drum hit. Touching the rims would play a rim hit. Holding the outer pad and 
                                striking the inner pad would play a mute beat - simulating the ream technique
                                of muting the drum. 
                            </p>
                        </div>
                    </div>
                    <div className="project-github">
                        <a href="https://github.com/maoo1/drum-pad">
                            View on Github!
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-tryout">
                <h3>Lion Dance!</h3>
                <div className="lion-dance-video">
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/WvsvkZ1d-ww"
                            allowFullScreen
                        />
                        <p>A great video that showcases center, rim, and mute beats.</p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/jPGlZAi93ms?start=7622&end=8522"
                            allowFullScreen
                        />
                        <p>My lion dance troupe winning 3rd place at the 2024 intercollegiate competition. (p.s I'm in the yellow lion)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}