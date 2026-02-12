import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    console.log("RESEND key prefix:", process.env.RESEND_API_KEY?.slice(0, 6));
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

    const to = process.env.CONTACT_TO_EMAIL || "fronteracode@gmail.com";
    const from =
      process.env.CONTACT_FROM_EMAIL || "FronteraCode <onboarding@resend.dev>";

    const subject = `Nuevo lead - ${type} (${name})`;

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: contact.includes("@") ? contact : undefined,
      text: [
        "Nuevo formulario FronteraCode",
        "",
        `Nombre: ${name}`,
        `Contacto: ${contact}`,
        `Tipo: ${type}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e: any) {
    console.error("API error:", e);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
