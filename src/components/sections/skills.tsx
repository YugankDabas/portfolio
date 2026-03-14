"use client";

import { motion, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "JavaScript", "HTML", "CSS"],
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
        title: "AI / ML",
        skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
        color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
        title: "Frameworks",
        skills: ["FastAPI", "Flask", "React"],
        color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    },
    {
        title: "Databases",
        skills: ["MySQL", "MongoDB", "PostgreSQL"],
        color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
        title: "Visualization",
        skills: ["PowerBI", "Matplotlib", "Tableau"],
        color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    {
        title: "Cloud / Deployment",
        skills: ["AWS", "Databricks", "Vercel", "Render"],
        color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
        title: "Tools",
        skills: ["VS Code", "Jupyter Notebook", "Git", "GitHub"],
        color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-space-grotesk">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div key={category.title} variants={itemVariants}>
                            <GlassCard hoverEffect className="h-full flex flex-col">
                                <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-200">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 hidden sm:inline-block"></span>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {category.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="outline"
                                            className={`px-3 py-1 text-sm ${category.color} bg-opacity-20 hover:bg-opacity-30 transition-colors cursor-default`}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
