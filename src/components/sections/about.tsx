"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Code, Network, BrainCircuit, Star, Globe, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const focusAreas = [
  { 
    title: "Machine Learning", 
    icon: Brain, 
    description: "Designing predictive models and advanced neural architectures.",
    color: "from-blue-500 to-cyan-400", 
    bg: "bg-blue-500/10",
    glow: "rgba(59, 130, 246, 0.3)"
  },
  { 
    title: "Deep Learning", 
    icon: Network, 
    description: "Building complex multi-layer cognitive systems.",
    color: "from-purple-500 to-pink-400", 
    bg: "bg-purple-500/10",
    glow: "rgba(168, 85, 247, 0.3)"
  },
  { 
    title: "Full Stack AI", 
    icon: Code, 
    description: "End-to-end integration of intelligent features into products.",
    color: "from-emerald-500 to-teal-400", 
    bg: "bg-emerald-500/10",
    glow: "rgba(16, 185, 129, 0.3)"
  },
  { 
    title: "AI Architecture", 
    icon: BrainCircuit, 
    description: "Architecting scalable and secure AI system topologies.",
    color: "from-cyan-500 to-blue-400", 
    bg: "bg-cyan-500/10",
    glow: "rgba(6, 182, 212, 0.3)"
  },
];

function CardWrapper({ children, className, glowColor }: { children: React.ReactNode, className?: string, glowColor?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative group transition-all duration-300", className)}
    >
      <div 
        className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none z-0"
        style={{ background: glowColor || "rgba(59, 130, 246, 0.1)" }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      {/* Background Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-black uppercase tracking-[0.3em] mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3" />
            <span>The Architect's Vision</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            DECODING THE <br />
            <span className="text-white/30">INTELLIGENT FUTURE</span>
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Bento Grid Layer 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            {/* Main Narrative Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 h-full"
            >
              <CardWrapper className="h-full" glowColor="rgba(59, 130, 246, 0.15)">
                <div className="glass-morphism p-10 md:p-14 rounded-[3rem] h-full border border-white/5 group-hover:border-primary/30 transition-all flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-inner">
                        <Brain className="w-7 h-7 text-primary" />
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                        <Globe className="w-7 h-7 text-secondary" />
                      </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-8 group-hover:text-primary transition-colors tracking-tight">Visionary AI Architect</h3>
                    <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-2xl">
                      I specialize in bridging the gap between raw data and actionable intelligence. With a deep foundation in <span className="text-white">Machine Learning</span> and <span className="text-white">Full Stack Architecture</span>, I build systems that don't just process information—they understand it.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {["Neural Networks", "LLMs", "Distributed Systems", "Cloud Native"].map((tag, idx) => (
                        <motion.span 
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/30 uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                </div>
              </CardWrapper>
            </motion.div>

            {/* Performance Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 h-full"
            >
              <CardWrapper className="h-full" glowColor="rgba(168, 85, 247, 0.15)">
                <div className="glass-morphism p-10 rounded-[3rem] h-full border border-white/5 group-hover:border-secondary/30 transition-all flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="space-y-12 w-full">
                    <div className="relative">
                      <div className="text-7xl font-black text-gradient mb-3">99%</div>
                      <div className="text-xs font-black text-white/20 uppercase tracking-[0.4em]">Accuracy Benchmark</div>
                    </div>
                    <div className="w-12 h-[1px] bg-white/10 mx-auto" />
                    <div className="relative">
                      <div className="text-7xl font-black text-gradient mb-3">24/7</div>
                      <div className="text-xs font-black text-white/20 uppercase tracking-[0.4em]">Autonomous Systems</div>
                    </div>
                  </div>
                  
                  {/* Subtle animation in background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
                </div>
              </CardWrapper>
            </motion.div>

          </div>

          {/* Expertise Row - 4 items equally balanced */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="h-full"
              >
                <CardWrapper className="h-full" glowColor={area.glow}>
                  <div className="glass-morphism p-8 rounded-[2.5rem] h-full border border-white/5 hover:border-white/20 transition-all group/area flex flex-col items-start relative overflow-hidden">
                    <div className={cn(
                      "p-5 rounded-2xl mb-8 group-hover/area:scale-110 transition-transform duration-500 shadow-xl",
                      area.bg
                    )}>
                      <area.icon className={cn("w-7 h-7 text-white", area.color)} />
                    </div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight">{area.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">
                      {area.description}
                    </p>
                    
                    {/* Hover indicator line */}
                    <div className={cn(
                      "absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r group-hover/area:w-full transition-all duration-500",
                      area.color
                    )} />
                  </div>
                </CardWrapper>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
