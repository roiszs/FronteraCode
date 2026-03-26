"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import {
  Gauge,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Filter,
  LineChart,
  LayoutDashboard,
  Eye,
  Database,
  SlidersHorizontal,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesa%20el%20servicio%20de%20Dashboards%20%26%20KPIs.%20Quiero%20cotizar%20mi%20proyecto.";

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

export default function DashboardsKpisPage() {
  const { lang } = useLang();

  const problems =
    lang === "en"
      ? [
          "You have data, but not clear visibility.",
          "Your team still depends on Excel, screenshots, or manual reports to understand what is happening.",
          "Important metrics are scattered or arrive too late to make good decisions.",
          "You need dashboards that show what matters, not just pretty charts.",
          "Your operation lacks clear indicators for follow-up, control, or improvement.",
          "You need faster and more useful visibility for business or operational decisions.",
        ]
      : [
          "Tienes datos, pero no visibilidad clara.",
          "Tu equipo todavía depende de Excel, capturas o reportes manuales para entender qué está pasando.",
          "Las métricas importantes están dispersas o llegan demasiado tarde para decidir bien.",
          "Necesitas dashboards que muestren lo que realmente importa, no solo gráficas bonitas.",
          "Tu operación carece de indicadores claros para seguimiento, control o mejora.",
          "Necesitas visibilidad más rápida y útil para decisiones de negocio u operación.",
        ];

  const includes =
    lang === "en"
      ? [
          "Dashboard design aligned with real decisions",
          "Relevant KPIs and metrics according to the business",
          "Clear charts, tables, and visual hierarchy",
          "Filters by process, area, line, shift, or relevant criteria",
          "Base data structure and logic according to scope",
          "Better visibility for control and follow-up",
          "Scalable structure for more indicators later",
          "Built to support action, not just presentation",
        ]
      : [
          "Diseño de dashboard alineado a decisiones reales",
          "KPIs y métricas relevantes según el negocio",
          "Gráficas, tablas y jerarquía visual clara",
          "Filtros por proceso, área, línea, turno o criterio relevante",
          "Estructura base de datos y lógica según alcance",
          "Mayor visibilidad para control y seguimiento",
          "Estructura escalable para más indicadores después",
          "Construido para apoyar acción, no solo presentación",
        ];

  const includeHighlights =
    lang === "en"
      ? [
          "Dashboard design aligned with real decisions",
          "Relevant KPIs and business metrics",
          "Clear charts, tables, and hierarchy",
          "Useful filters by relevant criteria",
          "Base data logic according to scope",
          "Better visibility for follow-up",
          "Scalable structure for future indicators",
          "Built for action, not decoration",
        ]
      : [
          "Diseño de dashboard alineado a decisiones reales",
          "KPIs y métricas relevantes del negocio",
          "Gráficas, tablas y jerarquía clara",
          "Filtros útiles por criterios relevantes",
          "Lógica base de datos según alcance",
          "Mayor visibilidad para seguimiento",
          "Estructura escalable para futuros indicadores",
          "Construido para acción, no para decorar",
        ];

  const tiers =
    lang === "en"
      ? [
          {
            name: "Base",
            desc: "For businesses that need a first dashboard with clear visibility into key metrics.",
            features: [
              "Base dashboard structure",
              "Essential KPIs",
              "Core charts and tables",
              "Basic filters",
              "Clearer visibility into a specific process or area",
              "A stronger foundation for data follow-up",
            ],
          },
          {
            name: "Growth",
            desc: "For businesses that need deeper visibility, more indicators, and better filtering or operational reading.",
            featured: true,
            features: [
              "Everything in Base",
              "More KPIs and views",
              "Better filtering and comparisons",
              "More complete operational visibility",
              "Stronger information structure",
              "Better support for faster decisions",
            ],
          },
          {
            name: "Premium",
            desc: "For businesses that need a more robust dashboard system with broader visibility and higher decision value.",
            features: [
              "Everything in Growth",
              "More complete dashboard architecture",
              "Broader metric structure",
              "Higher customization by operation",
              "More powerful reading and follow-up",
              "Better long-term visibility foundation",
            ],
          },
        ]
      : [
          {
            name: "Base",
            desc: "Para negocios que necesitan un primer dashboard con visibilidad clara sobre métricas clave.",
            features: [
              "Estructura base del dashboard",
              "KPIs esenciales",
              "Gráficas y tablas principales",
              "Filtros básicos",
              "Mayor visibilidad sobre un proceso o área específica",
              "Mejor base para seguimiento con datos",
            ],
          },
          {
            name: "Growth",
            desc: "Para negocios que necesitan mayor profundidad de visibilidad, más indicadores y mejor lectura operativa.",
            featured: true,
            features: [
              "Todo lo de Base",
              "Más KPIs y vistas",
              "Mejores filtros y comparaciones",
              "Visibilidad operativa más completa",
              "Estructura de información más sólida",
              "Mayor soporte para decisiones rápidas",
            ],
          },
          {
            name: "Premium",
            desc: "Para negocios que necesitan un sistema de dashboards más robusto, con mayor amplitud de visibilidad y valor de decisión.",
            features: [
              "Todo lo de Growth",
              "Arquitectura de dashboard más completa",
              "Estructura de métricas más amplia",
              "Mayor personalización por operación",
              "Lectura y seguimiento más potente",
              "Mejor base de visibilidad a largo plazo",
            ],
          },
        ];

  const faqs =
    lang === "en"
      ? [
          {
            q: "Is this only for manufacturing or can it work for other businesses too?",
            a: "It can work for manufacturing, operations, administration, sales, quality, e-commerce, and many other scenarios where visibility and KPIs matter.",
          },
          {
            q: "Can the dashboard include filters and different views?",
            a: "Yes. Depending on scope, we can include filters, segmented views, comparisons, and different ways to read the information.",
          },
          {
            q: "Do dashboards only show charts?",
            a: "No. A good dashboard can include charts, tables, KPI cards, comparisons, status views, and other elements that help decision-making.",
          },
          {
            q: "Can the dashboard grow later?",
            a: "Yes. The goal is to build a clear base that can evolve with more indicators, filters, views, or business logic over time.",
          },
        ]
      : [
          {
            q: "¿Esto es solo para maquila o también sirve para otros negocios?",
            a: "Sirve para maquila, operación, administración, ventas, calidad, e-commerce y muchos otros escenarios donde la visibilidad y los KPIs importan.",
          },
          {
            q: "¿El dashboard puede incluir filtros y diferentes vistas?",
            a: "Sí. Dependiendo del alcance, podemos incluir filtros, vistas segmentadas, comparaciones y distintas formas de leer la información.",
          },
          {
            q: "¿Los dashboards solo muestran gráficas?",
            a: "No. Un buen dashboard puede incluir gráficas, tablas, tarjetas KPI, comparativos, estados y otros elementos que ayuden a decidir.",
          },
          {
            q: "¿El dashboard puede crecer después?",
            a: "Sí. La idea es construir una base clara que pueda evolucionar con más indicadores, filtros, vistas o lógica de negocio con el tiempo.",
          },
        ];

  const includeCards = [
    { icon: LayoutDashboard, label: includes[0] },
    { icon: BarChart3, label: includes[2] },
    { icon: Filter, label: includes[3] },
    { icon: Database, label: includes[4] },
    { icon: Eye, label: includes[5] },
    { icon: LineChart, label: includes[7] },
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
                <Gauge className="h-4 w-4 text-purple-300" />
                {lang === "en" ? "Real visibility" : "Visibilidad real"}
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              Dashboards & KPIs
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {lang === "en"
                ? "We design dashboards that help businesses see what matters, understand performance more clearly, and make decisions with better data. Not just visuals, but useful visibility."
                : "Diseñamos dashboards que ayudan a los negocios a ver lo que importa, entender mejor su desempeño y tomar decisiones con mejor información. No solo visuales, sino visibilidad útil."}
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
            ? "A dashboard should not just show data. It should help people notice, understand, and act."
            : "Un dashboard no solo debe mostrar datos. Debe ayudar a notar, entender y actuar."
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
            ? "A clearer structure for metrics, follow-up, and decision-making."
            : "Una estructura más clara para métricas, seguimiento y toma de decisiones."
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
            ? "Three levels depending on visibility depth, KPI structure, and decision value."
            : "Tres niveles según profundidad de visibilidad, estructura de KPIs y valor para decisión."
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
                  ? "Let’s define the right dashboard for your decisions"
                  : "Definamos el dashboard correcto para tus decisiones"}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {lang === "en"
                  ? "Tell us what process, area, or business view you need to monitor. We will help you define the right KPI structure, scope, and dashboard level."
                  : "Cuéntanos qué proceso, área o vista del negocio necesitas monitorear. Te ayudamos a definir la estructura de KPIs, alcance y nivel correcto del dashboard."}
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