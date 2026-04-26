"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonPink/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neonBlue/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-neonBlue" />
          <span className="text-sm font-medium text-neonBlue">
            Jasa Digital Terpercaya
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-['Orbitron'] leading-tight mb-6"
        >
          <span className="text-white">Wujudkan Ide</span>
          <br />
          <span className="bg-gradient-to-r from-neonBlue via-neonPurple to-neonPink bg-clip-text text-transparent">
            Digital Anda
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Jasa pembuatan website, setup server Discord, bot Discord, dan bot
          WhatsApp dengan harga terjangkau, proses cepat, dan hasil berkualitas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#layanan"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-neonBlue hover:shadow-neonPurple"
          >
            <span className="relative z-10">Lihat Layanan</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neonPurple to-neonPink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#cara-kerja"
            className="px-8 py-4 rounded-full border border-white/20 text-slate-300 font-semibold text-lg hover:border-neonBlue/50 hover:text-neonBlue transition-all duration-300 hover:bg-neonBlue/5"
          >
            Cara Kerja
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "50+", label: "Project Selesai" },
            { value: "30+", label: "Klien Puas" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white font-['Orbitron']">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

