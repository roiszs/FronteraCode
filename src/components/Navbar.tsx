"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/src/components/context/LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, toggle, t } = useLang();

  const nav = useMemo(
    () => [
      { label: t("nav_services"), href: "#servicios" },
      { label: t("nav_process"), href: "#proceso" },
      // si no usarás proyectos por ahora, puedes quitarlo
      // { label: t("nav_projects"), href: "#proyectos" },
      { label: t("nav_faq"), href: "#faq" },
      { label: t("nav_contact"), href: "#contacto" },
    ],
    [t]
  );

  const hrefFor = (hash: string) =>
    isHome ? hash : `/${hash.startsWith("#") ? hash : `#${hash}`}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between">
          {/* Brand desktop */}
          <a
            href="/"
            className="hidden lg:flex items-center gap-3 min-w-[190px]"
            aria-label="Home"
          >
            <Image
              src="/brand/Logo1Oscuro.png"
              alt="FronteraCode"
              width={40}
              height={40}
              className="object-contain drop-shadow-[0_0_16px_rgba(177,77,255,0.35)]"
              priority
            />
            <span className="font-semibold tracking-tight">FronteraCode</span>
          </a>

          {/* Brand mobile centered */}
          <a
            href="/"
            className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
            aria-label="Home"
          >
            <Image
              src="/brand/sinFondo.png"
              alt="FronteraCode"
              width={32}
              height={32}
              className="object-contain drop-shadow-[0_0_12px_rgba(177,77,255,0.35)]"
              priority
            />
            <span className="font-semibold tracking-tight">FronteraCode</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/70">
            {nav.map((i) => (
              <a
                key={i.href}
                href={hrefFor(i.href)}
                className="hover:text-white transition"
              >
                {i.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle (desktop + mobile) */}
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
              aria-label="Cambiar idioma"
              title="ES / EN"
            >
              <span className={lang === "es" ? "text-white" : "text-white/50"}>
                ES
              </span>
              <span className="mx-2 text-white/30">|</span>
              <span className={lang === "en" ? "text-white" : "text-white/50"}>
                EN
              </span>
            </button>

            {/* Desktop CTAs */}
            <a
              className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              href="mailto:fronteracode@gmail.com?subject=Cotizaci%C3%B3n%20FronteraCode"
            >
              Email
            </a>

            <a
              className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
                boxShadow: "0 0 30px rgba(177,77,255,0.25)",
              }}
              href="https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20quiero%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noreferrer"
            >
              Agendar llamada
            </a>

            {/* Mobile menu */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open
                ? lang === "en"
                  ? "Close"
                  : "Cerrar"
                : lang === "en"
                ? "Menu"
                : "Menú"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 grid gap-2">
            {nav.map((i) => (
              <a
                key={i.href}
                href={hrefFor(i.href)}
                className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 transition"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </a>
            ))}

            <div className="pt-3 grid gap-2">
              <a
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                href="mailto:fronteracode@gmail.com?subject=Cotizaci%C3%B3n%20FronteraCode"
                onClick={() => setOpen(false)}
              >
                Email
              </a>

              <a
                className="rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
                  boxShadow: "0 0 30px rgba(177,77,255,0.25)",
                }}
                href="https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20quiero%20cotizar%20un%20proyecto."
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                {lang === "en" ? "Schedule a call" : "Agendar llamada"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

