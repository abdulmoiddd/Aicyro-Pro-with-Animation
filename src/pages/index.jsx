import React, { useEffect, useRef, useState } from "react";
import Seo from "../components/Essential/Seo";
import Hero from "@/components/Home/Hero";
import Problem from "@/components/Home/Problem";
import Popupform from "@/components/Form/Popupform";
import Navbar from "@/components/Essential/Navbar";
import Footer from "@/components/Essential/Footer";
import NightScene from "@/components/Home/NightScene";
import TheTurn from "@/components/Home/TheTurn";
import Pricing from "@/components/Home/Pricing";
import Compare from "@/components/Home/Compare";
import NotFor from "@/components/Home/NotFor";
import Trust from "@/components/Home/Trust";
import Offer from "@/components/Home/Offer";
import Faq from "@/components/Home/Faq";
import CTA from "@/components/Home/Cta";

export default function Home() {
  const canvasRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion || window.innerWidth < 760) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // 3D Grid Parameters
    const AX = 72,
      AY = 42,
      SEP = 3.4,
      CAMZ = 92;
    const xs = new Float32Array(AX * AY);
    const zs = new Float32Array(AX * AY);
    let i = 0;

    for (let ix = 0; ix < AX; ix++) {
      for (let iy = 0; iy < AY; iy++) {
        xs[i] = SEP * ix - (AX * SEP) / 2;
        zs[i] = SEP * iy - (AY * SEP) / 2;
        i++;
      }
    }

    let W = 0,
      H = 0,
      F = 0,
      dpr = 1;
    let t = 0,
      mx = 0,
      my = 0,
      camX = 0,
      camY = 26;
    let running = true;
    let animationFrameId;

    // Helper: Convert Hex from CSS to RGB string for the canvas
    const hexToRgb = (hex) => {
      let c = hex.trim().replace("#", "");
      if (c.length === 3)
        c = c
          .split("")
          .map((x) => x + x)
          .join("");
      const num = parseInt(c, 16);
      return `${num >> 16}, ${(num >> 8) & 255}, ${num & 255}`;
    };

    let styles = [];

    // Dynamically fetch the CSS variable and build the opacity array
    const updateCanvasColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const primaryHex =
        rootStyles.getPropertyValue("--primary").trim() || "#8a2be2";
      const rgb = hexToRgb(primaryHex);

      const newStyles = [];
      for (let a = 0; a < 12; a++) {
        newStyles.push(`rgba(${rgb}, ${(0.05 + (0.35 * a) / 11).toFixed(3)})`);
      }
      styles = newStyles;
    };

    const handleMouseMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };

    const handleVisibility = () => {
      running = !document.hidden;
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      F = H * 0.87;

      updateCanvasColors();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("resize", resize);

    updateCanvasColors();
    resize();

    const frame = () => {
      animationFrameId = requestAnimationFrame(frame);
      if (!running) return;

      t += 0.012;
      camX += (mx * 16 - camX) * 0.04;
      camY += (26 - my * 12 - camY) * 0.04;

      const th = Math.atan2(camY + 8, CAMZ);
      const c = Math.cos(th);
      const sn = Math.sin(th);

      ctx.clearRect(0, 0, W, H);
      const cx = W * 0.5;
      const cy = H * 0.5;
      let k = 0;

      for (let jx = 0; jx < AX; jx++) {
        for (let jy = 0; jy < AY; jy++) {
          const wy =
            -16 +
            Math.sin((jx + t) * 0.45) * 2.6 +
            Math.sin((jy + t) * 0.35) * 2.6;
          const vx = xs[k] - camX;
          const vy = wy - camY;
          const vz = zs[k] - CAMZ;

          const ry = vy * c - vz * sn;
          const depth = -(vy * sn + vz * c);
          k++;

          if (depth < 8) continue;

          const sc = F / depth;
          const sx = cx + vx * sc;
          const sy = cy - ry * sc;

          if (sx < -8 || sx > W + 8 || sy < -8 || sy > H + 8) continue;

          const r = Math.min(3.2, Math.max(0.6, 130 / depth));
          const al = Math.max(0, Math.min(1, (195 - depth) / 135));

          ctx.fillStyle = styles[(al * 11) | 0];
          ctx.fillRect(sx - r * 0.5, sy - r * 0.5, r, r);
        }
      }
    };

    frame();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <Seo />

      {/* Global 3D Background Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[var(--background)] transition-colors duration-300">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(var(--grid-line) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(1100px 640px at 50% 0%, black 0%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(1100px 640px at 50% 0%, black 0%, transparent 78%)",
          }}
        />

        {/* Animated Particle Terrain Canvas */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-70"
        />
      </div>

      <main className="relative z-10">
        <Navbar onOpenPopup={() => setIsPopupOpen(true)} />
        <Hero onOpenPopup={() => setIsPopupOpen(true)} />
        <NightScene />
        <TheTurn />
        <Problem />
        <Pricing />
        <Compare />
        <NotFor />
        <Trust />
        <Offer onOpenPopup={() => setIsPopupOpen(true)} />
        <Faq />
        <CTA />
        <Footer />

        {/* Popup Modal */}
        <Popupform isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </main>
    </>
  );
}
