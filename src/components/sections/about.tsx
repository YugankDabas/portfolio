"use client";

import { motion } from "framer-motion";
import { Brain, Code, Network, BrainCircuit, Database, Star, Trophy, Users, Zap, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const focusAreas = [
  { title: "Machine Learning", icon: Brain, color: "text-blue-400", bg: "bg-blue-400/10" },
  { title: "Deep Learning", icon: Network, color: "text-purple-400", bg: "bg-purple-400/10" },
  { title: "AI Architecture", icon: BrainCircuit, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { title: "Full Stack AI", icon: Code, color: "text-emerald-400", bg: "bg-emerald-400/10" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Star className="w-3 h-3" />
            <span>The Engineer Behind the AI</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Decoding Complexity, <br />
            <span className="text-white/40">Architecting Intelligence.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-3 row-span-2 glass-morphism p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between group overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">Visionary AI Architect</h3>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                I specialize in bridging the gap between raw data and actionable intelligence. With a deep foundation in Machine Learning and Full Stack Architecture, I build systems that don't just process information—they understand it.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Neural Networks", "LLMs", "Distributed Systems", "Cloud Native"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/20 transition-all duration-700" />
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-3 glass-morphism p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center group"
          >
            <div className="grid grid-cols-2 gap-8 w-full">
              <div>
                <div className="text-5xl font-black text-gradient mb-2">99%</div>
                <div className="text-sm text-white/40 uppercase tracking-widest">Accuracy Focus</div>
              </div>
              <div>
                <div className="text-5xl font-black text-gradient mb-2">24/7</div>
                <div className="text-sm text-white/40 uppercase tracking-widest">Automation</div>
              </div>
            </div>
          </motion.div>

          {/* Core Areas */}
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="md:col-span-1 lg:col-span-1 glass-morphism p-6 rounded-[2rem] flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all group"
            >
              <div className={cn("p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform", area.bg)}>
                <area.icon className={cn("w-6 h-6", area.color)} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-tighter text-white/80">{area.title}</h4>
            </motion.div>
          ))}

          {/* Achievement Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 lg:col-span-2 glass-morphism p-8 rounded-[2.5rem] flex items-center gap-6 group"
          >
            <div className="p-5 rounded-3xl bg-amber-400/10 border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-black transition-all">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xl font-bold">Hackathon Winner</div>
              <div className="text-sm text-white/40">National Level AI Challenge</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
