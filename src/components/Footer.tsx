"use client";

export function Footer() {
  return (
    <footer
      className="max-w-5xl mx-auto px-6 py-16"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.04)" }}
    >
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Left Side */}
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-geist-sans)",
            color: "#525252",
          }}
        >
          Built by Jossue, Yahil &amp; Eren — TartanHacks 2026
        </p>

        {/* Right Side */}
        <div className="flex gap-5">
          <a
            href="https://github.com/SJossue/forge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-300"
            style={{
              fontFamily: "var(--font-geist-sans)",
              color: "#a3a3a3",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#a3a3a3";
            }}
          >
            GitHub
          </a>
          <a
            href="https://devpost.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-300"
            style={{
              fontFamily: "var(--font-geist-sans)",
              color: "#a3a3a3",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#a3a3a3";
            }}
          >
            Devpost
          </a>
        </div>
      </div>
    </footer>
  );
}
