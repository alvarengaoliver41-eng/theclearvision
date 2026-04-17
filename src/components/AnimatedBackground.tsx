import { motion } from "framer-motion";

const orbBaseClass = "absolute w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-30";
const transitionBase = { duration: 20, repeat: Infinity, ease: "linear" as const };

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <motion.div
        className={orbBaseClass}
        style={{
          top: "-8%",
          left: "-10%",
          background: "hsl(var(--gold) / 0.30)",
        }}
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0] }}
        transition={transitionBase}
      />

      <motion.div
        className={orbBaseClass}
        style={{
          top: "12%",
          right: "-8%",
          background: "hsl(var(--gold-light) / 0.24)",
        }}
        animate={{ x: [0, -90, 60, 0], y: [0, 110, -40, 0] }}
        transition={{ ...transitionBase, duration: 22 }}
      />

      <motion.div
        className={orbBaseClass}
        style={{
          bottom: "-12%",
          left: "18%",
          background: "hsl(var(--accent) / 0.22)",
        }}
        animate={{ x: [0, 80, -70, 0], y: [0, -60, 100, 0] }}
        transition={{ ...transitionBase, duration: 24 }}
      />

      <motion.div
        className={orbBaseClass}
        style={{
          bottom: "8%",
          right: "12%",
          background: "hsl(var(--gold-dark) / 0.24)",
        }}
        animate={{ x: [0, -120, 40, 0], y: [0, 70, -90, 0] }}
        transition={{ ...transitionBase, duration: 26 }}
      />
    </div>
  );
};

export default AnimatedBackground;
