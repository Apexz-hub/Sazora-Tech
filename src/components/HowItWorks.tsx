"use client";

import { motion } from "framer-motion";
import { MousePointerClick, FileText, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Pilih Layanan",
    description: "Pilih jasa yang Anda butuhkan dari katalog kami. Setiap jasa memiliki detail dan paket yang jelas.",
  },
  {
    icon: FileText,
    title: "Isi Form Order",
    description: "Lengkapi formulir order dengan detail kebutuhan Anda. Semakin detail, semakin cepat pengerjaan.",
  },
  {
    icon: MessageSquare,
    title: "Konfirmasi Discord",
    description: "Order Anda akan masuk ke channel Discord kami. Tim kami akan segera menghubungi Anda untuk konfirmasi.",
  },
  {
    icon: Rocket,
    title: "Pengerjaan & Delivery",
    description: "Kami mulai mengerjakan project Anda sesuai deadline. Revisi tersedia hingga Anda puas.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neonPurple font-semibold text-sm tracking-widest uppercase mb-2 block">
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-['Orbitron'] mb-4">
            Proses Order yang Mudah
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hanya 4 langkah sederhana untuk memulai project digital Anda bersama
            kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8 h-full hover:border-neonPurple/40 transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neonPurple text-white font-bold text-sm flex items-center justify-center font-['Orbitron'] shadow-neonPurple">
                    {index + 1}
                  </div>

                  <div className="p-3 rounded-xl bg-neonPurple/10 w-fit mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-neonPurple" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Orbitron'] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-neonPurple/50 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

