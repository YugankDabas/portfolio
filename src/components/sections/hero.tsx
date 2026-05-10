"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Code2, Rocket, ShieldCheck, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const titles = [
  "AI Engineer",
  "ML Developer",
  "Cybersecurity Innovator",
  "Full Stack Builder",
  "Startup Founder"
];

const stats = [
  { label: "AI Projects", value: "25+", icon: BrainCircuit },
  { label: "Hackathons", value: "10+", icon: Rocket },
  { label: "Technologies", value: "15+", icon: Code2 },
  { label: "Security Audits", value: "50+", icon: ShieldCheck },
];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent)] opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Centered Content */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Available for high-impact roles & ventures</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85]">
              BUILDING THE <br />
              <span className="text-gradient">FUTURE OF AI</span>
            </h1>

            <div className="h-16 mb-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-4xl md:text-6xl font-medium text-white/80"
                >
                  {titles[titleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-3xl leading-relaxed">
              Elite-level AI systems, advanced cybersecurity architectures, and futuristic startup engineering. Turning complex possibilities into intelligent realities.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Button size="lg" className="rounded-full px-10 py-8 text-xl font-bold bg-primary hover:bg-primary/80 glow-primary transition-all group">
                Explore Work
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl font-bold border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all">
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {[
                { icon: Github, href: "https://github.com/yugankdabas" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yugank-dabas-179a45215" },
                { icon: Mail, href: "mailto:yugankdabas88@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -8, scale: 1.15 }}
                  href={social.href}
                  target="_blank"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl"
                >
                  <social.icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>

            {/* Floating Stats - Moved and styled for centered layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
