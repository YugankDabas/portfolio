"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Code, Network, BrainCircuit, Database } from "lucide-react";

const focusAreas = [
    {
        title: "Machine Learning",
        icon: <Brain className="h-6 w-6 text-blue-400" />,
    },
    {
        title: "Deep Learning",
        icon: <Network className="h-6 w-6 text-purple-400" />,
    },
    {
        title: "AI System Architecture",
        icon: <BrainCircuit className="h-6 w-6 text-pink-400" />,
    },
    {
        title: "Full Stack AI Systems",
        icon: <Code className="h-6 w-6 text-green-400" />,
    },
    {
        title: "Data Analytics",
        icon: <Database className="h-6 w-6 text-orange-400" />,
    },
];

export function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-space-grotesk">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                    </motion.div>

                    <GlassCard className="p-8 md:p-12">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 text-center"
                        >
                            AI and Data Science engineer skilled in Machine Learning, Full
                            Stack development, and Data Analytics. Passionate about building
                            scalable AI solutions in agriculture, cybersecurity, and
                            automation.
                        </motion.p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {focusAreas.map((area, index) => (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group"
                                >
                                    <div className="mb-4 p-3 rounded-full bg-black/50 border border-white/5 group-hover:scale-110 transition-transform">
                                        {area.icon}
                                    </div>
                                    <h3 className="font-medium text-gray-200">{area.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
