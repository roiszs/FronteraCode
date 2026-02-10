"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";

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
    bestFor:
      "Registro de producción, trazabilidad, supervisión, capturas por turno/proceso. Si el sistema crece mucho o se vuelve crítico, se revisa tarifa.",
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

function Price({
  value,
  lang,
}: {
  value: number;
  lang: "es" | "en";
}) {
  return (
    <div className="flex items-end gap-2">
      <div className="text-4xl font-semibold tracking-tight">${value}</div>
      <div className="pb-1 text-sm text-white/60">
        {lang === "en" ? "USD / month" : "USD / mes"}
      </div>
    </div>
  );
}

export default function MensualidadesPage() {
  const { lang, t } = useLang();

  // Traducción del contenido del plan (manteniendo títulos iguales)
  const plansLocalized = plans.map((p) => {
    if (lang === "es") return p;

    // EN version (misma estructura)
    const mapEN: Record<string, { desc: string; includes: string[]; bestFor: string }> = {
      "Websites & Landing Pages": {
        desc: "Perfect for SMBs that want a site that stays updated, fast, and conversion-focused.",
        includes: [
          "UI & content adjustments",
          "Bug fixes and minor improvements",
          "Basic performance optimization + technical SEO",
          "Ongoing improvements within the current scope",
          "Proactive support and recommendations",
        ],
        bestFor: "Corporate sites, campaign landings, portfolios, informational pages.",
      },
      "Sistemas para maquila": {
        desc: "Support and evolution for internal systems used in real operations (roles, traceability, reporting).",
        includes: [
          "Flow improvements and validations",
          "Roles/permissions and screen tweaks",
          "Operational incident fixes",
          "Reports, exports and data-capture adjustments",
          "User support (guidance + fixes)",
        ],
        bestFor:
          "Production logging, traceability, supervision, shift/process capture. If the system becomes large/critical, pricing may be reviewed.",
      },
      "Dashboards & KPIs": {
        desc: "Evolve dashboards for faster decisions: metrics, filters, visualization, and data cleanup.",
        includes: [
          "New KPIs/metrics and calculation adjustments",
          "Visualization improvements (clarity + UX)",
          "Query & performance optimization",
          "Filters by process/shift/line",
          "Fix data inconsistencies",
        ],
        bestFor: "Production, quality, scrap, efficiency, OEE, daily tracking dashboards.",
      },
      "Automatización": {
        desc: "Automate repetitive tasks: flows, validations, simple integrations and scripts.",
        includes: [
          "Improvements to existing automations",
          "New rules/validations and refinements",
          "Simple integrations (APIs/CSV/Sheets) as applicable",
          "Preventive maintenance for automations",
          "Fixes and basic monitoring",
        ],
        bestFor: "Reduce manual work, fewer errors, more operational speed.",
      },
      "E-commerce": {
        desc: "Monthly improvements for stores: UX, bug fixes, performance, and operational tweaks.",
        includes: [
          "UI/UX changes in PDP/checkout (within scope)",
          "Bug fixes and catalog adjustments",
          "Basic conversion optimization",
          "Payment/shipping integration tweaks (as applicable)",
          "Ongoing improvements within the current scope",
        ],
        bestFor: "Stores that need frequent changes and ongoing support.",
      },
    };

    const en = mapEN[p.title];
    return en
      ? { ...p, desc: en.desc, includes: en.includes, bestFor: en.bestFor }
      : p;
  });

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
                  {t("plans_badge")}
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  {t("plans_h1")} <span className="text-white/70"> {t("plans_h1_2")}</span>
                </h1>

                <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                  {t("plans_p")}
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
                  {t("plans_btn_wa")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:text-white hover:bg-white/10"
                >
                  {t("plans_btn_mail")}
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-white/50" />
                  <span>
                    {lang === "en"
                      ? "Plans cover support and improvements within the scope of the current product."
                      : "Los planes cubren soporte y mejoras dentro del alcance del producto actual."}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/50" />
                  <span>
                    {lang === "en"
                      ? "We prioritize requests in a monthly backlog (visible and organized work)."
                      : "Priorizamos solicitudes en un backlog del mes (trabajo visible y ordenado)."}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-white/50" />
                  <span>
                    {lang === "en"
                      ? "Large new modules or brand-new development are quoted separately (if needed)."
                      : "Desarrollo completamente nuevo o módulos grandes se cotizan aparte (si aplica)."}
                  </span>
                </div>
              </div>
            </div>

            {/* Card resumen */}
            <Reveal delay={0.06} y={10}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8">
                <div className="text-sm text-white/60">{t("how_title")}</div>
                <div className="mt-4 grid gap-3">
                  {[
                    { t: t("how_1_t"), d: t("how_1_d") },
                    { t: t("how_2_t"), d: t("how_2_d") },
                    { t: t("how_3_t"), d: t("how_3_d") },
                    { t: t("how_4_t"), d: t("how_4_d") },
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
                  <div className="text-sm text-white/60">
                    {lang === "en" ? "Important note" : "Nota importante"}
                  </div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {lang === "en"
                      ? "Prices are per month and cover support/improvements within the current system scope. If the month requires a large module or new build, we quote it separately before doing it."
                      : "Los precios son por mes y cubren soporte/mejoras dentro del alcance del sistema actual. Si el mes requiere un módulo grande o un desarrollo nuevo, te lo cotizamos por separado antes de hacerlo."}
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
        title={t("monthly_title")}
        subtitle={t("monthly_sub")}
        glow
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {plansLocalized.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.04} y={12}>
                <div
                  className={`rounded-2xl border bg-gradient-to-b p-6 transition hover:-translate-y-1 ${
                    (p as any).featured
                      ? "border-purple-500/30 from-purple-500/10 to-white/4"
                      : "border-white/10 from-white/8 to-white/4"
                  } hover:border-white/20`}
                  style={{
                    boxShadow: (p as any).featured
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
                        <div className="text-sm text-white/60">{t("plan_month")}</div>
                        <div className="text-lg font-semibold">{p.title}</div>
                      </div>
                    </div>

                    {(p as any).featured ? (
                      <span className="text-xs rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-purple-200">
                        {lang === "en" ? "Recommended" : "Recomendado"}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-4">
                    <Price value={p.price} lang={lang} />
                    <p className="mt-3 text-white/70 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm font-semibold">{t("includes")}</div>
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
                    <span className="text-white/75 font-medium">{t("ideal_for")}</span>{" "}
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
                      {lang === "en" ? "I want this plan" : "Quiero este plan"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>

                    <a
                      href="#aclaraciones"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:text-white hover:bg-white/10"
                    >
                      {lang === "en" ? "View plan clarifications" : "Ver aclaraciones del plan"}
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CAMBIOS PUNTUALES */}
      <section className="mt-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {t("punctual_title")}
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              {t("punctual_desc")}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-3xl font-semibold text-white">
                $60 USD{" "}
                <span className="text-sm text-white/60 font-normal">
                  {t("punctual_one")}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-white/70">
                <li>
                  • {lang === "en" ? "Up to " : "Hasta "}
                  <span className="text-white">10 {lang === "en" ? "changes" : "cambios"}</span>
                  {lang === "en" ? " included" : " incluidos"}
                </li>
                <li>
                  • {lang === "en" ? "All changes must be requested " : "Los cambios deben solicitarse "}
                  <span className="text-white">
                    {lang === "en" ? "at the same time" : "en el mismo momento"}
                  </span>
                </li>
                <li>• {lang === "en" ? "Not transferable to future requests" : "No acumulables para futuras solicitudes"}</li>
                <li>
                  • {lang === "en"
                    ? "Applies to UI, text, configurations, and light logic"
                    : "Aplica a ajustes visuales, textos, configuraciones y lógica ligera"}
                </li>
                <li>
                  • {lang === "en"
                    ? "Delivered within the agreed work cycle"
                    : "Entrega dentro del mismo ciclo de trabajo acordado"}
                </li>
              </ul>

              <p className="mt-4 text-sm text-white/50">{t("punctual_note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACLARACIONES */}
      <Section id="aclaraciones" title={t("clar_title")} subtitle={t("clar_sub")}>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">{t("clar_in")}</div>
            <ul className="mt-4 grid gap-3 text-sm text-white/70">
              {(
                lang === "en"
                  ? [
                      "Bug fixes and operational support",
                      "Incremental improvements on the current system",
                      "Reasonable UI/UX adjustments within the product",
                      "Basic performance optimization",
                      "Monthly prioritized backlog (transparent)",
                      "Change summary at month end",
                    ]
                  : [
                      "Corrección de bugs y soporte operativo",
                      "Mejoras incrementales sobre el sistema actual",
                      "Ajustes de UI/UX razonables según el producto",
                      "Optimización básica de performance",
                      "Backlog mensual priorizado (transparente)",
                      "Resumen de cambios al cierre del mes",
                    ]
              ).map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">{t("clar_out")}</div>
            <ul className="mt-4 grid gap-3 text-sm text-white/70">
              {(
                lang === "en"
                  ? [
                      "Completely new modules or major re-architecture",
                      "Complex full migrations without prior evaluation",
                      "Enterprise integrations requiring extra licensing/infra",
                      "Full rebrand or “new product” level UI redesign",
                      "Extraordinary workload beyond what’s reasonable for a month",
                    ]
                  : [
                      "Módulos completamente nuevos o re-arquitectura grande",
                      "Migraciones complejas (por ejemplo, de sistema completo) sin evaluación previa",
                      "Integraciones enterprise que requieran licencias/infra adicional",
                      "Re-diseño total de marca o UI a nivel “nuevo producto”",
                      "Volumen extraordinario de trabajo fuera de lo razonable para un mes",
                    ]
              ).map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white/40 mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              {lang === "en"
                ? "If something is ‘quoted separately’, we first propose scope, timeline and cost. Nothing is executed without your approval."
                : "Si algo cae en “cotiza aparte”, primero te proponemos alcance, tiempos y costo. No se ejecuta nada sin tu aprobación."}
            </p>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-sm text-white/60">{t("next_step")}</div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                {t("next_h2")}
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
                {t("next_p")}
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
                {t("next_btn_wa")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/80 transition hover:text-white hover:bg-white/10 w-full"
              >
                {t("next_btn_form")}
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs text-white/50 leading-relaxed">
            {lang === "en"
              ? "Note: All prices are in USD and are per month. Exact scope is confirmed during diagnosis."
              : "Nota: Todos los precios están en USD y son por mes. El alcance exacto se confirma en el diagnóstico."}
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 text-sm text-white/50 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} FronteraCode. Todos los derechos reservados.</p>
          <p>{lang === "en" ? "Ciudad Juárez · Border technology" : "Ciudad Juárez · Tecnología de frontera"}</p>
        </div>
      </footer>
    </main>
  );
}

