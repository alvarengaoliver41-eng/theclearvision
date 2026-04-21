import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

const BackgroundOrbs = () => {
  // Direct motion values — zero spring lag
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 600);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 400);

  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Scroll parallax
  const { scrollY } = useScroll();
  const orbY1 = useTransform(scrollY, [0, 3000], [0, -280]);
  const orbY2 = useTransform(scrollY, [0, 3000], [0, -180]);
  const gridY  = useTransform(scrollY, [0, 3000], [0, -120]);
  const orbY3  = useTransform(scrollY, [0, 3000], [0, -380]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const click = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setRipples(prev => [...prev.slice(-8), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 1000);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("click", click, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Dot grid — parallax layer 0.4x */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(40 60% 50% / 0.20) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          opacity: 0.55,
          y: gridY,
          willChange: "transform",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(40 60% 50% / 0.2) 3px, hsl(40 60% 50% / 0.2) 4px)`,
        }}
      />

      {/* Click ripples */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          initial={{ scale: 0, opacity: 0.65 }}
          animate={{ scale: 7, opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.2, 0, 0.4, 1] }}
          style={{
            position: "absolute",
            left: r.x - 36,
            top: r.y - 36,
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "1.5px solid hsl(40 60% 50% / 0.55)",
            background: "hsl(40 60% 50% / 0.06)",
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Second ripple ring per click (delayed) */}
      {ripples.map(r => (
        <motion.div
          key={r.id + "b"}
          initial={{ scale: 0, opacity: 0.35 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0, 0.3, 1], delay: 0.12 }}
          style={{
            position: "absolute",
            left: r.x - 28,
            top: r.y - 28,
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "1px solid hsl(40 60% 50% / 0.3)",
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Cursor orb — direct tracking, NO spring */}
      <motion.div
        style={{
          position: "absolute",
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle at center, hsl(40 60% 50% / 0.08) 0%, hsl(40 60% 50% / 0.02) 40%, transparent 65%)",
          filter: "blur(22px)",
          willChange: "transform",
        }}
      />

      {/* Top-left orb — parallax 0.93x */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-15%",
          width: 580,
          height: 580,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(40 55% 65% / 0.12) 0%, transparent 65%)",
          filter: "blur(55px)",
          y: orbY1,
          willChange: "transform",
        }}
        animate={{ scale: [1, 1.18, 0.9, 1], x: [0, 70, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right orb — parallax 0.94x */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-25%",
          right: "-12%",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(40 50% 35% / 0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
          y: orbY2,
          willChange: "transform",
        }}
        animate={{ scale: [1, 0.86, 1.16, 1], x: [0, -90, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center glow — parallax 0.87x */}
      <motion.div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          width: 400,
          height: 220,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, hsl(40 60% 50% / 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          y: orbY3,
          willChange: "transform",
        }}
        animate={{ scale: [1, 1.5, 0.75, 1], opacity: [0.5, 1, 0.4, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top-right accent orb */}
      <motion.div
        style={{
          position: "absolute",
          top: "3%",
          right: "-8%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(40 60% 50% / 0.07) 0%, transparent 65%)",
          filter: "blur(45px)",
          y: orbY2,
          willChange: "transform",
        }}
        animate={{ x: [0, -55, 20, 0], y: [0, 80, -30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

    </div>
  );
};

export default BackgroundOrbs;
