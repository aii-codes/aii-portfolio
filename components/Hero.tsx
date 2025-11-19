"use client";

import Image from "next/image";
import { Github, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const sentences = [
        <>
            Passionate about turning{" "}
            <span className="text-accent-primary font-medium">Data</span> into
            insights and exploring the possibilities of{" "}
            <span className="text-accent-secondary font-medium">
                Artificial Intelligence
            </span>
            .
        </>,
        <>
            To grow within the{" "}
            <span className="text-accent-primary font-medium">
                tech industry
            </span>{" "}
            and become{" "}
            <span className="text-accent-secondary font-medium">
                well-known
            </span>{" "}
            in the future.
        </>,
        <>
            The{" "}
            <span className="text-accent-primary font-medium">
                most dangerous phrase
            </span>{" "}
            in the language is,{" "}
            <span className="text-accent-secondary font-medium">
                &quot;We&apos;ve always done it this way&quot;
            </span>
            .
        </>,
    ];

    const [index, setIndex] = useState(0);
    const [isLeaving, setIsLeaving] = useState(false);
    const [initial, setInitial] = useState(true);
    const [hasEnteredOnce, setHasEnteredOnce] = useState(false);

    useEffect(() => {
        const startLoop = setTimeout(() => {
            setInitial(false);

            const interval = setInterval(() => {
                setIsLeaving(true);
                setTimeout(() => {
                    setIndex((prev) => (prev + 1) % sentences.length);
                    setIsLeaving(false);
                    setHasEnteredOnce(true);
                }, 800);
            }, 8000);

            return () => clearInterval(interval);
        }, 3800);

        return () => clearTimeout(startLoop);
    }, [sentences.length]);

    return (
        <section
            className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 
                       bg-bg-dark text-text-dark overflow-hidden transition-colors duration-300"
            style={{
                minHeight: "var(--viewport-height)",
            }}
        >
            {/* Left side */}
            <div className="flex flex-col items-start md:w-1/2 mb-8 md:mb-16 mx-3 sm:mx-8 md:mx-12">
                {/* 👋 Waving hand + bubble */}
                <div
                    className="flex items-end gap-2 sm:gap-3 mb-3 opacity-0 animate-fadeUp"
                    style={{ animationDelay: "0.7s" }}
                >
                    <span
                        className="text-3xl sm:text-5xl md:text-6xl animate-smooth-wave"
                    >
                        👋
                    </span>
                    <div className="relative bg-accent-primary text-white text-base sm:text-lg font-semibold px-2 sm:px-3 py-1 rounded-[2rem] shadow-md inline-block">
                        Hello!
                        <div className="absolute bottom-[-6px] right-3 sm:right-5 w-3 sm:w-4 h-3 sm:h-4 bg-accent-primary rotate-45"></div>
                    </div>
                </div>

                {/* "I'm" */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fadeInDelayed">
                    I&apos;m <span className="text-accent-primary">Irol</span>{" "}
                    <span className="text-2xl sm:text-3xl md:text-4xl text-accent-secondary align-baseline relative bottom-[2px] sm:bottom-[6px]">
                        (Aii)
                    </span>
                </h1>

                {/* Subtitle */}
                <h2
                    className="font-semibold text-base sm:text-lg text-gray-400 m-0 opacity-0 animate-fadeIn"
                    style={{ animationDelay: "2s" }}
                >
                    Software Engineer <span className="text-text-dark">|</span>{" "}
                    Vibe Coder
                </h2>

                {/* Cycling Paragraph */}
                <div className="mt-4 max-w-full sm:max-w-lg relative">
                    <p
                        key={index}
                        className={`text-sm sm:text-base md:text-lg ${
                            initial
                                ? "opacity-0 animate-fadeIn"
                                : isLeaving
                                ? "animate-slideOutLeft"
                                : hasEnteredOnce
                                ? "animate-slideInRight"
                                : ""
                        }`}
                        style={{
                            textIndent: "1.5rem",
                            animationDelay: initial ? "2.8s" : undefined,
                        }}
                    >
                        {sentences[index]}
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className="relative md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 z-10 opacity-0 animate-fadeInDelayed overflow-visible">
                    <Image
                        src="/profile-v2.png"
                        alt="Irol Morillo"
                        fill
                        className="object-contain scale-125 sm:scale-150 -translate-y-4 sm:-translate-y-6"
                    />
                </div>
            </div>

            {/* Social links - RESPONSIVE POSITIONING */}
            <div
                className="absolute bottom-4 left-4 sm:left-6 md:left-8 lg:left-20 flex flex-col gap-2 sm:gap-3 z-10 opacity-0 animate-fadeUp"
                style={{ animationDelay: "3.6s" }}
            >
                <div className="group relative flex items-center gap-2">
                    <a
                        href="https://github.com/aii-codes"
                        target="_blank"
                        className="hover:text-accent-primary transition"
                    >
                        <Github className="w-6 h-6 sm:w-6 sm:h-6" />
                    </a>
                    <div className="social-hover-bubble hidden sm:block">
                        https://github.com/aii-codes
                    </div>
                </div>
                <div className="group relative flex items-center gap-2">
                    <a
                        href="https://linkedin.com/in/irolmorillo"
                        target="_blank"
                        className="hover:text-accent-primary transition"
                    >
                        <Linkedin className="w-6 h-6 sm:w-6 sm:h-6" />
                    </a>
                    <div className="social-hover-bubble hidden sm:block">
                        https://linkedin.com/in/irolmorillo
                    </div>
                </div>
                <div className="group relative flex items-center gap-2">
                    <a
                        href="https://www.facebook.com/loriledoj"
                        target="_blank"
                        className="hover:text-accent-primary transition"
                    >
                        <Facebook className="w-6 h-6 sm:w-6 sm:h-6" />
                    </a>
                    <div className="social-hover-bubble hidden sm:block">
                        https://www.facebook.com/loriledoj
                    </div>
                </div>
            </div>

            {/* Vertical email - HIDE ON MOBILE, HORIZONTAL ON TABLET */}
            <div
                className="hidden md:flex absolute bottom-4 right-4 md:right-8 lg:right-20 flex-col items-center opacity-0 animate-fadeUp"
                style={{ animationDelay: "3.65s" }}
            >
                <a
                    href="mailto:loriledoj@gmail.com"
                    className="text-text-dark text-xs sm:text-sm tracking-wider hover:text-accent-primary transition"
                    style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                    }}
                >
                    loriledoj@gmail.com
                </a>
            </div>

            {/* Mobile email - HORIZONTAL AT BOTTOM */}
            <div
                className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 animate-fadeUp"
                style={{ animationDelay: "3.65s" }}
            >
                <a
                    href="mailto:loriledoj@gmail.com"
                    className="text-text-dark text-sm
                    tracking-wider hover:text-accent-primary transition"
                >
                    loriledoj@gmail.com
                </a>
            </div>
        </section>
    );
}
