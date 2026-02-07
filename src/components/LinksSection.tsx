"use client";

import { FadeInView } from "./FadeInView";

const safeguards = [
  "Constrained capability contracts — no arbitrary C++ generation",
  "Validator agent checks logic, safety, and spec compliance before every deploy",
  "User reviews changes on a confirmation screen before OTA",
  "Stable firmware fallback — one-tap rollback if anything fails",
  "Manual LED controls always available, even mid-update",
  "Servo angles clamped and rate-limited to prevent hardware damage",
];

export function LinksSection() {
  return (
    <section
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
          TRUST
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
          This isn&apos;t &ldquo;AI writing random firmware&rdquo;
        </h2>
      </FadeInView>

      {/* Safeguard List */}
      <div className="flex flex-col gap-6">
        {safeguards.map((item, index) => (
          <FadeInView key={index} delay={index * 0.1}>
            <div className="flex gap-4 items-start">
              {/* Number Badge */}
              <span
                className="text-sm min-w-[2rem]"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: "#404040",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Item Text */}
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  color: "#a3a3a3",
                }}
              >
                {item}
              </p>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
