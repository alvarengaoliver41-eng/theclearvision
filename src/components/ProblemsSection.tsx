import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import { AlertTriangle, Clock, UserX, MailX, Cog, Globe } from "lucide-react";

const problems = [
  { icon: UserX, title: "Leads perdidos", desc: "Clientes potenciales que nunca reciben respuesta porque no hay un sistema de seguimiento." },
  { icon: Clock, title: "Tiempos de respuesta lentos", desc: "Tu competencia responde en minutos. Si tardás horas, perdés la venta." },
  { icon: Cog, title: "Tareas manuales repetitivas", desc: "Horas invertidas en procesos que podrían automatizarse por completo." },
  { icon: MailX, title: "Seguimiento pobre", desc: "Sin un sistema, los clientes se enfrían y las oportunidades se pierden." },
  { icon: AlertTriangle, title: "Flujos de trabajo ineficientes", desc: "Procesos desorganizados que cuestan tiempo, dinero y oportunidades." },
  { icon: Globe, title: "Presencia digital débil", desc: "Sin un sitio web profesional, tu negocio pierde credibilidad y visibilidad." },
];

const ProblemsSection = () => {
  return (
    <section id="problemas" className="py-24 md:py-32 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.25em] uppercase text-gold mb-4 block font-medium">
              El problema
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
              ¿Tu negocio está{" "}
              <span className="gradient-gold-text">perdiendo dinero</span>
              <br />sin que te des cuenta?
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto font-body text-lg leading-relaxed">
              La mayoría de las empresas en Paraguay operan con sistemas ineficientes que les cuestan
              tiempo, clientes y rentabilidad todos los días.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <SpotlightCard key={p.title} className="rounded-xl p-6 md:p-8 group">
                {/* Ghost number */}
                <span className="absolute top-3 right-4 text-[5rem] font-display font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-gold-muted transition-colors">
                    <p.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-3 tracking-tight">{p.title}</h3>
                  <p className="text-sm text-foreground/55 font-body leading-relaxed">{p.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#soluciones" className="btn-outline-gold px-8 py-3 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
              Ver nuestras soluciones
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ProblemsSection;
