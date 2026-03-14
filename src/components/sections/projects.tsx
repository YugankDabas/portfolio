"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Krishi Sarthi — AI Smart Farming Platform",
        description:
            "An advanced AI-driven platform for smart farming. Includes plant disease detection with 99% accuracy, crop price forecasting, weather data integration, smart farmer recommendations, and a multilingual dashboard.",
        image: "/assets/projects/krishi-sarthi.jpg",
        tags: ["Node.js", "Springboot", "React", "CNN", "TensorFlow/PyTorch"],
        github: "#",
        demo: "#",
        color: "from-green-500/20 to-blue-500/20",
    },
    {
        title: "Astrasec — AI DevSecOps Security Platform",
        description:
            "AI-powered security platform for DevSecOps. Features repository vulnerability scanning, AI security analysis, automated ticketing, a comprehensive security monitoring dashboard, and risk severity insights.",
        image: "/assets/projects/astrasec.jpg",
        tags: ["FastAPI", "React", "LLM APIs", "Databricks", "Security Scanning"],
        github: "#",
        demo: "#",
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Interactive Product Analytics Dashboard",
        description:
            "Full-stack analytics dashboard for tracking user interactions. Features an event tracking API, dynamic data visualization charts, feature usage analysis, and a fully responsive UI architecture.",
        image: "/assets/projects/analytics.jpg",
        tags: ["React", "FastAPI", "PostgreSQL"],
        github: "https://github.com/YugankDabas/analytics_dashboard_frontend",
        demo: "https://analytics-dashboard-frontend-delta.vercel.app/",
        color: "from-blue-500/20 to-cyan-500/20",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-space-grotesk">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <GlassCard
                                hoverEffect
                                className="h-full flex flex-col p-0 overflow-hidden group border-white/10"
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow bg-black/40 backdrop-blur-md">
                                    <h3 className="text-2xl font-bold mb-3 font-space-grotesk group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-white/5 hover:bg-white/10 text-gray-300 border-white/10"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-full"
                                        >
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="mr-2 h-4 w-4" />
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button
                                            asChild
                                            size="sm"
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-all rounded-full"
                                        >
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
