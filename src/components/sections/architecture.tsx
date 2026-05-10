"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Shield, Server, User, Database, Cpu, Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const pipelines = [
  {
    title: "Krishi Sarthi Architecture",
    description: "End-to-End AI Agriculture Intelligence",
    color: "primary",
    steps: [
      { name: "Field Data", icon: User },
      { name: "Vite/React", icon: Layout },
      { name: "FastAPI", icon: Server },
      { name: "CNN Inference", icon: BrainCircuit },
      { name: "Yield Output", icon: Activity },
    ],
  },
  {
    title: "Astrasec Pipeline",
    description: "Automated DevSecOps Vulnerability Layer",
    color: "secondary",
    steps: [
      { name: "GitHub Hooks", icon: Github },
      { name: "Scan Engine", icon: Shield },
      { name: "LLM Analysis", icon: Database },
      { name: "AI Ticketing", icon: Cpu },
      { name: "SecOps Desk", icon: Zap },
    ],
  },
];

// Helper icons because some weren't imported correctly in my thought
import { BrainCircuit, Layout, Github } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-32 relative overflow-hidden bg-white/[0.02]">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
          >
            Infrastructure
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            System <span className="text-white/40">Topologies</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {pipelines.map((pipeline, pIndex) => (
            <motion.div
              key={pipeline.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Background Path Decoration */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2 hidden md:block" />
              
              <div className="text-center mb-12 relative z-10">
                <h3 className="text-3xl font-black mb-2">{pipeline.title}</h3>
                <p className="text-white/40 font-medium uppercase tracking-widest text-xs">{pipeline.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 relative z-10">
                {pipeline.steps.map((step, index) => (
                  <div key={step.name} className="flex items-center flex-col md:flex-row">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex flex-col items-center justify-center p-6 glass-morphism rounded-3xl w-full md:w-44 h-44 text-center border border-white/5 hover:border-primary/50 transition-all shadow-2xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-tighter text-white/60 group-hover:text-white transition-colors">
                        {step.name}
                      </span>

                      {/* Step Number */}
                      <div className="absolute top-4 right-4 text-[10px] font-black text-white/10">0{index + 1}</div>
                    </motion.div>

                    {index < pipeline.steps.length - 1 && (
                      <div className="flex-grow flex items-center justify-center p-4">
                        <motion.div
                          animate={{ 
                            x: [0, 5, 0],
                            opacity: [0.2, 0.5, 0.2]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="md:rotate-0 rotate-90"
                        >
                          <ArrowRight className="w-6 h-6 text-primary/40" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative side glow */}
              <div className={cn(
                "absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[120px] opacity-20 pointer-events-none",
                pipeline.color === 'primary' ? "bg-primary" : "bg-secondary"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
