import React from "react";
import solderingImage from "./assets/soldering-closeup.jpeg";
import feetImage from "./assets/pair-of-feet.jpeg";
import feetImage2 from "./assets/pair-of-feet-2.jpeg";
import finalHeart from "./assets/lit_up_heart.jpg";

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
              src={finalHeart}
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
            Copper wire sculpture soldered onto a protoboard. From an aerial view, meant to look like a pair of feet. 
          </p>
          <p className="text-zinc-600">
            "A Pair of Feet" is my first project for my creative embedded systems class.
            It was an exciting first to create something CS-related that I could hold in my hands -- a physical representation
            of everything in the past 7 semesters. Thus, the feet are meant to symbolize baby steps 
            towards learning something new. I also thought they were funny. 
          </p>
        </div>
      </section>
      {/* Pendant */}
      <section className="min-h-screen flex justify-center px-6 py-24">
        <div className="max-w-4xl w-full space-y-6">

          <h2 className="text-2xl font-medium">Heart Heart</h2>
          {/* Project images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img 
              src={finalHeart}
              alt="Heart LED pendant lit up"
              className="w-full aspect-[4/5] object-cover rounded-lg border border-zinc-200"
            />
          </div>

          {/* Project text */}
          <p className="text-xs text-zinc-500 italic">
            555 timer circuit LED heart, lit up.
          </p>
          <p className="text-zinc-600">
            "Heart Heart" is my second project for my creative embedded systems class.
            This was my first time working with a 555 timer circuit or any circuit for that matter.   
          </p>
          <a 
            href="/blog/heart-heart"
            className="inline-block text-sm text-zinc-900 underline underline-offset-4 hover:text-zinc-700 transition-colors"
          >
            Click here for the blog post!
          </a>
        </div>
      </section>
    </main>
  );
}

