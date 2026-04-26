import { NextRequest, NextResponse } from "next/server";
import { sendOrderToDiscord } from "@/lib/discord";
import { OrderFormData } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validasi field wajib
    const requiredFields = [
      "nama",
      "discordUser",
      "email",
      "whatsapp",
      "jenisJasa",
      "paket",
      "detail",
      "budget",
      "deadline",
      "metodePembayaran",
    ];

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { success: false, message: `Field '${field}' wajib diisi.` },
          { status: 400 }
        );
      }
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "Format email tidak valid." },
        { status: 400 }
      );
    }

    // Validasi discord format
    const discordRegex = /^.+#\d{4}$/;
    if (!discordRegex.test(body.discordUser)) {
      return NextResponse.json(
        { success: false, message: "Format Discord harus username#1234" },
        { status: 400 }
      );
    }

    // Validasi WhatsApp hanya angka
    const waRegex = /^[0-9]+$/;
    if (!waRegex.test(body.whatsapp) || body.whatsapp.length < 10) {
      return NextResponse.json(
        { success: false, message: "Nomor WhatsApp tidak valid (min 10 digit, hanya angka)." },
        { status: 400 }
      );
    }

    // Validasi service slug
    const validSlugs = ["website", "discord-server", "discord-bot", "whatsapp-bot"];
    if (!validSlugs.includes(body.jenisJasa)) {
      return NextResponse.json(
        { success: false, message: "Jenis jasa tidak valid." },
        { status: 400 }
      );
    }

    const orderData: OrderFormData = {
      nama: String(body.nama).trim(),
      discordUser: String(body.discordUser).trim(),
      email: String(body.email).trim(),
      whatsapp: String(body.whatsapp).trim(),
      jenisJasa: body.jenisJasa,
      paket: String(body.paket).trim(),
      detail: String(body.detail).trim(),
      budget: String(body.budget).trim(),
      deadline: String(body.deadline).trim(),
      metodePembayaran: String(body.metodePembayaran).trim(),
      referensi: body.referensi ? String(body.referensi).trim() : "",
      catatan: body.catatan ? String(body.catatan).trim() : "",
    };

    const result = await sendOrderToDiscord(orderData);

    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("API Order Error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server. Silakan coba lagi nanti." },
      { status: 500 }
    );
  }
}

