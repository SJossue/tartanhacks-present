"use client";

import { FadeInView } from "./FadeInView";

const steps = [
  {
    label: "Connect",
    text: "User connects the Forge mobile app to an ESP32 on the same Wi-Fi network",
  },
  {
    label: "Describe",
    text: "User writes an intent in plain English — \"Make the LED blink and add an SG90 servo slider\"",
  },
  {
    label: "Generate",
    text: "Dedalus agent pipeline interprets intent, generates constrained firmware, and validates safety + spec compliance",
  },
  {
    label: "Compile",
    text: "PlatformIO compiles the firmware into a .bin artifact and produces a matching UI schema",
  },
  {
    label: "Deploy",
    text: "ESP32 receives OTA update, downloads the binary, flashes, and reboots",
  },
  {
    label: "Control",
    text: "App reconnects and renders live controls (toggles, sliders, gauges) driven by the UI schema — no reflashing, no IDE",
  },
];

export function DetailSection() {
  return (
    <section
      id="how-it-works"
      className="max-w-5xl mx-auto px-6 py-16 md:py-24"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.04)" }}
    >
      {/* Section Label */}
      <FadeInView>
        <p
          className="text-sm mb-4"
          style={{
            fontFamily: "var(--font-geist-sans)",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#525252",
          }}
        >
          THE LOOP
        </p>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-12 tracking-[-0.02em]"
          style={{
            fontFamily: "var(--font-geist-sans)",
            background:
              "linear-gradient(180deg, #ffffff 0%, #f0f0f0 50%, #c0c0c0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          From intent → running hardware, in one loop
        </h2>
      </FadeInView>

      {/* Steps */}
      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <FadeInView key={index} delay={index * 0.1}>
            <div className="flex gap-4 items-start">
              {/* Number Badge */}
              <span
                className="text-sm min-w-[2rem] pt-1"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: "#404040",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                {/* Step Label */}
                <p
                  className="text-sm mb-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#525252",
                  }}
                >
                  {step.label}
                </p>

                {/* Step Text */}
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    color: "#a3a3a3",
                  }}
                >
                  {step.text}
                </p>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>

      {/* App Screenshots — 3-column on desktop, scroll on mobile */}
      <FadeInView>
        <div className="mt-14 grid grid-cols-3 gap-4">
          {/* AI Assistant — Describe intent */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backgroundColor: "#0a0a0a",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/ai1.jpeg"
              alt="Forge AI Assistant — user describes intent in natural language"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Generated Code — Review firmware */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backgroundColor: "#0a0a0a",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/code1.jpeg"
              alt="Forge generated firmware — main.cpp with Arduino code"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Configuration Review — Deploy */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backgroundColor: "#0a0a0a",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/config1.jpeg"
              alt="Forge review screen — configuration summary and deploy button"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Screenshot Labels */}
        <div className="mt-3 grid grid-cols-3 gap-4">
          {["Describe", "Review Code", "Deploy"].map((label) => (
            <p
              key={label}
              className="text-center text-xs"
              style={{
                fontFamily: "var(--font-geist-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#404040",
              }}
            >
              {label}
            </p>
          ))}
        </div>
      </FadeInView>

      {/* Trust Keywords */}
      <FadeInView>
        <div className="mt-12 flex gap-4 flex-wrap">
          {[
            "validated firmware",
            "review before deploy",
            "rollback to stable",
            "OTA over Wi-Fi",
          ].map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1.5 rounded-md text-xs"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: "#525252",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              {keyword}
            </span>
          ))}
        </div>
      </FadeInView>
    </section>
  );
}
