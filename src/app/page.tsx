import { HeroSection } from "@/components/HeroSection";
import { OverviewSection } from "@/components/OverviewSection";
import { GallerySection } from "@/components/GallerySection";
import { DetailSection } from "@/components/DetailSection";
import { LinksSection } from "@/components/LinksSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Global Spotlight Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(
            ellipse 90% 45% at 50% 20%,
            rgba(255, 255, 255, 0.12),
            #1a1a1a,
            #0a0a0a
          )`,
          opacity: 0.75,
        }}
      />

      {/* Fixed Identity Mark */}
      <div
        className="fixed top-0 left-0 px-6 py-5 z-50"
        style={{
          fontFamily: "var(--font-geist-sans)",
          fontSize: "14px",
          fontWeight: 600,
          color: "#f5f5f5",
          letterSpacing: "-0.01em",
          opacity: 0.6,
        }}
      >
        Forge
      </div>

      {/* Content Container */}
      <main className="relative z-10">
        {/* 1. Hero — Name the pain */}
        <HeroSection />

        {/* 2. Proof the pain is real — Survey quotes */}
        <OverviewSection />

        {/* 3. What changes if barrier disappears — Aspirations */}
        <GallerySection />

        {/* 4. The solution loop */}
        <DetailSection />

        {/* 5. Why this is safe — Trust */}
        <LinksSection />

        {/* 6. Footer */}
        <Footer />
      </main>
    </>
  );
}
