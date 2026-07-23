import GuestConfirmationEmail from "@/emails/GuestConfirmationEmail";
import HostSummaryEmail from "@/emails/HostSummaryEmail";
import type { Answers } from "@/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Required env vars (put these in .env.local — never commit them):
//   RESEND_API_KEY=
//   GUEST_EMAIL=      (Saam's email)
//   HOST_EMAIL=       (your email)
//   NEXT_PUBLIC_SITE_URL=  (e.g. https://project0708.vercel.app)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const answers = (await request.json()) as Answers;

    const guestEmail = process.env.GUEST_EMAIL;
    const hostEmail = process.env.HOST_EMAIL;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    if (!guestEmail || !hostEmail) {
      return NextResponse.json(
        { error: "GUEST_EMAIL o HOST_EMAIL no configurados en .env.local" },
        { status: 500 }
      );
    }

    await Promise.all([
      resend.emails.send({
        from: "Proyecto 07·08 <onboarding@resend.dev>",
        to: guestEmail,
        subject: "Proyecto 07·08",
        react: GuestConfirmationEmail({ guestName: "Saam" }),
      }),
      resend.emails.send({
        from: "Proyecto 07·08 <onboarding@resend.dev>",
        to: hostEmail,
        subject: "Saam eligió — Proyecto 07·08",
        react: HostSummaryEmail({
          answers,
          invitationUrl: `${siteUrl}/invitation`,
        }),
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("send-email error:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el correo" },
      { status: 500 }
    );
  }
}
