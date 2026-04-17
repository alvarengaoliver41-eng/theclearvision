import { useEffect, useRef, useState } from "react";
import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import { TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const stats = [
  { icon: Clock, value: 70, suffix: "%", label: "Reducción en tareas manuales" },
  { icon: TrendingUp, value: 3, suffix: "x", label: "Más conversiones de leads" },
  { icon: DollarSign, value: 40, suffix: "%", label: "Reducción de costos operativos" },
  { icon: Zap, value: 90, suffix: "%", label: "Respuestas más rápidas al cliente" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 35);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold gradient-gold-text tabular-nums">
      {count}{suffix}
    </div>
  );
}

const ROISection = () => {
  return (
    <section id="resultados" className="py-24 md:py-36 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-4 block font-medium">
              Resultados
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 tracking-tighter">
              Números que{" "}
              <span className="gradient-gold-text">hablan por sí solos</span>
            </h2>
            <p className="text-foreground/55 max-w-xl mx-auto font-body text-lg leading-relaxed">
              Nuestras soluciones generan mejoras concretas que se reflejan directamente
              en tu operación y tus ingresos.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {stats.map((s) => (
              <SpotlightCard key={s.label} className="rounded-2xl p-6 md:p-8 text-center">
                <div className="w-10 h-10 rounded-xl bg-gold-muted flex items-center justify-center mx-auto mb-4">
                  <s.icon size={18} className="text-gold" />
                </div>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="text-xs text-foreground/45 font-body mt-3 leading-snug">{s.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ROISection;
