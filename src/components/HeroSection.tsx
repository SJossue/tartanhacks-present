"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 md:pt-36">
      {/* Background Layer 1: Atmospheric Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 50% at 50% 45%,
              rgba(30, 30, 30, 0.8) 0%,
              rgba(15, 15, 15, 0.4) 40%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Entrance Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl w-full"
      >
        {/* Background Layer 2: Soft Diffuse Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                ellipse 80% 60% at 50% 50%,
                rgba(40, 40, 40, 0.6) 0%,
                rgba(20, 20, 20, 0.3) 30%,
                transparent 60%
              )
            `,
            filter: "blur(40px)",
            transform: "scale(1.1)",
          }}
        />

        {/* Browser Window */}
        <div
          className="relative rounded-t-xl overflow-visible"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.06)",
            borderRight: "1px solid rgba(255, 255, 255, 0.06)",
            boxShadow: `
              0 0 80px rgba(0, 0, 0, 0.5),
              0 0 120px rgba(0, 0, 0, 0.3)
            `,
            maskImage: `linear-gradient(to bottom, black 0%, black 70%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, black 0%, black 70%, transparent 100%)`,
          }}
        >
          {/* Title Bar (macOS Chrome) */}
          <div
            className="relative flex items-center justify-between px-4 py-3"
            style={{
              background:
                "linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 50%, #1a1a1a 100%)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #ff6058 0%, #e5443c 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)",
                }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #ffca2c 0%, #dea81a 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)",
                }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #2dd634 0%, #24a82c 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)",
                }}
              />
            </div>

            {/* Plus Button */}
            <div className="text-[#5a5a5a]">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>

          {/* Window Body — Split Layout: Image Left, Text Right */}
          <div
            className="relative"
            style={{
              background: `
                radial-gradient(
                  ellipse 100% 80% at 50% 40%,
                  #0d0d0d 0%,
                  #080808 30%,
                  #000000 60%
                )
              `,
            }}
          >
            {/* Inner Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(
                    ellipse 60% 40% at 50% 35%,
                    rgba(255, 255, 255, 0.02) 0%,
                    transparent 50%
                  )
                `,
              }}
            />

            {/* Split Content */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 px-6 py-10 md:px-0 md:py-0">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[45%] flex-shrink-0 md:py-10 md:pl-8 lg:pl-12"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/main.png"
                  alt="Forge — natural language to running hardware"
                  className="w-full h-auto object-contain rounded-lg"
                  style={{
                    filter: "drop-shadow(0 0 40px rgba(0, 0, 0, 0.5))",
                  }}
                />
              </motion.div>

              {/* Right: Text Content */}
              <div className="w-full md:w-[55%] flex flex-col justify-center md:px-8 lg:px-12 md:py-14 lg:py-20">
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative text-left"
                >
                  <span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        radial-gradient(
                          ellipse 50% 30% at 50% 40%,
                          rgba(255, 255, 255, 0.08) 0%,
                          transparent 60%
                        )
                      `,
                      filter: "blur(30px)",
                    }}
                  />

                  <span
                    className="relative block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.12] tracking-[-0.02em]"
                    style={{
                      fontFamily:
                        "var(--font-geist-sans), Inter, SF Pro Display, -apple-system, sans-serif",
                      color: "#ffffff",
                      textShadow: `
                        0 0 40px rgba(255, 255, 255, 0.3),
                        0 0 100px rgba(255, 255, 255, 0.1),
                        0 0 120px rgba(255, 255, 255, 0.05)
                      `,
                    }}
                  >
                    <span
                      style={{
                        background:
                          "linear-gradient(180deg, #ffffff 0%, #f0f0f0 50%, #c0c0c0 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Hardware projects
                      <br />
                      shouldn&apos;t start with{" "}
                    </span>
                    <em
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
                          drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))
                          drop-shadow(0 0 80px rgba(255, 255, 255, 0.1))
                        `,
                      }}
                    >
                      toolchains.
                    </em>
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 md:mt-8"
                >
                  <p
                    className="text-base md:text-lg font-medium tracking-[-0.01em]"
                    style={{
                      color: "#ffffff",
                      textShadow: "0 0 40px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Describe what you want your device to do.
                  </p>
                  <p
                    className="mt-1 text-base md:text-lg tracking-[-0.01em]"
                    style={{ color: "#737373" }}
                  >
                    Forge generates, validates, and deploys firmware — instantly.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 md:mt-8 flex gap-4 flex-wrap"
                >
                  <a
                    href="#demo"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      color: "#ffffff",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    Watch the demo
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      color: "#a3a3a3",
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#a3a3a3";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    }}
                  >
                    See how it works
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Bottom Fade Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48 md:h-56 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom,
                  transparent 0%,
                  rgba(5, 5, 5, 0.3) 30%,
                  rgba(5, 5, 5, 0.7) 60%,
                  #050505 100%
                )`,
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative mt-12 md:mt-16 flex justify-center"
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8"
          style={{ color: "#404040" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
