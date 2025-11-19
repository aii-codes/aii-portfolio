"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
    {
        title: "2003",
        description:
            "The year I was born. It marked the beginning of the journey of a boy named Irol.",
    },
    {
        title: "2008",
        description:
            "I was already 5 years old. This was the age when I became conscious of the world around me. I started going to school, which I enjoyed. I was a stubborn and playful kid, but also competitive. This was also when I began playing games on a computer.",
    },
    {
        title: "2013",
        description:
            "My career as a chess player began when I was 10 years old. I started learning chess from my father. I was very passionate about the game at that time. I believe this was when I started developing my logical thinking skills.",
    },
    {
        title: "2015",
        description:
            "I graduated from primary school and entered secondary school. High school was my prime. My intellectual skills grew, and I was a top student throughout those years. As I got older, I became more shy and introverted. Still, I had a close group of friends I could share everything with.",
    },
    {
        title: "2020",
        description:
            "The pandemic hit the world. I was upset because the very first time I qualified for regionals in my chess career, the event got cancelled. It was a challenging time as I had to adapt to online learning. However, I managed to stay focused and graduated with high honor.",
    },
    {
        title: "2021",
        description:
            "I graduated from secondary school and entered college. My first choice was Civil Engineering, but I did not get into my target university. So I took up Computer Engineering at another school. I was glad because I found my passion in programming and technology. I also met a great group of friends in college.",
    },
    {
        title: "2025",
        description:
            "The present. I'm 22 years old now. I graduated from college and gained many skills related to technology. Over the past years, I experienced countless realizations about life, which shaped me into the person I am today.",
    },
    {
        title: "Future",
        description:
            "We do not know what the future holds. I will continue to grow as a person and work toward achieving my goals. I hope to make a positive impact in the world through technology and innovation, and to find success in both my career and personal life.",
    },
];

export default function LifeTimeline() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
    const [glowingIndexes, setGlowingIndexes] = useState<number[]>([]);
    const [scrollPercent, setScrollPercent] = useState(0);

    // Track which cards are visible and trigger glow after animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = refs.current.findIndex(
                        (r) => r === entry.target
                    );
                    if (
                        entry.isIntersecting &&
                        !visibleIndexes.includes(index)
                    ) {
                        // Immediately start animation
                        setVisibleIndexes((prev) => [...prev, index]);
                        // Glow after animation duration (1000ms)
                        setTimeout(() => {
                            setGlowingIndexes((prev) => [...prev, index]);
                        }, 1000);
                    }
                });
            },
            { threshold: 0.6 }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => observer.disconnect();
    }, [visibleIndexes]);

    // Animate gradient flow based on scroll
    useEffect(() => {
        const handleScroll = () => {
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / docHeight) * 100;
            setScrollPercent(scrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="relative w-full flex flex-col items-center py-20 sm:py-24
        bg-bg-dark text-text-dark overflow-hidden"
        >
            {/* Glowing Vertical SVG line */}
            <svg
                className="absolute left-1/2 top-0 -translate-x-1/2"
                width="12"
                height="100%"
                viewBox="0 0 6 1000"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient
                        id="timeline-gradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#B7410E" />
                        <stop
                            offset={`${Math.min(scrollPercent + 20, 100)}%`}
                            stopColor="#9DC183"
                        />
                    </linearGradient>
                </defs>
                <rect
                    x="2"
                    y="0"
                    width="2"
                    height="1400"
                    fill="url(#timeline-gradient)"
                    rx="1"
                />
                <rect
                    x="2"
                    y="0"
                    width="2"
                    height="1400"
                    fill="none"
                    stroke="url(#timeline-gradient)"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_10px_#B7410E]"
                />
            </svg>

            {/* Milestones */}
            <div className="relative flex flex-col gap-16 sm:gap-20 md:gap-24 w-full max-w-5xl px-6 z-10">
                {milestones.map((m, i) => {
                    const isLeft = i % 2 === 0;
                    const isVisible = visibleIndexes.includes(i);
                    const isGlowing = glowingIndexes.includes(i);

                    return (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) refs.current[i] = el;
                            }}
                            className={`relative flex flex-col items-center 
                                md:flex-row ${
                                    isLeft
                                        ? "md:justify-start"
                                        : "md:justify-end"
                                }
                                text-center md:text-left
                            `}
                        >
                            {/* Dot */}
                            <svg
                                className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                                width="80"
                                height="80"
                            >
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="16"
                                    fill={
                                        isGlowing
                                            ? "url(#dot-gradient)"
                                            : "#555"
                                    }
                                    className={`transition-all duration-700 ${
                                        isGlowing
                                            ? "drop-shadow-[0_0_10px_#B7410E]"
                                            : ""
                                    }`}
                                />
                                <defs>
                                    <radialGradient id="dot-gradient">
                                        <stop offset="0%" stopColor="#B7410E" />
                                        <stop
                                            offset="100%"
                                            stopColor="#9DC183"
                                        />
                                    </radialGradient>
                                </defs>
                            </svg>

                            {/* Card */}
                            <div
                                className={`w-[95%] sm:w-[85%] md:w-[45%]
                                    px-3 sm:px-4 md:px-0
                                    transition-all duration-1000 ease-in
                                ${
                                    isVisible
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0"
                                }
                                ${
                                    isLeft
                                        ? isVisible
                                            ? "translate-x-0"
                                            : "-translate-x-4 sm:-translate-x-10"
                                        : isVisible
                                        ? "translate-x-0"
                                        : "translate-x-4 sm:translate-x-10"
                                }`}
                            >
                                <div
                                    className={`p-[2px] rounded-2xl transition-all duration-700 ${
                                        isGlowing
                                            ? "bg-gradient-to-br from-accent-primary/80 to-accent-secondary/80 shadow-[0_0_12px_#B7410E]"
                                            : "bg-[#555]"
                                    } backdrop-blur-md border ${
                                        isGlowing
                                            ? "border-transparent"
                                            : "border-[#555]"
                                    }`}
                                >
                                    <div className="bg-bg-dark rounded-2xl p-6 h-full">
                                        <h2 className="text-xl font-bold text-accent-primary">
                                            {m.title}
                                        </h2>
                                        <p className="text-xs sm:text-sm text-text-dark/80 mt-2 leading-relaxed">
                                            {m.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
