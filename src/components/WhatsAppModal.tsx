import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, MessageCircle, Check, User, Briefcase, Clock, Phone } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

type FormData = {
  nombre: string;
  negocio: string;
  rubro: string;
  servicio: string;
  horario: string;
  telefono: string;
};

const rubros = [
  "Restaurante / Food",
  "Clínica / Salud",
  "Comercio / Tienda",
  "Consultoría / Servicios",
  "Ecommerce",
  "Otro",
];

const servicios = [
  { id: "landing", label: "Landing page / Sitio web", icon: "🌐" },
  { id: "automatizacion", label: "Automatizaciones / Chatbot", icon: "⚡" },
  { id: "ambos", label: "Las dos cosas", icon: "🚀" },
  { id: "asesoria", label: "Quiero una asesoría primero", icon: "💬" },
];

const horarios = [
  "Mañana (8:00 – 12:00)",
  "Tarde (12:00 – 18:00)",
  "Noche (18:00 – 21:00)",
  "Cualquier horario",
];

const TOTAL_STEPS = 3;

const WhatsAppModal = ({ open, onClose }: Props) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    nombre: "",
    negocio: "",
    rubro: "",
    servicio: "",
    horario: "",
    telefono: "",
  });

  const update = (key: keyof FormData, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canAdvance = () => {
    if (step === 1) return form.nombre.trim().length > 0 && form.rubro.length > 0;
    if (step === 2) return form.servicio.length > 0;
    if (step === 3) return form.horario.length > 0 && form.telefono.trim().length > 0;
    return false;
  };

  const buildMessage = () => {
    const servicioLabel = servicios.find((s) => s.id === form.servicio)?.label ?? form.servicio;
    const lines = [
      `Hola ClearVision! 👋`,
      `Soy *${form.nombre}*${form.negocio ? ` de *${form.negocio}*` : ""} (${form.rubro}).`,
      `Me interesa: *${servicioLabel}*.`,
      `Mi horario preferido: *${form.horario}*.`,
      `Mi WhatsApp: *${form.telefono}*.`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/595974897627?text=${buildMessage()}`,
      "_blank",
      "noopener,noreferrer"
    );
    onClose();
  };

  const reset = () => {
    setStep(1);
    setForm({ nombre: "", negocio: "", rubro: "", servicio: "", horario: "", telefono: "" });
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-md premium-card rounded-2xl p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-gold-muted transition-colors"
                aria-label="Cerrar"
              >
                <X size={13} />
              </button>

              {/* Progress */}
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <div
                    key={i}
                    className="h-0.5 flex-1 rounded-full transition-all duration-400"
                    style={{
                      background: i < step ? "hsl(var(--gold))" : "hsl(var(--border))",
                    }}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="s1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-9 h-9 rounded-xl bg-gold-muted flex items-center justify-center">
                        <User size={15} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gold tracking-[0.2em] uppercase font-medium">Paso 1 de 3</p>
                        <h3 className="text-lg font-display font-bold tracking-tight">Tu negocio</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs text-foreground/50 font-body mb-1.5 block">Tu nombre *</label>
                        <input
                          type="text"
                          placeholder="Ej: Juan Pérez"
                          value={form.nombre}
                          onChange={(e) => update("nombre", e.target.value)}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-foreground/30"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-foreground/50 font-body mb-1.5 block">
                          Nombre del negocio <span className="text-foreground/30">(opcional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Panadería El Sol"
                          value={form.negocio}
                          onChange={(e) => update("negocio", e.target.value)}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-foreground/30"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-foreground/50 font-body mb-2 block">Rubro *</label>
                        <div className="grid grid-cols-2 gap-2">
                          {rubros.map((r) => (
                            <button
                              key={r}
                              onClick={() => update("rubro", r)}
                              className={`px-3 py-2.5 rounded-xl text-xs font-body text-left transition-all ${
                                form.rubro === r
                                  ? "bg-gold-muted border border-gold/40 text-gold"
                                  : "bg-secondary/50 border border-border text-foreground/60 hover:border-gold/25"
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="s2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-9 h-9 rounded-xl bg-gold-muted flex items-center justify-center">
                        <Briefcase size={15} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gold tracking-[0.2em] uppercase font-medium">Paso 2 de 3</p>
                        <h3 className="text-lg font-display font-bold tracking-tight">¿Qué necesitás?</h3>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {servicios.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => update("servicio", s.id)}
                          className={`w-full px-4 py-4 rounded-xl text-left flex items-center gap-4 transition-all ${
                            form.servicio === s.id
                              ? "bg-gold-muted border border-gold/40"
                              : "bg-secondary/50 border border-border hover:border-gold/25"
                          }`}
                        >
                          <span className="text-xl">{s.icon}</span>
                          <span
                            className={`text-sm font-body flex-1 ${
                              form.servicio === s.id ? "text-gold font-medium" : "text-foreground/65"
                            }`}
                          >
                            {s.label}
                          </span>
                          {form.servicio === s.id && (
                            <Check size={13} className="text-gold shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="s3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-9 h-9 rounded-xl bg-gold-muted flex items-center justify-center">
                        <Clock size={15} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gold tracking-[0.2em] uppercase font-medium">Paso 3 de 3</p>
                        <h3 className="text-lg font-display font-bold tracking-tight">Coordinemos</h3>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="text-xs text-foreground/50 font-body mb-1.5 block">Tu WhatsApp *</label>
                        <div className="relative">
                          <Phone size={13} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/35" />
                          <input
                            type="tel"
                            placeholder="+595 9XX XXX XXX"
                            value={form.telefono}
                            onChange={(e) => update("telefono", e.target.value)}
                            className="w-full bg-secondary/50 border border-border rounded-xl pl-10 pr-4 py-3 text-sm font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-foreground/30"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-foreground/50 font-body mb-2 block">Horario preferido *</label>
                        <div className="space-y-2">
                          {horarios.map((h) => (
                            <button
                              key={h}
                              onClick={() => update("horario", h)}
                              className={`w-full px-4 py-3 rounded-xl text-left text-sm font-body transition-all ${
                                form.horario === h
                                  ? "bg-gold-muted border border-gold/40 text-gold"
                                  : "bg-secondary/50 border border-border text-foreground/60 hover:border-gold/25"
                              }`}
                            >
                              {h}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className={`flex mt-8 gap-3 ${step > 1 ? "justify-between" : "justify-end"}`}>
                {step > 1 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary text-sm font-body text-foreground/55 hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={13} />
                    Atrás
                  </button>
                )}
                {step < TOTAL_STEPS ? (
                  <button
                    onClick={() => canAdvance() && setStep((s) => s + 1)}
                    disabled={!canAdvance()}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl btn-premium text-sm font-semibold disabled:opacity-35 disabled:cursor-not-allowed"
                  >
                    Continuar
                    <ArrowRight size={13} />
                  </button>
                ) : (
                  <button
                    onClick={() => canAdvance() && handleWhatsApp()}
                    disabled={!canAdvance()}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black font-medium disabled:opacity-35 disabled:cursor-not-allowed transition-opacity"
                    style={{ background: "#25D366" }}
                  >
                    <MessageCircle size={15} />
                    Abrir WhatsApp
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;
