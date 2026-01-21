import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import {
  MonitorSmartphone,
  Factory,
  Gauge,
  Zap,
  ShoppingCart,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    title: "Websites & Landing Pages",
    price: 120,
    icon: MonitorSmartphone,
    desc: "Ideal para PyMEs que quieren un sitio siempre actualizado, rápido y enfocado en conversiones.",
    includes: [
      "Ajustes de diseño (UI) y contenido",
      "Corrección de bugs y mejoras menores",
      "Optimización básica de performance y SEO técnico",
      "Mejoras continuas dentro del alcance actual",
      "Soporte y recomendaciones proactivas",
    ],
    bestFor: "Sitios corporativos, landing de campaña, portafolios, páginas informativas.",
  },
  {
    title: "Sistemas para maquila",
    price: 300,
    icon: Factory,
    desc: "Soporte y evolución para sistemas internos orientados a operación real (roles, trazabilidad, reportes).",
    includes: [
      "Mejoras de flujo y validaciones",
      "Ajustes de roles/permisos y pantallas",
      "Corrección de incidencias operativas",
      "Reportes, exportaciones y ajustes de captura",
      "Soporte a usuarios (orientación y fixes)",
    ],
    bestFor: "Registro de producción, trazabilidad, supervisión, capturas por turno/proceso. Si el sistema crece mucho o se vuelve crítico, se revisa tarifa.", 
    featured: true,
  },
  {
    title: "Dashboards & KPIs",
    price: 220,
    icon: Gauge,
    desc: "Evolución de dashboards para decisiones rápidas: métricas, filtros, visualización y limpieza de datos.",
    includes: [
      "Nuevas métricas/KPIs y ajustes de cálculo",
      "Mejoras de visualización (claridad y UX)",
      "Optimización de consultas y performance",
      "Ajustes de filtros por proceso/turno/línea",
      "Corrección de inconsistencias de datos",
    ],
    bestFor: "Tableros de producción, calidad, scrap, eficiencia, OEE, seguimiento diario.",
  },
  {
    title: "Automatización",
    price: 150,
    icon: Zap,
    desc: "Automatiza tareas repetitivas: flujos, validaciones, integraciones simples y scripts.",
    includes: [
      "Ajustes y mejoras a automatizaciones existentes",
      "Nuevas reglas/validaciones y refinamiento",
      "Integraciones simples (APIs/CSV/Sheets) según caso",
      "Mantenimiento preventivo de la automatización",
      "Corrección de fallas y monitoreo básico",
    ],
    bestFor: "Reducción de trabajo manual, menos errores, más velocidad operativa.",
  },
  {
    title: "E-commerce",
    price: 180,
    icon: ShoppingCart,
    desc: "Mejoras mensuales para tiendas: UX, bugs, rendimiento y ajustes de operación comercial.",
    includes: [
      "Cambios de UI/UX en PDP/checkout (según alcance)",
      "Corrección de bugs y ajustes de catálogo",
      "Optimización básica de conversión",
      "Ajustes de integración de pagos/envíos (según caso)",
      "Mejoras continuas dentro del alcance actual",
    ],
    bestFor: "Tiendas que requieren cambios frecuentes y soporte continuo.",
  },
];

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesan%20los%20planes%20mensuales.%20Quiero%20saber%20cu%C3%A1l%20plan%20me%20recomiendan%20y%20qu%C3%A9%20incluye%20para%20mi%20caso.";
const emailHref =
  "mailto:fronteracode@gmail.com?subject=Planes%20mensuales%20FronteraCode&body=Hola%20FronteraCode%2C%0A%0AMe%20interesan%20los%20planes%20mensuales.%20Mi%20proyecto%20es%3A%20%0A%0AObjetivo%3A%20%0AStack%20(si%20aplica)%3A%20%0AUrgencia%3A%20%0A%0AGracias.";

function Price({ value }: { value: number }) {
  return (
    <div className="flex items-end gap-2">
      <div className="text-4xl font-semibold tracking-tight">${value}</div>
      <div className="pb-1 text-sm text-white/60">USD / mes</div>
    </div>
  );
}

export default function MensualidadesPage() {
  return (
    <main className="min-h-screen bg-[#07060A] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 fc-grid opacity-80" />
        <div className="absolute inset-0 opacity-35">
          <div
            className="absolute -top-24 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(177,77,255,0.32), transparent 60%)",
            }}
          />
          <div
            className="absolute top-28 right-[-140px] h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,79,216,0.20), transparent 60%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal y={12}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  <Sparkles className="h-4 w-4 text-purple-300" />
                  Planes mensuales · Tu programador personal
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  Soporte, mejoras y evolución continua.
                  <span className="text-white/70"> Mes a mes.</span>
                </h1>

                <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                  Pagas una mensualidad fija y nos encargamos de mantener,
                  mejorar y optimizar tu producto durante el mes contratado.
                  Ideal si necesitas cambios frecuentes sin volver a cotizar cada ajuste.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
                    boxShadow: "0 0 30px rgba(177,77,255,0.20)",
                  }}
                >
                  Elegir plan por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:text-white hover:bg-white/10"
                >
                  Solicitar por email
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-white/50" />
                  <span>
                    Los planes cubren soporte y mejoras dentro del alcance del producto actual.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/50" />
                  <span>
                    Priorizamos solicitudes en un backlog del mes (trabajo visible y ordenado).
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-white/50" />
                  <span>
                    Desarrollo completamente nuevo o módulos grandes se cotizan aparte (si aplica).
                  </span>
                </div>
              </div>
            </div>

            {/* Card resumen */}
            <Reveal delay={0.06} y={10}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8">
                <div className="text-sm text-white/60">Cómo funciona</div>
                <div className="mt-4 grid gap-3">
                  {[
                    {
                      t: "1) Diagnóstico rápido",
                      d: "Entendemos tu sistema y definimos prioridades del mes.",
                    },
                    {
                      t: "2) Backlog mensual",
                      d: "Listamos mejoras y bugs con orden y criterios claros.",
                    },
                    {
                      t: "3) Ejecución + comunicación",
                      d: "Implementamos y te damos actualizaciones durante el mes.",
                    },
                    {
                      t: "4) Cierre del mes",
                      d: "Entregamos resumen de cambios y siguiente recomendación.",
                    },
                  ].map((i) => (
                    <div
                      key={i.t}
                      className="rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      <div className="font-semibold">{i.t}</div>
                      <p className="mt-1 text-white/70 text-sm leading-relaxed">
                        {i.d}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm text-white/60">Nota importante</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    Los precios son por mes y cubren soporte/mejoras dentro del alcance del
                    sistema actual. Si el mes requiere un módulo grande o un desarrollo nuevo,
                    te lo cotizamos por separado antes de hacerlo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <Section
        id="planes"
        title="Mensualidades"
        subtitle="Precios por mes. Soporte y mejoras continuas durante el mes contratado."
        glow
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.04} y={12}>
                <div
                  className={`rounded-2xl border bg-gradient-to-b p-6 transition hover:-translate-y-1 ${
                    p.featured
                      ? "border-purple-500/30 from-purple-500/10 to-white/4"
                      : "border-white/10 from-white/8 to-white/4"
                  } hover:border-white/20`}
                  style={{
                    boxShadow: p.featured
                      ? "0 0 40px rgba(177,77,255,0.14)"
                      : "0 0 40px rgba(177,77,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                        <Icon className="h-5 w-5 text-purple-300 drop-shadow-[0_0_10px_rgba(177,77,255,0.35)]" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60">Plan mensual</div>
                        <div className="text-lg font-semibold">{p.title}</div>
                      </div>
                    </div>

                    {p.featured ? (
                      <span className="text-xs rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-purple-200">
                        Recomendado
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-4">
                    <Price value={p.price} />
                    <p className="mt-3 text-white/70 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm font-semibold">Incluye</div>
                    <ul className="mt-3 grid gap-2 text-sm text-white/70">
                      {p.includes.map((it) => (
                        <li key={it} className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 text-sm text-white/60">
                    <span className="text-white/75 font-medium">Ideal para:</span>{" "}
                    {p.bestFor}
                  </p>

                  <div className="mt-6 grid gap-3">
                    <a
                      href={`${whatsappHref}%0A%0APlan%20de%20inter%C3%A9s%3A%20${encodeURIComponent(
                        p.title
                      )}%20(%24${p.price}%2Fmes)`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(177,77,255,0.85), rgba(255,79,216,0.85))",
                        boxShadow: "0 0 26px rgba(177,77,255,0.18)",
                      }}
                    >
                      Quiero este plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>

                    <a
                      href="#aclaraciones"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:text-white hover:bg-white/10"
                    >
                      Ver aclaraciones del plan
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

            <section className="mt-20">
        <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Cambios puntuales sin mensualidad
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
                Si no cuentas con un plan mensual, también puedes solicitar cambios
                específicos de forma puntual.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-3xl font-semibold text-white">
                $60 USD <span className="text-sm text-white/60 font-normal">/ pago único</span>
                </div>

                <ul className="mt-4 space-y-2 text-white/70">
                <li>• Hasta <span className="text-white">10 cambios</span> incluidos</li>
                <li>• Los cambios deben solicitarse <span className="text-white">en el mismo momento</span></li>
                <li>• No acumulables para futuras solicitudes</li>
                <li>• Aplica a ajustes visuales, textos, configuraciones y lógica ligera</li>
                <li>• Entrega dentro del mismo ciclo de trabajo acordado</li>
                </ul>

                <p className="mt-4 text-sm text-white/50">
                Ideal para ajustes rápidos cuando no se requiere soporte continuo.
                </p>
            </div>
            </div>
        </div>
        </section>



      {/* ACLARACIONES */}
      <Section
        id="aclaraciones"
        title="Qué cubre la mensualidad"
        subtitle="Claridad total para evitar malentendidos y proteger el ritmo del proyecto."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">Incluye (durante el mes)</div>
            <ul className="mt-4 grid gap-3 text-sm text-white/70">
              {[
                "Corrección de bugs y soporte operativo",
                "Mejoras incrementales sobre el sistema actual",
                "Ajustes de UI/UX razonables según el producto",
                "Optimización básica de performance",
                "Backlog mensual priorizado (transparente)",
                "Resumen de cambios al cierre del mes",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">No incluye (se cotiza aparte)</div>
            <ul className="mt-4 grid gap-3 text-sm text-white/70">
              {[
                "Módulos completamente nuevos o re-arquitectura grande",
                "Migraciones complejas (por ejemplo, de sistema completo) sin evaluación previa",
                "Integraciones enterprise que requieran licencias/infra adicional",
                "Re-diseño total de marca o UI a nivel “nuevo producto”",
                "Volumen extraordinario de trabajo fuera de lo razonable para un mes",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Si algo cae en “cotiza aparte”, primero te proponemos alcance, tiempos y costo.
              No se ejecuta nada sin tu aprobación.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-sm text-white/60">Siguiente paso</div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                Te recomendamos el plan ideal en 5–10 minutos.
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
                Dinos qué sistema tienes (o qué quieres construir) y te sugerimos el plan que mejor se ajusta,
                incluyendo prioridades del primer mes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition hover:scale-[1.03] active:scale-[0.98] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
                  boxShadow: "0 0 30px rgba(177,77,255,0.20)",
                }}
              >
                Hablar por WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:text-white hover:bg-white/10 w-full"
              >
                Ir al formulario
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs text-white/50 leading-relaxed">
            Nota: Todos los precios están en USD y son por mes. El alcance exacto se confirma en el diagnóstico.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-sm text-white/50 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} FronteraCode. Todos los derechos reservados.</p>
          <p>Ciudad Juárez · Tecnología de frontera</p>
        </div>
      </footer>
    </main>
  );
}
