import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import { Target, TrendingUp, Palette, Cpu, Users, MapPin } from "lucide-react";

const diferenciadores = [
  {
    icon: Target,
    title: "Soluciones a medida",
    desc: "Nada genérico. Cada sistema está pensado para tu negocio específico y tus objetivos reales.",
  },
  {
    icon: TrendingUp,
    title: "Obsesionados con el ROI",
    desc: "Todo lo que hacemos está orientado a mejorar tu rentabilidad. Si no genera resultado, no lo hacemos.",
  },
  {
    icon: Palette,
    title: "Diseño que comunica",
    desc: "Tu imagen digital importa. Creamos experiencias que transmiten profesionalismo y generan confianza.",
  },
  {
    icon: Cpu,
    title: "IA y automatización práctica",
    desc: "No tecnología de moda. Herramientas reales aplicadas a problemas concretos de tu operación.",
  },
  {
    icon: Users,
    title: "Somos tu equipo, no un proveedor",
    desc: "Trabajamos junto a vos como un socio estratégico comprometido con tu crecimiento.",
  },
  {
    icon: MapPin,
    title: "Entendemos el mercado paraguayo",
    desc: "Locales de Hernandarias. Conocemos el contexto, los clientes y la dinámica del mercado.",
  },
];

const DiferenciadoresSection = () => {
  return (
    <section id="diferenciales" className="py-24 md:py-36 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-4 block font-medium">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-5">
              No somos una agencia más.
              <br />
              <span className="gradient-gold-text">Somos tu ventaja competitiva.</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {diferenciadores.map((d) => (
              <SpotlightCard key={d.title} className="rounded-2xl p-7 group">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-gold-muted transition-colors">
                    <d.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-base font-display font-semibold mb-2 tracking-tight">{d.title}</h3>
                  <p className="text-sm text-foreground/50 font-body leading-relaxed">{d.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default DiferenciadoresSection;
