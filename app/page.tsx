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
          },
          {
            title: "Soporte & mejoras",
            desc: "Mantenimiento y evolución continua del producto.",
            icon: Wrench,
          },
        ]
      : [
          {
            title: "Websites & Landing Pages",
            desc: "Modern, fast, conversion-focused websites.",
            icon: MonitorSmartphone,
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
          },
          {
            title: "Support & improvements",
            desc: "Maintenance and continuous product evolution.",
            icon: Wrench,
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

<section className="relative overflow-hidden">
  {/* overlays / glows */}
  <div className="absolute inset-0 opacity-30" />

  <div
    className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
    style={{
      background:
        "radial-gradient(circle, rgba(177,77,255,0.35), transparent 60%)",
    }}
  />

  <div
    className="absolute top-32 right-[-120px] h-[420px] w-[420px] rounded-full"
    style={{
      background:
        "radial-gradient(circle, rgba(255,79,216,0.25), transparent 60%)",
    }}
  />

  {/* content */}
  <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-20 sm:pt-16 sm:pb-24">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      {/* Copy */}
      <div>
        <Reveal y={14}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              {t("hero_badge")}
            </span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            {lang === "en"
              ? "Custom software development for companies in Mexico and the United States."
              : "Desarrollo de software a medida para empresas en México y Estados Unidos."}
          </h1>

          <p className="mt-4 text-white/70 leading-relaxed">{t("hero_desc")}</p>
        </Reveal>

        {/* ✅ botones separados en móvil */}
        <div className="mt-8 grid gap-3 sm:flex sm:flex-row sm:items-center">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
              boxShadow: "0 0 30px rgba(177,77,255,0.25)",
            }}
          >
            {t("cta_quote")}
          </a>

          <a
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/80 transition hover:bg-white/10 hover:scale-[1.02]"
          >
            {t("cta_services")}
          </a>

          <a
            href="/mensualidades"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white transition hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(90deg, rgba(177,77,255,0.85), rgba(255,79,216,0.85))",
              boxShadow: "0 0 24px rgba(177,77,255,0.20)",
            }}
          >
            {t("cta_plans")}
          </a>
        </div>

        <div className="mt-8 grid gap-2 text-sm text-white/70">
          <p>{t("bullet_1")}</p>
          <p>{t("bullet_2")}</p>
          <p>{t("bullet_3")}</p>
        </div>
      </div>

      {/* Visual */}
      <Reveal delay={0.08} y={10}>
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div
              className="
                relative grid place-items-center overflow-hidden rounded-3xl border border-white/10 bg-black/30
                min-h-[360px] py-10
                sm:aspect-square sm:min-h-0 sm:py-0
              "
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(177,77,255,0.22), transparent 62%), radial-gradient(circle at 70% 75%, rgba(255,79,216,0.12), transparent 55%)",
                }}
              />

              <div className="relative z-10 text-center px-6">
                <Image
                  src="/brand/sinFondo.png"
                  alt="FronteraCode"
                  width={128}
                  height={128}
                  priority
                  className="mx-auto object-contain drop-shadow-[0_0_34px_rgba(177,77,255,0.38)]"
                />

                <div className="mt-5">
                  <p className="text-lg font-semibold tracking-tight">
                    FronteraCode
                  </p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {lang === "en"
                      ? "Real software for real operations"
                      : "Software real para operación real"}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  {[
                    lang === "en" ? "Web" : "Web",
                    lang === "en" ? "Systems" : "Sistemas",
                    lang === "en" ? "Automation" : "Automatización",
                    "KPIs",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs leading-none text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
            return (
              <Reveal key={s.title} delay={idx * 0.04} y={10}>
                <div
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 transition hover:border-white/20 hover:from-white/10 hover:to-white/6"
                  style={{ boxShadow: "0 0 40px rgba(177,77,255,0.06)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                      <Icon className="h-5 w-5 text-purple-300 drop-shadow-[0_0_10px_rgba(177,77,255,0.35)]" />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      {t("service_label")}
                    </div>
                  </div>

                  <div className="mt-4 text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* PROCESO */}
      <Section
        id="proceso"
        title={t("process_title")}
        subtitle={t("process_sub")}
        glow
      >
        <div className="relative">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, idx) => {
              const Icon = p.icon;

              return (
                <Reveal key={p.n} delay={idx * 0.05} y={12}>
                  <div
                    className="
                      relative rounded-2xl border border-white/10
                      bg-gradient-to-b from-white/8 to-white/4
                      p-6 transition hover:border-white/20 hover:from-white/10 hover:to-white/6
                      hover:-translate-y-1
                      flex flex-col
                      lg:min-h-[420px] xl:min-h-[380px]
                    "
                  >
                    <div className="hidden lg:block absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rounded-full border border-white/15 bg-[#0b0712]">
                      <div className="absolute inset-0 rounded-full bg-white/10 blur-[6px]" />
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2 shrink-0">
                        <Icon className="h-5 w-5 text-purple-300 drop-shadow-[0_0_10px_rgba(177,77,255,0.35)]" />
                      </div>

                      <div className="min-w-0 flex-1 text-left">
                        <div className="text-xs uppercase tracking-wider text-white/50">
                          {lang === "en" ? `Step ${p.n}` : `Paso ${p.n}`}
                        </div>

                        <div className="mt-2 font-semibold text-white leading-snug min-h-[52px]">
                          {p.t}
                        </div>

                        <p className="mt-2 text-white/70 leading-relaxed [text-wrap:pretty]">
                          {p.d}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="inline-flex w-full items-start gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70 min-h-[48px]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                        <span className="min-w-0 break-words leading-snug line-clamp-2">
                          {p.meta}
                        </span>
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