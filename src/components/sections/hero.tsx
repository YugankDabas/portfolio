"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 mx-auto px-3 py-1 text-sm text-blue-400 backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-space-grotesk"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Yugank Dabas
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-medium text-gray-300 mb-6"
                    >
                        AI & Machine Learning Engineer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Building Intelligent Systems for Security, Agriculture, and Smart
                        Automation. Based in Muzaffarnagar, Uttar Pradesh, India.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full group"
                        >
                            <Link href="#projects">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md"
                        >
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center justify-center gap-6"
                    >
                        <a
                            href="https://github.com/yugankdabas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/10 hover:border-white/20"
                        >
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yugank-dabas-179a45215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/10 hover:border-white/20"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="mailto:yugankdabas88@gmail.com"
                            className="text-gray-400 hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full backdrop-blur-md border border-white/10 hover:border-white/20"
                        >
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
