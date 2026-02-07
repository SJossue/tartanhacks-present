"use client";

import { FadeInView } from "./FadeInView";

const aspirations = [
  "\u201CI would finally attempt a hardware project\u201D",
  "\u201CI would build more complex or ambitious projects\u201D",
  "\u201CI would build the same things, just faster\u201D",
];

export function GallerySection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      {/* Section Label */}
      <FadeInView>
        <p
          className="text-sm mb-8"
          style={{
            fontFamily: "var(--font-geist-sans)",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#525252",
          }}
        >
          IF SETUP WASN&apos;T THE PROBLEM&hellip;
        </p>
      </FadeInView>

      {/* Aspiration Quotes */}
      <div
        className="py-8"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
        }}
      >
        <div className="flex flex-col gap-5">
          {aspirations.map((quote, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "#d4d4d4",
                }}
              >
                {quote}
              </p>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Survey Data Charts */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* "How would it change your approach" */}
        <FadeInView delay={0.1}>
          <div
            className="rounded-xl overflow-hidden h-full"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backgroundColor: "#ffffff",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/image4.png"
              alt="62.5% would finally attempt hardware, 62.5% would build more ambitious projects"
              className="w-full h-full object-contain"
            />
          </div>
        </FadeInView>

        {/* "What would most improve your experience" */}
        <FadeInView delay={0.2}>
          <div
            className="rounded-xl overflow-hidden h-full"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backgroundColor: "#ffffff",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/image5.png"
              alt="65% want faster startup, 52% want reliable connections, 43.5% want portability"
              className="w-full h-full object-contain"
            />
          </div>
        </FadeInView>
      </div>

      {/* Framing Statement */}
      <FadeInView>
        <div className="mt-12 max-w-3xl">
          <p
            className="text-xl md:text-2xl leading-relaxed font-medium"
            style={{
              fontFamily: "var(--font-geist-sans)",
              color: "#ffffff",
              textShadow: "0 0 40px rgba(255, 255, 255, 0.15)",
            }}
          >
            The problem isn&apos;t creativity or ambition.
          </p>
          <p
            className="mt-2 text-xl md:text-2xl leading-relaxed"
            style={{
              fontFamily:
                "var(--font-playfair), Playfair Display, Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              background:
                "linear-gradient(180deg, #ffffff 0%, #e8e8e8 40%, #a0a0a0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: `
                drop-shadow(0 0 40px rgba(255, 255, 255, 0.2))
                drop-shadow(0 0 80px rgba(255, 255, 255, 0.08))
              `,
            }}
          >
            It&apos;s friction.
          </p>
        </div>
      </FadeInView>
    </section>
  );
}
