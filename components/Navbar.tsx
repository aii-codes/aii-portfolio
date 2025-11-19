"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-bg-dark text-text-dark shadow-sm z-50 animate-fadeDown
                ${isOpen ? "pb-0" : ""}`}
        >
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                {/* Left - Logo/Name - RESPONSIVE */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg font-bold tracking-wide">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-4 sm:size-5 text-accent-primary flex-shrink-0"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-accent-secondary truncate">
                        <span className="hidden sm:inline">
                            IROL JODEL B. MORILLO
                        </span>
                        <span className="sm:hidden">IROL JODEL B. MORILLO</span>
                    </span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Desktop Nav links */}
                    <ul className="hidden md:flex gap-4 lg:gap-6 text-xs lg:text-sm font-medium">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Skills", path: "/skills" },
                            { name: "Projects", path: "/projects" },
                            { name: "Certificates", path: "/certificates" },
                        ].map((link) => (
                            <li key={link.name} className="relative">
                                <Link
                                    href={link.path}
                                    className={`pb-1 transition-colors duration-300 ${
                                        pathname === link.path
                                            ? "text-accent-primary"
                                            : "hover:text-accent-primary"
                                    }`}
                                >
                                    {link.name}
                                    {pathname === link.path && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-accent-primary"
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}

                        {/* Desktop CV Button stays the same */}
                        <li>
                            <a
                                href="/cv.pdf"
                                download
                                className="ml-2 px-3 lg:px-4 py-1 lg:py-1.5 rounded-md border border-accent-primary text-accent-primary hover:bg-accent-primary/10 hover:shadow-[0_0_8px_#B7410E] transition-all duration-300 text-xs lg:text-sm whitespace-nowrap"
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 border rounded border-gray-600 hover:bg-gray-800 transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown - IMPROVED STYLING */}
            {isOpen && (
                <div className="md:hidden bg-bg-dark shadow-lg border-t border-gray-700 animate-slideDown">
                    <ul className="flex flex-col p-4 gap-3 text-sm font-medium">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Skills", path: "/skills" },
                            { name: "Projects", path: "/projects" },
                            { name: "Certificates", path: "/certificates" },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`block py-2 px-3 rounded transition ${
                                        pathname === item.path
                                            ? "bg-accent-primary/10 text-accent-primary"
                                            : "hover:bg-gray-800 hover:text-accent-primary"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Mobile CV Button */}
                        <li className="mt-2">
                            <a
                                href="/cv.pdf"
                                download
                                className="block w-full text-center py-2.5 rounded-md border border-accent-primary text-accent-primary hover:bg-accent-primary/10 transition font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
