"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Por ahora solo simula envío. Luego lo conectamos a /api/contact o Resend.
    await new Promise((r) => setTimeout(r, 700));

    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <form
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
      onSubmit={handleSubmit}
    >
      <div className="text-sm text-white/60">
        Formulario {status === "sent" ? "· Enviado" : ""}
      </div>

      <div className="mt-4 grid gap-4">
        <input
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
          placeholder="Nombre"
          name="name"
          required
        />
        <input
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
          placeholder="Email o teléfono"
          name="contact"
          required
        />
        <select
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
          name="type"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Tipo de proyecto
          </option>
          <option>Website / Landing</option>
          <option>Sistema</option>
          <option>Dashboard / KPIs</option>
          <option>Automatización</option>
          <option>Otro</option>
        </select>
        <textarea
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
          placeholder="Cuéntanos el objetivo y lo que necesitas"
          name="message"
          rows={5}
          required
        />

        <button
          className="rounded-xl px-5 py-3 font-medium text-white disabled:opacity-60 transition hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background:
              "linear-gradient(90deg, rgba(177,77,255,0.9), rgba(255,79,216,0.9))",
            boxShadow: "0 0 30px rgba(177,77,255,0.2)",
          }}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-white/70">
            Listo. Recibimos tu mensaje y te contactaremos pronto.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-300">
            Ocurrió un error. Intenta de nuevo.
          </p>
        )}

        <p className="text-xs text-white/50">
          Contactanos en nuestras redes sociales.
          
        </p>
      </div>
    </form>
  );
}
