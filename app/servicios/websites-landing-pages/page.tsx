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

export default function WebsitesLandingPagesPage() {
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

  const tiers =
    lang === "en"
      ? [
          {
            name: "Base",
            desc: "For businesses that need a professional digital presence to start the right way.",
            features: [
              "Essential website structure",
              "Modern design",
              "Responsive version",
              "Contact CTA",
              "Basic WhatsApp or form integration",
              "Basic technical SEO",
            ],
          },
          {
            name: "Growth",
            desc: "For companies that need a more complete website with stronger commercial structure.",
            featured: true,
            features: [
              "Everything in Base",
              "More sections and depth",
              "Better content hierarchy",
              "More strategic conversion approach",
              "Lead-oriented structure",
              "Higher visual customization",
            ],
          },
          {
            name: "Premium",
            desc: "For brands that need a more robust, custom, and scalable digital experience.",
            features: [
              "Everything in Growth",
              "More complete architecture",
              "More advanced sections or interactions",
              "Stronger branding + conversion focus",
              "Additional functionality depending on scope",
              "Stronger foundation for future growth",
            ],
          },
        ]
      : [
          {
            name: "Base",
            desc: "Para negocios que necesitan una presencia digital profesional para comenzar correctamente.",
            features: [
              "Estructura esencial del sitio",
              "Diseño moderno",
              "Versión responsive",
              "CTA de contacto",
              "Integración básica con WhatsApp o formulario",
              "SEO técnico básico",
            ],
          },
          {
            name: "Growth",
            desc: "Para empresas que necesitan una web más completa y con mejor estructura comercial.",
            featured: true,
            features: [
              "Todo lo de Base",
              "Más secciones y profundidad",
              "Mejor jerarquía de contenido",
              "Enfoque más estratégico en conversión",
              "Estructura pensada para captar leads",
              "Mayor personalización visual",
            ],
          },
          {
            name: "Premium",

            desc: "Para marcas que necesitan una experiencia más robusta, personalizada y lista para escalar.",
            features: [
              "Todo lo de Growth",
              "Arquitectura más completa",
              "Secciones o interacciones más avanzadas",
              "Mayor enfoque en branding + conversión",
              "Funcionalidades extra según alcance",
              "Base más sólida para crecimiento futuro",
            ],
          },
        ];

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

      {/* PROBLEMAS */}
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

      {/* INCLUYE */}
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
                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3 w-fit">
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
              {[
                includeHighlights.slice(0, 4),
                includeHighlights.slice(4),
              ].map((group, groupIdx) => (
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
              ))}
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
            ? "Three levels depending on the depth, structure, and ambition of your project."
            : "Tres niveles según la profundidad, estructura y ambición de tu proyecto."
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
                  )}%20`}
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