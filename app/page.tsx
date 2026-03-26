"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import FAQ from "@/src/components/FAQ";
import ContactForm from "@/src/components/ContactForm";
import Image from "next/image";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import Link from "next/link";

import {
  MonitorSmartphone,
  Factory,
  Gauge,
  Zap,
  ShoppingCart,
  Wrench,
  Search,
  PenTool,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  const { lang, t } = useLang();

  const services =
    lang === "es"
      ? [
          {
            title: "Websites & Landing Pages",
            desc: "Sitios modernos, rápidos y optimizados para conversión.",
            icon: MonitorSmartphone,
            href: "/servicios/websites-landing-pages",
          },
          {
            title: "Sistemas para maquila",
            desc: "Registro de producción, trazabilidad, roles y reportes.",
            icon: Factory,
          },
          {
            title: "Dashboards & KPIs",
            desc: "Indicadores claros para decidir con datos, no con suposiciones.",
            icon: Gauge,
          },
          {
            title: "Automatización",
            desc: "Menos tareas manuales, menos errores, más velocidad.",
            icon: Zap,
          },
          {
            title: "E-commerce",
            desc: "Catálogo, pagos y experiencia de compra sólida.",
            icon: ShoppingCart,
            href: "/servicios/websites-landing-pages/ecommerce",
          },
          {
            title: "Soporte & mejoras",
            desc: "Mantenimiento y evolución continua del producto.",
            icon: Wrench,
            href: "/servicios/websites-landing-pages/soporte-mejoras",
          },
        ]
      : [
          {
            title: "Websites & Landing Pages",
            desc: "Modern, fast, conversion-focused websites.",
            icon: MonitorSmartphone,
            href: "/servicios/websites-landing-pages",
          },
          {
            title: "Manufacturing systems",
            desc: "Production logging, traceability, roles and reporting.",
            icon: Factory,
          },
          {
            title: "Dashboards & KPIs",
            desc: "Clear metrics to decide with data, not guesses.",
            icon: Gauge,
          },
          {
            title: "Automation",
            desc: "Less manual work, fewer errors, more speed.",
            icon: Zap,
          },
          {
            title: "E-commerce",
            desc: "Catalog, payments, and a solid checkout experience.",
            icon: ShoppingCart,
            href: "/servicios/websites-landing-pages/ecommerce",
          },
          {
            title: "Support & improvements",
            desc: "Maintenance and continuous product evolution.",
            icon: Wrench,
            href: "/servicios/websites-landing-pages/soporte-mejoras",
          },
        ];

  const processSteps =
    lang === "es"
      ? [
          {
            n: "01",
            icon: Search,
            t: "Diagnóstico (30 min)",
            d: "Aterrizamos objetivo, alcance, prioridades y riesgos. Te proponemos una ruta clara con entregables.",
            meta: "Salida: alcance + plan por módulos",
          },
          {
            n: "02",
            icon: PenTool,
            t: "Prototipo & UI",
            d: "Diseñamos el prototipo (wireframe/UI) y lo validamos contigo. Si te gusta, iniciamos formalmente.",
            meta: "Hito: aprobación + 50% de anticipo",
          },
          {
            n: "03",
            icon: Code2,
            t: "Desarrollo por sprints",
            d: "Construimos por sprints semanales con demos. Avanzas viendo resultados reales, no promesas.",
            meta: "Demos: 1 por semana",
          },
          {
            n: "04",
            icon: Rocket,
            t: "Deploy + soporte",
            d: "Lanzamiento a producción, monitoreo y soporte. Entrega final y cierre de proyecto.",
            meta: "Hito: entrega + pago restante",
          },
        ]
      : [
          {
            n: "01",
            icon: Search,
            t: "Diagnosis (30 min)",
            d: "We define goals, scope, priorities, and risks. You get a clear roadmap with deliverables.",
            meta: "Output: scope + modular plan",
          },
          {
            n: "02",
            icon: PenTool,
            t: "Prototype & UI",
            d: "We design the prototype (wireframe/UI) and validate it with you. If approved, we start formally.",
            meta: "Milestone: approval + 50% deposit",
          },
          {
            n: "03",
            icon: Code2,
            t: "Weekly sprints",
            d: "We build in weekly sprints with demos. You see real progress, not promises.",
            meta: "Demos: 1 per week",
          },
          {
            n: "04",
            icon: Rocket,
            t: "Deploy + support",
            d: "Production launch, monitoring and support. Final delivery and project closeout.",
            meta: "Milestone: delivery + remaining payment",
          },
        ];

  return (
    <main id="top" className="scroll-mt-16 min-h-screen bg-[#07060A] text-white">
      <Navbar />

            {/* HERO */}
<div className="pointer-events-none absolute inset-0 fc-grid" />

<section className="relative overflow-hidden border-b border-white/10">
  {/* glows */}
  <div
    className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
    style={{
      background:
        "radial-gradient(circle, rgba(177,77,255,0.18), transparent 62%)",
    }}
  />

  <div
    className="absolute right-[-120px] top-24 h-[360px] w-[360px] rounded-full blur-3xl"
    style={{
      background:
        "radial-gradient(circle, rgba(255,79,216,0.12), transparent 60%)",
    }}
  />

<div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28">
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      {/* LEFT */}
      <div>
        <Reveal y={14}>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
            {lang === "en"
              ? "Border technology · Real software"
              : "Tecnología de frontera · Software real"}
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-[76px] font-semibold tracking-[-0.05em] leading-[0.95]">
            {lang === "en"
              ? "Custom software for companies that need real solutions."
              : "Desarrollo de software para empresas que necesitan soluciones reales."}
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/68">
            {lang === "en"
              ? "We design and develop websites, internal systems, dashboards, automation, and digital solutions for businesses in Mexico and the United States."
              : "Diseñamos y desarrollamos sitios web, sistemas internos, dashboards, automatización y soluciones digitales para negocios en México y Estados Unidos."}
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-medium transition hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(90deg, rgba(177,77,255,0.92), rgba(255,79,216,0.92))",
              boxShadow: "0 0 28px rgba(177,77,255,0.22)",
            }}
          >
            {lang === "en" ? "Quote project" : "Cotizar proyecto"}
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-6 py-3.5 text-white/82 transition hover:bg-white/10 hover:scale-[1.02]"
          >
            {lang === "en" ? "View services" : "Ver servicios"}
          </a>
        </div>

        <div className="mt-5">
          <a
            href="/mensualidades"
            className="group inline-flex items-center gap-2 text-sm text-white/58 transition hover:text-purple-200"
          >
            <span className="border-b border-white/10 pb-0.5 transition group-hover:border-purple-400/30">
              {lang === "en"
                ? "See monthly plans"
                : "Ver planes mensuales"}
            </span>

            <span className="text-purple-300 transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          lang === "en"
            ? "Real code, no generic templates"
            : "Código real, sin plantillas genéricas",
          lang === "en"
            ? "Weekly progress with visible demos"
            : "Avance semanal con demos visibles",
          lang === "en"
            ? "Modern and easy-to-use interfaces"
            : "Interfaces modernas y fáciles de usar",
          lang === "en"
            ? "Scalable solutions for business growth"
            : "Soluciones escalables para el crecimiento del negocio",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <CheckCircle2 className="h-4 w-4 text-purple-200" />
            </div>

            <span className="pt-[2px] text-sm sm:text-[15px] leading-relaxed text-white/72">
              {item}
            </span>
          </div>
        ))}
      </div>
      </div>

      {/* RIGHT */}
      <Reveal delay={0.08} y={10}>
        <div className="relative mx-auto w-full max-w-[460px]">
          <div
            className="absolute inset-0 scale-110 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(177,77,255,0.16), rgba(255,79,216,0.08), transparent 68%)",
            }}
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(177,77,255,0.14), transparent 48%)",
              }}
            />

            <div className="relative flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/25">
              <div
                className="absolute h-[240px] w-[240px] rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(177,77,255,0.24), transparent 70%)",
                }}
              />

              <div className="relative flex flex-col items-center text-center px-6">
                <Image
                  src="/brand/sinFondo.png"
                  alt="FronteraCode"
                  width={132}
                  height={132}
                  priority
                  className="object-contain drop-shadow-[0_0_34px_rgba(177,77,255,0.35)]"
                />

                <p className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">
                  FronteraCode
                </p>

                <p className="mt-3 max-w-[280px] text-sm sm:text-base leading-relaxed text-white/58">
                  {lang === "en"
                    ? "Real software for real operations"
                    : "Software real para operación real"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>
      {/* SERVICIOS */}
      <Section
        id="servicios"
        title={t("services_title")}
        subtitle={t("services_sub")}
        glow
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((s, idx) => {
    const Icon = s.icon;
    const isClickable = !!s.href;

    return (
      <Reveal key={s.title} delay={idx * 0.04} y={10}>
        <Link
          href={s.href || "#"}
          className={`group block rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 transition duration-300 ${
            isClickable
              ? "cursor-pointer hover:-translate-y-1 hover:border-purple-400/25 hover:from-white/10 hover:to-white/6"
              : "cursor-default"
          }`}
          style={{ boxShadow: "0 0 40px rgba(177,77,255,0.06)" }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                <Icon className="h-5 w-5 text-purple-300 drop-shadow-[0_0_10px_rgba(177,77,255,0.35)]" />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/50">
                {t("service_label")}
              </div>
            </div>

                {isClickable ? (
                  <div className="rounded-full border border-white/10 bg-white/5 p-2 transition group-hover:border-purple-400/25 group-hover:bg-purple-500/10">
                    <ArrowUpRight className="h-4 w-4 text-white/55 transition group-hover:text-purple-200" />
                  </div>
                ) : null}
              </div>

              <div className="mt-4 text-lg font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>

              {isClickable ? (
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-purple-200/90 transition group-hover:text-purple-100">
                  <span>{lang === "en" ? "View service" : "Ver servicio"}</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              ) : (
                <div className="mt-5 text-sm text-white/35">
                  {lang === "en" ? "Coming soon" : "Próximamente"}
                </div>
              )}
            </Link>
          </Reveal>
        );
      })}
    </div>
      </Section>

      <Section
  id="proceso"
  title={t("process_title")}
  subtitle={t("process_sub")}
  glow
>
  <div className="relative">
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
      {processSteps.map((p, idx) => {
        const Icon = p.icon;

        const stepsContent =
          lang === "en"
            ? [
                {
                  title: "Diagnosis (30 min)",
                  desc: "We define goals, scope, priorities, and risks. You get a clear roadmap with deliverables.",
                  meta: "Output: scope + modular plan",
                },
                {
                  title: "Prototype & UI",
                  desc: "We design the prototype and validate it with you. If approved, we start formally.",
                  meta: "Milestone: approval + 50% deposit",
                },
                {
                  title: "Weekly sprints",
                  desc: "We build in weekly sprints with demos. You see real progress, not promises.",
                  meta: "Demos: 1 per week",
                },
                {
                  title: "Deploy + support",
                  desc: "Production launch, monitoring, and support. Final delivery and project closeout.",
                  meta: "Milestone: delivery + remaining payment",
                },
              ]
            : [
                {
                  title: "Diagnóstico (30 min)",
                  desc: "Aterrizamos objetivo, alcance, prioridades y riesgos. Te proponemos una ruta clara con entregables.",
                  meta: "Salida: alcance + plan por módulos",
                },
                {
                  title: "Prototipo & UI",
                  desc: "Diseñamos el prototipo y lo validamos contigo. Si te gusta, iniciamos formalmente.",
                  meta: "Hito: aprobación + 50% de anticipo",
                },
                {
                  title: "Desarrollo por sprints",
                  desc: "Construimos por sprints semanales con demos. Avanzas viendo resultados reales, no promesas.",
                  meta: "Demos: 1 por semana",
                },
                {
                  title: "Deploy + soporte",
                  desc: "Lanzamiento a producción, monitoreo y soporte. Entrega final y cierre del proyecto.",
                  meta: "Hito: entrega + pago restante",
                },
              ];

        const current = stepsContent[idx];

        return (
          <Reveal key={p.n} delay={idx * 0.05} y={12}>
            <div
              className="
                group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10
                bg-gradient-to-b from-white/8 to-white/4
                p-5 sm:p-6
                transition duration-300
                hover:-translate-y-1 hover:border-purple-400/20
              "
              style={{ boxShadow: "0 0 40px rgba(177,77,255,0.07)" }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top center, rgba(177,77,255,0.10), transparent 55%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-2.5 sm:p-3 shrink-0">
                    <Icon className="h-5 w-5 text-purple-300 drop-shadow-[0_0_12px_rgba(177,77,255,0.35)]" />
                  </div>

                  <div className="min-w-0">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-2.5 py-1 sm:px-3 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white/50">
                      {lang === "en" ? `Step ${p.n}` : `Paso ${p.n}`}
                    </div>

                    <h3 className="mt-3 text-lg sm:text-xl font-semibold leading-snug tracking-tight text-white">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 sm:mt-5 flex-1 text-[14px] sm:text-[15px] leading-7 sm:leading-8 text-white/68">
                  {current.desc}
                </p>

                <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl border border-white/10 bg-black/30 p-3.5 sm:p-4">
                <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <CheckCircle2 className="h-4 w-4 text-white/55" />
                </div>

                <span className="pt-[2px] text-[13px] sm:text-sm leading-relaxed text-white/72">
                  {current.meta}
                </span>
              </div>
              </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</Section>

      {/* FAQ */}
      <Section id="faq" title={t("faq_title")} subtitle={t("faq_sub")}>
        <FAQ lang={lang} />
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" title={t("contact_title")} subtitle={t("contact_sub")}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/60">{t("channels_title")}</div>

            <div className="mt-4 grid gap-3">
              <a
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition"
                href="https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20quiero%20cotizar%20un%20proyecto."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: 656 763 5652
              </a>

              <a
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition"
                href="mailto:fronteracode@gmail.com?subject=Cotizaci%C3%B3n%20FronteraCode"
              >
                Email: fronteracode@gmail.com
              </a>

              <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/60">
                {t("form_hint")}
              </div>
            </div>

            {/* Redes (aquí sí convierten) */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="mb-3 text-sm text-white/60">
                {lang === "en"
                  ? "Also find us on"
                  : "También puedes encontrarnos aquí"}
              </p>

              <SocialLinks variant="brand" size={18} />
            </div>
          </div>

          <ContactForm lang={lang} />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white/80">FronteraCode</p>
              <p className="text-sm text-white/50">
                {lang === "en"
                  ? "Border tech · Real software for real operations."
                  : "Tecnología de frontera · Software real para operación real."}
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 sm:items-end">
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/45">
                  {lang === "en" ? "Follow us" : "Síguenos"}
                </span>

                {/* SOLO ÍCONOS */}
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