import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

interface Props {
  onOpenModal: () => void;
}

const FloatingCTA = ({ onOpenModal }: Props) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 22 }}
        onClick={onOpenModal}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/25 hover:scale-110 transition-transform"
        aria-label="Agendar reunión por WhatsApp"
      >
        <MessageCircle size={24} className="text-black" />
      </motion.button>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-secondary border border-white/[0.08] flex items-center justify-center hover:border-gold/40 transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={14} className="text-gold" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;
