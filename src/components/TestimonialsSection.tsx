import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora, Clínica Salud+",
    text: "Desde que implementamos el sistema de seguimiento automático, nuestros tiempos de respuesta bajaron un 80%. Los pacientes están más satisfechos y nosotros más organizados.",
  },
  {
    name: "Carlos Benítez",
    role: "Gerente, AgroSur Paraguay",
    text: "Clear Vision nos ayudó a automatizar procesos que nos costaban más de 30 horas semanales. Ahora nuestro equipo se enfoca en lo que realmente importa: crecer.",
  },
  {
    name: "Ana Riveros",
    role: "Fundadora, Boutique Esencia",
    text: "Nuestra nueva web no solo se ve increíble, sino que triplicó las consultas que recibimos. La inversión se pagó sola en menos de un mes.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.25em] uppercase text-gold mb-4 block font-medium">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
              Lo que dicen nuestros{" "}
              <span className="gradient-gold-text">clientes</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="premium-card rounded-2xl p-8 relative group hover:border-gold/25 flex flex-col"
              >
                <span className="absolute top-4 right-5 text-[5rem] font-display font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Quote size={24} className="text-gold/20 mb-5" />
                <p className="text-sm text-foreground/60 font-body leading-relaxed mb-6 flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-muted flex items-center justify-center">
                    <span className="text-xs font-display font-bold text-gold">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-display tracking-tight">{t.name}</p>
                    <p className="text-xs text-foreground/50 font-body">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
