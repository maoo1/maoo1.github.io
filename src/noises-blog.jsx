import React from "react";
import { Link } from "react-router-dom";
import fieldCricket from "./assets/field-cricket.png";

export default function NoiseBlog() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-20">
      <div className="max-w-2xl mx-auto space-y-12">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Noises</h1>
          <p className="text-zinc-500 italic">Recreating noises in the world using web audio!.</p>
        </header>

        {/* The Story */}
        <article className="space-y-6 text-zinc-600 leading-relaxed text-left">
          <h2 className="text-xl font-medium text-zinc-900">Cricket Cricket Cricket</h2>
          <p>
            The sound I wanted to recreate for this project was the sound of field crickets - whenever I hear them, 
            it makes me really nostalgic for summer nights. 
          </p>

          <h2 className="text-xl font-medium text-zinc-900">Process & Experience</h2>
          <p>
            In order to recreate this sound, I followed Andy Farnell's Designing Sound IV: Practicals Field Cricket 2. 
            This breakdown of the field cricket's sound was an alternative to a more common? way of recreating the noise, and the 
            instructions went as follows: 

            <br></br>

            <blockquote className="border-l-4 border-zinc-200 pl-4 italic text-zinc-600">
                "As an alternative, let’s look at a different way to achieve a similar result. We can calculate that each click is 17ms apart, so let’s begin with a timebase
                that produces clicks continually at that rate. This is done with the metro object. How many pulses will there be in one period of 0.7s? Dividing the chirp
                period by the pulse period gives 700ms/17ms = 41, so let’s now add a counter and mod operator to constrain counting over this range. To split this number stream into groups of 7 and 34 (the remaining silent
                pulses), moses is used. So that the pulses grow in amplitude the number is scaled into a range 0.2 to 1.0 by
                adding 2 and dividing by 9, then substituting that
                value as the upper limit of a 0.2ms pulse obtained
                through vline~. Because these pulses are a little bit too
                sharp, a low-pass filter softens them before we feed
                them to some high-resonance band-pass filters which produce the correct tone. Unfortunately this leaves a
                residual low frequency at the pulse rate, so a further high pass removes this. The result sounds much too
                mechanical and unnatural with only two bands, so I’ve added an extra two peaks very close to the fundamental to provide the effect of two wings at close frequencies. Notice the high gain
                needed to recover the ringing signal from the filters when excited by such a
                short pulse. This leads to a potentially troublesome patch that can make loud
                clicks on startup if the filters are not initialised carefully. It works nicely in
                Pure Data, but beware if you are translating this patch, and be sure to zero
                any signal prior to the filters and trap any initial DC components."
            </blockquote>

            <br></br>
            <img src={fieldCricket} className="w-full rounded-lg border border-zinc-200" alt="Real Lion Dance Drum" />
            <br></br>

            According to this description, as a summary, the field cricket produces a chirp made of seven rapid pulses separated by a long silence, 
            repeating roughly every 700ms. Each pulse is about 17ms apart and grows slightly in amplitude as the wing stroke builds momentum. 
            The resulting sound has three distinct qualities that I tried to replicate: a rhythmic clicking onset, a sustained whistling tone, and an underlying
            breathiness. Getting all three sounds was the main challenge. 

            <br></br>
            <h3 className="text-xl font-medium text-zinc-900">Code Breakdown</h3>
            <h4 className="text-xl font-medium text-zinc-900">Farnell & Similarities</h4>
            Within my code, I tried to follow Farnell's description exactly. For example, I implemented a 17ms click period and had 41 pulses per chirp. Additionally, 
            I implemented the 7/34 active/silent split, where only the first 7 pulses of each 41-pulse cycle produces sound while the remaining 34 are silent. However, because the total cycle time is
            697ms, the silence cannot be heard and is only there implicitly. 

            For replicating the crecendo effect of cricket wings building momentum, I included the exact amplitude ramp from Farnell: (n + 2) / 9. This meant that for the first 7 pulses,
            the amplitude would cycle through 0.22, 0.33, 0.44, 0.55, 0.66, 0.77, and 0.88 - slowly getting louder and louder. My LP to HP chain matches Farnell's description as well, with LP at 8 kHz, softening the 
            click noises, and my HP at 3 kHZ removing low-frequencies that would otherwise create a super audible buzz. Additionally, the high-resonance bandpass filter
            matched Farnell's "two wings at close frequencies" description, where band 1 and 3 clustered around 4670-4700 Hz and band 2 and 4 clustered around 5050-5080, creating the beating intereference between two wing surfaces that 
            gives the chirps its richness. 

            <h4 className="text-xl font-medium text-zinc-900">Farnell & Differences</h4>
            What's missing from Farnell's description is any variation in the chirps. Because real crickets
            are irregular, Farnell suggests small random offsets to the chirp period. However, because I didn't include that
            the sound can come off as mechanical after listening for a while. Additionally, my frequency range is around 300-400 Hz higher than Farnell's suggested 4300-4450 Hz. This was 
            because I wanted to better imitate the airiness of the chirps, as when I had it at the lower thresholds, the sound was slightly flatter.

            Additionally, the noise exciter is not present in Farnell's description. Originally, Farnell uses a ConstantSource-style DC pulse as the exciter. However, I decided to use a noise burst feeding through
            noiseBP at 4800 Hz as the excited in addition to the ConstantSourceNode. This is because the main issue that I had with the sound if I did Farnell's description exactly was that
            the sound was too buzzy. It sounds monotonous rather than having the airy, whistle, up-down quality that the video of Cricket noises I found on Youtube had. It sounded almost like
            if an apartment door buzzer was quickly and continuously ranger. As a result of the noise burst, it produces an airy, sustained whistle quality that was missing before. Additionally, I added a 5th band
            that functioned as a whistle partial, which further allowed for the whistle sound as well as provided a broad resonance that bridged the two wings, making it sound smoother. 

            <br></br>
        </p>
        </article>

        {/* Footer */}
        <footer className="pt-10 border-t border-zinc-100 text-zinc-400 text-xs">
            <a href="https://github.com/maoo1/noises" className="text-blue-600 underline">GitHub Repository</a>
        </footer>
      </div>
    </main>
  );
}