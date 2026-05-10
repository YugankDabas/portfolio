"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Cpu, Twitter, Globe, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden bg-background">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#3b82f605)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link href="#hero" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                <Cpu className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">Yugank<span className="text-primary">.</span>Dabas</span>
                        </Link>
                        <p className="text-white/40 max-w-sm leading-relaxed text-lg font-medium">
                            Architecting the future through elite AI engineering and futuristic security systems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/20 mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {['About', 'Skills', 'Projects', 'Architecture', 'Contact'].map(item => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-primary font-bold transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/20 mb-6">Connect</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/yugankdabas" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/yugank-dabas-179a45215" },
                                { icon: Twitter, href: "#" },
                                { icon: Globe, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white/20 text-sm font-bold tracking-widest uppercase">
                        © {new Date().getFullYear()} YUGANK DABAS — THE FUTURE IS INTELLIGENT
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
                    >
                        <span className="text-xs font-black uppercase tracking-widest">Back to Zenith</span>
                        <div className="p-2 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
