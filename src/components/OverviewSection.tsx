"use client";

import { FadeInView } from "./FadeInView";

const painQuotes = [
  "\u201CI wouldn\u2019t know where to start\u201D",
  "\u201CSetting up drivers and toolchains is a nightmare\u201D",
  "\u201CI don\u2019t know C/C++ well enough\u201D",
  "\u201CWiring and datasheets are confusing\u201D",
  "\u201CEverything feels intimidating\u201D",
];

export function OverviewSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
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
          WHY PEOPLE DON&apos;T START HARDWARE PROJECTS
        </p>
      </FadeInView>

      {/* Pain Quotes */}
      <div
        className="py-8"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
        }}
      >
        <div className="flex flex-col gap-5">
          {painQuotes.map((quote, index) => (
            <FadeInView key={index} delay={index * 0.08}>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "#a3a3a3",
                }}
              >
                {quote}
              </p>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Attribution */}
      <FadeInView>
        <p
          className="mt-10 text-base leading-relaxed max-w-3xl"
          style={{
            fontFamily: "var(--font-geist-sans)",
            color: "#525252",
          }}
        >
          These responses came from Mechanical, Electrical, CS, and Design
          students — not beginners.
        </p>
      </FadeInView>

      {/* Survey Data Charts */}
      <div className="mt-12 flex flex-col gap-4">
        {/* Demographics — who responded */}
        <FadeInView>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backgroundColor: "#ffffff",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/image.png"
              alt="Survey respondent backgrounds — 37.5% MechE, 33.3% ECE, 12.5% CS, 12.5% Design"
              className="w-full h-auto object-contain"
            />
          </div>
        </FadeInView>

        {/* Two-column grid for blocker charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 58% wouldn't know where to start */}
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
                src="/screenshots/image2.png"
                alt="58.3% wouldn't know where to start connecting ESP32 to Wi-Fi"
                className="w-full h-full object-contain"
              />
            </div>
          </FadeInView>

          {/* #1 blockers bar chart */}
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
                src="/screenshots/image3.png"
                alt="#1 blockers — 58% C/C++, 54% toolchains, 46% wiring and datasheets"
                className="w-full h-full object-contain"
              />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
