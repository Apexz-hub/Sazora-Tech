import { OrderFormData, ServiceSlug } from "@/types";
import { services } from "@/data/services";

function getWebhookUrl(serviceSlug: ServiceSlug): string | undefined {
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return process.env[service.webhookEnvKey];
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "Tidak ditentukan";
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function sendOrderToDiscord(data: OrderFormData): Promise<{ success: boolean; message: string }> {
  const webhookUrl = getWebhookUrl(data.jenisJasa);
  const service = services.find((s) => s.slug === data.jenisJasa);

  if (!webhookUrl) {
    return {
      success: false,
      message: "Webhook untuk jasa ini belum dikonfigurasi. Silakan hubungi admin.",
    };
  }

  const embed = {
    title: `📦 Order Baru: ${service?.title || data.jenisJasa}`,
    color: service?.color || 0x00f3ff,
    description: data.detail || "Tidak ada detail tambahan",
    fields: [
      { name: "👤 Nama Lengkap", value: data.nama, inline: true },
      { name: "📧 Email", value: data.email, inline: true },
      { name: "📱 WhatsApp", value: data.whatsapp, inline: true },
      { name: "🎮 Discord", value: data.discordUser, inline: true },
      { name: "📋 Paket", value: data.paket, inline: true },
      { name: "💰 Estimasi Budget", value: data.budget || "Tidak disebutkan", inline: true },
      { name: "📅 Deadline", value: formatDate(data.deadline), inline: true },
      { name: "💳 Metode Pembayaran", value: data.metodePembayaran, inline: true },
    ],
    footer: {
      text: `Dipesan oleh ${data.discordUser} • Sazora Services`,
    },
    timestamp: new Date().toISOString(),
  };

  if (data.referensi?.trim()) {
    embed.fields.push({
      name: "🔗 Referensi",
      value: data.referensi,
      inline: false,
    });
  }

  if (data.catatan?.trim()) {
    embed.fields.push({
      name: "📝 Catatan Tambahan",
      value: data.catatan,
      inline: false,
    });
  }

  const payload = {
    content: "🔔 **Pesanan Baru Masuk!**",
    embeds: [embed],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Discord webhook error:", errorText);
      return {
        success: false,
        message: "Gagal mengirim order ke Discord. Silakan coba lagi nanti.",
      };
    }

    return {
      success: true,
      message: "Order berhasil dikirim! Kami akan menghubungi Anda segera.",
    };
  } catch (error) {
    console.error("Discord webhook exception:", error);
    return {
      success: false,
      message: "Terjadi kesalahan koneksi. Silakan coba lagi nanti.",
    };
  }
}

