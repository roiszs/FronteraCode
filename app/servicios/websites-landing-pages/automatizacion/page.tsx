"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Workflow,
  RefreshCw,
  Settings2,
  Database,
  Clock3,
  Link2,
  Cpu,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesa%20el%20servicio%20de%20Automatizaci%C3%B3n.%20Quiero%20cotizar%20mi%20proyecto.";

const contactHref = "/#contacto";

function PriceBlock({
  price,
  lang,
}: {
  price: number;
  lang: "es" | "en";
}) {
  return (
    <div className="mt-5 flex items-end gap-2">
      <span className="text-4xl font-semibold tracking-tight">${price}</span>
      <span className="pb-1 text-sm text-white/55">
        {lang === "en" ? "USD / project" : "USD / proyecto"}
      </span>
    </div>
  );
}

export default function AutomatizacionPage() {
  const { lang } = useLang();

  const problems =
    lang === "en"
      ? [
          "Your team still spends too much time on repetitive manual tasks.",
          "Important steps depend on people remembering what to do instead of having a defined flow.",
          "You lose time moving data between Excel, forms, messages, or different tools.",
          "Your operation has repetitive processes that should already be automated.",
          "Errors happen because the workflow has too many manual touches.",
          "You need faster execution, fewer mistakes, and more consistency in daily operations.",
        ]
      : [
          "Tu equipo todavía invierte demasiado tiempo en tareas manuales repetitivas.",
          "Pasos importantes dependen de que alguien recuerde qué hacer en lugar de existir un flujo definido.",
          "Pierdes tiempo moviendo datos entre Excel, formularios, mensajes o diferentes herramientas.",
          "Tu operación tiene procesos repetitivos que ya deberían estar automatizados.",
          "Se cometen errores porque el flujo tiene demasiados puntos manuales.",
          "Necesitas más velocidad, menos errores y mayor consistencia en la operación diaria.",
        ];

  const includes =
    lang === "en"
      ? [
          "Automation design aligned with the real workflow",
          "Rules, validations, and action logic",
          "Reduction of repetitive manual work",
          "Simple integrations depending on scope",
          "Operational flow optimization",
          "Better consistency and fewer errors",
          "Scalable structure for future automations",
          "Built to save time and support real execution",
        ]
      : [
          "Diseño de automatización alineado al flujo real",
          "Reglas, validaciones y lógica de acción",
          "Reducción de trabajo manual repetitivo",
          "Integraciones simples según alcance",
          "Optimización de flujo operativo",
          "Mayor consistencia y menos errores",
          "Estructura escalable para futuras automatizaciones",
          "Construido para ahorrar tiempo y apoyar ejecución real",
        ];

  const includeHighlights =
    lang === "en"
      ? [
          "Automation design aligned with the real workflow",
          "Rules, validations, and action logic",
          "Reduction of repetitive manual work",
          "Simple integrations according to scope",
          "Operational flow optimization",
          "Better consistency and fewer errors",
          "Scalable structure for future automations",
          "Built to save time, not add complexity",
        ]
      : [
          "Diseño de automatización alineado al flujo real",
          "Reglas, validaciones y lógica de acción",
          "Reducción de trabajo manual repetitivo",
          "Integraciones simples según alcance",
          "Optimización de flujo operativo",
          "Mayor consistencia y menos errores",
          "Estructura escalable para futuras automatizaciones",
          "Construido para ahorrar tiempo, no agregar complejidad",
        ];

  const tiers =
    lang === "en"
      ? [
          {
            name: "Base",
            desc: "For businesses that need to automate a simple repetitive process and reduce manual effort quickly.",
            features: [
              "Base automation structure",
              "Simple rules and validations",
              "Contained repetitive flow",
              "A first step toward a more efficient process",
              "Cleaner and faster execution",
              "Better operational consistency",
            ],
          },
          {
            name: "Growth",
            desc: "For businesses that need deeper automation with more logic, more steps, and better operational impact.",
            featured: true,
            features: [
              "Everything in Base",
              "More process depth and flow control",
              "Stronger rules and validations",
              "Better process consistency",
              "Greater reduction of manual effort",
              "A more solid automation foundation",
            ],
          },
          {
            name: "Premium",
            desc: "For businesses that need a more robust automation model with stronger logic, flow, and scalability.",
            features: [
              "Everything in Growth",
              "More complete automation architecture",
              "More advanced operational logic",
              "Better support for business execution",
              "Higher customization by process",
              "Stronger long-term automation foundation",
            ],
          },
        ]
      : [
          {
            name: "Base",
            desc: "Para negocios que necesitan automatizar un proceso repetitivo simple y reducir esfuerzo manual rápidamente.",
            features: [
              "Estructura base de automatización",
              "Reglas y validaciones simples",
              "Flujo repetitivo contenido",
              "Primer paso hacia un proceso más eficiente",
              "Ejecución más limpia y rápida",
              "Mayor consistencia operativa",
            ],
          },
          {
            name: "Growth",
            desc: "Para negocios que necesitan una automatización más profunda, con más lógica, más pasos y mejor impacto operativo.",
            featured: true,
            features: [
              "Todo lo de Base",
              "Mayor profundidad de proceso y control de flujo",
              "Reglas y validaciones más sólidas",
              "Mayor consistencia del proceso",
              "Mayor reducción de esfuerzo manual",
              "Base de automatización más sólida",
            ],
          },
          {
            name: "Premium",
            desc: "Para negocios que necesitan un modelo de automatización más robusto, con mayor lógica, flujo y escalabilidad.",
            features: [
              "Todo lo de Growth",
              "Arquitectura de automatización más completa",
              "Lógica operativa más avanzada",
              "Mayor soporte a la ejecución del negocio",
              "Mayor personalización por proceso",
              "Base de automatización más fuerte a largo plazo",
            ],
          },
        ];

  const faqs =
    lang === "en"
      ? [
          {
            q: "What kind of things can be automated?",
            a: "Repetitive operational steps, validations, internal flows, notifications, simple data movement, and processes that currently depend too much on manual work.",
          },
          {
            q: "Is this only for large companies?",
            a: "No. Automation can help manufacturing, small businesses, retail, administration, sales, and many operational scenarios where time and consistency matter.",
          },
          {
            q: "Does automation always require complex integrations?",
            a: "Not always. Some automations are simple and contained. Others may involve integrations depending on the process and the project scope.",
          },
          {
            q: "Can automation grow later?",
            a: "Yes. The idea is to create a useful base that can evolve with more rules, more steps, more flows, or better operational support over time.",
          },
        ]
      : [
          {
            q: "¿Qué tipo de cosas se pueden automatizar?",
            a: "Pasos operativos repetitivos, validaciones, flujos internos, notificaciones, movimiento simple de datos y procesos que hoy dependen demasiado del trabajo manual.",
          },
          {
            q: "¿Esto es solo para empresas grandes?",
            a: "No. La automatización puede ayudar a maquila, negocios pequeños, retail, administración, ventas y muchos escenarios operativos donde el tiempo y la consistencia importan.",
          },
          {
            q: "¿La automatización siempre requiere integraciones complejas?",
            a: "No siempre. Algunas automatizaciones son simples y contenidas. Otras pueden involucrar integraciones según el proceso y el alcance del proyecto.",
          },
          {
            q: "¿La automatización puede crecer después?",
            a: "Sí. La idea es crear una base útil que pueda evolucionar con más reglas, más pasos, más flujos o mejor soporte operativo con el tiempo.",
          },
        ];

  const includeCards = [
    { icon: Workflow, label: includes[0] },
    { icon: Settings2, label: includes[1] },
    { icon: Clock3, label: includes[2] },
    { icon: Link2, label: includes[3] },
    { icon: RefreshCw, label: includes[4] },
    { icon: Cpu, label: includes[7] },
  ];

  return (
    <main className="min-h-screen bg-[#07060A] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 fc-grid opacity-80" />

        <div
          className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(177,77,255,0.28), transparent 60%)",
          }}
        />

        <div
          className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,79,216,0.18), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Reveal y={12}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/#servicios"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {lang === "en" ? "Back to services" : "Volver a servicios"}
              </a>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <Zap className="h-4 w-4 text-purple-300" />
                {lang === "en" ? "Operational speed" : "Velocidad operativa"}
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              {lang === "en" ? "Automation" : "Automatización"}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {lang === "en"
                ? "We design and build automations that reduce manual work, lower operational errors, and make execution faster and more consistent. Built for real workflows, not for decoration."
                : "Diseñamos y construimos automatizaciones que reducen trabajo manual, bajan errores operativos y hacen la ejecución más rápida y consistente. Hechas para flujos reales, no para adornar."}
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
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
                {lang === "en" ? "Request a quote" : "Solicitar cotización"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {lang === "en" ? "Go to contact form" : "Ir al formulario"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEMAS */}
      <Section
        id="problemas"
        title={lang === "en" ? "What this service solves" : "Qué resuelve este servicio"}
        subtitle={
          lang === "en"
            ? "When a process repeats too much, it should stop depending entirely on manual effort."
            : "Cuando un proceso se repite demasiado, debería dejar de depender por completo del esfuerzo manual."
        }
        glow
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((item, idx) => (
            <Reveal key={item} delay={idx * 0.04} y={10}>
              <div className="h-full min-h-[122px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-5 transition hover:border-purple-400/20 hover:from-white/10 hover:to-white/6">
                <div className="flex h-full items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2">
                    <ShieldCheck className="h-5 w-5 text-purple-300" />
                  </div>
                  <p className="text-[17px] leading-relaxed text-white/75">{item}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INCLUYE */}
      <Section
        id="incluye"
        title={lang === "en" ? "What is included" : "Qué incluye"}
        subtitle={
          lang === "en"
            ? "A stronger operational structure with less manual friction."
            : "Una estructura operativa más fuerte y con menos fricción manual."
        }
        glow
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {includeCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={idx * 0.04} y={10}>
                <div className="h-full min-h-[140px] sm:min-h-[165px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-5 sm:p-6 transition hover:border-purple-400/20 hover:-translate-y-1">
                  <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-300" />
                  </div>

                  <p className="mt-5 sm:mt-6 text-[16px] sm:text-[17px] leading-relaxed text-white/80">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08} y={10}>
          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
            <div
              className="pointer-events-none h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(177,77,255,0.35), transparent)",
              }}
            />
            <div className="grid gap-6 p-6 md:grid-cols-2">
              {[includeHighlights.slice(0, 4), includeHighlights.slice(4)].map(
                (group, groupIdx) => (
                  <div key={groupIdx} className="grid gap-4">
                    {group.map((item) => (
                      <div
                        key={item}
                        className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-purple-400/15 hover:bg-white/[0.04]"
                      >
                        <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-1.5 transition group-hover:border-purple-400/25">
                          <CheckCircle2 className="h-4 w-4 text-white/55 group-hover:text-purple-200" />
                        </div>
                        <span className="text-base leading-relaxed text-white/72">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* PAQUETES */}
      <Section
        id="paquetes"
        title={lang === "en" ? "Packages" : "Paquetes"}
        subtitle={
          lang === "en"
            ? "Three levels depending on process depth, logic, and automation impact."
            : "Tres niveles según profundidad de proceso, lógica e impacto de automatización."
        }
        glow
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <Reveal key={tier.name} delay={idx * 0.05} y={10}>
              <div
                className={`group h-full rounded-3xl border bg-gradient-to-b p-8 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
                  tier.featured
                    ? "border-purple-500/30 from-purple-500/10 to-white/4"
                    : "border-white/10 from-white/8 to-white/4"
                }`}
                style={{
                  boxShadow: tier.featured
                    ? "0 0 44px rgba(177,77,255,0.16)"
                    : "0 0 40px rgba(177,77,255,0.06)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">{tier.name}</h3>

                  {tier.featured ? (
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                      {lang === "en" ? "Recommended" : "Recomendado"}
                    </span>
                  ) : null}
                </div>


                <p className="mt-4 min-h-[92px] text-white/70 leading-relaxed">
                  {tier.desc}
                </p>

                <ul className="mt-5 grid gap-3 text-sm text-white/75">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${whatsappHref}%0A%0A${
                    lang === "en" ? "Package" : "Paquete"
                  }%20de%20inter%C3%A9s%3A%20${encodeURIComponent(
                    tier.name
                  )}%20(%24$%20USD)`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  {lang === "en" ? "Ask about this package" : "Preguntar por este paquete"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="FAQ"
        subtitle={
          lang === "en"
            ? "Common questions about this service."
            : "Preguntas comunes sobre este servicio."
        }
      >
        <div className="grid gap-4">
          {faqs.map((item, idx) => (
            <Reveal key={item.q} delay={idx * 0.04} y={10}>
              <div
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 transition hover:border-purple-400/25"
                style={{
                  boxShadow: "0 0 30px rgba(177,77,255,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-xl border border-purple-400/20 bg-purple-500/10 p-2">
                    <Sparkles className="h-4 w-4 text-purple-200" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight">{item.q}</h3>
                    <p className="mt-3 text-white/72 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 lg:flex-row lg:items-center">
            <div>
              <div className="text-sm text-white/60">
                {lang === "en" ? "Next step" : "Siguiente paso"}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {lang === "en"
                  ? "Let’s define the right automation for your process"
                  : "Definamos la automatización correcta para tu proceso"}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {lang === "en"
                  ? "Tell us what repetitive process you want to reduce, simplify, or accelerate. We will help you define the right automation scope and level."
                  : "Cuéntanos qué proceso repetitivo quieres reducir, simplificar o acelerar. Te ayudamos a definir el alcance y nivel correcto de automatización."}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium transition hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
                  boxShadow: "0 0 30px rgba(177,77,255,0.20)",
                }}
              >
                {lang === "en" ? "Talk to us" : "Hablar con nosotros"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href={contactHref}
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {lang === "en" ? "Open contact form" : "Abrir formulario"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white/80">FronteraCode</p>
              <p className="text-sm text-white/50">
                {lang === "en"
                  ? "Border tech · Real software for real operations."
                  : "Tecnología de frontera · Software real para operación real."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/45">
                  {lang === "en" ? "Follow us" : "Síguenos"}
                </span>
                <SocialLinks variant="icons" size={22} className="justify-end" />
              </div>

              <p className="text-xs text-white/45">
                © {new Date().getFullYear()} FronteraCode ·{" "}
                {lang === "en"
                  ? "Ciudad Juárez · Border technology"
                  : "Ciudad Juárez · Tecnología de frontera"}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}