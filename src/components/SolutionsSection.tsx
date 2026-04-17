import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import {
  Globe2,
  Workflow,
  Megaphone,
  Bot,
  AppWindow,
  ArrowRight,
  Check,
} from "lucide-react";

interface Props {
  onOpenModal: () => void;
}

const featured = [
  {
    icon: Globe2,
    tag: "01",
    title: "Landing pages & sitios web",
    desc: "Páginas web de alto impacto que convierten visitantes en clientes. Diseño premium, velocidad y CTAs que funcionan.",
    features: [
      "Mobile-first y 100% responsive",
      "Optimizado para SEO y velocidad",
      "Integración con WhatsApp y formularios",
      "Entregado en menos de 7 días",
    ],
    span: "lg",
  },
  {
    icon: Workflow,
    tag: "02",
    title: "Automatizaciones con N8N",
    desc: "Conectamos tus herramientas y eliminamos el trabajo manual. Flujos que trabajan 24/7 sin que estés presente.",
    features: [
      "Integración entre apps y plataformas",
      "Seguimiento automático de leads",
      "Reportes y notificaciones automáticas",
    ],
    span: "sm",
  },
];

const secondary = [
  {
    icon: AppWindow,
    tag: "03",
    title: "Web apps a medida",
    desc: "Aplicaciones web funcionales para gestionar tu negocio — paneles, portales de clientes, dashboards y más.",
  },
  {
    icon: Megaphone,
    tag: "04",
    title: "Publicidad digital (Ads)",
    desc: "Campañas en Meta, TikTok y Google Ads orientadas a conversión real. Más visibilidad, más consultas, más ventas.",
  },
  {
    icon: Bot,
    tag: "05",
    title: "Chatbots con IA",
    desc: "Bots inteligentes para WhatsApp, Instagram y web que responden, califican y convierten leads automáticamente.",
  },
];

const ServiceCard = ({
  service,
  large,
  onOpenModal,
  delay = 0,
}: {
  service: (typeof featured)[number];
  large: boolean;
  onOpenModal: () => void;
  delay?: number;
}) => (
  <SectionReveal delay={delay}>
    <motion.div
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="premium-card rounded-2xl p-7 md:p-9 h-full flex flex-col relative overflow-hidden group"
    >
      <span className="absolute -right-1 -top-3 text-[7rem] md:text-[9rem] font-display font-black leading-none text-foreground/[0.03] select-none pointer-events-none">
        {service.tag}
      </span>

      <div className="relative z-10 flex flex-col h-full">
        <span className="text-[10px] font-body tracking-[0.28em] uppercase text-gold mb-4 font-medium">
          Servicio {service.tag}
        </span>

        <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
          <service.icon size={22} className="text-gold" />
        </div>

        <h3
          className={`font-display font-bold tracking-tighter mb-3 ${
            large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {service.title}
        </h3>
        <p className="text-foreground/55 font-body leading-relaxed mb-6 text-sm md:text-base">
          {service.desc}
        </p>

        <ul className="space-y-2.5 mb-7 flex-1">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={9} className="text-gold" />
              </div>
              <span className="text-sm font-body text-foreground/60">{f}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onOpenModal}
          className="btn-premium w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group/btn mt-auto"
        >
          Quiero este servicio
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  </SectionReveal>
);

const MiniCard = ({
  service,
  onOpenModal,
  delay = 0,
}: {
  service: (typeof secondary)[number];
  onOpenModal: () => void;
  delay?: number;
}) => (
  <SectionReveal delay={delay}>
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onClick={onOpenModal}
      className="premium-card rounded-2xl p-6 md:p-7 h-full flex flex-col relative overflow-hidden group cursor-pointer"
    >
      <span className="absolute -right-1 -top-2 text-[5.5rem] font-display font-black leading-none text-foreground/[0.03] select-none pointer-events-none">
        {service.tag}
      </span>

      <div className="relative z-10 flex flex-col h-full">
        <span className="text-[10px] font-body tracking-[0.28em] uppercase text-gold mb-3 font-medium">
          Servicio {service.tag}
        </span>

        <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
          <service.icon size={18} className="text-gold" />
        </div>

        <h3 className="text-lg font-display font-bold tracking-tighter mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-foreground/50 font-body leading-relaxed flex-1">
          {service.desc}
        </p>

        <div className="flex items-center gap-1.5 mt-5 text-gold text-xs font-body font-medium group-hover:gap-2.5 transition-all">
          Saber más <ArrowRight size={11} />
        </div>
      </div>
    </motion.div>
  </SectionReveal>
);

const SolutionsSection = ({ onOpenModal }: Props) => {
  return (
    <section id="soluciones" className="py-24 md:py-36 relative">
      <div className="absolute top-0 w-full line-gold" />

      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-4 block font-medium">
              Nuestros servicios
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-5">
              Todo lo que tu negocio{" "}
              <span className="gradient-gold-text">necesita crecer.</span>
            </h2>
            <p className="text-foreground/55 max-w-xl mx-auto font-body text-lg leading-relaxed">
              Desde la primera impresión digital hasta los sistemas que trabajan mientras dormís.
            </p>
          </div>
        </SectionReveal>

        {/* Bento grid — Row 1: featured (2-col) + small */}
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <ServiceCard
                service={featured[0]}
                large
                onOpenModal={onOpenModal}
                delay={0.05}
              />
            </div>
            <div className="lg:col-span-1">
              <ServiceCard
                service={featured[1]}
                large={false}
                onOpenModal={onOpenModal}
                delay={0.15}
              />
            </div>
          </div>

          {/* Row 2: 3 mini cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondary.map((s, i) => (
              <MiniCard
                key={s.tag}
                service={s}
                onOpenModal={onOpenModal}
                delay={0.08 * (i + 1)}
              />
            ))}
          </div>
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-foreground/40 font-body text-sm mb-4">
              ¿No sabés cuál te conviene? Lo definimos juntos.
            </p>
            <button
              onClick={onOpenModal}
              className="btn-outline-gold px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            >
              Agendar asesoría gratuita
            </button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default SolutionsSection;
