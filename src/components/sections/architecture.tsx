"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Box, Shield, Server, User, Database } from "lucide-react";

const pipelines = [
    {
        title: "Plant Disease Detection Pipeline",
        description: "Krishi Sarthi AI Architecture",
        steps: [
            { name: "User Upload", icon: <User className="h-5 w-5" /> },
            { name: "React Frontend", icon: <Box className="h-5 w-5" /> },
            { name: "FastAPI API", icon: <Server className="h-5 w-5" /> },
            { name: "CNN Model", icon: <Database className="h-5 w-5" /> },
            { name: "Prediction Result", icon: <Box className="h-5 w-5" /> },
        ],
    },
    {
        title: "Security Platform Pipeline",
        description: "Astrasec DevSecOps Architecture",
        steps: [
            { name: "GitHub Repository", icon: <Box className="h-5 w-5" /> },
            { name: "Repo Scanner", icon: <Shield className="h-5 w-5" /> },
            { name: "LLM Security Analyzer", icon: <Database className="h-5 w-5" /> },
            { name: "Ticket Generator", icon: <Server className="h-5 w-5" /> },
            { name: "Dashboard", icon: <Box className="h-5 w-5" /> },
        ],
    },
];

export function ArchitectureSection() {
    return (
        <section id="architecture" className="py-24 relative overflow-hidden bg-black/40">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-space-grotesk">
                        Engineering Architecture
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {pipelines.map((pipeline, pIndex) => (
                        <motion.div
                            key={pipeline.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: pIndex * 0.2 }}
                        >
                            <GlassCard className="p-8 border-white/10 bg-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

                                <h3 className="text-2xl font-bold mb-2 text-white">
                                    {pipeline.title}
                                </h3>
                                <p className="text-gray-400 mb-8">{pipeline.description}</p>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative z-10">
                                    {pipeline.steps.map((step, index) => (
                                        <div key={step.name} className="flex items-center flex-col md:flex-row w-full md:w-auto">
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="flex flex-col items-center justify-center p-4 bg-black/40 border border-white/10 rounded-xl min-w-[140px] text-center backdrop-blur-sm"
                                            >
                                                <div className="mb-3 text-blue-400">{step.icon}</div>
                                                <span className="text-sm font-medium text-gray-300">
                                                    {step.name}
                                                </span>
                                            </motion.div>

                                            {index < pipeline.steps.length - 1 && (
                                                <div className="my-4 md:my-0 md:mx-4 text-white/30 hidden md:block animate-pulse">
                                                    <ArrowRight className="h-6 w-6" />
                                                </div>
                                            )}

                                            {index < pipeline.steps.length - 1 && (
                                                <div className="my-2 text-white/30 md:hidden animate-pulse">
                                                    <ArrowRight className="h-6 w-6 rotate-90" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
