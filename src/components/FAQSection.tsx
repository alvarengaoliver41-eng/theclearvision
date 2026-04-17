import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta una landing page o automatización?",
    a: "Cada proyecto es diferente, por eso no manejamos precios fijos. En la reunión inicial analizamos tu caso y te presentamos una propuesta clara con alcance, precio y tiempos. Sin sorpresas.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar listo mi proyecto?",
    a: "Una landing page tarda entre 5 y 10 días hábiles. Una automatización, entre 7 y 15 días dependiendo de la complejidad. Siempre te damos un plazo claro antes de empezar.",
  },
  {
    q: "¿Necesito conocimientos técnicos para usar lo que crean?",
    a: "No. Todo lo que entregamos está diseñado para que lo puedas usar sin saber programación. Te explicamos cómo funciona y podés contactarnos ante cualquier duda.",
  },
  {
    q: "¿Mis datos y los de mis clientes están seguros?",
    a: "Sí. Trabajamos con plataformas reconocidas que cumplen estándares internacionales de seguridad. Nunca compartimos datos con terceros.",
  },
  {
    q: "¿Qué pasa si necesito hacer cambios después de lanzar?",
    a: "Incluimos ajustes menores durante los primeros 30 días sin costo adicional. Para cambios más grandes o nuevas funciones, coordinamos según lo que necesitás.",
  },
  {
    q: "¿Trabajan solo con negocios de Hernandarias o de toda Paraguay?",
    a: "Trabajamos con negocios de toda Paraguay y también del exterior. Nuestra base es Hernandarias pero operamos 100% en remoto sin ningún problema.",
  },
];

interface FAQItemProps {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}

const FAQItem = ({ q, a, open, onToggle }: FAQItemProps) => (
  <div
    className={`border rounded-xl transition-colors duration-200 ${
      open ? "border-gold/30 bg-white/[0.03]" : "border-white/[0.07] hover:border-white/[0.12]"
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
    >
      <span className="text-sm md:text-base font-display font-semibold tracking-tight pr-4">{q}</span>
      <div
        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
          open ? "bg-gold-muted" : "bg-secondary"
        }`}
      >
        {open ? (
          <Minus size={12} className="text-gold" />
        ) : (
          <Plus size={12} className="text-foreground/55" />
        )}
      </div>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-sm text-foreground/55 font-body leading-relaxed">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="py-24 md:py-36 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-4 block font-medium">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-5">
              Todo lo que necesitás{" "}
              <span className="gradient-gold-text">saber</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default FAQSection;
