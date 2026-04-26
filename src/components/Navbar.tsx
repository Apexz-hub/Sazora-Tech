"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#layanan", label: "Layanan" },
    { href: "#cara-kerja", label: "Cara Kerja" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-white/10 shadow-lg shadow-neonBlue/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-neonBlue group-hover:animate-pulse" />
            <span className="text-xl md:text-2xl font-bold font-['Orbitron'] tracking-wider">
              <span className="text-white">SAZ</span>
              <span className="text-neonBlue">O</span>
              <span className="text-neonPurple">R</span>
              <span className="text-neonPink">A</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-neonBlue transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neonBlue to-neonPurple group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#layanan"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 border border-neonBlue/50 text-neonBlue text-sm font-semibold hover:shadow-neonBlue transition-all duration-300 hover:scale-105"
            >
              Order Sekarang
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-300 hover:text-neonBlue transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#layanan"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 border border-neonBlue/50 text-neonBlue font-semibold mt-4"
              >
                Order Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

