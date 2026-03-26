"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MonitorSmartphone,
  Factory,
  Gauge,
  Zap,
  ShoppingCart,
  Wrench,
  Clock3,
  Layers3,
  RefreshCw,
  LifeBuoy,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesan%20las%20mensualidades.%20Quiero%20saber%20qu%C3%A9%20plan%20mensual%20me%20conviene%20seg%C3%BAn%20mi%20proyecto.";

const contactHref = "/#contacto";

export default function MensualidadesPage() {
  const { lang } = useLang();

  const problems =
    lang === "en"
      ? [
          "Your product already exists, but it keeps requiring changes month after month.",
          "You need continuity, not just punctual fixes.",
          "Your business depends on a website, store, system, or dashboard that should keep evolving.",
          "You want someone to keep improving the product without starting from zero every time.",
          "You need support, improvements, and follow-up in a more organized monthly model.",
          "You want a digital product to stay useful, updated, and aligned with the business.",
        ]
      : [
          "Tu producto ya existe, pero sigue necesitando cambios mes con mes.",
          "Necesitas continuidad, no solo correcciones puntuales.",
          "Tu negocio depende de un sitio, tienda, sistema o dashboard que debe seguir evolucionando.",
          "Quieres que alguien siga mejorando el producto sin empezar desde cero cada vez.",
          "Necesitas soporte, mejoras y seguimiento dentro de un modelo mensual más ordenado.",
          "Quieres que tu producto digital siga siendo útil, actualizado y alineado con el negocio.",
        ];

  const includes =
    lang === "en"
      ? [
          "Monthly support on the current product",
          "Prioritized monthly backlog",
          "Fixes and incremental improvements",
          "Better continuity and follow-up",
          "More organized execution month by month",
          "Product evolution without starting over",
          "A clearer path for maintenance and growth",
          "A more stable relationship between business and product",
        ]
      : [
          "Soporte mensual sobre el producto actual",
          "Backlog mensual priorizado",
          "Correcciones y mejoras incrementales",
          "Mayor continuidad y seguimiento",
          "Ejecución más ordenada mes con mes",
          "Evolución del producto sin empezar de cero",
          "Ruta más clara para mantenimiento y crecimiento",
          "Una relación más estable entre negocio y producto",
        ];

  const includeHighlights =
    lang === "en"
      ? [
          "Monthly support on the current product",
          "Prioritized backlog for the month",
          "Fixes and incremental improvements",
          "Better continuity and follow-up",
          "Product evolution within the current scope",
          "More organized execution month by month",
          "A stronger maintenance path",
          "A more stable product/business relationship",
        ]
      : [
          "Soporte mensual sobre el producto actual",
          "Backlog del mes priorizado",
          "Correcciones y mejoras incrementales",
          "Mayor continuidad y seguimiento",
          "Evolución del producto dentro del alcance actual",
          "Ejecución más ordenada mes con mes",
          "Ruta más sólida de mantenimiento",
          "Relación más estable entre producto y negocio",
        ];

  const monthlyPlans =
    lang === "en"
      ? [
          {
            title: "Websites & Landing Pages",
            icon: MonitorSmartphone,
            desc: "For businesses that want their website to stay updated, refined, and useful month after month.",
            features: [
              "UI / content adjustments",
              "Light corrections and improvements",
              "Ongoing refinement of the current site",
              "Monthly continuity for the existing website",
            ],
            idealFor:
              "Corporate websites, landing pages, portfolios, and informational sites that need active upkeep.",
          },
          {
            title: "Manufacturing systems",
            icon: Factory,
            desc: "For internal systems that need continuity, fixes, and operational improvements over time.",
            features: [
              "Flow and usability improvements",
              "Operational fixes and refinements",
              "Support for roles, validations, and existing screens",
              "Monthly continuity for the current system",
            ],
            idealFor:
              "Production logging, traceability, operational capture, supervision, and internal process tools.",
            featured: true,
          },
          {
            title: "Dashboards & KPIs",
            icon: Gauge,
            desc: "For dashboards that need clearer metrics, better filters, and continuous evolution.",
            features: [
              "Metric and KPI adjustments",
              "Visualization and usability refinement",
              "Filter and reporting improvements",
              "Monthly continuity for the dashboard",
            ],
            idealFor:
              "Production, quality, scrap, efficiency, OEE, and business reporting dashboards.",
          },
          {
            title: "Automation",
            icon: Zap,
            desc: "For automations that need refinement, fixes, and ongoing stability over time.",
            features: [
              "Rules and logic adjustments",
              "Improvements to current automations",
              "Basic support and optimization",
              "Monthly continuity for active flows",
            ],
            idealFor:
              "Operational automations, repetitive tasks, simple integrations, and workflow support.",
          },
          {
            title: "E-commerce",
            icon: ShoppingCart,
            desc: "For stores that need ongoing adjustments, refinements, and commercial continuity month by month.",
            features: [
              "Store improvements and adjustments",
              "UI / UX refinement in current flows",
              "Support for catalog, checkout, or existing sections",
              "Monthly continuity for the active store",
            ],
            idealFor:
              "Stores with recurring operational or commercial updates and active monthly movement.",
          },
          {
            title: "Support & improvements",
            icon: Wrench,
            desc: "For products that already need a monthly continuity model instead of isolated change blocks.",
            features: [
              "Recurring support on the current product",
              "Monthly prioritized adjustments",
              "A more continuous improvement rhythm",
              "Better product follow-up over time",
            ],
            idealFor:
              "Businesses that already know they need ongoing continuity, not just punctual changes.",
          },
        ]
      : [
          {
            title: "Websites & Landing Pages",
            icon: MonitorSmartphone,
            desc: "Para negocios que quieren que su sitio siga actualizado, refinado y útil mes con mes.",
            features: [
              "Ajustes de UI / contenido",
              "Correcciones y mejoras ligeras",
              "Refinamiento continuo del sitio actual",
              "Continuidad mensual sobre la web existente",
            ],
            idealFor:
              "Sitios corporativos, landing pages, portafolios y páginas informativas que necesitan mantenimiento activo.",
          },
          {
            title: "Sistemas para maquila",
            icon: Factory,
            desc: "Para sistemas internos que necesitan continuidad, correcciones y mejoras operativas a lo largo del tiempo.",
            features: [
              "Mejoras de flujo y usabilidad",
              "Correcciones operativas y refinamientos",
              "Soporte sobre roles, validaciones y pantallas existentes",
              "Continuidad mensual sobre el sistema actual",
            ],
            idealFor:
              "Registro de producción, trazabilidad, capturas operativas, supervisión y herramientas internas de proceso.",
            featured: true,
          },
          {
            title: "Dashboards & KPIs",
            icon: Gauge,
            desc: "Para dashboards que necesitan métricas más claras, mejores filtros y evolución continua.",
            features: [
              "Ajustes de métricas y KPIs",
              "Refinamiento de visualización y usabilidad",
              "Mejoras en filtros y reportes",
              "Continuidad mensual sobre el dashboard",
            ],
            idealFor:
              "Dashboards de producción, calidad, scrap, eficiencia, OEE y reporteo de negocio.",
          },
          {
            title: "Automatización",
            icon: Zap,
            desc: "Para automatizaciones que necesitan refinamiento, correcciones y estabilidad constante con el tiempo.",
            features: [
              "Ajustes de reglas y lógica",
              "Mejoras sobre automatizaciones actuales",
              "Soporte básico y optimización",
              "Continuidad mensual sobre flujos activos",
            ],
            idealFor:
              "Automatizaciones operativas, tareas repetitivas, integraciones simples y apoyo de flujo de trabajo.",
          },
          {
            title: "E-commerce",
            icon: ShoppingCart,
            desc: "Para tiendas que necesitan ajustes, refinamiento y continuidad comercial mes con mes.",
            features: [
              "Mejoras y ajustes de tienda",
              "Refinamiento de UI / UX en flujos actuales",
              "Soporte sobre catálogo, checkout o secciones existentes",
              "Continuidad mensual sobre la tienda activa",
            ],
            idealFor:
              "Tiendas con movimiento comercial frecuente y necesidad de cambios operativos recurrentes.",
          },
          {
            title: "Soporte & mejoras",
            icon: Wrench,
            desc: "Para productos que ya necesitan un esquema mensual de continuidad en lugar de bloques aislados de cambios.",
            features: [
              "Soporte recurrente sobre el producto actual",
              "Ajustes mensuales priorizados",
              "Ritmo más continuo de mejora",
              "Mayor seguimiento del producto con el tiempo",
            ],
            idealFor:
              "Negocios que ya saben que necesitan continuidad activa y no solo cambios puntuales.",
          },
        ];

  const faqs =
    lang === "en"
      ? [
          {
            q: "What is the difference between this and Support & Improvements?",
            a: "Support & Improvements is for punctual or grouped change blocks. Monthly plans are for businesses that need continuity, follow-up, and recurring work month after month.",
          },
          {
            q: "Do monthly plans cover completely new development?",
            a: "Not normally. Monthly plans are focused on support and evolution within the current product scope. Large new modules or major new development are reviewed separately.",
          },
          {
            q: "Can I use monthly plans for an existing website, store, system, or dashboard?",
            a: "Yes. In fact, that is the ideal scenario: a current product that already exists and needs continuity, refinement, and monthly attention.",
          },
          {
            q: "How do I know if I need a monthly plan or a punctual block?",
            a: "If you only need a few specific changes, a punctual block is usually enough. If your product keeps generating work every month, then a monthly plan is the better fit.",
          },
        ]
      : [
          {
            q: "¿Cuál es la diferencia entre esto y Soporte & mejoras?",
            a: "Soporte & mejoras es para cambios puntuales o bloques agrupados. Las mensualidades son para negocios que necesitan continuidad, seguimiento y trabajo recurrente mes con mes.",
          },
          {
            q: "¿Las mensualidades cubren desarrollo completamente nuevo?",
            a: "Normalmente no. Las mensualidades están enfocadas en soporte y evolución dentro del alcance actual del producto. Módulos grandes nuevos o desarrollo mayor se revisan aparte.",
          },
          {
            q: "¿Puedo usar mensualidades para un sitio, tienda, sistema o dashboard que ya existe?",
            a: "Sí. De hecho, ese es el escenario ideal: un producto actual que ya existe y necesita continuidad, refinamiento y atención mensual.",
          },
          {
            q: "¿Cómo sé si necesito mensualidad o un bloque puntual?",
            a: "Si solo necesitas algunos cambios específicos, normalmente un bloque puntual es suficiente. Si tu producto sigue generando trabajo cada mes, entonces una mensualidad es la mejor opción.",
          },
        ];

  const includeCards = [
    { icon: Clock3, label: includes[0] },
    { icon: Layers3, label: includes[1] },
    { icon: RefreshCw, label: includes[2] },
    { icon: ShieldCheck, label: includes[3] },
    { icon: LifeBuoy, label: includes[4] },
    { icon: Wrench, label: includes[6] },
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
                <Sparkles className="h-4 w-4 text-purple-300" />
                {lang === "en" ? "Monthly continuity" : "Continuidad mensual"}
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              {lang === "en" ? "Monthly plans" : "Mensualidades"}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {lang === "en"
                ? "A monthly support model for products that already exist and need continuity, follow-up, and recurring evolution. Not punctual change blocks, but active monthly product continuity."
                : "Un modelo de acompañamiento mensual para productos que ya existen y necesitan continuidad, seguimiento y evolución recurrente. No bloques puntuales, sino continuidad activa del producto mes con mes."}
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
                {lang === "en" ? "Request information" : "Solicitar información"}
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
        title={lang === "en" ? "What this solves" : "Qué resuelve esto"}
        subtitle={
          lang === "en"
            ? "Some products do not need a new project. They need consistent monthly continuity."
            : "Algunos productos no necesitan un proyecto nuevo. Necesitan continuidad mensual consistente."
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
            ? "A clearer monthly model for continuity, support, and evolution."
            : "Un modelo mensual más claro para continuidad, soporte y evolución."
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

      {/* PLANES */}
      <Section
        id="planes"
        title={lang === "en" ? "Monthly plans by service" : "Planes mensuales por servicio"}
        subtitle={
          lang === "en"
            ? "A monthly continuity option for each core FronteraCode service."
            : "Una opción de continuidad mensual para cada servicio principal de FronteraCode."
        }
        glow
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {monthlyPlans.map((plan, idx) => {
            const Icon = plan.icon;

            return (
              <Reveal key={plan.title} delay={idx * 0.04} y={10}>
                <div
                  className={`group h-full rounded-3xl border bg-gradient-to-b p-8 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
                    plan.featured
                      ? "border-purple-500/30 from-purple-500/10 to-white/4"
                      : "border-white/10 from-white/8 to-white/4"
                  }`}
                  style={{
                    boxShadow: plan.featured
                      ? "0 0 44px rgba(177,77,255,0.16)"
                      : "0 0 40px rgba(177,77,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <Icon className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <div className="text-sm text-white/55">
                          {lang === "en" ? "Monthly continuity" : "Continuidad mensual"}
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {plan.title}
                        </h3>
                      </div>
                    </div>

                    {plan.featured ? (
                      <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                        {lang === "en" ? "Recommended" : "Recomendado"}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-5 min-h-[92px] text-white/70 leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="mt-5 grid gap-3 text-sm text-white/75">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm leading-relaxed text-white/60">
                    <span className="font-medium text-white/75">
                      {lang === "en" ? "Ideal for:" : "Ideal para:"}
                    </span>{" "}
                    {plan.idealFor}
                  </p>

                  <a
                    href={`${whatsappHref}%0A%0A${
                      lang === "en" ? "Monthly plan of interest" : "Plan mensual de interés"
                    }%3A%20${encodeURIComponent(plan.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    {lang === "en" ? "Ask about this plan" : "Preguntar por este plan"}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="FAQ"
        subtitle={
          lang === "en"
            ? "Common questions about monthly continuity."
            : "Preguntas comunes sobre continuidad mensual."
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
                  ? "Let’s define the right monthly continuity model for your product"
                  : "Definamos el modelo mensual correcto para tu producto"}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {lang === "en"
                  ? "Tell us what product you already have, what kind of recurring work it generates, and which service it belongs to. We will help you choose the best monthly route."
                  : "Cuéntanos qué producto ya tienes, qué tipo de trabajo recurrente genera y a qué servicio pertenece. Te ayudamos a elegir la mejor ruta mensual."}
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