import React from "react";
import { Link } from "react-router-dom";
import drumCreation from "./assets/copper-lion-dance-drum.jpeg";
import drumReal from "./assets/lion-dance-drum.jpeg";
import drumBack from "./assets/back-setup.jpeg";
import debugHell from "./assets/debug-hell.jpeg";

export default function DrumBlog() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Navigation */}
        <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Lion Dance Drum</h1>
          <p className="text-zinc-500 italic">An interactive capacitive touch lion dance drum using ESP32 and UDP.</p>
        </header>

        {/* YouTube Video Embed */}
        <div className="aspect-video w-full rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
          <iframe
            className="w-full h-full"
            src="https://youtube.com/shorts/ytiWJN3CaZE?si=L8KfkLztBnli5JSN"
            title="Lion Dance Drum Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <img src={drumCreation} className="w-full rounded-lg border border-zinc-200" alt="Finished Drum" />

        {/* The Story */}
        <article className="space-y-6 text-zinc-600 leading-relaxed text-left">
          <h2 className="text-xl font-medium text-zinc-900">The Concept</h2>
          <p>
            For my third project, I really wanted to recreate a lion dance drum. I've been part of Columbia University's 
            lion dance club, and over the course of 4 years, the activity has meant a lot to me. Usually, I'm one of the people in the lion, 
            but for my last year, I really wanted to improve my drumming. The issue is that the drum is really big and really loud - loud to the point
            that we've gotten infamous on campus. So, there was no way for me to practice in my room without disturbing literally everyone on my floor.
            That's when the idea of creating a quiet, electronic version of the drum came to mind!
          </p>

          <h2 className="text-xl font-medium text-zinc-900">Technical Aspect</h2>
          <p>
            The drum itself is made out of lots of cardboard, and it uses capacitive touch to detect hits on 5 different pads. The sounds I wanted to recreate
            were the regular hit in the center, the rim hits, and a mute beat. In order to do this, I split the center of the drum into 2 different pads. This was so
            that when either pad was hit, it would trigger the sound that just hitting the drum would make. However, when one pad is being held, and the other pad was struck, 
            a mute sound was triggered - imitating the real technique of muting the drum. The rim hits were also pretty straightforward, when they were hit, they would just trigger the 
            rim sound. I did try to to make my drum structurally similar to the lion dance drum by placing the rim pads slightly curved to the side, giving the entire
            thing a 3D, more authentic feel. The sounds themselves were recorded from an actual lion dance drum, and I used Audacity to edit them to make them sound cleaner and avoid
            issues of clipping and latency as much as possible. 

            <img src={drumReal} className="w-full rounded-lg border border-zinc-200" alt="Real Lion Dance Drum" />

            Data is sent from the ESP32 over Wi-Fi using the UDP protocol. On the laptop side, 
            a Python script listens for these messages and triggers low-latency audio samples. 
            This separation allows the ESP32 to focus entirely on sensor precision while the 
            laptop handles the "media generation."

            Additionally, because a mode switch was necessary, I also thought it would be fun to do cymbals as well, another instrument key in a lion dance performance. So, 
            when the 5th pad is hit, it toggles the mode of the instrument between drum and cymbal, with the sounds of the other pads respectively varying. 

            <img src={drumCreation} className="w-full rounded-lg border border-zinc-200" alt="Drum Finished Product" />

            The biggest hurdle were the stupid sensors themselves. The initial code itself was relatively straightforward, and I managed to get it done pretty quickly. However, 
            I soon found out that the sensors were EXTREMELY inconsistent and sensitive, and I found a myriad of issues that I couldn't really explain. For example, although I'm using Wi-Fi to transmit
            the data, I was having so many issues with the outer center pad for some reason - this could be potentially because the copper sensor is so big or the nature of the specific touch pin I used.
            I was finding myself in a situation where when I was using Serial to debug, it was working perfectly, but when I unplugged the USB cable, the wire suddenly wasn't reactive at all. 
            I later found out that this was because the USB cable was functioning as a ground plane, which affected the values A LOT. So, even though I'm using Wi-Fi, the USB cable is still very much plugged 
            in because of the grounding issue; I had already tried making a ground plane with another piece of copper separately attached to the back, not touching any of the pads, but then that messed with 
            my inner center pad. Hence, why the USB cable is here. Additionally, I was having issues with my 2nd rim pad that used touch pin 33 - there were moments where
            the sensor would pick up and then it wouldn't. And, this was the story for a lot of the pads. There 
            was a moment where nothing was working when I had the drum set on the table, but suddenly it would work when I lifted it in the air. As a result of all these
            in consistencies, I found myself in a debugging hell, messing with all the thresholds
            of the sensors for literally hours. This was what I was staring at for the longest time:

            After a while, I managed to implement an adaptive baseline algorithm, where the baseline for calculating
            a significant touch was constantly shifting in order to account for the difference in environment and noise. This allowed for some flexibility, 
            but I ultimately still had to really fine-tune the thresholds until it worked to a consistent level that
            I didn't feel like it was a fluke to turn in lol. Even now, when I start it up, the sensors are still a little wonky, 
            so I had to mess with the thresholds to get it working. 
            
            The biggest hurdle was <strong>capacitance drift</strong>. I discovered that the values 
            shifted depending on whether the drum was sitting on a wooden table or being held in 
            the air. Even the proximity of a ground plane (copper paper) nearly silenced Pad B 
            by creating too much parasitic capacitance.

            <img src={drumBack} className="w-full rounded-lg border border-zinc-200" alt="Drum Wiring" />
            <img src={debugHell} className="w-full rounded-lg border border-zinc-200" alt="Debugging Hell" />
        </p>
          <h2 className="text-xl font-medium text-zinc-900">Sonification via UDP</h2>
          <p>
            Data is sent from the ESP32 over Wi-Fi using the UDP protocol. On the laptop side, 
            a Python script listens for these messages and triggers low-latency audio samples. 
            This separation allows the ESP32 to focus entirely on sensor precision while the 
            laptop handles the "media generation."
          </p>
        </article>

        {/* Footer */}
        <footer className="pt-10 border-t border-zinc-100 text-zinc-400 text-xs">
          Built with ESP32, Python, and a lot of copper tape.
        </footer>
      </div>
    </main>
  );
}