"use client";

import { motion } from "framer-motion";
import { Zap, Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="kontak" className="relative border-t border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
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

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 font-['Orbitron']">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@sazora.id"
                className="flex items-center gap-3 text-slate-400 hover:text-neonBlue transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>hello@sazora.id</span>
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-neonBlue hover:border-neonBlue/30 transition-all"
                  aria-label="Github"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-neonPink hover:border-neonPink/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sazora. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Dibuat dengan ❤️ menggunakan Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

