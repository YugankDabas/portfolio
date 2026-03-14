"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, Trophy, CheckCircle } from "lucide-react";

const certifications = [
    "AWS Educate – Machine Learning Foundations",
    "Introduction to Artificial Intelligence – Microsoft & LinkedIn Learning",
    "Machine Learning A–Z (Python & R)",
    "Introduction to MongoDB – MongoDB University",
    "AWS Fundamentals – Scaler Academy",
    "Junior Software Developer – PMKVY",
];

const achievements = [
    {
        title: "Research Paper Published",
        description: "Research paper on “Krishi Sarthi” published under IEEE standards",
        icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
    },
    {
        title: "Hackathon Finalist",
        description: "Qualified for State Hub Round — SAP Hackathon (AI/Security)",
        icon: <CheckCircle className="h-6 w-6 text-purple-400" />,
    },
];

export function CredentialsSection() {
    return (
        <section id="credentials" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Certifications Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-10 flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                                <Award className="h-6 w-6 text-blue-400" />
                            </div>
                            <h2 className="text-3xl font-bold font-space-grotesk">Certifications</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certifications.map((cert, i) => (
                                <GlassCard key={i} hoverEffect className="p-5 flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500" />
                                    <p className="text-sm text-gray-300 leading-snug font-medium">{cert}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="mb-10 flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                                <Trophy className="h-6 w-6 text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold font-space-grotesk">Achievements</h2>
                        </div>

                        <div className="space-y-6">
                            {achievements.map((achievement, i) => (
                                <GlassCard key={i} hoverEffect className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
