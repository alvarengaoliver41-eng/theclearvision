import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import { Target, Sparkles, TrendingUp, Palette, Cpu, Users } from "lucide-react";

const reasons = [
  { icon: Target, title: "Soluciones personalizadas", desc: "Cada negocio es único. Diseñamos sistemas a medida para tus necesidades específicas." },
  { icon: TrendingUp, title: "Enfoque en ROI", desc: "No implementamos tecnología por moda. Todo lo que hacemos está orientado a mejorar tu rentabilidad." },
  { icon: Palette, title: "Diseño premium", desc: "Tu imagen importa. Creamos experiencias digitales que transmiten profesionalismo y confianza." },
  { icon: Cpu, title: "Tecnología práctica", desc: "IA y automatización aplicadas de forma útil, no experimental. Resultados desde el primer día." },
  { icon: Users, title: "Atención estratégica", desc: "No somos solo proveedores. Somos socios estratégicos comprometidos con tu crecimiento." },
  { icon: Sparkles, title: "Visión moderna", desc: "Traemos las mejores prácticas globales adaptadas al mercado paraguayo." },
];

const WhyUsSection = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.25em] uppercase text-gold mb-4 block font-medium">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
              No somos una agencia más.{" "}
              <br className="hidden md:block" />
              Somos tu{" "}
              <span className="gradient-gold-text">ventaja competitiva</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((r) => (
              <SpotlightCard key={r.title} className="rounded-xl p-7 text-center group">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-secondary mx-auto flex items-center justify-center mb-5 group-hover:bg-gold-muted transition-colors">
                    <r.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-base font-display font-semibold mb-2 tracking-tight">{r.title}</h3>
                  <p className="text-sm text-foreground/55 font-body leading-relaxed">{r.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default WhyUsSection;
