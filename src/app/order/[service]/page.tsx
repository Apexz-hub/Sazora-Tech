"use client";

import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  Loader2,
  CheckCircle,
  AlertCircle,
  Send,
  Globe,
  Server,
  Bot,
  MessageCircle,
  Package,
  Wallet,
  Calendar,
  CreditCard,
  Link2,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { services, validSlugs } from "@/data/services";
import { ServiceSlug } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Server,
  Bot,
  MessageCircle,
};

const metodePembayaranOptions = [
  "Transfer Bank (BCA/Mandiri/BRI)",
  "QRIS",
  "Dana",
  "GoPay",
  "OVO",
  "PayPal",
];

const budgetOptions = [
  "< Rp 100.000",
  "Rp 100.000 - Rp 300.000",
  "Rp 300.000 - Rp 500.000",
  "Rp 500.000 - Rp 1.000.000",
  "> Rp 1.000.000",
  "Menyesuaikan Paket",
];

const orderSchema = z.object({
  nama: z.string().min(2).max(100),
  discordUser: z.string().min(2).max(32),
  email: z.string().email(),
  whatsapp: z.string().min(10).regex(/^[0-9]+$/),
  jenisJasa: z.string(),
  paket: z.string().min(1),
  detail: z.string().min(10).max(2000),
  budget: z.string().min(1),
  deadline: z.string().min(1),
  metodePembayaran: z.string().min(1),
  referensi: z.string().max(500).optional(),
  catatan: z.string().max(1000).optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export default function OrderPage() {
  const params = useParams();
  const serviceSlug = params.service as ServiceSlug;

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  if (!validSlugs.includes(serviceSlug)) {
    notFound();
  }

  const service = services.find((s) => s.slug === serviceSlug)!;
  const Icon = iconMap[service.icon] || Globe;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      jenisJasa: serviceSlug,
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/order/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message);
      }

      setSubmitStatus({
        type: "success",
        message: result.message || "Order berhasil dikirim!",
      });

      reset();
    } catch (error: any) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Terjadi kesalahan jaringan.",
      });
    }
  };

  const borderColor =
    service.slug === "website"
      ? "border-neonBlue"
      : service.slug === "discord-server"
      ? "border-neonPurple"
      : service.slug === "discord-bot"
      ? "border-neonPink"
      : "border-neonCyan";

  return (
    <div className="min-h-screen bg-background grid-bg pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#layanan"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-neonBlue transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Layanan
          </Link>

          <div className="flex items-center gap-4 mb-2">
            <div className={`p-3 rounded-xl bg-surface border ${borderColor}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-['Orbitron']">
                Form Order
              </h1>
              <p className="text-slate-400 text-sm">{service.title}</p>
            </div>
          </div>
        </motion.div>

        {/* Status */}
        {submitStatus.type && (
          <motion.div className="mb-6 p-4 rounded-xl border">
            {submitStatus.message}
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          {/* Informasi Kontak */}
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8 space-y-6">
            <h2 className="text-white font-semibold">Informasi Kontak</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="sm:col-span-2">
                <input {...register("nama")} placeholder="Nama" className="input" />
              </div>

              <div>
                <input {...register("discordUser")} placeholder="Discord" className="input" />
              </div>

              <div>
                <input {...register("email")} placeholder="Email" className="input" />
              </div>

              <div className="sm:col-span-2">
                <input {...register("whatsapp")} placeholder="WhatsApp" className="input" />
              </div>

            </div>
          </div>

          {/* Detail */}
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8 space-y-6">
            <h2 className="text-white font-semibold">Detail Project</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="sm:col-span-2">
                <textarea {...register("detail")} className="input" />
              </div>

            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-blue-500 rounded-xl">
            {isSubmitting ? "Loading..." : "Kirim"}
          </button>

        </motion.form>
      </div>
    </div>
  );
}