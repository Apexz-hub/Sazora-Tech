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
  User,
  Mail,
  Phone,
  MessageSquare,
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
  nama: z.string().min(2, "Nama minimal 2 karakter").max(100, "Nama maksimal 100 karakter"),
  discordUser: z
    .string()
    .min(2, "Username Discord wajib diisi")
    .max(32, "Maksimal 32 karakter"),
  email: z.string().email("Email tidak valid"),
  whatsapp: z
    .string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .regex(/^[0-9]+$/, "Hanya angka yang diperbolehkan"),
  jenisJasa: z.string(),
  paket: z.string().min(1, "Pilih paket yang diinginkan"),
  detail: z.string().min(10, "Detail kebutuhan minimal 10 karakter").max(2000, "Maksimal 2000 karakter"),
  budget: z.string().min(1, "Pilih estimasi budget"),
  deadline: z.string().min(1, "Pilih deadline"),
  metodePembayaran: z.string().min(1, "Pilih metode pembayaran"),
  referensi: z.string().max(500, "Maksimal 500 karakter").optional(),
  catatan: z.string().max(1000, "Maksimal 1000 karakter").optional(),
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
      nama: "",
      discordUser: "",
      email: "",
      whatsapp: "",
      paket: "",
      detail: "",
      budget: "",
      deadline: "",
      metodePembayaran: "",
      referensi: "",
      catatan: "",
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
        setSubmitStatus({
          type: "error",
          message: result.message || "Gagal mengirim order. Silakan coba lagi.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: result.message || "Order berhasil dikirim!",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Terjadi kesalahan jaringan. Silakan coba lagi nanti.",
      });
    }
  };

  const accentColor =
    service.slug === "website"
      ? "text-neonBlue border-neonBlue"
      : service.slug === "discord-server"
      ? "text-neonPurple border-neonPurple"
      : service.slug === "discord-bot"
      ? "text-neonPink border-neonPink"
      : "text-neonCyan border-neonCyan";

  const glowColor =
    service.slug === "website"
      ? "shadow-neonBlue/20"
      : service.slug === "discord-server"
      ? "shadow-neonPurple/20"
      : service.slug === "discord-bot"
      ? "shadow-neonPink/20"
      : "shadow-neonCyan/20";

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
            className="inline-flex items-center gap-2 text-slate-400 hover:text-neonBlue transition-colors text-sm mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Layanan
          </Link>

          <div className="flex items-center gap-4 mb-2">
            <div className={`p-3 rounded-xl bg-surface border ${accentColor.split(" ")[1]} shadow-lg ${glowColor}`}>
              <Icon className={`w-7 h-7 ${accentColor.split(" ")[0]}`} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white font-['Orbitron']">
                Form Order
              </h1>
              <p className="text-slate-400 text-sm">{service.title}</p>
            </div>
          </div>
        </motion.div>

        {/* Status Alert */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${
              submitStatus.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold text-sm">
                {submitStatus.type === "success" ? "Berhasil!" : "Gagal!"}
              </p>
              <p className="text-sm opacity-90">{submitStatus.message}</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Informasi Kontak */}
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8 space-y-6 hover:border-white/20 transition-colors">
            <h2 className="text-lg font-semibold text-white font-['Orbitron'] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-neonBlue to-neonPurple rounded-full" />
              Informasi Kontak
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Nama */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <User className="w-3.5 h-3.5 inline mr-1" />
                  Nama Lengkap <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  {...register("nama")}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                />
                {errors.nama && (
                  <p className="mt-1 text-xs text-red-400">{errors.nama.message}</p>
                )}
              </div>

              {/* Discord */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5 inline mr-1" />
                  Username Discord <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  {...register("discordUser")}
                  placeholder="username_anda"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                />
                {errors.discordUser && (
                  <p className="mt-1 text-xs text-red-400">{errors.discordUser.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Mail className="w-3.5 h-3.5 inline mr-1" />
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="email@contoh.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Phone className="w-3.5 h-3.5 inline mr-1" />
                  Nomor WhatsApp <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  {...register("whatsapp")}
                  placeholder="081234567890"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-xs text-red-400">{errors.whatsapp.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Detail Project */}
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8 space-y-6 hover:border-white/20 transition-colors">
            <h2 className="text-lg font-semibold text-white font-['Orbitron'] flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-neonPurple to-neonPink rounded-full" />
              Detail Project
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Jenis Jasa (Readonly) */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Package className="w-3.5 h-3.5 inline mr-1" />
                  Jenis Jasa
                </label>
                <input
                  type="text"
                  value={service.title}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 cursor-not-allowed"
                />
                <input type="hidden" {...register("jenisJasa")} />
              </div>

              {/* Paket */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Package className="w-3.5 h-3.5 inline mr-1" />
                  Pilih Paket <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {service.packages.map((pkg) => (
                    <label
                      key={pkg.name}
                      className="relative cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={pkg.name}
                        {...register("paket")}
                        className="peer sr-only"
                      />
                      <div className="p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:border-neonBlue peer-checked:bg-neonBlue/5 transition-all hover:border-white/20 h-full flex flex-col">
                        <div className="font-semibold text-white text-sm mb-1">
                          {pkg.name}
                        </div>
                        <div className="text-neonBlue font-bold text-sm mb-2">
                          {pkg.price}
                        </div>
                        <div className="text-xs text-slate-500 leading-relaxed flex-grow">
                          {pkg.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.paket && (
                  <p className="mt-1 text-xs text-red-400">{errors.paket.message}</p>
                )}
              </div>

              {/* Detail Kebutuhan */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <FileText className="w-3.5 h-3.5 inline mr-1" />
                  Detail Kebutuhan <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("detail")}
                  rows={5}
                  placeholder="Jelaskan secara detail apa yang Anda butuhkan..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all resize-none"
                />
                {errors.detail && (
                  <p className="mt-1 text-xs text-red-400">{errors.detail.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Wallet className="w-3.5 h-3.5 inline mr-1" />
                  Estimasi Budget <span className="text-red-400">*</span>
                </label>
                <select
                  {...register("budget")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all appearance-none"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="" className="bg-surface text-slate-400">
                    Pilih budget
                  </option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface text-white">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>
                )}
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 inline mr-1" />
                  Deadline <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  {...register("deadline")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                />
                {errors.deadline && (
                  <p className="mt-1 text-xs text-red-400">{errors.deadline.message}</p>
                )}
              </div>

              {/* Metode Pembayaran */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <CreditCard className="w-3.5 h-3.5 inline mr-1" />
                  Metode Pembayaran <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {metodePembayaranOptions.map((method) => (
                    <label key={method} className="relative cursor-pointer">
                      <input
                        type="radio"
                        value={method}
                        {...register("metodePembayaran")}
                        className="peer sr-only"
                      />
                      <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-center text-sm text-slate-400 peer-checked:border-neonBlue peer-checked:text-neonBlue peer-checked:bg-neonBlue/5 transition-all hover:border-white/20">
                        {method}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.metodePembayaran && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.metodePembayaran.message}
                  </p>
                )}
              </div>

              {/* Referensi */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Link2 className="w-3.5 h-3.5 inline mr-1" />
                  Link Referensi <span className="text-slate-500">(Opsional)</span>
                </label>
                <input
                  type="url"
                  {...register("referensi")}
                  placeholder="https://contoh.com/project-referensi"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                />
                {errors.referensi && (
                  <p className="mt-1 text-xs text-red-400">{errors.referensi.message}</p>
                )}
              </div>

              {/* Catatan */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <FileText className="w-3.5 h-3.5 inline mr-1" />
                  Catatan Tambahan{" "}
                  <span className="text-slate-500">(Opsional)</span>
                </label>
                <textarea
                  {...register("catatan")}
                  rows={3}
                  placeholder="Ada hal lain yang ingin disampaikan?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all resize-none"
                />
                {errors.catatan && (
                  <p className="mt-1 text-xs text-red-400">{errors.catatan.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Mengirim Order...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Kirim Order
              </>
            )}
          </motion.button>

          <p className="text-center text-xs text-slate-500">
            Dengan mengirim form ini, Anda menyetujui syarat dan ketentuan kami.
            Data Anda aman dan tidak akan dibagikan ke pihak ketiga.
          </p>
        </motion.form>
      </div>
    </div>
  );
}

