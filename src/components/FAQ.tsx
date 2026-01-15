import {
  Clock,
  Plug,
  LifeBuoy,
  FileText,
  Factory,
  ChevronRight,
} from "lucide-react";

const faqs = [
  {
    icon: Clock,
    q: "¿Cuánto tarda un proyecto?",
    a: (
      <>
        La duración depende del alcance y la complejidad. La mayoría de los
        proyectos inician con un <strong>diagnóstico breve</strong> y se
        desarrollan por <strong>sprints semanales</strong>.
        <br />
        <br />
        Esto te permite ver avances desde los primeros días, validar el rumbo
        y ajustar prioridades sin esperar meses a un resultado final.
      </>
    ),
  },
  {
    icon: Plug,
    q: "¿Pueden trabajar con sistemas existentes?",
    a: (
      <>
        Sí. Frecuentemente trabajamos con sistemas ya en operación.
        <br />
        <br />
        Podemos <strong>integrar, mejorar o migrar</strong> de forma gradual,
        cuidando que la operación diaria no se detenga. Analizamos primero
        riesgos, dependencias y puntos críticos antes de tocar producción.
      </>
    ),
  },
  {
    icon: LifeBuoy,
    q: "¿Manejan soporte después del lanzamiento?",
    a: (
      <>
        Sí. Ofrecemos <strong>planes de soporte y mantenimiento</strong> una vez
        que el sistema está en producción.
        <br />
        <br />
        Esto incluye correcciones, ajustes, mejoras continuas y acompañamiento
        técnico para que tu software siga creciendo junto con tu operación.
      </>
    ),
  },
  {
    icon: FileText,
    q: "¿Cómo cotizan los proyectos?",
    a: (
      <>
        La cotización se realiza después de un <strong>diagnóstico breve</strong>{" "}
        donde definimos alcance, objetivos y entregables.
        <br />
        <br />
        Trabajamos con <strong>precios claros por módulos</strong>, sin letras
        pequeñas ni cargos ocultos. Sabes exactamente qué se va a construir,
        en cuánto tiempo y con qué resultado.
      </>
    ),
  },
  {
    icon: Factory,
    q: "¿Hacen software para maquila?",
    a: (
      <>
        Sí. Es una de nuestras especialidades.
        <br />
        <br />
        Desarrollamos sistemas orientados a operación real:{" "}
        <strong>
          captura de producción, control por roles, reportes, trazabilidad,
          dashboards y KPIs
        </strong>
        diseñados para supervisores y personal en piso.
      </>
    ),
  },
];

export default function FAQ() {
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

                <h3 className="text-white/90 font-medium">
                  {f.q}
                </h3>
              </div>

              <ChevronRight className="h-5 w-5 text-white/50 transition group-open:rotate-90" />
            </summary>

            <div className="mt-4 pl-[52px]">
              <p className="text-white/70 leading-relaxed text-sm">
                {f.a}
              </p>
            </div>
          </details>
        );
      })}
    </div>
  );
}
