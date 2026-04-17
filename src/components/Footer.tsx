import logoFull from "@/assets/logo-full.png";
import { MapPin, Mail } from "lucide-react";

interface Props {
  onOpenModal: () => void;
}

const Footer = ({ onOpenModal }: Props) => {
  return (
    <footer className="border-t border-white/[0.07] py-14">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-12">
          <div>
            <img src={logoFull} alt="ClearVision AI" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              Agencia digital en Paraguay. Páginas web, automatizaciones,
              apps y publicidad que generan resultados reales.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-display font-semibold mb-5">Contacto</h4>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
              <MapPin size={13} className="text-gold shrink-0" />
              Hernandarias, Paraguay
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
              <Mail size={13} className="text-gold shrink-0" />
              contacto@theclearvision.xyz
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-sm font-display font-semibold mb-5">¿Listo para crecer?</h4>
            <button
              onClick={onOpenModal}
              className="btn-premium px-6 py-3 rounded-xl text-sm font-semibold"
            >
              Agendar reunión gratuita
            </button>
          </div>
        </div>

        <div className="line-gold mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} ClearVision AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Inicio", href: "#hero" },
              { label: "Servicios", href: "#soluciones" },
              { label: "Proceso", href: "#proceso" },
              { label: "FAQ", href: "#faq" },
              { label: "Contacto", href: "#contacto" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-gold transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
