"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Hero", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex items-center justify-between w-full max-w-5xl px-4 py-2 transition-all duration-300 pointer-events-auto rounded-full",
          isScrolled
            ? "glass-morphism py-3"
            : "bg-transparent py-4"
        )}
      >
        <Link href="#hero" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/30 group-hover:bg-primary/40 transition-colors">
            <Cpu className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white hidden sm:block">
            Yugank<span className="text-primary">.</span>Dabas
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full",
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 z-0 bg-primary/20 border border-primary/30 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <Link href="https://github.com" target="_blank" className="p-2 text-white/60 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-2 text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          <Link
            href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/80 transition-all glow-primary"
          >
            Contact Me
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-white bg-white/5 border border-white/10 rounded-full"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
              {navItems.map((item, idx) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "transition-colors",
                      activeSection === item.href.substring(1) ? "text-primary" : "text-white/60 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="flex gap-6 mt-12">
              <Link href="https://github.com" className="p-3 bg-white/5 rounded-full border border-white/10"><Github className="w-6 h-6" /></Link>
              <Link href="https://linkedin.com" className="p-3 bg-white/5 rounded-full border border-white/10"><Linkedin className="w-6 h-6" /></Link>
              <Link href="mailto:contact@example.com" className="p-3 bg-white/5 rounded-full border border-white/10"><Mail className="w-6 h-6" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
