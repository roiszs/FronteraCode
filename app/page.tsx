import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import FAQ from "@/src/components/FAQ";
import ContactForm from "@/src/components/ContactForm";
import Image from "next/image";
import Reveal from "@/src/components/Reveal";

import {
  MonitorSmartphone,
  Factory,
  Gauge,
  Zap,
  ShoppingCart,
  Wrench,
  Search, PenTool, Code2, Rocket, CheckCircle2 
} from "lucide-react";

const services = [
  {
    title: "Websites & Landing Pages",
    desc: "Sitios modernos, rápidos y optimizados para conversión.",
    icon: MonitorSmartphone,
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
];

const projects = [
  {
    title: "Dashboard de Producción",
    problem: "Poca visibilidad diaria del rendimiento.",
    solution: "Panel con KPIs y filtros por proceso/turno.",
    result: "Decisiones más rápidas y menos retrabajo.",
  },
  {
    title: "Registro de Piezas/Hora (Supervisor + Asociados)",
    problem: "Registro manual y disperso.",
    solution: "Captura centralizada + firma + exportación.",
    result: "Trazabilidad y control en minutos.",
  },
  {
    title: "Landing B2B para PyME",
    problem: "Presencia débil y baja conversión.",
    solution: "Landing con CTA + estructura de venta + SEO técnico.",
    result: "Más solicitudes y mejor imagen de marca.",
  },
];

export default function Home() {
  return (
    <main id="top" className="scroll-mt-24 min-h-screen bg-[#07060A] text-white">
      <Navbar />

      {/* HERO */}
      <div className="pointer-events-none absolute inset-0 fc-grid" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
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
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Copy */}
            <div>
              <Reveal y={14}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                    Tecnología de frontera · Software que trabaja contigo
                  </span>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                  Software y websites que funcionan en operación real.
                </h1>

                <p className="mt-4 text-white/70 leading-relaxed">
                  En <span className="text-white">FronteraCode</span> diseñamos y
                  desarrollamos productos digitales para PyMEs, e-commerce y
                  maquilas: sistemas internos, dashboards, automatización y sitios
                  web modernos.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
                    boxShadow: "0 0 30px rgba(177,77,255,0.25)",
                  }}
                >
                  Cotizar proyecto
                </a>

                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/80 transition hover:bg-white/10 hover:scale-[1.02]"
                >
                  Ver servicios
                </a>
                <a
                  href="mensualidades/page.tsx"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-white/80 transition hover:text-white hover:border-white/30 hover:bg-white/5 hover:scale-[1.02]"
                >
                  Planes mensuales
                </a>

              </div>

              <div className="mt-8 grid gap-2 text-sm text-white/70">
                <p>• Entregas por sprints con demos semanales</p>
                <p>• UI moderna, simple de usar</p>
                <p>• Escalable y listo para crecer</p>
              </div>
            </div>

            {/* Visual */}
            <Reveal delay={0.08} y={10}>
              <div className="relative">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="aspect-square rounded-3xl border border-white/10 bg-black/30 grid place-items-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-80"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(177,77,255,0.28), transparent 55%), radial-gradient(circle at 70% 70%, rgba(255,79,216,0.18), transparent 55%)",
                      }}
                    />
                    <div
                      className="h-64 w-64 rotate-0"
                      style={{
                        clipPath:
                          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        boxShadow: "0 0 45px rgba(177,77,255,0.28)",
                        background: "rgba(14,11,20,0.65)",
                      }}
                    />
                    <div className="absolute inset-0 grid place-items-center text-center px-6">
                      <Image
                        src="/brand/sinFondo.png"
                        alt="FronteraCode"
                        width={88}
                        height={88}
                        className="object-contain drop-shadow-[0_0_26px_rgba(177,77,255,0.40)]"
                        priority
                      />

                      <p className="mt-3 text-sm text-white/70">FronteraCode</p>
                      <p className="mt-2 text-lg font-semibold">
                        Neón · Tech · Industrial
                      </p>
                      <p className="mt-2 text-sm text-white/60">
                        Web · Sistemas · Automatización · KPIs
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
        title="Servicios"
        subtitle="Soluciones claras, sin complicaciones, orientadas a resultados."
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
                      Servicio
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
  title="Proceso de trabajo"
  subtitle="Transparente, rápido y con entregables visibles."
  glow
>
<div className="relative">
  {/* Línea conectora (desktop) - sutil (sin morado) */}
  <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    {[
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
    ].map((p, idx) => {
      const Icon = p.icon;

      return (
        <Reveal key={p.n} delay={idx * 0.05} y={12}>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 transition hover:border-white/20 hover:from-white/10 hover:to-white/6 hover:-translate-y-1 flex flex-col min-h-[230px]">
            {/* Punto conector (desktop) - más discreto */}
            <div className="hidden lg:block absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rounded-full border border-white/15 bg-[#0b0712]">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-[6px]" />
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                <Icon className="h-5 w-5 text-purple-300 drop-shadow-[0_0_10px_rgba(177,77,255,0.35)]" />
              </div>

              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-white/50">
                  Paso {p.n}
                </div>

                <div className="mt-2 text-lg font-semibold">{p.t}</div>
                <p className="mt-2 text-white/70 leading-relaxed">{p.d}</p>
              </div>
            </div>

            {/* Nota / chip uniforme y alineada abajo */}
            <div className="mt-auto pt-5">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70 w-full">
                <CheckCircle2 className="h-4 w-4 text-white/50 shrink-0" />
                <span className="truncate">{p.meta}</span>
              </div>
            </div>
          </div>
        </Reveal>
      );
    })}
  </div>
</div>

</Section>



      {/* PROYECTOS */}
      <Section
        id="proyectos"
        title="Proyectos"
        subtitle="Casos tipo (demos) que representan lo que construimos."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.05} y={10}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-semibold">{p.title}</div>
                <div className="mt-4 space-y-2 text-sm text-white/70">
                  <p>
                    <span className="text-white/85">Problema:</span> {p.problem}
                  </p>
                  <p>
                    <span className="text-white/85">Solución:</span> {p.solution}
                  </p>
                  <p>
                    <span className="text-white/85">Resultado:</span> {p.result}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="FAQ"
        subtitle="Respuestas rápidas a las dudas más comunes."
      >
        <FAQ />
      </Section>

      {/* CONTACTO */}
      <Section
        id="contacto"
        title="Contacto"
        subtitle="Cuéntanos qué necesitas y te proponemos una ruta clara: alcance, tiempos y entregables."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact buttons */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/60">Canales directos</div>
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
                Formulario: envía tu solicitud y te respondemos por correo.
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/50 flex flex-col sm:flex-row gap-3 justify-between">
          <p>
            © {new Date().getFullYear()} FronteraCode. Todos los derechos
            reservados.
          </p>
          <p>Ciudad Juárez · Tecnología de frontera</p>
        </div>
      </footer>
    </main>
  );
}
