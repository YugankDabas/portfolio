"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("DEBUG: handleSubmit triggered");
        setStatus("loading");

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        console.log("DEBUG: Access Key found:", accessKey ? "Yes (length: " + accessKey.length + ")" : "No");

        if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
            console.error("DEBUG: Access Key is missing or using placeholder");
            alert("Error: Web3Forms Access Key is missing or invalid. Please update your .env.local file and restart the server.");
            setStatus("idle");
            return;
        }

        try {
            console.log("DEBUG: Sending request to Web3Forms...");
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    ...formData,
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log("Form submitted successfully:", result);
                setStatus("success");
                // Reset form after 3 seconds
                setTimeout(() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            } else {
                console.error("Form submission error:", result);
                alert("Failed to send message. Please check if your Web3Forms Access Key is set correctly in .env.local.");
                setStatus("idle");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again later.");
            setStatus("idle");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black/40">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-space-grotesk">
                            Get In Touch
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                        <p className="mt-6 text-gray-400 max-w-lg mx-auto">
                            I&apos;m currently open for new opportunities. Whether you have a
                            question or just want to say hi, I&apos;ll try my best to get back
                            to you!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="md:col-span-2 space-y-6"
                        >
                            <GlassCard className="p-8 h-full flex flex-col justify-center">
                                <h3 className="text-xl font-bold mb-8 font-space-grotesk">
                                    Connect with me
                                </h3>
                                <div className="space-y-6">
                                    <a
                                        href="mailto:yugankdabas88@gmail.com"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                                            <Mail className="h-5 w-5 group-hover:text-blue-400" />
                                        </div>
                                        <span>yugankdabas88@gmail.com</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/yugank-dabas-179a45215"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                                            <Linkedin className="h-5 w-5 group-hover:text-blue-400" />
                                        </div>
                                        <span>LinkedIn</span>
                                    </a>
                                    <a
                                        href="https://github.com/yugankdabas"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                                            <Github className="h-5 w-5 group-hover:text-blue-400" />
                                        </div>
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-3"
                        >
                            <GlassCard className="p-8 border-white/10 relative overflow-hidden min-h-[400px] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="text-center"
                                        >
                                            <div className="mb-4 flex justify-center">
                                                <CheckCircle2 className="h-16 w-16 text-green-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                            <p className="text-gray-400">
                                                Thanks for reaching out. I&apos;ll get back to you soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-6 w-full"
                                        >
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                                    Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    className="bg-black/50 border-white/10 focus-visible:ring-blue-500/50"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                                    Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="example@xyz.com"
                                                    className="bg-black/50 border-white/10 focus-visible:ring-blue-500/50"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="How can I help you?"
                                                    rows={5}
                                                    className="bg-black/50 border-white/10 focus-visible:ring-blue-500/50 resize-none"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                                            >
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-4 w-4" />
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
