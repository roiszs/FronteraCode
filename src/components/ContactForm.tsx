"use client";

import { useState } from "react";
import { Mail, MessageSquareText, Phone, User, Wrench } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ lang }: { lang: "es" | "en" }) {
  const [status, setStatus] = useState<Status>("idle");

  const copy =
    lang === "en"
      ? {
          title: "Form",
          sending: "Sending…",
          sent: "Sent",
          error: "Error",
          name: "Name",
          contact: "Email or phone",
          typePlaceholder: "Project type",
          types: [
            "Website / Landing",
            "System",
            "Dashboard / KPIs",
            "Automation",
            "Other",
          ],
          message: "Tell us the goal and what you need",
          submit: "Send",
          submitSending: "Sending…",
          ok: "Done. We received your message and will contact you soon.",
          bad: "Something went wrong. Please try again.",
          wa: "WhatsApp direct (fastest reply)",
          email: "Email: fronteracode@gmail.com",
        }
      : {
          title: "Formulario",
          sending: "Enviando…",
          sent: "Enviado",
          error: "Error",
          name: "Nombre",
          contact: "Email o teléfono",
          typePlaceholder: "Tipo de proyecto",
          types: [
            "Website / Landing",
            "Sistema",
            "Dashboard / KPIs",
            "Automatización",
            "Otro",
          ],
          message: "Cuéntanos el objetivo y lo que necesitas",
          submit: "Enviar",
          submitSending: "Enviando…",
          ok: "Listo. Recibimos tu mensaje y te contactaremos pronto.",
          bad: "Ocurrió un error. Intenta de nuevo.",
          wa: "WhatsApp directo (respuesta más rápida)",
          email: "Email: fronteracode@gmail.com",
        };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const payload = {
        name: String(data.get("name") ?? "").trim(),
        contact: String(data.get("contact") ?? "").trim(),
        type: String(data.get("type") ?? "").trim(),
        message: String(data.get("message") ?? "").trim(),
        lang,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("contact"),
          type: data.get("type"),
          message: data.get("message"),
          lang,
        }),
      });
      
      if (!res.ok) throw new Error("Request failed");
      
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
        {copy.title}
        <StatusBadge />
      </div>

      <div className="mt-4 grid gap-4">
        {/* Name */}
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
          <input
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            placeholder={copy.name}
            name="name"
            required
          />
        </div>

        {/* Contact */}
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
          <input
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            placeholder={copy.contact}
            name="contact"
            required
          />
        </div>

        {/* Type */}
        <div className="relative">
          <Wrench className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
          <select
            className="w-full appearance-none rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            name="type"
            required
            defaultValue=""
          >
            <option value="" disabled>
              {copy.typePlaceholder}
            </option>
            {copy.types.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-white/35" />
          <textarea
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-12 pr-4 py-3 outline-none focus:border-white/30 transition"
            placeholder={copy.message}
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
          {status === "sending" ? copy.submitSending : copy.submit}
        </button>

        {/* Feedback */}
        {status === "sent" && <p className="text-sm text-white/70">{copy.ok}</p>}
        {status === "error" && <p className="text-sm text-red-200">{copy.bad}</p>}

        {/* Alternatives */}
        <div className="pt-2 grid gap-2 text-xs text-white/60">
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
            href="https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20quiero%20cotizar%20un%20proyecto."
            target="_blank"
            rel="noreferrer"
          >
            <Phone className="h-4 w-4 text-white/50" />
            {copy.wa}
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
            href="mailto:fronteracode@gmail.com?subject=Cotizaci%C3%B3n%20FronteraCode"
          >
            <Mail className="h-4 w-4 text-white/50" />
            {copy.email}
          </a>
        </div>
      </div>
    </form>
  );
}
