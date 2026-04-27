"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="kontak" className="relative border-t border-white/10 bg-surface">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 md:py-16">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-neonBlue" />
              <span className="text-xl font-bold font-['Orbitron'] tracking-wider">
                <span className="text-white">SAZ</span>
                <span className="text-neonBlue">O</span>
                <span className="text-neonPurple">R</span>
                <span className="text-neonPink">A</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Platform jasa digital terpercaya untuk kebutuhan website, bot,
              dan server Discord Anda.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 font-['Orbitron']">
              Link Cepat
            </h4>

            <ul className="space-y-2">
              {[
                { label: "Beranda", href: "/#beranda" },
                { label: "Layanan", href: "/#layanan" },
                { label: "Cara Kerja", href: "/#cara-kerja" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-neonBlue transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Discord */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 font-['Orbitron']">
              Server Discord
            </h4>

            <a
              href="https://discord.gg/tsVzxbBvP8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/30 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-[#5865F2]">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>

              <div>
                <p className="text-white font-semibold text-sm group-hover:text-[#5865F2] transition-colors">
                  Join Server Discord
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  discord.gg/tsVzxbBvP8
                </p>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sazora. All rights reserved.
          </p>

          <p className="text-slate-600 text-xs">
            Build by Sazora Tech
          </p>
        </div>

      </div>
    </footer>
  );
}