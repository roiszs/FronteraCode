import { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-3 text-white/70 leading-relaxed">
              {subtitle}
            </p>
          ) : null}

          {/* Línea sutil separadora */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="mt-6">
          {children}
        </div>
      </div>
    </section>
  );
}

