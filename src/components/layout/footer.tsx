"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/60 backdrop-blur-md relative z-10 w-full">
            <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Yugank Dabas. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/yugankdabas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yugank-dabas-179a45215"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:yugankdabas88@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
