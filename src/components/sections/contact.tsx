"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send, CheckCircle2, Loader2, MessageSquare, MapPin, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
            alert("Error: Web3Forms Access Key is missing. Please check your environment variables.");
            setStatus("idle");
            return;
        }

        try {
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
                setStatus("success");
                setTimeout(() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            } else {
                alert("Failed to send message.");
                setStatus("idle");
            }
        } catch (error) {
            alert("An error occurred.");
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
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-6xl mx-auto">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                <Sparkles className="w-3 h-3" />
                                <span>Let&apos;s Build the Future</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                                READY TO <br />
                                <span className="text-gradient">COLLABORATE?</span>
                            </h2>
                            <p className="text-xl text-white/40 mb-12 max-w-md leading-relaxed">
                                Currently evaluating high-impact opportunities in AI, ML, and Cybersecurity. My inbox is always open for innovators.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: Mail, label: "Email", value: "yugankdabas88@gmail.com", href: "mailto:yugankdabas88@gmail.com" },
                                    { icon: MapPin, label: "Location", value: "Muzaffarnagar, UP, India", href: "#" },
                                    { icon: Linkedin, label: "LinkedIn", value: "Connect Profile", href: "https://www.linkedin.com/in/yugank-dabas-179a45215" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-white/20 mb-1">{item.label}</div>
                                            <a href={item.href} className="text-lg font-bold text-white hover:text-primary transition-colors">{item.value}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="text-center py-20"
                                        >
                                            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
                                                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                                            </div>
                                            <h3 className="text-3xl font-bold mb-4">Transmission Received</h3>
                                            <p className="text-white/40">Your message has been successfully routed. I&apos;ll reach out shortly.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Identify</label>
                                                    <Input
                                                        id="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Name / Organization"
                                                        className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all px-6"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Communication</label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Email address"
                                                        className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all px-6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Message</label>
                                                <Textarea
                                                    id="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="How can we advance the future?"
                                                    rows={6}
                                                    className="rounded-[2rem] bg-white/5 border-white/10 focus:border-primary/50 transition-all px-6 py-4 resize-none"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full h-16 rounded-full bg-primary hover:bg-primary/80 text-white font-black uppercase tracking-[0.2em] transition-all glow-primary disabled:opacity-50"
                                            >
                                                {status === "loading" ? (
                                                    <Loader2 className="w-6 h-6 animate-spin" />
                                                ) : (
                                                    <span className="flex items-center gap-3">
                                                        Deploy Message
                                                        <Send className="w-5 h-5" />
                                                    </span>
                                                )}
                                            </Button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl pointer-events-none" />
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl pointer-events-none" />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
