import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sazora - Jasa Digital Professional",
  description:
    "Jasa pembuatan website, setup server Discord, bot Discord, dan bot WhatsApp dengan harga terjangkau dan kualitas terbaik.",
  keywords: [
    "jasa website",
    "bot discord",
    "bot whatsapp",
    "setup discord server",
    "web development",
    "sazora",
  ],
  authors: [{ name: "Sazora" }],
  openGraph: {
    title: "Sazora - Jasa Digital Professional",
    description: "Pesan jasa digital profesional dengan mudah dan cepat.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-background text-slate-200 antialiased grid-bg">
        {children}
      </body>
    </html>
  );
}

