import "../../style/project-styles/ThirstyLions.css";

//images
import Interview1 from "../../assets/thirsty-lions/contextual-inquiry/contextual-inequiry1.png";
import Interview2 from "../../assets/thirsty-lions/contextual-inquiry/contextual-inequiry2.png";
import Problem1 from "../../assets/thirsty-lions/affinity-diagram/problem1.png";
import Problem2 from "../../assets/thirsty-lions/affinity-diagram/problem2.png";
import Problem3 from "../../assets/thirsty-lions/affinity-diagram/problem3.png";
import JourneyMap from "../../assets/thirsty-lions/storyboards/journey-map.png";
import Story1 from "../../assets/thirsty-lions/storyboards/story1.png";
import Story2 from "../../assets/thirsty-lions/storyboards/story2.png";
import Story3 from "../../assets/thirsty-lions/storyboards/story3.png";
import Story4 from "../../assets/thirsty-lions/storyboards/story4.png";
import Spreadsheet from "../../assets/thirsty-lions/checkpoint3/spreadsheet.png";
import Poster1 from "../../assets/thirsty-lions/checkpoint3/poster1.png";
import Poster2 from "../../assets/thirsty-lions/checkpoint3/poster2.png";
import Poster3 from "../../assets/thirsty-lions/checkpoint3/poster3.png";
import LofiFountain from "../../assets/thirsty-lions/low-fidelity/lo-fi-fountain.png";
import LofiFountains from "../../assets/thirsty-lions/low-fidelity/lo-fi-fountains.png";
import LofiHome from "../../assets/thirsty-lions/low-fidelity/lo-fi-home.png";
import LofiMap from "../../assets/thirsty-lions/low-fidelity/lo-fi-map.png";
import LofiRanking from "../../assets/thirsty-lions/low-fidelity/lo-fi-ranking.png";
import HifiFountain from "../../assets/thirsty-lions/high-fidelity/hi-fi-fountain.png";
import HifiFountains from "../../assets/thirsty-lions/high-fidelity/hi-fi-fountains.png";
import HifiHome from "../../assets/thirsty-lions/high-fidelity/hi-fi-home.png";
import HifiMap from "../../assets/thirsty-lions/high-fidelity/hi-fi-map.png";
import HifiRanking from "../../assets/thirsty-lions/high-fidelity/hi-fi-ranking.png";

export default function ThirstyLions() {
    return (
        <div className="thirsty-lions">
            <div className="thirsty-lions-overview">
                <div className="video-demo">
                    <iframe
                        src="https://www.youtube.com/embed/w2c-_dtpWic"
                        allowFullScreen
                    />
                </div>
                <div className="project-bio">
                    <div className="project-title">
                        <h1>Thirsty Lions</h1>
                    </div>
                    <div className="project-context">
                        <p> 2025 November, UI/UX Design Final</p>
                        <p>
                            For this project, we were challeneged to find a real problem on campus.
                            Thirsty Lions is the result of many iterations through the design cycle, hoping
                            to make the real problem of finding water on campus easier via. real-time information
                            about the status of water fountains!
                        </p>
                        <p>
                            Continue below to find out more about the design process!
                        </p>
                    </div>
                    <div className="project-github">
                        <a href="https://github.com/jadynprk/thirstylion" target="_blank" rel="noopener noreferrer">
                            View on Github!
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-technicals">
                <div className="technical-section">
                    <h3>Step 1: Building for the Problem</h3>
                    <p>
                        After lots of brainstorming, we decided that the problem we wanted to tackle was
                        the difficulty of finding solid water fountains on campus, making it hard to drink water. 
                        However, we wanted to make sure that this was actually a problem, and we weren't just coming up 
                        with a needless "solution." 
                    </p>
                    <h4> Contextual Inquiry & Affinity Diagram </h4>
                    <p>
                        In order to do so, we first shadow and then interview students on campus to see what exactly with water fountains
                        was making it so tricky to drink water. 
                    </p>
                    <div className="technical-image-grid">
                        <img src={Interview1} alt="Interview 1"></img>
                        <img src={Interview2} alt="Interview 2"></img>
                    </div>
                    <p>
                        As a result, we were able to better understand the student population and refine our
                        understanding of the specifics of the water fountain problem. With these interviews and notes, 
                        we synthesized and summarized the problem into 3 main sections: reliable and accessible water fountains, 
                        clean, good-tasting water, and quick communication with maintenance. 
                    </p>
                    <div className="technical-image-grid">
                        <img src={Problem1} alt="Reliable and accessible water fountains"></img>
                        <img src={Problem2} alt="Clean and good tasting water"></img>
                        <img src={Problem3} alt="Quick maintenance"></img>
                    </div>
                    <h4>Journey Map & Storyboarding</h4>
                    <p>
                        With out better understanding of the problem, we created a journey map to 
                        help visualize the user's experience from start to finish, highlighting key interactions and
                        pain points that we wanted to facilitate and address in Thirsty Lions. 
                    </p>
                    <img src={JourneyMap} alt="Journey Map"></img>
                    <p>
                        With all this information in mind, storyboards were created in order to 
                        brainstorm solutions to the problem of faulty water fountains. Each storyboard
                        represented a unique solution in which Thirsty Lions would potentially manifest as, allowing
                        us to explore a wide range of different solutions. 
                    </p>
                    <div className="technical-img-grid">
                        <figure>
                            <img src={Story1} alt="Story 1"></img>
                        <figcaption>Sending a message to facilities to fix the water fountain</figcaption>
                        </figure>
                        <figure>
                            <img src={Story2} alt="Story 2"></img>
                            <figcaption>Reroute users to a nearby functioning water fountain</figcaption>
                        </figure>
                        <figure>
                            <img src={Story3} alt="Story 3"></img>
                            <figcaption>Before going to a water fountain, Thirsty Lions automatically directs you to a nearby functioning one</figcaption>
                        </figure>
                        <figure>
                            <img src={Story4} alt="Story 4"></img>
                            <figcaption>App automatically notifies user when a fountain is broken</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="technical-section">
                    <h3>Step 2: Mocking it Up - Prototyping, Low-Fidelity Designs, & Figma</h3>
                    <h4>Smoke and Mirrors Prototyping</h4>
                    <p>
                        The solution we decided to go with was a platform where users can 
                        rate water fountains, as well as look at other people's ratings. Additionally, from the
                        earlier sleuthing, we decided that people really cared about water dispensing speed and filtration
                        status - making these 2 factors the core categories that users would rank. 
                    </p>
                    <p>
                        However, we didn't want to rush into building the platform in case we would need to pivot later or incorporate 
                        more feedback, so we decided to do a smoke-and-mirrors prototype: a version of Thirsty Lions that didn't require any
                        code. In order to do so, we made a Google form that asked 4 questions: which water fountain they were at, rate the water
                        flow of the water fountain 1-5, the filter status of the water fountain, and if recommended another
                        better water fountain, would they go? This Google form was made to simulate what rating the water fountains in the potential platform 
                        would look like, as well as evaluating if user's would actually engage. Additionally, we created a spreadsheet that tracked all the
                        data, updating in realtime what the average ranking and filter status of a water fountain, allowing users to find a better water fountain 
                        if they chose to do so. 
                    </p>
                    <figure>
                        <img src={Spreadsheet} alt="Spreadsheet"></img>
                        <figcaption>The spreadsheet user's would see</figcaption>
                    </figure>
                    <p>
                        Next, we made posters with QR code links to the google form and a link to the spreadsheet. Additionally, because it was a 
                        prototype, we chose to only choose one building on campus, making the scope a lot more managable, and we also went ahead and
                        ranked all the water fountains in the building ourselves to create initial rankings that user's could see. We hung these posters
                        above every water fountain in the building and waited for the results to come in.
                    </p>
                    <div className="technical-img-poster">
                        <figure>
                            <img src={Poster1}></img>
                            <img src={Poster2}></img>
                            <img src={Poster3}></img>
                        </figure>
                        <p className="poster-caption">Some beautiful, eye-catching posters we put up in Butler Library</p>
                    </div>
                    <p>
                        The QR codes were a massive success, with 51 results. Out of these results, 41/56 people said
                        they would go to another water fountain if recommended, meaning that people would
                        actually use Thirsty Lions is further developed. Additionally, we discovered that although some water fountains
                        had a green filter status, it didn't mean the water pressure was good, and that some fountains didn't even have filter
                        lights to begin with. This allowed us to further revise. 
                    </p>
                    <h4>Low-Fidelity & High-Fidelity Prototyping</h4>
                    <p>
                        Given that Thirsty Lions proof of concept was affirmed, we moved onto creating
                        a low-fidelity prototype to cover all the basic buttons, features, and functionality we
                        wanted our platform to have. We settled on including a home page with all buildings on campus, 
                        all the fountains in a building, a page with the specific rankings and qualities of an individual fountain, 
                        a ranking page where users can input their own feedback, and an overall map that provided
                        a visual for where the water fountains were in the building. All the mockups were done in Figma.
                    </p>
                    <div className="technical-img-mockups">
                        <figure>
                            <img src={LofiHome} alt="Low fidelity home page"></img>
                            <figcaption>Home page</figcaption>
                        </figure>
                        <figure>
                            <img src={LofiFountains} alt="Low fidelity all fountains in the building"></img>
                            <figcaption>All fountains in a building</figcaption>
                        </figure>
                        <figure>
                            <img src={LofiFountain} alt="Low fidelity individual Fountain"></img>
                            <figcaption>Individual fountain</figcaption>
                        </figure>
                        <figure>
                            <img src={LofiRanking} alt="Low fidelity fountain ranking page"></img>
                            <figcaption>Fountain ranking</figcaption>
                        </figure>
                        <figure>
                            <img src={LofiMap} alt="Low fidelity map"></img>
                            <figcaption>Map of all fountains in a building</figcaption>
                        </figure>
                    </div>
                    <p>
                        After receiving design feedback, we started creating high-fidelity pixel-perfect mockups in Figma because
                        these were what we were going to base the code off of. 
                    </p>
                    <div className="technical-img-mockups">
                        <figure>
                            <img src={HifiHome} alt="High fidelity home page"></img>
                            <figcaption>Home page</figcaption>
                        </figure>
                        <figure>
                            <img src={HifiFountains} alt="High fidelity all fountains in the building"></img>
                            <figcaption>All fountains in a building</figcaption>
                        </figure>
                        <figure>
                            <img src={HifiFountain} alt="High fidelity individual Fountain"></img>
                            <figcaption>Individual fountain</figcaption>
                        </figure>
                        <figure>
                            <img src={HifiRanking} alt="High fidelity fountain ranking page"></img>
                            <figcaption>Fountain ranking</figcaption>
                        </figure>
                        <figure>
                            <img src={HifiMap} alt="High fidelity map"></img>
                            <figcaption>Map of all fountains in a building</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="technical-section">
                    <h3>Step 3: Bringing it to Life</h3>
                    <p>
                        Finally, we built it with code. The frontend was made with React and the backend used
                        Firebase. Every time users would rank a water fountain, the information was sent and stored 
                        to the backend database, with the frontend reflecting the new average ranking and filter status! 
                    </p>
                </div>
            </div>
        </div>
    )
}