import Navbar from "@/src/components/Navbar";
import Section from "@/src/components/Section";
import FAQ from "@/src/components/FAQ";
import ContactForm from "@/src/components/ContactForm";
import Image from "next/image";
import Reveal from "@/src/components/Reveal";




const services = [
  { title: "Websites & Landing Pages", desc: "Sitios modernos, rápidos y optimizados para conversión." },
  { title: "Sistemas para maquila", desc: "Registro de producción, trazabilidad, roles y reportes." },
  { title: "Dashboards & KPIs", desc: "Indicadores claros para decidir con datos, no con suposiciones." },
  { title: "Automatización", desc: "Menos tareas manuales, menos errores, más velocidad." },
  { title: "E-commerce", desc: "Catálogo, pagos y experiencia de compra sólida." },
  { title: "Soporte & mejoras", desc: "Mantenimiento y evolución continua del producto." },
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
    <main id="top" className="min-h-screen bg-[#07060A] text-white">
      <Navbar />

      {/* HERO */}
      <div className="pointer-events-none absolute inset-0 fc-grid" />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(177,77,255,0.35), transparent 60%)" }}
          />
          <div
            className="absolute top-32 right-[-120px] h-[420px] w-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,79,216,0.25), transparent 60%)" }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
            <Reveal y={14}>
            <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                Tecnología de frontera · Software que trabaja contigo
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Software y websites que funcionan en operación real.
              </h1>
              <p className="mt-4 text-white/70 leading-relaxed">
                En <span className="text-white">FronteraCode</span> diseñamos y desarrollamos productos digitales
                para PyMEs, e-commerce y maquilas: sistemas internos, dashboards, automatización y sitios web modernos.
              </p>
              </div>
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
                    src="/brand/Logo1Oscuro.png"
                    alt="FronteraCode"
                    width={88}
                    height={88}
                    className="object-contain drop-shadow-[0_0_26px_rgba(177,77,255,0.40)]"
                  />

                  <p className="mt-3 text-sm text-white/70">FronteraCode</p>
                  <p className="mt-2 text-lg font-semibold">Neón · Tech · Industrial</p>
                  <p className="mt-2 text-sm text-white/60">
                    Web · Sistemas · Automatización · KPIs
                  </p>
                  
                </div>

                </div>
              </div>

              <p className="mt-4 text-xs text-white/50">
                Diseño minimalista con acento neón (coherente con tu identidad).
                
              </p>
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
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.04} y={10}>
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 transition hover:border-white/20 hover:from-white/10 hover:to-white/6"
              style={{ boxShadow: "0 0 40px rgba(177,77,255,0.06)" }}
            >
              <div className="text-xs uppercase tracking-wider text-white/50">
                Servicio
              </div>

              <div className="mt-2 text-lg font-semibold">
                {s.title}
              </div>

              <p className="mt-2 text-white/70 leading-relaxed">
                {s.desc}
              </p>
            </div>


            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESO */}
      <Section
        id="proceso"
        title="Proceso de trabajo"
        subtitle="Transparente, rápido y con entregables visibles."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            { n: "01", t: "Diagnóstico (30 min)", d: "Objetivo, alcance, riesgos y prioridades." },
            { n: "02", t: "Prototipo & UI", d: "Wireframe + diseño; validación antes de construir." },
            { n: "03", t: "Desarrollo por sprints", d: "Entrega incremental con revisión y ajustes." },
            { n: "04", t: "Deploy + soporte", d: "Lanzamiento, monitoreo y plan de mejoras." },
          ].map((p, idx) => (
            <Reveal key={p.n} delay={idx * 0.04} y={10}>
            <div key={p.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white/60 text-sm">{p.n}</div>
              <div className="mt-2 font-semibold">{p.t}</div>
              <p className="mt-2 text-white/70 leading-relaxed">{p.d}</p>
            </div>
          </Reveal>
          ))}
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
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <p><span className="text-white/85">Problema:</span> {p.problem}</p>
                <p><span className="text-white/85">Solución:</span> {p.solution}</p>
                <p><span className="text-white/85">Resultado:</span> {p.result}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="Respuestas rápidas a las dudas más comunes.">
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
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Sugerencia: cuando tengas correo con dominio (ej. contacto@tudominio.com),
              lo ponemos como remitente del formulario para que se vea más profesional.
            </p>
          </div>

          {/* Form */}
          <ContactForm />

          {/* <form
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
            action="#"
            method="POST"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-sm text-white/60">Formulario (conectar en el siguiente paso)</div>

            <div className="mt-4 grid gap-4">
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
                placeholder="Nombre" name="name" required />
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
                placeholder="Email o teléfono" name="contact" required />
              <select className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
                name="type" required defaultValue="">
                <option value="" disabled>Tipo de proyecto</option>
                <option>Website / Landing</option>
                <option>Sistema</option>
                <option>Dashboard / KPIs</option>
                <option>Automatización</option>
              </select>
              <textarea className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
                placeholder="Cuéntanos el objetivo y lo que necesitas" name="message" rows={5} required />
              <button
                className="rounded-xl px-5 py-3 font-medium text-white"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
                  boxShadow: "0 0 30px rgba(177,77,255,0.20)",
                }}
                type="submit"
              >
                Enviar
              </button>
              <p className="text-xs text-white/50">
                Nota: aquí falta conectar el envío real del formulario (te lo dejo listo abajo).
              </p>
            </div>
          </form> */}
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/50 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} FronteraCode. Todos los derechos reservados.</p>
          <p>Ciudad Juárez · Tecnología de frontera</p>
        </div>
      </footer>
    </main>
  );
}
