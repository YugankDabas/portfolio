"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Brain, Shield, Code, Rocket, BarChart, MousePointer2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Krishi Sarthi",
    subtitle: "AI Smart Farming Platform",
    description: "Architected an end-to-end AI platform for precision agriculture. Achieving 99% accuracy in disease detection using custom CNN architectures. Integrated real-time weather APIs and predictive market analytics.",
    category: "AI/ML",
    tags: ["TensorFlow", "CNN", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/YugankDabas/Plant_Disease_Prediction",
    demo: "https://react-prac-nine.vercel.app/",
    icon: Brain,
    color: "from-emerald-500 to-cyan-500",
    featured: true
  },
  {
    title: "Astrasec",
    subtitle: "AI DevSecOps Platform",
    description: "Next-gen security orchestration layer. Automated vulnerability scanning across repositories using LLM-powered analysis. Implemented risk severity scoring and automated ticketing pipelines.",
    category: "Cybersecurity",
    tags: ["LLM", "Python", "Docker", "Security APIs", "Next.js"],
    github: "https://github.com/YugankDabas",
    demo: "https://astra-sec-ai-frontend.vercel.app/",
    icon: Shield,
    color: "from-purple-500 to-blue-500",
    featured: true
  },
  {
    title: "Vantage Dashboard",
    subtitle: "Interactive Product Analytics",
    description: "Engineered a high-performance analytics engine for real-time user behavior tracking. Processing millions of events with optimized SQL queries and dynamic D3.js visualizations.",
    category: "Full Stack",
    tags: ["React", "Go", "PostgreSQL", "Redis", "D3.js"],
    github: "https://github.com/YugankDabas/analytics_dashboard_frontend",
    demo: "https://analytics-dashboard-frontend-delta.vercel.app/",
    icon: BarChart,
    color: "from-blue-500 to-indigo-500",
    featured: false
  }
];

const categories = ["All", "AI/ML", "Cybersecurity", "Full Stack"];

interface Project {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  github: string;
  demo: string;
  icon: any;
  color: string;
  featured: boolean;
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  function onMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative group h-full",
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-[2.5rem] blur-3xl transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }} />
      
      <div className="relative glass-morphism p-8 rounded-[2.5rem] h-full border border-white/5 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] transition-all duration-500 overflow-hidden flex flex-col">
        
        {/* Spotlight Effect (Behind Content) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <motion.div 
                className="w-[400px] h-[400px] rounded-full blur-[100px]"
                style={{ 
                    background: `radial-gradient(circle, ${project.color.split(' ')[1]}15, transparent 70%)`,
                    x: useTransform(mouseX, [-0.5, 0.5], [-100, 200]),
                    y: useTransform(mouseY, [-0.5, 0.5], [-100, 300]),
                }}
            />
        </div>

        {/* Glass Reflection Shimmer */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className={cn("p-4 rounded-2xl bg-gradient-to-br shadow-xl transition-all duration-500 group-hover:scale-110", project.color)}>
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex gap-2 relative z-20">
            <a href={project.github} target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all">
                <Github className="w-5 h-5 text-white/60" />
            </a>
            <a href={project.demo} target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all">
                <ExternalLink className="w-5 h-5 text-white/60" />
            </a>
          </div>
        </div>

        <div className="mb-6 relative z-10">
          <h3 className="text-3xl font-black mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-sm font-bold uppercase tracking-widest text-white/40">{project.subtitle}</p>
        </div>

        <p className="text-white/60 leading-relaxed mb-8 flex-grow relative z-10 group-hover:text-white/80 transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/40 hover:text-white hover:border-white/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-4 mx-auto">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-12 bg-secondary/50" />
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs">Portfolios</span>
            <div className="h-[1px] w-12 bg-secondary/50" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-12"
          >
            The Intelligence <span className="text-white/40">Lab</span>
          </motion.h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  activeCategory === cat 
                    ? "bg-primary text-white glow-primary" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
