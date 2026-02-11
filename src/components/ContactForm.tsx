"use client";

import { useMemo, useState } from "react";
import { Mail, MessageSquareText, Phone, User, Wrench } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";
type Lang = "es" | "en";

type Props = {
  lang: Lang;
};

export default function ContactForm({ lang }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  const copy = useMemo(() => {
    const es = {
      formTitle: "Formulario",
      sending: "Enviando…",
      sent: "Enviado",
      error: "Error",

      namePh: "Nombre",
      contactPh: "Email o teléfono",
      typeLabel: "Tipo de proyecto",
      messagePh: "Cuéntanos el objetivo y lo que necesitas",

      optWebsite: "Website / Landing",
      optSystem: "Sistema",
      optDashboard: "Dashboard / KPIs",
      optAutomation: "Automatización",
      optOther: "Otro",

      btnSending: "Enviando...",
      btnSend: "Enviar",

      okMsg: "Listo. Recibimos tu mensaje y te contactaremos pronto.",
      errMsg: "Ocurrió un error. Intenta de nuevo.",

      waText: "WhatsApp directo (respuesta más rápida)",
      emailText: "Email: fronteracode@gmail.com",
    };

    const en = {
      formTitle: "Form",
      sending: "Sending…",
      sent: "Sent",
      error: "Error",

      namePh: "Name",
      contactPh: "Email or phone",
      typeLabel: "Project type",
      messagePh: "Tell us your goal and what you need",

      optWebsite: "Website / Landing",
      optSystem: "Internal system",
      optDashboard: "Dashboards / KPIs",
      optAutomation: "Automation",
      optOther: "Other",

      btnSending: "Sending...",
      btnSend: "Send",

      okMsg: "Done. We received your message and will contact you soon.",
      errMsg: "Something went wrong. Please try again.",

      waText: "Direct WhatsApp (fastest reply)",
      emailText: "Email: fronteracode@gmail.com",
    };

    return lang === "en" ? en : es;
  }, [lang]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Captura lista para cuando lo conectemos a /api/contact o Resend
      const form = e.currentTarget;
      const data = new FormData(form);
      void data.get("name");
      void data.get("contact");
      void data.get("type");
      void data.get("message");

      // Simulación de envío
      await new Promise((r) => setTimeout(r, 700));

      setStatus("sent");
      form.reset();

      setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
    }
  }

  const StatusBadge = () => {
    if (status === "sending") {
      return (
        <span className="ml-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
          {copy.sending}
        </span>
      );
    }
    if (status === "sent") {
      return (
        <span className="ml-2 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
          {copy.sent}
        </span>
      );
    }
    if (status === "error") {
      return (
        <span className="ml-2 inline-flex items-center rounded-full border border-red-400/20 bg-red-500/10 px-2 py-1 text-xs text-red-200">
          {copy.error}
        </span>
      );
    }
    return null;
  };

  return (
    <form
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center text-sm text-white/60">
        {copy.formTitle}
        <StatusBadge />
      </div>

      <div className="mt-4 grid gap-4">
        {/* Nombre */}
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
          <input
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            placeholder={copy.namePh}
            name="name"
            required
          />
        </div>

        {/* Contacto */}
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
          <input
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            placeholder={copy.contactPh}
            name="contact"
            required
          />
        </div>

        {/* Tipo */}
        <div className="relative">
          <Wrench className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
          <select
            className="w-full appearance-none rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            name="type"
            required
            defaultValue=""
          >
            <option value="" disabled>
              {copy.typeLabel}
            </option>
            <option>{copy.optWebsite}</option>
            <option>{copy.optSystem}</option>
            <option>{copy.optDashboard}</option>
            <option>{copy.optAutomation}</option>
            <option>{copy.optOther}</option>
          </select>
        </div>

        {/* Mensaje */}
        <div className="relative">
          <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-white/35" />
          <textarea
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            placeholder={copy.messagePh}
            name="message"
            rows={5}
            required
          />
        </div>

        {/* Submit */}
        <button
          className="w-full rounded-xl px-5 py-3 font-medium text-white disabled:opacity-60 transition hover:scale-[1.02] active:scale-[0.99]"
          style={{
            background:
              "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
            boxShadow: "0 0 30px rgba(177,77,255,0.2)",
          }}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? copy.btnSending : copy.btnSend}
        </button>

        {/* Feedback */}
        {status === "sent" && (
          <p className="text-sm text-white/70">{copy.okMsg}</p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-200">{copy.errMsg}</p>
        )}

        {/* Alternativas */}
        <div className="pt-2 grid gap-2 text-xs text-white/60">
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
            href="https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20quiero%20cotizar%20un%20proyecto."
            target="_blank"
            rel="noreferrer"
          >
            <Phone className="h-4 w-4 text-white/50" />
            {copy.waText}
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
            href="mailto:fronteracode@gmail.com?subject=Cotizaci%C3%B3n%20FronteraCode"
          >
            <Mail className="h-4 w-4 text-white/50" />
            {copy.emailText}
          </a>
        </div>
      </div>
    </form>
  );
}
