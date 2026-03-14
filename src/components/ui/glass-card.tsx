"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function GlassCard({
    className,
    children,
    hoverEffect = false,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-colors",
                "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/5 before:to-transparent",
                hoverEffect && "hover:border-white/20 hover:bg-black/50",
                className
            )}
            {...(hoverEffect
                ? {
                    whileHover: { y: -5 },
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                }
                : {})}
            {...props}
        >
            {children}
        </motion.div>
    );
}
