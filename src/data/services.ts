import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "website",
    title: "Web Development Junior",
    shortDescription: "Buat website keren dengan harga terjangkau untuk portofolio, bisnis, atau landing page.",
    description:
      "Layanan pembuatan website untuk kebutuhan pribadi, bisnis, portofolio, atau landing page. Menggunakan teknologi modern seperti Next.js, React, dan Tailwind CSS. Cocok untuk pemula yang ingin punya website profesional tanpa biaya mahal.",
    icon: "Globe",
    features: [
      "Responsive Mobile & Desktop",
      "Desain Modern & Clean",
      "SEO Friendly",
      "Animasi Interaktif",
      "Revisi 2x Gratis",
      "Free Hosting Vercel",
    ],
    packages: [
      { name: "Landing Page", price: "Rp 70.000", description: "1 halaman, hero section, CTA, kontak" },
      { name: "Portofolio", price: "Rp 100.000", description: "3-5 halaman, galeri project, about, kontak" },
      { name: "Bisnis", price: "Rp 150.000", description: "5-8 halaman, CMS ready, blog, fitur lengkap" },
    ],
    discordChannel: "#order-website",
    webhookEnvKey: "DISCORD_WEBHOOK_WEBSITE",
    color: 0x00f3ff,
  },
  {
    slug: "discord-server",
    title: "Create/Setup Server Discord",
    shortDescription: "Setup server Discord lengkap dengan channel, role, bot, dan sistem otomatis.",
    description:
      "Jasa pembuatan dan konfigurasi server Discord dari nol hingga siap pakai. Termasuk pembuatan channel, kategori, role, permission, sistem verifikasi, welcome message, auto role, dan integrasi bot. Cocok untuk komunitas gaming, belajar, atau bisnis.",
    icon: "Server",
    features: [
      "Struktur Channel & Kategori Rapi",
      "Role System dengan Permission",
      "Sistem Verifikasi Member",
      "Auto Role & Welcome Message",
      "Custom Emoji & Sticker Setup",
      "Boost Level 1-3 Optimization",
    ],
    packages: [
      { name: "Basic", price: "Rp 50.000", description: "5 channel, 3 role, verifikasi dasar" },
      { name: "Standard", price: "Rp 70.000", description: "15 channel, 8 role, auto mod, welcome bot" },
      { name: "Premium", price: "Rp 150.000", description: "Unlimited channel, full role system, custom bot, integrasi" },
    ],
    discordChannel: "#order-discord-server",
    webhookEnvKey: "DISCORD_WEBHOOK_DISCORD_SERVER",
    color: 0xa855f7,
  },
  {
    slug: "discord-bot",
    title: "Create Bot Discord",
    shortDescription: "Bot Discord custom dengan fitur music, moderasi, economy, dan lainnya.",
    description:
      "Pembuatan bot Discord custom sesuai kebutuhan server Anda. Dari bot sederhana hingga kompleks dengan database, dashboard, dan fitur advanced. Menggunakan Node.js, Discord.js, dan dapat di-host 24/7 gratis di platform seperti Railway atau Render.",
    icon: "Bot",
    features: [
      "Moderasi Otomatis (Ban, Kick, Mute, Warn)",
      "Sistem Economy & Leveling",
      "Music Player (YouTube/Spotify)",
      "Custom Commands & Response",
      "Database Integration",
      "Dashboard Web (opsional)",
    ],
    packages: [
      { name: "Simple", price: "Rp 100.000", description: "5 command dasar, response text, utility" },
      { name: "Advanced", price: "Rp 150.000", description: "15+ command, database, economy/mod system" },
      { name: "Enterprise", price: "Rp 200.000", description: "Custom fitur unlimited, dashboard web, API integration" },
    ],
    discordChannel: "#order-discord-bot",
    webhookEnvKey: "DISCORD_WEBHOOK_DISCORD_BOT",
    color: 0xff00ff,
  },
  {
    slug: "whatsapp-bot",
    title: "Create Bot WhatsApp",
    shortDescription: "Bot WhatsApp untuk bisnis, auto-reply, broadcast, dan integrasi layanan.",
    description:
      "Pembuatan bot WhatsApp yang dapat membantu otomasi bisnis Anda. Fitur meliputi auto-reply, broadcast message, menu interaktif, integrasi dengan Google Sheets/Database, dan sistem order otomatis. Support WhatsApp Business API dan WhatsApp Web (Baileys).",
    icon: "MessageCircle",
    features: [
      "Auto Reply & Menu Interaktif",
      "Broadcast Message",
      "Simpan Kontak ke Google Sheets",
      "Notifikasi Order Real-time",
      "Multi-Device Support",
      "QR Scan Login",
    ],
    packages: [
      { name: "Starter", price: "Rp 100.000", description: "Auto reply, menu text, broadcast 50/hari" },
      { name: "Business", price: "Rp 130.000", description: "Google Sheets integration, custom menu, broadcast 500/hari" },
      { name: "Pro", price: "Rp 175.000", description: "Full API integration, database, unlimited broadcast, custom fitur" },
    ],
    discordChannel: "#order-whatsapp-bot",
    webhookEnvKey: "DISCORD_WEBHOOK_WHATSAPP_BOT",
    color: 0x06b6d4,
  },
];

export const validSlugs = services.map((s) => s.slug);

