import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const spring = { type: "spring" as const, stiffness: 40, damping: 15, mass: 1 };

const SectionReveal = ({ children, className = "", delay = 0 }: SectionRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ ...spring, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default SectionReveal;
