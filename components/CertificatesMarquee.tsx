"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
    "/certs/cert1-v2.jpg",
    "/certs/cert2.jpg",
    "/certs/cert3.jpg",
    "/certs/cert4.jpg",
    "/certs/cert5.jpg",
    "/certs/cert6.jpg",
    "/certs/cert7.jpg",
    "/certs/cert8.jpg",
    "/certs/cert9.jpg",
    "/certs/cert10.jpg",
    "/certs/cert11.jpg",
    "/certs/cert12.jpg",
    "/certs/cert13.jpg",
    "/certs/cert14.jpg",
    "/certs/cert15.jpg",
    "/certs/cert16.jpg",
    "/certs/cert17.jpg",
];

export default function CertificatesMarquee() {
    const [selected, setSelected] = useState<string | null>(null);
    const [isInitialAnimDone, setIsInitialAnimDone] = useState(false);
    const [allowEntryAnim, setAllowEntryAnim] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const entryTimer = setTimeout(() => {
            setAllowEntryAnim(false);
        }, 600);

        const speedTimer = setTimeout(() => {
            setIsInitialAnimDone(true);
        }, 5000);

        return () => {
            clearTimeout(entryTimer);
            clearTimeout(speedTimer);
        };
    }, []);

    // Responsive sizing
    const imageWidth = isMobile ? 260 : 350;
    const imageHeight = isMobile ? 180 : 250;


    return (
        <>
            <div className="marquee-container py-6 md:py-10">
                <div
                    className={`marquee-track ${
                        !isInitialAnimDone ? "disable-hover" : ""
                    }`}
                    style={{
                        animationDuration: isInitialAnimDone ? "80s" : "5s",
                        animationTimingFunction: isInitialAnimDone
                            ? "linear"
                            : "easeOut",
                        whiteSpace: "nowrap",
                    }}
                >
                    {[...certificates, ...certificates, ...certificates].map(
                        (src, index) => (
                            <motion.div
                                key={index}
                                className="marquee-item rounded-lg overflow-hidden border border-white/10 cursor-pointer"
                                onClick={() => setSelected(src)}
                                whileHover={
                                    isInitialAnimDone && !isMobile
                                        ? { scale: 1.08 }
                                        : {}
                                }
                                initial={
                                    allowEntryAnim ? { x: 1800 } : { x: 0 }
                                }
                                animate={{ x: 0 }}
                                transition={{
                                    x: {
                                        type: "tween",
                                        duration: 0.55,
                                        ease: "easeOut",
                                    },
                                    scale: { duration: 0.1 },
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`certificate-${index}`}
                                    width={imageWidth}
                                    height={imageHeight}
                                    className={`object-cover w-auto ${
                                        isMobile ? "h-[200px]" : "h-[250px]"
                                    }`}
                                    unoptimized
                                />
                            </motion.div>
                        )
                    )}
                </div>
            </div>

            {/* MODAL - RESPONSIVE */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="p-2 sm:p-3 rounded-xl bg-bg-dark border border-accent-primary/40 max-w-[95vw] max-h-[90vh] flex items-center justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selected}
                                alt="certificate preview"
                                width={isMobile ? 300 : 700}
                                height={isMobile ? 220 : 400}
                                className="rounded-lg w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
