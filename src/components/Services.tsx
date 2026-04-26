"use client";

import { motion } from "framer-motion";
import { Globe, Server, Bot, MessageCircle, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceSlug } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Server,
  Bot,
  MessageCircle,
};

const colorMap: Record<ServiceSlug, string> = {
  website: "from-neonBlue to-blue-600",
  "discord-server": "from-neonPurple to-purple-600",
  "discord-bot": "from-neonPink to-fuchsia-600",
  "whatsapp-bot": "from-neonCyan to-cyan-600",
};

const borderColorMap: Record<ServiceSlug, string> = {
  website: "hover:border-neonBlue/60",
  "discord-server": "hover:border-neonPurple/60",
  "discord-bot": "hover:border-neonPink/60",
  "whatsapp-bot": "hover:border-neonCyan/60",
};

const shadowColorMap: Record<ServiceSlug, string> = {
  website: "hover:shadow-neonBlue/20",
  "discord-server": "hover:shadow-neonPurple/20",
  "discord-bot": "hover:shadow-neonPink/20",
  "whatsapp-bot": "hover:shadow-neonCyan/20",
};

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-neonBlue font-semibold text-sm tracking-widest uppercase mb-2 block">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-['Orbitron'] mb-4">
            Pilih Jasa yang Anda Butuhkan
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Semua jasa kami dikerjakan dengan profesional, harga transparan, dan
            revision hingga puas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative rounded-2xl border border-white/10 bg-surface p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1",
                  borderColorMap[service.slug],
                  shadowColorMap[service.slug]
                )}
              >
                {/* Gradient Top Border */}
                <div
                  className={cn(
                    "absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  )}
                />

                <div className="flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        "p-3 rounded-xl bg-gradient-to-br",
                        colorMap[service.slug],
                        "bg-opacity-10"
                      )}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 font-mono">
                        Mulai dari
                      </span>
                      <p className="text-lg font-bold text-white font-['Orbitron']">
                        {service.packages[0].price}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Orbitron'] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-neonBlue shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Packages Preview */}
                  <div className="space-y-2 mb-6">
                    {service.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        className="flex items-center justify-between text-sm py-1.5 px-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <span className="text-slate-300">{pkg.name}</span>
                        <span className="text-neonBlue font-semibold font-mono">
                          {pkg.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/order/${service.slug}/`}
                    className={cn(
                      "flex items-center justify-center gap-2 w-full py-3 rounded-xl border font-semibold text-sm transition-all duration-300 group/btn",
                      "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    )}
                  >
                    <span>Order Sekarang</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

