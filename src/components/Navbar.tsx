import Image from "next/image";

const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 min-w-[180px]">
            <Image
              src="/brand/Logo1Oscuro.png"
              alt="FronteraCode"
              width={34}
              height={34}
              className="object-contain drop-shadow-[0_0_16px_rgba(177,77,255,0.35)]"
              priority
            />
            <span className="font-semibold tracking-tight">FronteraCode</span>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/70">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="hover:text-white transition"
              >
                {i.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3 whitespace-nowrap">
            <a
              className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
              href="mailto:fronteracode@gmail.com?subject=Cotizaci%C3%B3n%20FronteraCode"
            >
              Email
            </a>

            <a
              className="inline-flex rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.03] active:scale-[0.98]"
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
          </div>
        </div>
      </div>
    </header>
  );
}
