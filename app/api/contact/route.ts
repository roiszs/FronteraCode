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
      const safeName = name || "hola";
      const safeType = type || "proyecto";
    
      const subject =
        body?.lang === "en"
          ? "We got your message — FronteraCode"
          : "Recibimos tu solicitud — FronteraCode";
    
      const preview =
        body?.lang === "en"
          ? "Thanks for reaching out. We’ll contact you shortly."
          : "Gracias por contactarnos. Te responderemos pronto.";
    
      const html =
        body?.lang === "en"
          ? renderAutoReplyEN({ name: safeName, type: safeType })
          : renderAutoReplyES({ name: safeName, type: safeType });
    
      const text =
        body?.lang === "en"
          ? [
              `Hi ${safeName},`,
              "",
              "Thanks for reaching out to FronteraCode.",
              "We received your message and we’ll get back to you soon (usually same day).",
              "",
              "If it’s urgent, WhatsApp: +52 656 763 5652",
              "— FronteraCode",
              "https://fronteracode.com",
            ].join("\n")
          : [
              `Hola ${safeName},`,
              "",
              "Gracias por contactar a FronteraCode.",
              "Recibimos tu solicitud y te responderemos pronto (normalmente el mismo día).",
              "",
              "Si es urgente, WhatsApp: +52 656 763 5652",
              "— FronteraCode",
              "https://fronteracode.com",
            ].join("\n");
    
      await resend.emails.send({
        from,
        to: contact,
        subject,
        // "react" no lo usamos para que puedas copiar/pegar fácil
        html: withPreviewText(html, preview),
        text,
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

function withPreviewText(html: string, preview: string) {
  // Preheader (texto de vista previa en Gmail/Apple Mail)
  return `
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(preview)}&nbsp;&zwnj;&nbsp;${"&nbsp;".repeat(80)}
  </div>
  ${html}
  `;
}

function renderAutoReplyES({ name, type }: { name: string; type: string }) {
  return `
  <div style="background:#07060A;padding:28px 16px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);">
      <tr>
        <td style="padding:22px 22px 10px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:38px;height:38px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);display:grid;place-items:center;">
              <span style="display:block;width:10px;height:10px;border-radius:999px;background:linear-gradient(90deg, rgba(177,77,255,.95), rgba(255,79,216,.95));box-shadow:0 0 18px rgba(177,77,255,.35);"></span>
            </div>
            <div>
              <div style="color:rgba(255,255,255,.92);font-weight:700;letter-spacing:-0.2px;font-size:16px;">
                FronteraCode
              </div>
              <div style="color:rgba(255,255,255,.55);font-size:12px;line-height:1.4;">
                Tecnología de frontera · Software real para operación real
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:12px 22px 18px;">
          <div style="height:1px;background:rgba(255,255,255,.10);"></div>
        </td>
      </tr>

      <tr>
        <td style="padding:0 22px 6px;">
          <div style="display:inline-block;padding:7px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.10);background:rgba(0,0,0,.35);color:rgba(255,255,255,.72);font-size:12px;">
            Confirmación automática
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:14px 22px 8px;">
          <h1 style="margin:0;color:rgba(255,255,255,.94);font-size:20px;letter-spacing:-0.4px;">
            ¡Recibimos tu solicitud, ${escapeHtml(name)}!
          </h1>
          <p style="margin:10px 0 0;color:rgba(255,255,255,.70);font-size:14px;line-height:1.7;">
            Gracias por contactarnos. Ya tenemos tu mensaje sobre
            <strong style="color:rgba(255,255,255,.88);">${escapeHtml(type)}</strong>.
            Te responderemos pronto (normalmente el mismo día).
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:14px 22px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:16px;border:1px solid rgba(255,255,255,.10);background:rgba(0,0,0,.35);">
            <tr>
              <td style="padding:14px 14px 10px;">
                <div style="color:rgba(255,255,255,.80);font-weight:600;font-size:13px;">Siguientes pasos</div>
                <ul style="margin:10px 0 0;padding-left:18px;color:rgba(255,255,255,.68);font-size:13px;line-height:1.7;">
                  <li>Revisamos tu solicitud y aclaramos el alcance.</li>
                  <li>Te proponemos una ruta y tiempos (por sprints).</li>
                  <li>Te enviamos cotización clara por módulos.</li>
                </ul>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:6px 22px 18px;">
          <div style="display:flex;flex-wrap:wrap;gap:10px;">
            <a href="https://wa.me/526567635652?text=Hola%20FronteraCode%2C%20quiero%20dar%20seguimiento%20a%20mi%20solicitud." 
               style="display:inline-block;text-decoration:none;padding:12px 14px;border-radius:14px;color:white;font-weight:700;font-size:13px;background:linear-gradient(90deg, rgba(177,77,255,.95), rgba(255,79,216,.95));box-shadow:0 0 28px rgba(177,77,255,.22);">
              WhatsApp (rápido)
            </a>
            <a href="mailto:fronteracode@gmail.com?subject=Seguimiento%20FronteraCode" 
               style="display:inline-block;text-decoration:none;padding:12px 14px;border-radius:14px;color:rgba(255,255,255,.86);font-weight:600;font-size:13px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);">
              Responder por email
            </a>
            <a href="https://fronteracode.com" 
               style="display:inline-block;text-decoration:none;padding:12px 14px;border-radius:14px;color:rgba(255,255,255,.86);font-weight:600;font-size:13px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.30);">
              Ver sitio
            </a>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:10px 22px 22px;">
          <div style="height:1px;background:rgba(255,255,255,.10);"></div>
          <p style="margin:12px 0 0;color:rgba(255,255,255,.45);font-size:12px;line-height:1.6;">
            Este es un correo automático. Si no solicitaste información, puedes ignorarlo.
          </p>
        </td>
      </tr>
    </table>
  </div>
  `;
}

function renderAutoReplyEN({ name, type }: { name: string; type: string }) {
  return `
  <div style="background:#07060A;padding:28px 16px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);">
      <tr>
        <td style="padding:22px 22px 10px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="width:38px;height:38px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);display:grid;place-items:center;">
              <span style="display:block;width:10px;height:10px;border-radius:999px;background:linear-gradient(90deg, rgba(177,77,255,.95), rgba(255,79,216,.95));box-shadow:0 0 18px rgba(177,77,255,.35);"></span>
            </div>
            <div>
              <div style="color:rgba(255,255,255,.92);font-weight:700;letter-spacing:-0.2px;font-size:16px;">
                FronteraCode
              </div>
              <div style="color:rgba(255,255,255,.55);font-size:12px;line-height:1.4;">
                Border technology · Software for real operations
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:12px 22px 18px;">
          <div style="height:1px;background:rgba(255,255,255,.10);"></div>
        </td>
      </tr>

      <tr>
        <td style="padding:0 22px 6px;">
          <div style="display:inline-block;padding:7px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.10);background:rgba(0,0,0,.35);color:rgba(255,255,255,.72);font-size:12px;">
            Automatic confirmation
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:14px 22px 8px;">
          <h1 style="margin:0;color:rgba(255,255,255,.94);font-size:20px;letter-spacing:-0.4px;">
            We got your message, ${escapeHtml(name)}!
          </h1>
          <p style="margin:10px 0 0;color:rgba(255,255,255,.70);font-size:14px;line-height:1.7;">
            Thanks for reaching out. We received your request about
            <strong style="color:rgba(255,255,255,.88);">${escapeHtml(type)}</strong>.
            We’ll reply soon (usually the same day).
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:14px 22px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:16px;border:1px solid rgba(255,255,255,.10);background:rgba(0,0,0,.35);">
            <tr>
              <td style="padding:14px 14px 10px;">
                <div style="color:rgba(255,255,255,.80);font-weight:600;font-size:13px;">Next steps</div>
                <ul style="margin:10px 0 0;padding-left:18px;color:rgba(255,255,255,.68);font-size:13px;line-height:1.7;">
                  <li>We review your request and confirm scope.</li>
                  <li>We propose a roadmap and timeline (weekly sprints).</li>
                  <li>We send a clear modular quote.</li>
                </ul>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:6px 22px 18px;">
          <div style="display:flex;flex-wrap:wrap;gap:10px;">
            <a href="https://wa.me/526567635652?text=Hi%20FronteraCode%2C%20I%20want%20to%20follow%20up%20on%20my%20request." 
               style="display:inline-block;text-decoration:none;padding:12px 14px;border-radius:14px;color:white;font-weight:700;font-size:13px;background:linear-gradient(90deg, rgba(177,77,255,.95), rgba(255,79,216,.95));box-shadow:0 0 28px rgba(177,77,255,.22);">
              WhatsApp (fast)
            </a>
            <a href="mailto:fronteracode@gmail.com?subject=FronteraCode%20Follow%20up" 
               style="display:inline-block;text-decoration:none;padding:12px 14px;border-radius:14px;color:rgba(255,255,255,.86);font-weight:600;font-size:13px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);">
              Reply by email
            </a>
            <a href="https://fronteracode.com" 
               style="display:inline-block;text-decoration:none;padding:12px 14px;border-radius:14px;color:rgba(255,255,255,.86);font-weight:600;font-size:13px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.30);">
              Visit site
            </a>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:10px 22px 22px;">
          <div style="height:1px;background:rgba(255,255,255,.10);"></div>
          <p style="margin:12px 0 0;color:rgba(255,255,255,.45);font-size:12px;line-height:1.6;">
            This is an automated email. If you didn’t request info, you can ignore it.
          </p>
        </td>
      </tr>
    </table>
  </div>
  `;
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}