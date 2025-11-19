"use client";

import { motion } from "framer-motion";
import CertificatesMarquee from "@/components/CertificatesMarquee";

const letterVariant = {
    hidden: {
        x: 1800,
        opacity: 1,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export default function CertificatesPage() {
    const title = "CERTIFICATES";

    return (
        <div className="min-h-screen bg-bg-dark pt-24 sm:pt-28 md:pt-32">
            <motion.h1
                className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-accent-primary mb-8 sm:mb-10 text-center tracking-[0.3em] sm:tracking-[0.5em] flex justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                        },
                    },
                }}
            >
                {title.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={letterVariant}
                        transition={{
                            type: "tween",
                            ease: "linear",
                            duration: 0.35,
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>

            <CertificatesMarquee />
        </div>
    );
}
