"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import {
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  LayoutGrid,
  CreditCard,
  Truck,
  Search,
  ShieldCheck,
  Sparkles,
  BarChart3,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesa%20el%20servicio%20de%20E-commerce.%20Quiero%20cotizar%20mi%20proyecto.";

const contactHref = "/#contacto";

export default function EcommercePageClient() {
  const { lang } = useLang();

  const problems =
    lang === "en"
      ? [
          "You sell through messages or social media, but do not have a solid online store.",
          "Your current store looks generic or does not build enough trust.",
          "Your checkout experience makes customers drop off.",
          "Your catalog is difficult to browse, update, or organize.",
          "Your business needs a more professional and scalable sales channel.",
          "Your e-commerce does not support growth, operations, or conversion properly.",
        ]
      : [
          "Vendes por mensajes o redes sociales, pero no tienes una tienda online sólida.",
          "Tu tienda actual se ve genérica o no transmite suficiente confianza.",
          "Tu proceso de compra hace que clientes abandonen antes de pagar.",
          "Tu catálogo es difícil de recorrer, actualizar u organizar.",
          "Tu negocio necesita un canal de venta más profesional y escalable.",
          "Tu e-commerce no está apoyando bien el crecimiento, la operación ni la conversión.",
        ];

  const includes =
    lang === "en"
      ? [
          "Custom storefront design",
          "Responsive development",
          "Product catalog structure",
          "Basic product pages and collection pages",
          "WhatsApp / inquiry / CTA integration if needed",
          "Payment setup according to scope",
          "Shipping / operational flow considerations",
          "Scalable foundation for future growth",
        ]
      : [
          "Diseño visual de tienda a medida",
          "Desarrollo responsive",
          "Estructura de catálogo de productos",
          "Páginas base de producto y colecciones",
          "Integración con WhatsApp / contacto / CTAs si aplica",
          "Configuración de pagos según alcance",
          "Consideraciones de envíos y flujo operativo",
          "Base escalable para crecer después",
        ];

  const includeHighlights =
    lang === "en"
      ? [
          "Custom storefront design",
          "Responsive development",
          "Catalog and collection structure",
          "Product page foundation",
          "Payment setup according to scope",
          "Shipping / operation flow considerations",
          "Lead / WhatsApp / CTA support if needed",
          "Scalable foundation for future growth",
        ]
      : [
          "Diseño visual de tienda a medida",
          "Desarrollo responsive",
          "Estructura de catálogo y colecciones",
          "Base para páginas de producto",
          "Configuración de pagos según alcance",
          "Consideraciones de envíos y flujo operativo",
          "Soporte de contacto / WhatsApp / CTAs si aplica",
          "Base escalable para crecer después",
        ];

  const tiers =
    lang === "en"
      ? [
          {
            name: "Base",
            desc: "For businesses that need a solid online store to start selling in a more professional way.",
            features: [
              "Essential store structure",
              "Modern visual design",
              "Responsive version",
              "Base catalog setup",
              "Contact or purchase CTA flow",
              "Basic payment setup depending on scope",
            ],
          },
          {
            name: "Growth",
            desc: "For businesses that need a more complete e-commerce experience with better structure and conversion.",
            featured: true,
            features: [
              "Everything in Base",
              "More store sections and depth",
              "Better product/catalog organization",
              "Stronger purchase flow",
              "Higher visual customization",
              "Better foundation for marketing and growth",
            ],
          },
          {
            name: "Premium",
            desc: "For brands that need a stronger e-commerce solution with more customization and scalability.",
            features: [
              "Everything in Growth",
              "More complete e-commerce architecture",
              "More advanced store experience",
              "Stronger branding + conversion focus",
              "Additional features depending on scope",
              "Stronger operational and growth foundation",
            ],
          },
        ]
      : [
          {
            name: "Base",
            desc: "Para negocios que necesitan una tienda online sólida para comenzar a vender de forma más profesional.",
            features: [
              "Estructura esencial de tienda",
              "Diseño moderno",
              "Versión responsive",
              "Configuración base de catálogo",
              "Flujo de contacto o compra",
              "Configuración básica de pagos según alcance",
            ],
          },
          {
            name: "Growth",
            desc: "Para negocios que necesitan una experiencia de e-commerce más completa, mejor estructurada y con mejor conversión.",
            featured: true,
            features: [
              "Todo lo de Base",
              "Más secciones y profundidad",
              "Mejor organización de catálogo y productos",
              "Flujo de compra más sólido",
              "Mayor personalización visual",
              "Mejor base para marketing y crecimiento",
            ],
          },
          {
            name: "Premium",
            desc: "Para marcas que necesitan una solución de e-commerce más fuerte, más personalizada y lista para escalar.",
            features: [
              "Todo lo de Growth",
              "Arquitectura de tienda más completa",
              "Experiencia de tienda más avanzada",
              "Mayor enfoque en branding + conversión",
              "Funciones extra según alcance",
              "Base más fuerte para operación y crecimiento",
            ],
          },
        ];

  const faqs =
    lang === "en"
      ? [
          {
            q: "Do you build custom stores or use generic templates?",
            a: "We prioritize custom solutions aligned with the business and the brand. Depending on the scope, we can define the best route without falling into a generic result.",
          },
          {
            q: "Can the store grow later?",
            a: "Yes. The goal is to build a strong foundation so the store can evolve with more sections, products, flows, or integrations.",
          },
          {
            q: "Do you include payment gateways?",
            a: "We can define payment setup according to the project scope, business model, and operational needs.",
          },
          {
            q: "Can you help with shipping or store operation flow?",
            a: "Yes. We can consider shipping logic, operational flow, and how the store should support the business realistically.",
          },
        ]
      : [
          {
            q: "¿Construyen tiendas a medida o usan plantillas genéricas?",
            a: "Priorizamos soluciones alineadas con el negocio y la marca. Según el alcance, definimos la mejor ruta sin caer en un resultado genérico.",
          },
          {
            q: "¿La tienda puede crecer después?",
            a: "Sí. La idea es construir una base fuerte para que la tienda pueda evolucionar con más secciones, productos, flujos o integraciones.",
          },
          {
            q: "¿Incluyen pasarelas de pago?",
            a: "Podemos definir la configuración de pagos según el alcance del proyecto, el modelo de negocio y las necesidades operativas.",
          },
          {
            q: "¿Pueden ayudar con envíos o con el flujo operativo de la tienda?",
            a: "Sí. Podemos contemplar lógica de envíos, flujo operativo y cómo la tienda debe apoyar realmente al negocio.",
          },
        ];

  const includeCards = [
    { icon: LayoutGrid, label: includes[0] },
    { icon: ShoppingCart, label: includes[2] },
    { icon: CreditCard, label: includes[5] },
    { icon: Truck, label: includes[6] },
    {
      icon: Search,
      label: lang === "en" ? "Better browsing experience" : "Mejor experiencia de navegación",
    },
    { icon: BarChart3, label: includes[7] },
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
                <ShoppingCart className="h-4 w-4 text-purple-300" />
                {lang === "en" ? "Online sales" : "Venta online"}
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              E-commerce
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {lang === "en"
                ? "We design and develop online stores built to sell better, look more professional, and support the real operation of the business. Not just a storefront: a stronger digital sales channel."
                : "Diseñamos y desarrollamos tiendas online pensadas para vender mejor, verse más profesionales y apoyar la operación real del negocio. No solo un escaparate: un canal de venta digital más sólido."}
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
            ? "An e-commerce store should not just exist. It should help the business sell better and operate with more clarity."
            : "Un e-commerce no solo debe existir. Debe ayudarle al negocio a vender mejor y operar con más claridad."
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
            ? "A stronger digital sales foundation."
            : "Una base de venta digital más sólida."
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
        id="paquetes"
        title={lang === "en" ? "Packages" : "Paquetes"}
        subtitle={
          lang === "en"
            ? "Three levels depending on the complexity, structure, and growth ambition of your store."
            : "Tres niveles según la complejidad, estructura y ambición de crecimiento de tu tienda."
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
                  )}%20(%24%20USD)`}
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
                  ? "Let’s build an e-commerce store that supports your business"
                  : "Construyamos un e-commerce que sí apoye a tu negocio"}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {lang === "en"
                  ? "Tell us what you sell, how your operation works, and what kind of store you need. We will help you define the right structure, scope, and level."
                  : "Cuéntanos qué vendes, cómo funciona tu operación y qué tipo de tienda necesitas. Te ayudamos a definir la estructura, alcance y nivel correcto."}
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