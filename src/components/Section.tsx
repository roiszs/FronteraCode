import { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
  glow = false,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  glow?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-3 text-white/70 leading-relaxed">{subtitle}</p>
          ) : null}

          {/* Línea separadora (neutral por defecto, glow solo si glow=true) */}
          <div
            className={`mt-6 h-px w-full bg-gradient-to-r from-transparent to-transparent ${
              glow ? "via-purple-500/40" : "via-white/10"
            }`}
            style={glow ? { boxShadow: "0 0 16px rgba(177,77,255,0.35)" } : undefined}
          />
        </div>

        {/* Contenido */}
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}

