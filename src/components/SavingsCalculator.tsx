import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Calculator, Users, Clock, DollarSign, TrendingDown, Zap } from "lucide-react";

const SALARIO_MINIMO = 2_899_048;
const HORAS_MES = 160;
const COSTO_HORA = SALARIO_MINIMO / HORAS_MES;

const formatGs = (n: number) => "Gs. " + Math.round(n).toLocaleString("es-PY");

const SliderInput = ({
  icon: Icon, label, value, min, max, step = 1, displayValue, onChange, minLabel, maxLabel,
}: {
  icon: typeof Users; label: string; value: number; min: number; max: number; step?: number;
  displayValue: string; onChange: (v: number) => void; minLabel: string; maxLabel: string;
}) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-body flex items-center gap-2 text-foreground/55 group-hover:text-foreground transition-colors">
          <Icon size={14} className="text-gold" />
          {label}
        </label>
        <span className="text-sm font-semibold font-display text-gold tabular-nums">{displayValue}</span>
      </div>
      <div className="relative h-8 flex items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-secondary/80" />
        <div className="absolute left-0 h-1.5 rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold)))" }} />
        <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
        <div className="absolute w-4 h-4 rounded-full bg-gold border-2 border-background shadow-lg pointer-events-none" style={{ left: `calc(${pct}% - 8px)` }} />
      </div>
      <div className="flex justify-between text-[10px] text-foreground/40 mt-1.5 font-body">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

const SavingsCalculator = () => {
  const [empleados, setEmpleados] = useState(3);
  const [horasRepetitivas, setHorasRepetitivas] = useState(15);
  const [leadsNoAtendidos, setLeadsNoAtendidos] = useState(10);
  const [ticketPromedio, setTicketPromedio] = useState(500_000);

  const savings = useMemo(() => {
    const horasAhorradas = horasRepetitivas * 0.7;
    const ahorroPorHoras = horasAhorradas * COSTO_HORA * empleados * 4;
    const leadsRecuperados = Math.round(leadsNoAtendidos * 0.3);
    const ingresoRecuperado = leadsRecuperados * ticketPromedio;
    const totalMensual = ahorroPorHoras + ingresoRecuperado;
    const totalAnual = totalMensual * 12;
    return { horasAhorradas: Math.round(horasAhorradas * 4), ahorroPorHoras, leadsRecuperados, ingresoRecuperado, totalMensual, totalAnual };
  }, [empleados, horasRepetitivas, leadsNoAtendidos, ticketPromedio]);

  return (
    <section id="calculadora" className="py-24 md:py-32 relative">
      <div className="absolute top-0 w-full line-gold" />
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-body tracking-[0.25em] uppercase text-gold mb-4 block font-medium">
              Calculadora de ahorro
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
              ¿Cuánto podrías{" "}
              <span className="gradient-gold-text">ahorrarte por mes?</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto font-body text-lg leading-relaxed">
              Ajustá los valores según tu negocio y descubrí el impacto real.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
            <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="premium-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold-muted flex items-center justify-center">
                  <Calculator size={18} className="text-gold" />
                </div>
                <h3 className="text-lg font-display font-semibold tracking-tight">Datos de tu negocio</h3>
              </div>
              <div className="space-y-7">
                <SliderInput icon={Users} label="Empleados en tareas operativas" value={empleados} min={1} max={20} displayValue={String(empleados)} onChange={setEmpleados} minLabel="1" maxLabel="20" />
                <SliderInput icon={Clock} label="Horas semanales en tareas repetitivas" value={horasRepetitivas} min={1} max={40} displayValue={`${horasRepetitivas}h`} onChange={setHorasRepetitivas} minLabel="1h" maxLabel="40h" />
                <SliderInput icon={TrendingDown} label="Leads sin responder por semana" value={leadsNoAtendidos} min={0} max={50} displayValue={String(leadsNoAtendidos)} onChange={setLeadsNoAtendidos} minLabel="0" maxLabel="50" />
                <SliderInput icon={DollarSign} label="Ticket promedio por venta" value={ticketPromedio} min={100000} max={5000000} step={50000} displayValue={formatGs(ticketPromedio)} onChange={setTicketPromedio} minLabel="Gs. 100.000" maxLabel="Gs. 5.000.000" />
              </div>
              <p className="text-[10px] text-foreground/40 mt-6 font-body">* Basado en salario mínimo vigente: {formatGs(SALARIO_MINIMO)}/mes</p>
            </motion.div>

            <div className="flex flex-col gap-5 lg:sticky lg:top-32">
              <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="premium-card rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "hsl(var(--gold))" }} />
                <Zap size={20} className="text-gold mx-auto mb-3 relative z-10" />
                <p className="text-sm text-foreground/55 font-body mb-1 relative z-10">Ahorro potencial mensual</p>
                <p className="text-4xl md:text-5xl font-display font-bold gradient-gold-text mb-1 relative z-10 tabular-nums">{formatGs(savings.totalMensual)}</p>
                <p className="text-sm text-foreground/55 font-body mb-6 relative z-10 tabular-nums">{formatGs(savings.totalAnual)} /año</p>
                <div className="h-px bg-border mb-5" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-display font-bold tabular-nums">{savings.horasAhorradas}h</p>
                    <p className="text-[11px] text-foreground/50 font-body mt-0.5">Horas ahorradas/mes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold tabular-nums">{savings.leadsRecuperados * 4}</p>
                    <p className="text-[11px] text-foreground/50 font-body mt-0.5">Leads recuperados/mes</p>
                  </div>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="premium-card rounded-xl p-5">
                  <Clock size={14} className="text-gold mb-2" />
                  <p className="text-[11px] text-foreground/50 font-body mb-1">Automatización</p>
                  <p className="text-base font-display font-bold tabular-nums">{formatGs(savings.ahorroPorHoras)}</p>
                </motion.div>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="premium-card rounded-xl p-5">
                  <TrendingDown size={14} className="text-gold mb-2" />
                  <p className="text-[11px] text-foreground/50 font-body mb-1">Leads recuperados</p>
                  <p className="text-base font-display font-bold tabular-nums">{formatGs(savings.ingresoRecuperado)}</p>
                </motion.div>
              </div>
              <a href="#contacto" className="btn-premium px-8 py-4 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 w-full">
                Quiero empezar a ahorrar
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default SavingsCalculator;
