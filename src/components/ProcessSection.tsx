import SectionReveal from "./SectionReveal";
import { Search, Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Analizamos tu negocio",
    desc: "Estudiamos tus procesos actuales, identificamos los cuellos de botella y entendemos tus objetivos de crecimiento.",
  },
  {
    icon: Lightbulb,
    num: "02",
    title: "Diseñamos la solución",
    desc: "Proponemos el sistema más efectivo para tu caso: landing page, automatización o ambas cosas.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Construimos e implementamos",
    desc: "Desarrollamos todo y lo integramos con tu operación actual. Vos no tenés que tocar nada técnico.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Lanzamos y medimos",
    desc: "Publicamos, monitoreamos los resultados y ajustamos hasta que todo funcione exactamente como debe.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 md:py-36 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-4 block font-medium">
              Cómo trabajamos
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-5">
              Un proceso{" "}
              <span className="gradient-gold-text">claro y sin vueltas</span>
            </h2>
            <p className="text-foreground/55 max-w-xl mx-auto font-body text-lg leading-relaxed">
              De la idea al resultado en pasos concretos. Sin reuniones eternas ni sorpresas.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-gold/30 via-gold/15 to-transparent" />

              <div className="space-y-8 md:space-y-10">
                {steps.map((step, idx) => (
                  <div key={step.num} className="flex gap-6 md:gap-8 items-start group relative">
                    <span className="absolute left-0 md:left-10 -top-5 text-[90px] md:text-[130px] font-display font-black leading-none text-foreground/[0.025] select-none pointer-events-none">
                      {step.num}
                    </span>

                    <div className="relative shrink-0 z-10">
                      <div className="w-16 h-16 rounded-2xl premium-card border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                        <step.icon size={22} className="text-gold" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold text-[10px] font-bold text-black flex items-center justify-center">
                        {idx + 1}
                      </span>
                    </div>

                    <div className="pt-3 relative z-10">
                      <h3 className="text-xl font-display font-bold mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-foreground/50 font-body leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
