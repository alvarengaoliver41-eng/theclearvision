import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

const spring = { type: "spring" as const, stiffness: 40, damping: 15, mass: 1 };

interface Props {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: Props) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] opacity-[0.025] pointer-events-none select-none">
        <img src={logoIcon} alt="" className="w-full h-full object-contain" />
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[280px] rounded-full blur-[70px] opacity-[0.11] pointer-events-none"
        style={{ background: "hsl(var(--gold))" }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-body tracking-[0.25em] uppercase text-gold font-medium">
                Hernandarias, Paraguay
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.35 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-display font-black leading-[1.02] tracking-tighter text-center mb-6"
          >
            Más clientes.{" "}
            <span className="gradient-gold-text">Más ventas.</span>
            <br />
            Menos esfuerzo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.5 }}
            className="text-lg md:text-xl text-foreground/55 max-w-2xl mx-auto text-center font-body leading-relaxed mb-14"
          >
            Diseñamos páginas web que convierten y automatizaciones que trabajan solas —
            para que tu negocio crezca sin que estés encima de todo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button
              onClick={onOpenModal}
              className="btn-premium px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Agendar diagnóstico gratuito
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#quienes-somos"
              className="btn-outline-gold px-8 py-4 rounded-xl text-base font-semibold bg-black/20 backdrop-blur-xl w-full sm:w-auto text-center"
            >
              Conocer más
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...spring, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 text-center"
          >
            {[
              { value: "2", label: "Servicios especializados" },
              { value: "100%", label: "Enfoque en resultados" },
              { value: "24/7", label: "Automatizaciones activas" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-display font-bold gradient-gold-text">{s.value}</p>
                <p className="text-xs text-foreground/40 font-body mt-1.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#quienes-somos"
          className="flex flex-col items-center gap-2 text-foreground/25 hover:text-gold transition-colors"
        >
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
