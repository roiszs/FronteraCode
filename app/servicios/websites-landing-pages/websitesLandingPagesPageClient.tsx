"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import {
  MonitorSmartphone,
  CheckCircle2,
  ArrowRight,
  LayoutDashboard,
  Smartphone,
  Zap,
  Search,
  MessageSquare,
  Globe,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesa%20el%20servicio%20de%20Websites%20%26%20Landing%20Pages.%20Quiero%20cotizar%20mi%20proyecto.";

const contactHref = "/#contacto";

export default function WebsitesLandingPagesPageClient() {
  const { lang } = useLang();

  const problems =
    lang === "en"
      ? [
          "Your current website looks outdated or generic.",
          "You do not have a landing page focused on generating leads.",
          "Your digital presence does not reflect the level of your business.",
          "You rely too much on WhatsApp or social media without a solid base.",
          "Your website does not communicate trust clearly.",
          "Your online presence does not help your business grow.",
        ]
      : [
          "Tu sitio actual se ve viejo o genérico.",
          "No tienes una landing enfocada en generar contactos.",
          "Tu presencia digital no refleja el nivel de tu negocio.",
          "Dependes demasiado de WhatsApp o redes sin una base sólida.",
          "Tu sitio no comunica confianza con claridad.",
          "Tu presencia digital no ayuda realmente a crecer tu negocio.",
        ];

  const includes =
    lang === "en"
      ? [
          "Custom visual design",
          "Responsive development",
          "Clear and professional structure",
          "Basic performance optimization",
          "Contact forms",
          "WhatsApp / email / CTA integrations",
          "Basic technical SEO",
          "Scalable foundation for future growth",
        ]
      : [
          "Diseño visual a medida",
          "Desarrollo responsive",
          "Estructura clara y profesional",
          "Optimización básica de velocidad",
          "Formularios de contacto",
          "Integración con WhatsApp, email o CTAs",
          "SEO técnico básico",
          "Base escalable para crecer después",
        ];

  const includeHighlights =
    lang === "en"
      ? [
          "Custom visual design",
          "Clear and professional structure",
          "Contact forms",
          "Basic technical SEO",
          "Responsive development",
          "Basic performance optimization",
          "WhatsApp / email / CTA integrations",
          "Scalable foundation for future growth",
        ]
      : [
          "Diseño visual a medida",
          "Estructura clara y profesional",
          "Formularios de contacto",
          "SEO técnico básico",
          "Desarrollo responsive",
          "Optimización básica de velocidad",
          "Integración con WhatsApp, email o CTAs",
          "Base escalable para crecer después",
        ];

  const pricing =
    lang === "en"
      ? {
          eyebrow: "Investment",
          title: "$1,000 – $1,500 USD",
          note: "Final price depends on scope, number of sections, integrations, and overall level of customization.",
          bullets: [
            "A single clear scope, no confusing package structure",
            "Ideal for websites and landing pages with a professional commercial focus",
            "Custom design and development aligned with your business",
            "A solid base that can grow later",
          ],
        }
      : {
          eyebrow: "Inversión",
          title: "$1,000 – $1,500 USD",
          note: "El precio final depende del alcance, número de secciones, integraciones y nivel general de personalización.",
          bullets: [
            "Una sola propuesta clara, sin estructura confusa de paquetes",
            "Ideal para websites y landing pages con enfoque comercial profesional",
            "Diseño y desarrollo a medida alineado con tu negocio",
            "Una base sólida que puede crecer después",
          ],
        };

  const portfolioProject =
    lang === "en"
      ? {
          eyebrow: "Real project",
          name: "JC Arizona Landscape",
          description:
            "Bilingual website developed for a landscaping and hardscaping company in Arizona, with a stronger commercial structure, clear service presentation, trust signals, and conversion-focused contact paths.",
          highlights: [
            "Bilingual structure",
            "Clear services section",
            "Trust-oriented presentation",
            "Lead-focused contact flow",
          ],
          cta: "View website",
          href: "https://www.jcazlandscape.co/",
        }
      : {
          eyebrow: "Proyecto real",
          name: "JC Arizona Landscape",
          description:
            "Website bilingüe desarrollado para una empresa de landscaping y hardscaping en Arizona, con una estructura comercial más sólida, presentación clara de servicios, elementos de confianza y puntos de contacto pensados para convertir.",
          highlights: [
            "Estructura bilingüe",
            "Sección de servicios clara",
            "Presentación orientada a confianza",
            "Flujo de contacto enfocado en leads",
          ],
          cta: "Ver website",
          href: "https://www.jcazlandscape.co/",
        };

  const faqs =
    lang === "en"
      ? [
          {
            q: "Do you use templates?",
            a: "No. We build custom solutions aligned with the business, visual identity, and objective of each project.",
          },
          {
            q: "Can the site grow later?",
            a: "Yes. The idea is to create a solid base that can evolve with new sections, integrations, or features.",
          },
          {
            q: "Do you include hosting and domain?",
            a: "It depends on the project. We can guide you or define the best setup with you according to your case.",
          },
          {
            q: "How long does it take?",
            a: "It depends on the scope, but we work in clear stages so you can see progress early.",
          },
        ]
      : [
          {
            q: "¿Utilizan plantillas?",
            a: "No. Construimos soluciones a medida alineadas con el negocio, la identidad visual y el objetivo de cada proyecto.",
          },
          {
            q: "¿La página puede crecer después?",
            a: "Sí. La idea es crear una base sólida que pueda evolucionar con nuevas secciones, integraciones o funcionalidades.",
          },
          {
            q: "¿Incluyen hosting y dominio?",
            a: "Depende del proyecto. Podemos orientarte o definir contigo la mejor configuración según tu caso.",
          },
          {
            q: "¿Cuánto tiempo toma?",
            a: "Depende del alcance, pero trabajamos por etapas claras para que puedas ver avance desde temprano.",
          },
        ];

  const includeCards = [
    { icon: LayoutDashboard, label: includes[0] },
    { icon: Smartphone, label: includes[1] },
    { icon: Zap, label: includes[3] },
    { icon: MessageSquare, label: includes[5] },
    { icon: Search, label: includes[6] },
    { icon: Globe, label: includes[7] },
  ];

  return (
    <main className="min-h-screen bg-[#07060A] text-white">
      <Navbar />

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
                <MonitorSmartphone className="h-4 w-4 text-purple-300" />
                {lang === "en" ? "Digital presence" : "Presencia digital"}
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              Websites & Landing Pages
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {lang === "en"
                ? "We design and develop modern, fast, business-aligned websites. No generic templates. We build digital experiences made to inspire trust, position your brand better, and help you convert."
                : "Diseñamos y desarrollamos sitios web modernos, rápidos y alineados con tu negocio. No usamos plantillas genéricas. Construimos experiencias digitales pensadas para transmitir confianza, posicionarte mejor y ayudarte a convertir."}
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

      <Section
        id="problemas"
        title={lang === "en" ? "What this service solves" : "Qué resuelve este servicio"}
        subtitle={
          lang === "en"
            ? "A website should not just exist. It should represent your business well and support growth."
            : "Un sitio web no solo debe existir. Debe representar bien a tu negocio y apoyar su crecimiento."
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

      <Section
        id="incluye"
        title={lang === "en" ? "What is included" : "Qué incluye"}
        subtitle={
          lang === "en"
            ? "A clear, modern, and scalable digital foundation."
            : "Una base digital clara, moderna y escalable."
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

      <Section
        id="inversion"
        title={lang === "en" ? "Pricing" : "Precio"}
        subtitle={
          lang === "en"
            ? "A single range for projects that need a strong, modern, and professional digital presence."
            : "Un solo rango para proyectos que necesitan una presencia digital sólida, moderna y profesional."
        }
        glow
      >
        <Reveal y={10}>
          <div
            className="overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-white/4 p-8 sm:p-10"
            style={{ boxShadow: "0 0 44px rgba(177,77,255,0.14)" }}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55">
                  {pricing.eyebrow}
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {pricing.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
                  {pricing.note}
                </p>
              </div>

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
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pricing.bullets.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-4"
                >
                  <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-1.5">
                    <CheckCircle2 className="h-4 w-4 text-purple-200" />
                  </div>
                  <span className="text-white/75 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="portafolio"
        title={lang === "en" ? "Portfolio" : "Portafolio"}
        subtitle={
          lang === "en"
            ? "A real example of the type of commercial website we can build for your business."
            : "Un ejemplo real del tipo de website comercial que podemos construir para tu negocio."
        }
        glow
      >
        <Reveal y={10}>
          <div
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 sm:p-10"
            style={{ boxShadow: "0 0 40px rgba(177,77,255,0.07)" }}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55">
                  {portfolioProject.eyebrow}
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {portfolioProject.name}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                  {portfolioProject.description}
                </p>

                <a
                  href={portfolioProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  {portfolioProject.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4">
                {portfolioProject.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-1.5">
                        <CheckCircle2 className="h-4 w-4 text-purple-200" />
                      </div>
                      <span className="text-white/75 leading-relaxed">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

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

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 lg:flex-row lg:items-center">
            <div>
              <div className="text-sm text-white/60">
                {lang === "en" ? "Next step" : "Siguiente paso"}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {lang === "en"
                  ? "Let’s build a website that matches your business"
                  : "Construyamos un sitio que esté al nivel de tu negocio"}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {lang === "en"
                  ? "Tell us what you need and we will help you define the right structure, scope, and level for your project."
                  : "Cuéntanos qué necesitas y te ayudamos a definir la estructura, alcance y nivel correcto para tu proyecto."}
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