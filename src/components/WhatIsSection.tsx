import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import { AlertTriangle, Clock, UserX, MailX, Cog, Globe } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Leads que se pierden",
    desc: "Clientes potenciales que nunca reciben respuesta porque no hay un sistema de seguimiento.",
  },
  {
    icon: Clock,
    title: "Respuestas lentas",
    desc: "Tu competencia responde en minutos. Si tardás horas, perdés la venta.",
  },
  {
    icon: Cog,
    title: "Tareas que se repiten",
    desc: "Horas invertidas en procesos que podrían automatizarse por completo.",
  },
  {
    icon: MailX,
    title: "Seguimiento inconsistente",
    desc: "Sin sistema, los clientes se enfrían y las oportunidades desaparecen.",
  },
  {
    icon: AlertTriangle,
    title: "Procesos desorganizados",
    desc: "Flujos que cuestan tiempo, dinero y oportunidades de venta cada día.",
  },
  {
    icon: Globe,
    title: "Sin presencia digital",
    desc: "Sin web profesional, tu negocio pierde credibilidad frente a la competencia.",
  },
];

const WhatIsSection = () => {
  return (
    <section id="quienes-somos" className="py-24 md:py-36 relative">
      <div className="absolute top-0 w-full line-gold" />

      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-5 block font-medium">
              Quiénes somos
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-display font-bold tracking-tighter leading-[1.06] mb-7">
              Una agencia digital con
              <br />
              <span className="gradient-gold-text">foco en tu resultado.</span>
            </h2>
            <p className="text-lg text-foreground/55 font-body leading-relaxed">
              Somos ClearVision AI, con base en Hernandarias, Paraguay. Combinamos diseño
              premium y automatización inteligente para ayudar a negocios a conseguir
              más clientes — sin depender de terceros ni perder tiempo en tareas que
              una máquina puede hacer mejor.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="text-center mb-12">
            <span className="text-xs font-body tracking-[0.3em] uppercase text-gold mb-4 block font-medium">
              El problema
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tighter">
              ¿Tu negocio está perdiendo dinero{" "}
              <span className="gradient-gold-text">sin darse cuenta?</span>
            </h3>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <SpotlightCard key={p.title} className="rounded-xl p-6 md:p-7 group">
                <span className="absolute top-3 right-4 text-[4.5rem] font-display font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-gold-muted transition-colors">
                    <p.icon size={20} className="text-gold" />
                  </div>
                  <h4 className="text-base font-display font-semibold mb-2 tracking-tight">{p.title}</h4>
                  <p className="text-sm text-foreground/50 font-body leading-relaxed">{p.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#soluciones"
              className="btn-outline-gold px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            >
              Ver cómo lo resolvemos
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default WhatIsSection;
