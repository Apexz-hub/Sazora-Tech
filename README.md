# 🚀 Sazora - Jasa Digital Service Platform

Website penjualan jasa digital **fullstack** dengan integrasi **Discord Webhook**. Customer dapat memesan jasa melalui form order yang lengkap, dan order akan otomatis masuk ke channel Discord sesuai jenis jasa yang dipesan.

## ✨ Fitur

- 🎨 **Tema Neon Futuristik** (Black, Blue, Purple, Pink)
- 📱 **Responsive** - Tampilan optimal di HP dan Laptop
- 📝 **Form Order Lengkap** dengan validasi real-time
- 🤖 **Integrasi Discord** - Order otomatis masuk channel sesuai jenis jasa
- ⚡ **Animasi Smooth** menggunakan Framer Motion
- 🔒 **Validasi Form** dengan Zod + React Hook Form
- 🌐 **Full Bahasa Indonesia**

## 📦 Layanan yang Tersedia

1. **Web Development Junior**
2. **Create/Setup Server Discord**
3. **Create Bot Discord**
4. **Create Bot WhatsApp**

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animasi
- [React Hook Form](https://react-hook-form.com/) - Form Management
- [Zod](https://zod.dev/) - Schema Validation
- [Lucide React](https://lucide.dev/) - Icons
- [Discord Webhook](https://discord.com/developers/docs/resources/webhook) - Notifikasi Order

## 🚀 Deploy ke Vercel

### 1. Setup Repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### 2. Buat Webhook Discord

1. Buka server Discord Anda
2. Masuk ke **Server Settings** > **Integrations** > **Webhooks**
3. Klik **New Webhook**
4. Pilih channel yang sesuai:
   - `#order-website` untuk Web Development
   - `#order-discord-server` untuk Setup Server Discord
   - `#order-discord-bot` untuk Bot Discord
   - `#order-whatsapp-bot` untuk Bot WhatsApp
5. Klik **Copy Webhook URL**

### 3. Deploy ke Vercel

1. Kunjungi [vercel.com](https://vercel.com) dan login dengan GitHub
2. Klik **Add New Project** dan import repository ini
3. Di bagian **Environment Variables**, tambahkan:
   - `DISCORD_WEBHOOK_WEBSITE` = URL webhook untuk website
   - `DISCORD_WEBHOOK_DISCORD_SERVER` = URL webhook untuk discord server
   - `DISCORD_WEBHOOK_DISCORD_BOT` = URL webhook untuk discord bot
   - `DISCORD_WEBHOOK_WHATSAPP_BOT` = URL webhook untuk whatsapp bot
4. Klik **Deploy**

## 🔧 Development Lokal

```bash
# Install dependencies
npm install

# Setup environment
cp .env.local.example .env.local
# Edit .env.local dan isi webhook URL

# Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 📂 Struktur Project

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   ├── order/[service]/    # Halaman order dinamis
│   │   └── api/order/          # API endpoint kirim ke Discord
│   ├── components/             # React components
│   ├── data/services.ts        # Data jasa & paket
│   ├── lib/discord.ts          # Discord webhook service
│   └── types/index.ts          # TypeScript types
├── public/                     # Static assets
├── .env.local.example          # Contoh environment variables
├── next.config.js              # Konfigurasi Next.js
└── tailwind.config.ts          # Konfigurasi Tailwind + Tema Neon
```

## 📄 Environment Variables

| Variable                         | Deskripsi                               |
| -------------------------------- | --------------------------------------- |
| `DISCORD_WEBHOOK_WEBSITE`        | Webhook channel `#order-website`        |
| `DISCORD_WEBHOOK_DISCORD_SERVER` | Webhook channel `#order-discord-server` |
| `DISCORD_WEBHOOK_DISCORD_BOT`    | Webhook channel `#order-discord-bot`    |
| `DISCORD_WEBHOOK_WHATSAPP_BOT`   | Webhook channel `#order-whatsapp-bot`   |

## 📞 Kontak

- Email: hello@sazora.id
- Discord: Hubungi kami via order form 😄

---

**Dibuat dengan ❤️ menggunakan Next.js & Tailwind CSS**
