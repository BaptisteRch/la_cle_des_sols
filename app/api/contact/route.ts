import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  frequency?: string;
  message?: string;
  website?: string; // honeypot
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || (!phone && !email)) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  const subject = `Demande de devis — La clé des sols (${data.city || "ville n.c."})`;
  const plain = [
    `Nom : ${name}`,
    `Téléphone : ${phone || "-"}`,
    `Email : ${email || "-"}`,
    `Ville / secteur : ${data.city || "-"}`,
    ``,
    `Statut : ${data.service || "-"}`,
    `Prestation : ${data.frequency || "-"}`,
    ``,
    `Message :`,
    message || "-",
  ].join("\n");

  const html = `
    <h2>Nouvelle demande de devis</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Email :</strong> ${escapeHtml(email || "-")}</p>
    <p><strong>Ville :</strong> ${escapeHtml(data.city || "-")}</p>
    <p><strong>Statut :</strong> ${escapeHtml(data.service || "-")}</p>
    <p><strong>Prestation :</strong> ${escapeHtml(data.frequency || "-")}</p>
    <hr />
    <p><strong>Message :</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message || "-")}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "gmagand@cledessols.fr";
  const from = process.env.CONTACT_FROM_EMAIL || "La clé des sols <onboarding@resend.dev>";

  if (!apiKey) {
    console.log("[contact] no RESEND_API_KEY set — submission logged only");
    console.log("[contact]", plain);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject,
        text: plain,
        html,
      }),
    });

    if (!resp.ok) {
      const body = await resp.text();
      console.error("[contact] resend error", resp.status, body);
      return NextResponse.json(
        { ok: false, error: "email_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] exception", err);
    return NextResponse.json(
      { ok: false, error: "exception" },
      { status: 500 }
    );
  }
}
