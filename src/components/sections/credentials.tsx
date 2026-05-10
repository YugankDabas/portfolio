"use client";

import { motion } from "framer-motion";
import { Award, Trophy, CheckCircle, FileText, GraduationCap, Medal, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const certifications = [
  { name: "AWS Machine Learning", issuer: "AWS Educate", year: "2024" },
  { name: "AI Foundations", issuer: "Microsoft", year: "2023" },
  { name: "ML A-Z Mastery", issuer: "Udemy", year: "2023" },
  { name: "MongoDB Pro", issuer: "MongoDB Univ", year: "2023" },
  { name: "AWS Fundamentals", issuer: "Scaler", year: "2022" },
  { name: "Software Dev", issuer: "PMKVY", year: "2021" },
];

const achievements = [
  {
    title: "IEEE Research Publication",
    description: "Published groundbreaking research on 'Krishi Sarthi' AI architectures under IEEE standards.",
    icon: FileText,
    color: "bg-blue-500",
    glow: "shadow-blue-500/20"
  },
  {
    title: "SAP Hackathon Finalist",
    description: "Reached the State Hub finals in the SAP National AI & Security Challenge.",
    icon: Trophy,
    color: "bg-purple-500",
    glow: "shadow-purple-500/20"
  },
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-32 relative">
      <div className="container px-4 mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left: Certifications Grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-4xl font-bold">Certifications</h2>
                <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Verified expertise</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-morphism p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <Medal className="w-5 h-5 text-white/40 group-hover:text-primary" />
                    </div>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-tighter">{cert.year}</span>
                  </div>
                  <h3 className="font-bold text-white group-hover:text-primary transition-colors">{cert.name}</h3>
                  <p className="text-sm text-white/40">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Featured Achievements */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h2 className="text-4xl font-bold">Hall of Fame</h2>
                <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Milestones</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative group"
                >
                  <div className={cn("absolute inset-0 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity rounded-[2.5rem]", achievement.color)} />
                  <div className="relative glass-morphism p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col sm:flex-row gap-6">
                    <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl", achievement.color)}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                      <p className="text-white/60 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Stat Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 text-center"
            >
                <div className="text-4xl font-black mb-1">Elite</div>
                <div className="text-xs font-bold uppercase tracking-[0.5em] text-white/40">Status: Innovator</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
