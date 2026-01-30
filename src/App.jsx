import React from "react";
import solderingImage from "./assets/soldering-closeup.JPEG";
import feetImage from "./assets/pair-of-feet.JPEG";
import feetImage2 from "./assets/pair-of-feet-2.JPEG";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero / Name */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Madeline Ou
        </h1>
      </section>

      {/* Project */}
      <section className="min-h-screen flex justify-center px-6 py-24">
        <div className="max-w-4xl w-full space-y-6">

          <h2 className="text-2xl font-medium">A Pair of Feet</h2>
          {/* Project images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img 
              src={feetImage}
              alt="A Pair of Feet sculpture"
              className="w-full aspect-[4/5] object-cover rounded-lg border border-zinc-200"
            />
            <img
              src={feetImage2}
              alt="A Pair of Feet sculpture, backside"
              className="w-full aspect-[4/5] object-cover rounded-lg border border-zinc-200"
            />
            <img
              src={solderingImage}
              alt="Soldering close-up"
              className="w-full aspect-[4/5] object-cover rounded-lg border border-zinc-200"
            />
          </div>

          {/* Project text */}
          <p className="text-xs text-zinc-500 italic">
            Copper wire sculpture, soldered by hand
          </p>
          <p className="text-zinc-600">
            "A Pair of Feet" is my first project for my creative embedded systems class.
            It was my first time learning CS where I created a physical object through soldering and bending together wire. The feet are meant to symbolize baby steps 
            towards learning something new. I also thought they were funny. 
          </p>
        </div>
      </section>
    </main>
  );
}

