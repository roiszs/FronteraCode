const faqs = [
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Depende del alcance. Trabajamos por sprints con entregas semanales para que veas avances desde el inicio.",
    },
    {
      q: "¿Pueden trabajar con sistemas existentes?",
      a: "Sí. Podemos integrar, mejorar o migrar de forma gradual sin frenar la operación.",
    },
    {
      q: "¿Manejan soporte después del lanzamiento?",
      a: "Sí. Ofrecemos planes de mantenimiento y mejoras continuas.",
    },
    {
      q: "¿Cómo cotizan?",
      a: "Tras un diagnóstico breve definimos alcance y entregables. Cotización transparente por módulos.",
    },
    {
      q: "¿Hacen software para maquila?",
      a: "Sí. Captura, roles, reportes, trazabilidad y dashboards orientados a operación real.",
    },
  ];
  
  export default function FAQ() {
    return (
      <div className="grid gap-3">
        {faqs.map((f, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <summary className="cursor-pointer list-none select-none text-white/90 font-medium flex items-center justify-between">
              {f.q}
              <span className="text-white/50 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-white/70 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    );
  }
  