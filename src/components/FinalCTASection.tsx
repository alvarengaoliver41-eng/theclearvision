import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ArrowRight, MessageCircle } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpg";

interface Props {
  onOpenModal: () => void;
}

const FinalCTASection = ({ onOpenModal }: Props) => (
  <section id="contacto" className="py-28 md:py-44 relative overflow-hidden">
    <div className="absolute top-0 w-full line-gold" />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] opacity-[0.02] pointer-events-none select-none">
      <img src={logoIcon} alt="" className="w-full h-full object-contain" />
    </div>

    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] rounded-full blur-[140px] opacity-[0.08] pointer-events-none"
      style={{ background: "hsl(var(--gold))" }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <SectionReveal>
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-5 block font-medium">
            Empezá hoy
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-[58px] font-display font-bold tracking-tighter leading-[1.04] mb-6">
            Tu negocio merece
            <br />
            <span className="gradient-gold-text">una visión más clara.</span>
          </h2>

          <p className="text-foreground/55 max-w-lg mx-auto font-body text-lg leading-relaxed mb-12">
            Agendá una reunión gratis. Analizamos tu negocio, te mostramos qué podemos hacer
            y te entregamos una propuesta sin compromiso.
          </p>

          <motion.button
            onClick={onOpenModal}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="btn-premium px-10 py-5 rounded-2xl text-lg font-semibold inline-flex items-center gap-3 mb-8 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Agendar diagnóstico gratuito
            <ArrowRight size={18} />
          </motion.button>

          <p className="text-foreground/35 font-body text-sm">
            O escribinos a{" "}
            <a
              href="mailto:contacto@theclearvision.xyz"
              className="text-gold/70 hover:text-gold transition-colors underline underline-offset-2"
            >
              contacto@theclearvision.xyz
            </a>
          </p>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default FinalCTASection;
