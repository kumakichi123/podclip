import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, podcast_url, email } = body;

    // Validation
    if (!company || !name || !podcast_url || !email) {
      return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD, NOTIFICATION_TO_EMAIL } = process.env;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !NOTIFICATION_TO_EMAIL) {
      console.error("Email configuration is not set properly");
      return NextResponse.json({ error: "サーバー設定エラー" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"ポッドクリップLP" <${GMAIL_USER}>`,
      to: NOTIFICATION_TO_EMAIL,
      subject: `【新規申し込み】${company} / ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #7C3AED; margin-bottom: 24px;">📩 新規お申し込みがありました</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 8px; color: #666; width: 120px; font-weight: bold;">企業名</td>
              <td style="padding: 12px 8px;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 8px; color: #666; font-weight: bold;">担当者名</td>
              <td style="padding: 12px 8px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 8px; color: #666; font-weight: bold;">メール</td>
              <td style="padding: 12px 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 8px; color: #666; font-weight: bold;">Podcast URL</td>
              <td style="padding: 12px 8px;"><a href="${podcast_url}">${podcast_url}</a></td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 0.85rem;">このメールはポッドクリップLPから自動送信されました。</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "メール送信に失敗しました" }, { status: 500 });
  }
}
