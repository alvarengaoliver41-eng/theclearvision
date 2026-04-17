import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const BackgroundOrbs = () => {
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 600
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 400
  );

  const springX = useSpring(mouseX, { stiffness: 22, damping: 38, mass: 1.8 });
  const springY = useSpring(mouseY, { stiffness: 22, damping: 38, mass: 1.8 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Dot grid — fades toward edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(40 60% 50% / 0.22) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          opacity: 0.5,
          maskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Subtle scan lines */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            hsl(40 60% 50% / 0.2) 3px,
            hsl(40 60% 50% / 0.2) 4px
          )`,
        }}
      />

      {/* Mouse-reactive cursor orb */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: springX,
          top: springY,
          width: 720,
          height: 720,
          background:
            "radial-gradient(circle at center, hsl(40 60% 50% / 0.10) 0%, hsl(40 60% 50% / 0.04) 40%, transparent 65%)",
          filter: "blur(45px)",
        }}
      />

      {/* Top-left large orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "-22%",
          left: "-18%",
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, hsl(40 55% 65% / 0.13) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1],
          x: [0, 80, -35, 0],
          y: [0, -55, 45, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right large orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          bottom: "-28%",
          right: "-12%",
          width: 900,
          height: 900,
          background:
            "radial-gradient(circle, hsl(40 50% 35% / 0.11) 0%, transparent 65%)",
          filter: "blur(110px)",
        }}
        animate={{
          scale: [1, 0.85, 1.18, 1],
          x: [0, -100, 45, 0],
          y: [0, 65, -45, 0],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center pulsing glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 560,
          height: 320,
          background:
            "radial-gradient(ellipse, hsl(40 60% 50% / 0.065) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          scale: [1, 1.5, 0.75, 1],
          opacity: [0.5, 1, 0.4, 0.5],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top-right accent orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "3%",
          right: "-10%",
          width: 450,
          height: 450,
          background:
            "radial-gradient(circle, hsl(40 60% 50% / 0.08) 0%, transparent 65%)",
          filter: "blur(75px)",
        }}
        animate={{
          x: [0, -60, 25, 0],
          y: [0, 90, -35, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-left small accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          bottom: "10%",
          left: "5%",
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, hsl(40 55% 65% / 0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

    </div>
  );
};

export default BackgroundOrbs;
