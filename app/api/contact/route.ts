import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const contact = String(body?.contact ?? "").trim();
    const type = String(body?.type ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !contact || !type || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const to =
      process.env.CONTACT_TO_EMAIL || "fronteracode@gmail.com";

    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "FronteraCode <hola@fronteracode.com>";

    const subject = `Nuevo lead - ${type} (${name})`;

    // 1️⃣ Email interno (para ti)
    const internalEmail = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: contact.includes("@") ? contact : undefined,
      text: [
        "Nuevo formulario FronteraCode",
        "-----------------------------------",
        "",
        `Nombre: ${name}`,
        `Contacto del cliente: ${contact}`,
        `Tipo de proyecto: ${type}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    if (internalEmail.error) {
      console.error("Resend internal error:", internalEmail.error);
      return NextResponse.json(
        { ok: false, error: internalEmail.error.message },
        { status: 500 }
      );
    }

    // 2️⃣ Auto-reply al cliente (solo si escribió email válido)
    if (contact.includes("@")) {
      await resend.emails.send({
        from,
        to: contact,
        subject: "Recibimos tu solicitud - FronteraCode",
        text: [
          `Hola ${name},`,
          "",
          "Gracias por contactarnos en FronteraCode 🚀",
          "",
          "Recibimos tu solicitud y la estamos revisando.",
          "Te contactaremos lo antes posible (normalmente el mismo día).",
          "",
          "Si es urgente, puedes escribirnos por WhatsApp:",
          "656 763 5652",
          "",
          "Saludos,",
          "Equipo FronteraCode",
          "https://fronteracode.com",
        ].join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("API error:", e);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}