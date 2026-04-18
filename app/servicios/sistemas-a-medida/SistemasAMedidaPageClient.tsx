"use client";

import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import Reveal from "@/src/components/Reveal";
import { useLang } from "@/src/components/context/LanguageProvider";
import SocialLinks from "@/src/components/SocialLinks";
import {
  Factory,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
  ClipboardList,
  Users,
  Settings2,
  BarChart3,
  Workflow,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20me%20interesa%20el%20servicio%20de%20Sistemas%20a%20medida.%20Quiero%20cotizar%20mi%20proyecto.";

const contactHref = "/#contacto";

export default function SistemasAMedidaPageClient() {
  const { lang } = useLang();

  const problems =
    lang === "en"
      ? [
          "Your operation still depends too much on Excel, paper, or messages.",
          "You do not have a clear system to capture, control, or consult information.",
          "Your business needs traceability, follow-up, validations, or better internal control.",
          "You already have a process that should be digitalized, but there is no real system behind it.",
          "You need a tool built around your flow, not a generic platform forced into your business.",
          "Your operation needs more visibility, order, and consistency.",
        ]
      : [
          "Tu operación todavía depende demasiado de Excel, papel o mensajes.",
          "No tienes un sistema claro para capturar, controlar o consultar información.",
          "Tu negocio necesita trazabilidad, seguimiento, validaciones o mejor control interno.",
          "Ya tienes un proceso que debería estar digitalizado, pero no existe un sistema real detrás.",
          "Necesitas una herramienta hecha para tu flujo, no una plataforma genérica forzada a tu negocio.",
          "Tu operación necesita más visibilidad, orden y consistencia.",
        ];

  const includes =
    lang === "en"
      ? [
          "System design aligned with the real process",
          "Screens and flows according to the business operation",
          "Roles and permissions",
          "Forms and validations",
          "Base dashboards or reports according to scope",
          "Clearer internal control and data visibility",
          "Scalable structure for future growth",
          "Built around the business, not around a template",
        ]
      : [
          "Diseño del sistema alineado al proceso real",
          "Pantallas y flujos según la operación del negocio",
          "Roles y permisos",
          "Formularios y validaciones",
          "Dashboards o reportes base según alcance",
          "Mayor control interno y visibilidad de datos",
          "Estructura escalable para crecer después",
          "Construido alrededor del negocio, no de una plantilla",
        ];

  const includeHighlights =
    lang === "en"
      ? [
          "System design aligned with the real process",
          "Screens and flows according to operation",
          "Roles and permissions",
          "Forms and validations",
          "Base reports or dashboards according to scope",
          "Better control and visibility",
          "Scalable structure for future growth",
          "Built around the business flow",
        ]
      : [
          "Diseño del sistema alineado al proceso real",
          "Pantallas y flujos según la operación",
          "Roles y permisos",
          "Formularios y validaciones",
          "Reportes o dashboards base según alcance",
          "Mayor control y visibilidad",
          "Estructura escalable para crecer después",
          "Construido alrededor del flujo del negocio",
        ];

  const pricing =
    lang === "en"
      ? {
          eyebrow: "Investment",
          title: "$3,000 – $5,000 USD",
          note: "Final price depends on the type of system required, number of modules, internal logic, validations, roles, reports, and overall operational complexity.",
          bullets: [
            "A single clear range, no confusing package structure",
            "Ideal for businesses that need a real internal system, not a generic workaround",
            "Built around the actual operation, flow, and control needs of the business",
            "A scalable foundation that can evolve with more modules, reports, or logic later",
          ],
        }
      : {
          eyebrow: "Inversión",
          title: "$3,000 – $5,000 USD",
          note: "El precio final depende del tipo de sistema requerido, la cantidad de módulos, la lógica interna, las validaciones, los roles, los reportes y la complejidad operativa general.",
          bullets: [
            "Un solo rango claro, sin estructura confusa de paquetes",
            "Ideal para negocios que necesitan un sistema interno real, no una solución genérica improvisada",
            "Construido alrededor de la operación, flujo y necesidades de control del negocio",
            "Una base escalable que puede crecer después con más módulos, reportes o lógica",
          ],
        };

  const faqs =
    lang === "en"
      ? [
          {
            q: "Is this only for manufacturing?",
            a: "No. This service applies to manufacturing, retail, cafés, operational teams, administration, billing, tracking, and many other internal business processes.",
          },
          {
            q: "Can the system be adapted to my business flow?",
            a: "Yes. That is precisely the point: to build a system around the real way your operation works, not force your business into a generic template.",
          },
          {
            q: "Can it include roles, permissions, or validations?",
            a: "Yes. Depending on the project scope, we can include access control, validations, process rules, and internal logic.",
          },
          {
            q: "Can the system grow later?",
            a: "Yes. The goal is to create a solid base that can evolve with more modules, reports, dashboards, or new flows over time.",
          },
        ]
      : [
          {
            q: "¿Esto es solo para maquila?",
            a: "No. Este servicio aplica para maquila, retail, cafeterías, equipos operativos, administración, cobro, seguimiento y muchos otros procesos internos del negocio.",
          },
          {
            q: "¿El sistema se puede adaptar a mi flujo de negocio?",
            a: "Sí. Esa es precisamente la idea: construir un sistema alrededor de cómo funciona realmente tu operación, no forzar tu negocio a una plantilla genérica.",
          },
          {
            q: "¿Puede incluir roles, permisos o validaciones?",
            a: "Sí. Dependiendo del alcance, podemos incluir control de acceso, validaciones, reglas de proceso y lógica interna.",
          },
          {
            q: "¿El sistema puede crecer después?",
            a: "Sí. La idea es crear una base sólida que pueda evolucionar con más módulos, reportes, dashboards o nuevos flujos con el tiempo.",
          },
        ];

  const includeCards = [
    { icon: LayoutDashboard, label: includes[0] },
    { icon: ClipboardList, label: includes[3] },
    { icon: Users, label: includes[2] },
    { icon: Workflow, label: includes[1] },
    { icon: BarChart3, label: includes[4] },
    { icon: Settings2, label: includes[7] },
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
                <Factory className="h-4 w-4 text-purple-300" />
                {lang === "en" ? "Internal operations" : "Operación interna"}
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
              {lang === "en" ? "Custom systems" : "Sistemas a medida"}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg">
              {lang === "en"
                ? "We design and develop internal systems for businesses that need more control, better follow-up, and clearer processes. From manufacturing and operations to sales, billing, inventory, or administration."
                : "Diseñamos y desarrollamos sistemas internos para negocios que necesitan más control, mejor seguimiento y procesos más claros. Desde manufactura y operación hasta ventas, cobro, inventario o administración."}
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
            ? "When a business outgrows manual work, it needs a system built around the real process."
            : "Cuando un negocio supera el trabajo manual, necesita un sistema construido alrededor del proceso real."
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
            ? "A stronger internal structure for the real operation of the business."
            : "Una estructura interna más sólida para la operación real del negocio."
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
            ? "A single range for projects that need a real internal system tailored to the business operation."
            : "Un solo rango para proyectos que necesitan un sistema interno real, adaptado a la operación del negocio."
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
                  ? "Let’s define the right system for your operation"
                  : "Definamos el sistema correcto para tu operación"}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">
                {lang === "en"
                  ? "Tell us what process you need to control, digitize, or organize. We will help you define the right structure, scope, and level for your system."
                  : "Cuéntanos qué proceso necesitas controlar, digitalizar u organizar. Te ayudamos a definir la estructura, alcance y nivel correcto para tu sistema."}
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