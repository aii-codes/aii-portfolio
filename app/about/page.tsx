"use client";

import { useState } from "react";
import PhotoCarousel from "@/components/PhotoCarousel";
import LifeTimeline from "@/components/LifeTimeline";
import DecryptText from "@/components/DecryptText";

export default function AboutPage() {
    const [titleDone, setTitleDone] = useState(false);

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-start 
                       px-4 sm:px-8 md:px-20 pt-20 sm:pt-24 pb-0
                       bg-bg-dark text-text-dark 
                       transition-colors duration-300"
        >
            <div className="max-w-3xl text-center mb-8 sm:mb-10 flex flex-col gap-2">
                {/* Title - Decrypt normally - RESPONSIVE */}
                <DecryptText
                    text="TIMELINE"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-primary 
                    tracking-[0.1em] xs:tracking-[0.15em] sm:tracking-[0.2em]"
                    speed={35}
                    duration={1300}
                    start={true}
                    onDone={() => setTitleDone(true)}
                />

                {/* Subtitle - Scramble immediately, then decrypt AFTER title - RESPONSIVE */}
                <DecryptText
                    text="Witness the milestones that shaped my life."
                    className="text-accent-secondary text-base sm:text-lg px-6 sm:px-4"
                    speed={35}
                    duration={300}
                    scrambleUntilStart={true}
                    start={titleDone}
                />
            </div>

            <div className="w-full flex justify-center">
                <PhotoCarousel />
            </div>

            <div className="w-full flex justify-center mt-12 sm:mt-20 md:mt-32">
                <LifeTimeline />
            </div>
        </section>
    );
}
