import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

const BackgroundOrbs = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const click = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setRipples(prev => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 900);
    };
    window.addEventListener("click", click, { passive: true });
    return () => window.removeEventListener("click", click);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Dot grid — static, no parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(40 60% 50% / 0.18) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          opacity: 0.45,
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Click ripples */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          initial={{ scale: 0, opacity: 0.55 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0.4, 1] }}
          style={{
            position: "absolute",
            left: r.x - 36,
            top: r.y - 36,
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "1.5px solid hsl(40 60% 50% / 0.5)",
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Top-left orb */}
      <motion.div
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(40 55% 65% / 0.11) 0%, transparent 65%)",
          filter: "blur(50px)",
          willChange: "transform",
        }}
        animate={{ scale: [1, 1.12, 0.92, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right orb */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(40 50% 35% / 0.09) 0%, transparent 65%)",
          filter: "blur(55px)",
          willChange: "transform",
        }}
        animate={{ scale: [1, 0.88, 1.10, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

    </div>
  );
};

export default BackgroundOrbs;
