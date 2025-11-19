"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3-v2.jpg",
    "/photo4-v2.jpg",
    "/photo5-v2.jpg",
    "/photo6-v2.jpg",
    "/photo7-v2.jpg",
    "/photo8-v2.jpg",
    "/photo9-v2.jpg",
];

export default function PhotoCarousel() {
    const [current, setCurrent] = useState(1);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const [autoSlideDirection, setAutoSlideDirection] = useState<
        "next" | "prev"
    >("next");
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setDirection(autoSlideDirection);
            setCurrent((prev) => {
                if (autoSlideDirection === "next") {
                    return prev === photos.length - 1 ? 0 : prev + 1;
                } else {
                    return prev === 0 ? photos.length - 1 : prev - 1;
                }
            });
        }, 4000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoSlideDirection]);

    useEffect(() => {
        // After the longest animation completes, mark initial load as done
        const timer = setTimeout(() => {
            setIsInitialLoad(false);
        }, 4000); // 2.1s delay + 0.8s animation + 0.1s buffer

        return () => clearTimeout(timer);
    }, []);

    const handlePrev = () => {
        setDirection("prev");
        setAutoSlideDirection("prev");
        setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
        startAutoSlide();
    };

    const handleNext = () => {
        setDirection("next");
        setAutoSlideDirection("next");
        setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
        startAutoSlide();
    };

    const getPositionClass = (index: number) => {
        if (index === current) {
            return "z-20 scale-105 sm:scale-110 opacity-100";
        }
        if (index === (current - 1 + photos.length) % photos.length) {
            return direction === "next"
                ? "z-10 scale-90 opacity-40 -translate-x-20 sm:-translate-x-28"
                : "z-10 scale-90 opacity-40 -translate-x-24 sm:-translate-x-32";
        }
        if (index === (current + 1) % photos.length) {
            return direction === "next"
                ? "z-10 scale-90 opacity-40 translate-x-24  sm:translate-x-32"
                : "z-10 scale-90 opacity-40 translate-x-20  sm:translate-x-28";
        }
        return "opacity-0";
    };

    const getAnimationDelay = (index: number) => {
        if (index === (current - 1 + photos.length) % photos.length) {
            // Left photo - animates first
            return "2.2s";
        }
        if (index === (current + 1) % photos.length) {
            // Right photo - animates second
            return "2.5s";
        }
        if (index === current) {
            // Center photo - animates last
            return "2.8s";
        }
        return "0s";
    };

    return (
        <div className="relative w-full flex items-center justify-center pt-12 pb-12">
            <div className="relative flex items-center justify-center w-full sm:w-[90%] md:w-[60%] h-[200px] sm:h-[230px] md:h-[250px]">
                {photos.map((src, index) => {
                    return (
                        <div
                            key={index}
                            className={`
                                absolute transition-all duration-700 ease-in-out
                                ${getPositionClass(index)}
                            `}
                        >
                            <div
                                className={`
                                    ${
                                        isInitialLoad &&
                                        (index === current ||
                                            index ===
                                                (current - 1 + photos.length) %
                                                    photos.length ||
                                            index ===
                                                (current + 1) % photos.length)
                                            ? " opacity-0 animate-dropIn"
                                            : ""
                                    }
                                `}
                                style={{
                                    animationDelay:
                                        isInitialLoad &&
                                        (index === current ||
                                            index ===
                                                (current - 1 + photos.length) %
                                                    photos.length ||
                                            index ===
                                                (current + 1) % photos.length)
                                            ? getAnimationDelay(index)
                                            : undefined,
                                }}
                            >
                                <div
                                    className={`rounded-2xl overflow-hidden shadow-xl border border-gray-700 bg-gray-800
                                            ${
                                                index === current
                                                    ? "hover:scale-110 cursor-pointer"
                                                    : ""
                                            }`}
                                    onClick={() => {
                                        if (index === current)
                                            setSelectedPhoto(src);
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Photo ${index + 1}`}
                                        width={300}
                                        height={300}
                                        className="object-cover w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px]"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Prev */}
            <button
                onClick={handlePrev}
                className={`absolute right-8 sm:right-[20%]
                    top-1/2 -translate-y-1/2 
                    hover:bg-white/10 text-accent-primary 
                    rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10
                    backdrop-blur-xl transition duration-300 hover:scale-110 hover:shadow-accent-primary/30 z-30
                    ${
                        isInitialLoad
                            ? "opacity-0 animate-slideInFromCenterLeft"
                            : ""
                    }`}
                style={{
                    animationDelay: isInitialLoad ? "2.5s" : undefined,
                }}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
                onClick={handleNext}
                className={`absolute left-8 sm:left-[20%]
                    top-1/2 -translate-y-1/2 
                    hover:bg-white/10 text-accent-primary 
                    rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10
                    backdrop-blur-xl transition duration-300 hover:scale-110 hover:shadow-accent-primary/30 z-30
                    ${
                        isInitialLoad
                            ? "opacity-0 animate-slideInFromCenterRight"
                            : ""
                    }`}
                style={{
                    animationDelay: isInitialLoad ? "2.5s" : undefined,
                }}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Modal Lightbox */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="relative">
                        <Image
                            src={selectedPhoto}
                            alt="Full photo"
                            width={600}
                            height={600}
                            className="rounded-xl object-contain max-h-[80vh] max-w-[90vw]"
                        />
                        <button
                            className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2 sm:p-2.5"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <X className="w-6 h-6 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
