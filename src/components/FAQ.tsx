import {
  Clock,
  Plug,
  LifeBuoy,
  FileText,
  Factory,
  ChevronRight,
} from "lucide-react";

type Lang = "es" | "en";

export default function FAQ({
  lang = "es",
}: {
  lang?: Lang;
}) {
  const t = (es: string, en: string) => (lang === "en" ? en : es);

  const faqs = [
    {
      icon: Clock,
      q: t("¿Cuánto tarda un proyecto?", "How long does a project take?"),
      a: (
        <>
          {lang === "en" ? (
            <>
              The timeline depends on scope and complexity. Most projects start
              with a <strong>quick diagnosis</strong> and then move forward in{" "}
              <strong>weekly sprints</strong>.
              <br />
              <br />
              This lets you see progress within the first days, validate the
              direction early, and reprioritize without waiting months for a
              final outcome.
            </>
          ) : (
            <>
              La duración depende del alcance y la complejidad. La mayoría de
              los proyectos inician con un <strong>diagnóstico breve</strong> y
              se desarrollan por <strong>sprints semanales</strong>.
              <br />
              <br />
              Esto te permite ver avances desde los primeros días, validar el
              rumbo y ajustar prioridades sin esperar meses a un resultado final.
            </>
          )}
        </>
      ),
    },
    {
      icon: Plug,
      q: t(
        "¿Pueden trabajar con sistemas existentes?",
        "Can you work with existing systems?"
      ),
      a: (
        <>
          {lang === "en" ? (
            <>
              Yes — we often work on products already running in production.
              <br />
              <br />
              We can <strong>integrate, improve, or migrate</strong> gradually,
              ensuring daily operations keep moving. We assess risks,
              dependencies, and critical points before touching production.
            </>
          ) : (
            <>
              Sí. Frecuentemente trabajamos con sistemas ya en operación.
              <br />
              <br />
              Podemos <strong>integrar, mejorar o migrar</strong> de forma
              gradual, cuidando que la operación diaria no se detenga.
              Analizamos primero riesgos, dependencias y puntos críticos antes
              de tocar producción.
            </>
          )}
        </>
      ),
    },
    {
      icon: LifeBuoy,
      q: t(
        "¿Manejan soporte después del lanzamiento?",
        "Do you offer support after launch?"
      ),
      a: (
        <>
          {lang === "en" ? (
            <>
              Yes. We offer <strong>support and maintenance plans</strong> once
              your system is in production.
              <br />
              <br />
              This includes fixes, adjustments, continuous improvements, and
              technical guidance so your software keeps growing with your
              operation.
              <br />
              <br />
              <a
                href="/mensualidades"
                className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 underline underline-offset-4 transition"
              >
                View monthly support plans →
              </a>
            </>
          ) : (
            <>
              Sí. Ofrecemos <strong>planes de soporte y mantenimiento</strong>{" "}
              una vez que el sistema está en producción.
              <br />
              <br />
              Esto incluye correcciones, ajustes, mejoras continuas y
              acompañamiento técnico para que tu software siga creciendo junto
              con tu operación.
              <br />
              <br />
              <a
                href="/mensualidades"
                className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 underline underline-offset-4 transition"
              >
                Ver planes mensuales de soporte →
              </a>
            </>
          )}
        </>
      ),
    },
    {
      icon: FileText,
      q: t("¿Cómo cotizan los proyectos?", "How do you price projects?"),
      a: (
        <>
          {lang === "en" ? (
            <>
              Pricing is defined after a <strong>quick diagnosis</strong> where
              we clarify scope, goals, and deliverables.
              <br />
              <br />
              We work with <strong>clear module-based pricing</strong>—no hidden
              fees. You’ll know exactly what we’ll build, the timeline, and the
              expected outcome.
            </>
          ) : (
            <>
              La cotización se realiza después de un{" "}
              <strong>diagnóstico breve</strong> donde definimos alcance,
              objetivos y entregables.
              <br />
              <br />
              Trabajamos con <strong>precios claros por módulos</strong>, sin
              letras pequeñas ni cargos ocultos. Sabes exactamente qué se va a
              construir, en cuánto tiempo y con qué resultado.
            </>
          )}
        </>
      ),
    },
    {
      icon: Factory,
      q: t("¿Hacen software para maquila?", "Do you build software for maquila?"),
      a: (
        <>
          {lang === "en" ? (
            <>
              Yes — it’s one of our core specialties.
              <br />
              <br />
              We build software designed for real operations:{" "}
              <strong>
                production capture, role-based access, reports, traceability,
                dashboards, and KPIs
              </strong>{" "}
              built for supervisors and shop-floor teams.
            </>
          ) : (
            <>
              Sí. Es una de nuestras especialidades.
              <br />
              <br />
              Desarrollamos sistemas orientados a operación real:{" "}
              <strong>
                captura de producción, control por roles, reportes, trazabilidad,
                dashboards y KPIs{" "}
              </strong>
              diseñados para supervisores y personal en piso.
            </>
          )}
        </>
      ),
    },
  ];

  return (
    <div className="grid gap-4">
      {faqs.map((f, idx) => {
        const Icon = f.icon;

        return (
          <details
            key={idx}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                  <Icon className="h-5 w-5 text-purple-300 drop-shadow-[0_0_8px_rgba(177,77,255,0.35)]" />
                </div>

                <h3 className="text-white/90 font-medium">{f.q}</h3>
              </div>

              <ChevronRight className="h-5 w-5 text-white/50 transition group-open:rotate-90" />
            </summary>

            <div className="mt-4 pl-[52px]">
              <p className="text-white/70 leading-relaxed text-sm">{f.a}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}

