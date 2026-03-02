import React from "react";
import { Link } from "react-router-dom";

import solderingImage from "./assets/soldering-closeup.jpeg";
import feetImage from "./assets/pair-of-feet.jpeg";
import feetImage2 from "./assets/pair-of-feet-2.jpeg";
import finalHeart from "./assets/lit_up_heart-portfolio.jpg";
import scream from "./assets/ahh-still-frame.jpg";

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {images.map(({ src, alt }, idx) => (
        <img
          key={idx}
          src={src}
          alt={alt}
          className="w-full h-64 sm:h-72 object-cover rounded-lg border border-zinc-200"
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Madeline Ou
        </h1>
      </section>

      {/* Project 1 */}
      <section className="flex justify-center px-6 py-20">
        <div className="w-full max-w-2xl space-y-6 text-left">
          <h2 className="text-2xl font-medium">A Pair of Feet</h2>

          <ImageGrid
            images={[
              { src: feetImage, alt: "A Pair of Feet sculpture" },
              { src: feetImage2, alt: "A Pair of Feet sculpture, backside" },
              { src: solderingImage, alt: "Soldering close-up" },
            ]}
          />

          <p className="text-xs text-zinc-500 italic">
            Copper wire sculpture soldered onto a protoboard. From an aerial
            view, meant to look like a pair of feet.
          </p>

          <p className="text-zinc-600 leading-relaxed">
            “A Pair of Feet” is my first project for my creative embedded
            systems class. It was an exciting first to create something CS-related
            that I could hold in my hands — a physical representation of
            everything in the past 7 semesters. Thus, the feet are meant to
            symbolize baby steps towards learning something new. I also thought
            they were funny.
          </p>
        </div>
      </section>

      {/* Project 2 */}
      <section className="flex justify-center px-6 py-20 border-t border-zinc-100">
        <div className="w-full max-w-2xl space-y-6 text-left">
          <h2 className="text-2xl font-medium">Heart Heart</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img
              src={scream}
              alt="Heart LED pendant lit up"
              className="w-full h-64 sm:h-72 object-cover rounded-lg border border-zinc-200"
              loading="lazy"
            />
          </div>

          <p className="text-xs text-zinc-500 italic">
            555 timer circuit LED heart, lit up.
          </p>

          <p className="text-zinc-600 leading-relaxed">
            “Heart Heart” is my second project for my creative embedded systems
            class. This was my first time working with a 555 timer circuit or any
            circuit for that matter.
          </p>

          <Link
            to="/blog/heart-heart"
            className="inline-block text-sm text-zinc-900 underline underline-offset-4 hover:text-zinc-700 transition-colors"
          >
            Click here for the blog post!
          </Link>
        </div>
      </section>

      {/* Project 3 */}
      <section className="flex justify-center px-6 py-20 border-t border-zinc-100">
        <div className="w-full max-w-2xl space-y-6 text-left">
          <h2 className="text-2xl font-medium">Heart Heart</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img
              src={finalHeart}
              alt="Scream"
              className="w-full h-64 sm:h-72 object-cover rounded-lg border border-zinc-200"
              loading="lazy"
            />
          </div>

          <p className="text-xs text-zinc-500 italic">
            ESP32 TTGO T-Display and generative text.
          </p>

          <p className="text-zinc-600 leading-relaxed">
            "Ahh" is a project that explores generative text and capturing the feeling of frustration. 
          </p>

          <Link
            to="/blog/ahh"
            className="inline-block text-sm text-zinc-900 underline underline-offset-4 hover:text-zinc-700 transition-colors"
          >
            Click here for the blog post!
          </Link>
        </div>
      </section>
    </main>
  );
}
