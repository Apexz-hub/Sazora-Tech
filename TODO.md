# 🚀 Sazora - Jasa Digital Service Platform

## 📋 Project Overview

Website penjualan jasa digital fullstack dengan integrasi Discord. Customer mengisi form order → data masuk ke channel Discord sesuai jenis jasa yang dipesan.

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript (TSX)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** Framer Motion
- **Form:** React Hook Form + Zod
- **Discord:** Webhook API
- **Deploy:** Vercel (GitHub integration)

## 📦 Services Catalog

1. **Web Development Junior** → `#order-website`
2. **Create/Setup Server Discord** → `#order-discord-server`
3. **Create Bot Discord** → `#order-discord-bot`
4. **Create Bot WhatsApp** → `#order-whatsapp-bot`

## 🗂 File Structure

```
d:/Sazora/
├── TODO.md
├── README.md
├── .env.local.example
├── next.config.js
├── tailwind.config.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── order/
│   │   │   └── [service]/page.tsx
│   │   └── api/order/route.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── OrderForm.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   ├── lib/
│   │   ├── discord.ts
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       └── services.ts
```

## ✅ Implementation Steps

### Phase 1: Project Setup

- [x] Initialize Next.js project with TypeScript, Tailwind, App Router
- [x] Install dependencies (framer-motion, react-hook-form, zod, lucide-react)
- [x] Setup shadcn/ui components
- [x] Configure project configs (next.config, tailwind, tsconfig)

### Phase 2: Core Infrastructure

- [x] Create TypeScript types (`src/types/index.ts`)
- [x] Create service data/config (`src/data/services.ts`)
- [x] Create Discord webhook service (`src/lib/discord.ts`)
- [x] Create utility functions (`src/lib/utils.ts`)

### Phase 3: UI Components

- [x] Build Navbar component
- [x] Build Hero section
- [x] Build Services section with 4 service cards
- [x] Build Footer component
- [x] Build HowItWorks component

### Phase 4: Order Form (Dynamic)

- [x] Build dynamic order form page (`/order/[service]`)
- [x] Implement form fields:
  - Nama Lengkap
  - Username Discord (dengan tag#0000)
  - Email
  - Nomor WhatsApp
  - Jenis Jasa (auto-fill, readonly)
  - Paket/Plan (radio khusus per jasa)
  - Detail Kebutuhan (textarea)
  - Estimasi Budget
  - Deadline/Timeline
  - Metode Pembayaran (Transfer, QRIS, dll)
  - Link Referensi (opsional)
  - Catatan Tambahan (opsional)
- [x] Form validation with Zod schema
- [x] Loading state & success/error toast

### Phase 5: API & Discord Integration

- [x] Create API route (`/api/order`)
- [x] Format Discord embed message
- [x] Route to correct channel based on service type
- [x] Error handling & response

### Phase 6: Polish & Deploy

- [x] Add Framer Motion animations
- [x] Responsive design check
- [x] Create `.env.local.example`
- [x] Create comprehensive README.md
- [ ] Build production (`next build`)
- [ ] Initialize Git repository

## 🔐 Environment Variables

```env
DISCORD_WEBHOOK_WEBSITE=https://discord.com/api/webhooks/...
DISCORD_WEBHOOK_DISCORD_SERVER=https://discord.com/api/webhooks/...
DISCORD_WEBHOOK_DISCORD_BOT=https://discord.com/api/webhooks/...
DISCORD_WEBHOOK_WHATSAPP_BOT=https://discord.com/api/webhooks/...
```

## 🎯 Form-to-Discord Mapping

| Form Field        | Discord Embed Field |
| ----------------- | ------------------- |
| Nama Lengkap      | Author Name         |
| Username Discord  | Footer              |
| Email             | Field               |
| WhatsApp          | Field               |
| Jenis Jasa        | Title               |
| Paket/Plan        | Field               |
| Detail Kebutuhan  | Description         |
| Estimasi Budget   | Field               |
| Deadline          | Field               |
| Metode Pembayaran | Field               |
| Link Referensi    | Field               |
| Catatan Tambahan  | Field               |
| Timestamp         | Timestamp           |

---

**Status:** ✅ Approved - Neon Theme (Black/Blue/Purple), Full Bahasa Indonesia, Responsive HP & Laptop

**Spesifikasi Tambahan:**

- Tema Neon: Black, Blue, Purple
- Responsive: Mobile & Desktop
- Bahasa: Full Bahasa Indonesia

**Progress:** 🔄 Sedang Implementasi...
