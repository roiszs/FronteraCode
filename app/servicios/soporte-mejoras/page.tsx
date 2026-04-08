"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import {
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Bug,
  Gauge,
  RefreshCw,
  Settings2,
  PenTool,
  LifeBuoy,
  Layers3,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesa%20el%20servicio%20de%20Soporte%20%26%20mejoras.%20Quiero%20cotizar%20mi%20proyecto.";

const contactHref = "/#contacto";
const monthlyPlansHref = "/mensualidades";

export default function SoporteMejorasPage() {
  const { lang } = useLang();

  const problems =
    lang === "en"
      ? [
          "You only need a few specific changes, but do not want a monthly plan yet.",
          "Your website, store, dashboard, or system already works, but needs corrections or refinement.",
          "You have pending fixes or improvements accumulating with no clear execution path.",
          "You need to update something existing without starting a completely new project.",
          "Your product needs contained changes, not full ongoing support.",
          "You want a clear, structured way to request improvements in defined blocks.",
        ]
      : [
          "Solo necesitas ciertos cambios específicos, pero todavía no quieres un plan mensual.",
          "Tu sitio, tienda, dashboard o sistema ya funciona, pero necesita correcciones o refinamiento.",
          "Tienes pendientes acumulados de ajustes o mejoras sin una ruta clara de ejecución.",
          "Necesitas actualizar algo existente sin iniciar un proyecto completamente nuevo.",
          "Tu producto necesita cambios contenidos, no un soporte continuo completo.",
          "Quieres una forma clara y estructurada de pedir mejoras en bloques definidos.",
        ];

  const includes =
    lang === "en"
      ? [
          "Bug fixing and contained issue resolution",
          "Visual and UX adjustments",
          "Small flow and functionality improvements",
          "Basic cleanup and optimization",
          "Support for existing sections or modules",
          "Grouped improvements in a defined block of work",
          "Clearer product refinement without ongoing commitment",
          "A practical alternative before moving into a monthly plan",
        ]
      : [
          "Corrección de bugs e incidencias contenidas",
          "Ajustes visuales y de experiencia de usuario",
          "Mejoras pequeñas de flujo y funcionalidad",
          "Limpieza y optimización básica",
          "Soporte sobre secciones o módulos existentes",
          "Mejoras agrupadas dentro de un bloque definido de trabajo",
          "Refinamiento más claro del producto sin compromiso continuo",
          "Una alternativa práctica antes de pasar a una mensualidad",
        ];

  const includeHighlights =
    lang === "en"
      ? [
          "Bug fixing and contained issue resolution",
          "Visual and UX adjustments",
          "Small flow and functionality improvements",
          "Basic cleanup and optimization",
          "Support for existing sections or modules",
          "Grouped improvements in a defined block",
          "No monthly commitment required",
          "A bridge before moving into ongoing support",
        ]
      : [
          "Corrección de bugs e incidencias contenidas",
          "Ajustes visuales y de experiencia de usuario",
          "Mejoras pequeñas de flujo y funcionalidad",
          "Limpieza y optimización básica",
          "Soporte sobre secciones o módulos existentes",
          "Mejoras agrupadas dentro de un bloque definido",
          "Sin compromiso mensual obligatorio",
          "Una ruta previa antes de pasar a soporte continuo",
        ];

  const tiers =
    lang === "en"
      ? [
          {
            name: "Punctual",
            qty: "1 change",
            desc: "For businesses that only need one specific correction or contained improvement.",
            features: [
              "1 punctual change",
              "Ideal for visual adjustments, text, config, or a small fix",
              "Applies to an existing product",
              "Clear, contained scope",
              "Delivered within the agreed work cycle",
              "No monthly commitment required",
            ],
          },
          {
            name: "Operational block",
            qty: "Up to 10 changes",
            desc: "For businesses with several pending adjustments that can be grouped into one organized block.",
            featured: true,
            features: [
              "Up to 10 changes",
              "Requested within the same block",
              "Ideal for websites, stores, dashboards, or internal systems",
              "Better balance between refinement and cost",
              "Useful for cleanup, fixes, and contained improvements",
              "No recurring plan required",
            ],
          },
          {
            name: "Extended block",
            qty: "Up to 20 changes",
            desc: "For products that need a broader round of improvements without moving into a monthly support model yet.",
            features: [
              "Up to 20 changes",
              "Requested within the same defined block",
              "Better for a deeper refinement pass",
              "Good when the product already has multiple pending items",
              "Still focused on existing product scope",
              "A step before monthly continuity if needed later",
            ],
          },
        ]
      : [
          {
            name: "Puntual",
            qty: "1 cambio",
            desc: "Para negocios que solo necesitan una corrección específica o una mejora contenida.",
            features: [
              "1 cambio puntual",
              "Ideal para ajuste visual, texto, configuración o una corrección pequeña",
              "Aplica sobre un producto existente",
              "Alcance claro y contenido",
              "Entrega dentro del ciclo de trabajo acordado",
              "Sin compromiso mensual obligatorio",
            ],
          },
          {
            name: "Bloque operativo",
            qty: "Hasta 10 cambios",
            desc: "Para negocios que ya tienen varios pendientes y pueden agruparlos en un bloque ordenado de trabajo.",
            featured: true,
            features: [
              "Hasta 10 cambios",
              "Se solicitan dentro del mismo bloque",
              "Ideal para sitios, tiendas, dashboards o sistemas internos",
              "Mejor balance entre refinamiento y costo",
              "Útil para limpieza, correcciones y mejoras contenidas",
              "Sin necesidad de un plan recurrente",
            ],
          },
          {
            name: "Bloque extendido",
            qty: "Hasta 20 cambios",
            desc: "Para productos que necesitan una pasada más amplia de mejoras sin entrar todavía a un modelo mensual.",
            features: [
              "Hasta 20 cambios",
              "Se solicitan dentro del mismo bloque definido",
              "Mejor para una intervención de refinamiento más profunda",
              "Útil cuando el producto ya tiene varios pendientes acumulados",
              "Sigue enfocado en el alcance del producto actual",
              "Paso previo antes de continuidad mensual, si luego se requiere",
            ],
          },
        ];

  const faqs =
    lang === "en"
      ? [
          {
            q: "What counts as a change?",
            a: "A change can be a contained visual adjustment, text update, configuration change, small bug fix, or a light improvement within an existing section or flow.",
          },
          {
            q: "Can I use this for something that already exists?",
            a: "Yes. This service is specifically designed for websites, stores, dashboards, and systems that are already built and only need changes or refinement.",
          },
          {
            q: "Does this include completely new modules?",
            a: "No. Large new modules, re-architecture, migrations, or brand-new development are handled separately because they go beyond a contained change block.",
          },
          {
            q: "What if I need ongoing support every month?",
            a: "In that case, your best option is our monthly plans. This page is for punctual or grouped changes, not continuous monthly continuity.",
          },
        ]
      : [
          {
            q: "¿Qué cuenta como un cambio?",
            a: "Un cambio puede ser un ajuste visual contenido, actualización de textos, cambio de configuración, corrección pequeña de bug o mejora ligera dentro de una sección o flujo existente.",
          },
          {
            q: "¿Esto aplica para algo que ya existe?",
            a: "Sí. Este servicio está pensado precisamente para sitios, tiendas, dashboards y sistemas que ya están construidos y solo necesitan cambios o refinamiento.",
          },
          {
            q: "¿Esto incluye módulos completamente nuevos?",
            a: "No. Módulos grandes nuevos, re-arquitectura, migraciones o desarrollo desde cero se manejan aparte porque van más allá de un bloque contenido de cambios.",
          },
          {
            q: "¿Y si necesito soporte continuo todos los meses?",
            a: "En ese caso, tu mejor opción son nuestras mensualidades. Esta página es para cambios puntuales o agrupados, no para continuidad mensual completa.",
          },
        ];

  const includeCards = [
    { icon: Bug, label: includes[0] },
    { icon: PenTool, label: includes[1] },
    { icon: Settings2, label: includes[2] },
    { icon: Gauge, label: includes[3] },
    { icon: LifeBuoy, label: includes[4] },
    { icon: Layers3, label: includes[5] },
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
                <Wrench className="h-4 w-4 text-purple-300" />
                {lang === "en" ? "Contained changes" : "Cambios contenidos"}
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              {lang === "en" ? "Support & improvements" : "Soporte & mejoras"}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {lang === "en"
                ? "We help you refine what already exists through punctual changes or defined blocks of improvements. A practical option for products that need adjustments, not full monthly continuity."
                : "Te ayudamos a refinar lo que ya existe por medio de cambios puntuales o bloques definidos de mejoras. Una opción práctica para productos que necesitan ajustes, no continuidad mensual completa."}
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

            <div className="mt-5">
              <a
                href={monthlyPlansHref}
                className="group inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-white/62 transition hover:border-purple-400/20 hover:bg-purple-500/[0.06] hover:text-white"
              >
                <span>
                  {lang === "en"
                    ? "Need monthly continuity instead?"
                    : "¿Necesitas continuidad mensual en lugar de esto?"}
                </span>
                <span className="text-purple-300 transition group-hover:translate-x-0.5">
                  →
                </span>
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
            ? "Not every product needs a monthly plan. Sometimes it just needs a defined block of real improvements."
            : "No todo producto necesita una mensualidad. A veces solo necesita un bloque definido de mejoras reales."
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
            ? "A practical model for punctual changes and defined improvement blocks."
            : "Un modelo práctico para cambios puntuales y bloques definidos de mejora."
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
            ? "Three ways to handle contained improvements without moving directly into a monthly support model."
            : "Tres formas de manejar mejoras contenidas sin entrar directamente a un modelo mensual."
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
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{tier.name}</h3>
                    <div className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/65">
                      {tier.qty}
                    </div>
                  </div>

                  {tier.featured ? (
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                      {lang === "en" ? "Recommended" : "Recomendado"}
                    </span>
                  ) : null}
                </div>

                <p className="mt-5 min-h-[92px] text-white/70 leading-relaxed">
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
                  )}%20-%20${encodeURIComponent(tier.qty)}`}
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
                  ? "Let’s define the right block of changes for your product"
                  : "Definamos el bloque correcto de cambios para tu producto"}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {lang === "en"
                  ? "Tell us what product you already have, what changes you need, and whether it is a punctual request or a grouped block. We will help you choose the best route."
                  : "Cuéntanos qué producto ya tienes, qué cambios necesitas y si se trata de algo puntual o de un bloque agrupado. Te ayudamos a elegir la mejor ruta."}
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