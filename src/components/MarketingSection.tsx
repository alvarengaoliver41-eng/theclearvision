import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import { Megaphone, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Users, text: "Más clientes potenciales llegando a tu negocio cada día" },
  { icon: TrendingUp, text: "Campañas optimizadas que mejoran mes a mes" },
  { icon: DollarSign, text: "Retorno de inversión medible desde el primer mes" },
  { icon: Megaphone, text: "Presencia profesional en TikTok, Facebook e Instagram" },
];

const MarketingSection = () => {
  return (
    <section id="marketing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 w-full line-gold" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionReveal>
            <div>
              <span className="text-xs font-body tracking-[0.25em] uppercase text-gold mb-4 block font-medium">
                Marketing Digital
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight tracking-tighter">
                No basta con tener una web.{" "}
                <span className="gradient-gold-text">Necesitás que te encuentren.</span>
              </h2>
              <p className="text-foreground/60 font-body text-lg leading-relaxed mb-8">
                Creamos y gestionamos campañas publicitarias en TikTok Ads y Facebook/Instagram Ads
                para que tu negocio llegue a las personas correctas, en el momento justo.
                Más visibilidad, más consultas, más ventas.
              </p>

              <div className="space-y-4 mb-10">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-muted flex items-center justify-center shrink-0">
                      <b.icon size={18} className="text-gold" />
                    </div>
                    <span className="text-sm font-body text-foreground/80">{b.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/595974897627?text=Hola%2C%20quiero%20saber%20más%20sobre%20sus%20servicios%20de%20marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-8 py-4 rounded-lg text-sm font-semibold inline-flex items-center gap-2 group"
              >
                Quiero más clientes
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-col gap-5">
              {[
                { platform: "TikTok Ads", stat: "3x", desc: "más alcance con videos cortos que conectan con tu audiencia" },
                { platform: "Facebook & Instagram Ads", stat: "70%", desc: "de los consumidores descubren marcas a través de redes sociales" },
                { platform: "Estrategia integral", stat: "24/7", desc: "tus anuncios trabajando para vos mientras te enfocás en tu negocio" },
              ].map((card, i) => (
                <SpotlightCard key={card.platform} className="rounded-xl p-6 flex items-start gap-5">
                  {/* Ghost number */}
                  <span className="absolute top-2 right-4 text-[5rem] font-display font-bold leading-none text-foreground/[0.03] select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-3xl md:text-4xl font-display font-bold text-gold shrink-0 min-w-[60px] relative z-10">
                    {card.stat}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-sm font-display font-semibold mb-1 tracking-tight">{card.platform}</h4>
                    <p className="text-xs text-foreground/55 font-body leading-relaxed">{card.desc}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
