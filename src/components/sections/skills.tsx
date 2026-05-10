"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ShieldAlert, Layers, Terminal, Database, Cloud, Layout, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: ["TensorFlow", "PyTorch", "LLMs", "Scikit-learn", "Keras"],
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59, 130, 246, 0.5)"
  },
  {
    title: "Cybersecurity",
    icon: ShieldAlert,
    skills: ["Network Security", "Threat Detection", "Penetration Testing", "Encryption"],
    color: "from-red-500 to-orange-400",
    glow: "rgba(239, 68, 68, 0.5)"
  },
  {
    title: "Backend & Systems",
    icon: Terminal,
    skills: ["Python", "FastAPI", "Flask", "Distributed Systems", "C++"],
    color: "from-purple-500 to-pink-400",
    glow: "rgba(168, 85, 247, 0.5)"
  },
  {
    title: "Modern Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16, 185, 129, 0.5)"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "CI/CD", "Databricks", "Vercel"],
    color: "from-cyan-500 to-blue-400",
    glow: "rgba(6, 182, 212, 0.5)"
  },
  {
    title: "Data Intelligence",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Spark", "PowerBI", "Tableau"],
    color: "from-orange-500 to-yellow-400",
    glow: "rgba(249, 115, 22, 0.5)"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary/50" />
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Arsenal</span>
            <div className="h-[1px] w-12 bg-primary/50" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Technological <span className="text-gradient">Superpowers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-[2.5rem] blur-2xl transition-opacity duration-500" style={{ background: cat.glow }} />
              
              <div className="relative glass-morphism p-8 rounded-[2.5rem] h-full border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={cn("p-4 rounded-2xl bg-gradient-to-br shadow-lg", cat.color)}>
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + si * 0.05 }}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <cat.icon className="w-32 h-32" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Orbit Mockup / Visualization */}
        <div className="mt-32 flex justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px] rounded-full border border-secondary/10 border-dashed"
                />
                <div className="z-10 w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 backdrop-blur-xl">
                    <Cpu className="w-10 h-10 text-primary animate-pulse" />
                </div>
                
                {/* Orbiting Icons */}
                {[BrainCircuit, ShieldAlert, Terminal, Layout].map((Icon, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                        style={{ 
                            top: "50%", 
                            left: "50%",
                            marginLeft: "-20px",
                            marginTop: "-20px"
                        }}
                        animate={{ 
                            x: Math.cos(i * Math.PI / 2) * 120,
                            y: Math.sin(i * Math.PI / 2) * 120,
                        }}
                        transition={{ duration: 0 }}
                    >
                        <Icon className="w-5 h-5 text-white/40" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
