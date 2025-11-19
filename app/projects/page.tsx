/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useMotionValue, useTransform } from "framer-motion";

const projects = [
    {
        title: "Full-Stack Task Tracker App",
        date: "(2025)",
        subtitle:
            "React + Node.js + Express + PostgreSQL, deployed on Render & Vercel",
        fullDescription:
            "A full-stack task management application featuring secure user authentication, full CRUD operations, and a responsive, modern UI. The frontend is built with React and Tailwind CSS, the backend uses Node.js with Express, and data is stored in a PostgreSQL database hosted on Render. The app includes JWT-based login, task status management, filtering, sorting, and full cross-platform compatibility. Frontend is deployed on Vercel while backend is deployed on Render.",
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Lucide Icons",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "JWT Authentication",
            "Axios",
            "Render",
            "Vercel",
        ],
        features: [
            "User authentication with JWT (register/login/logout)",
            "Full CRUD for tasks (create, edit, update, delete)",
            "Task priority, status tracking, and due dates",
            "Responsive mobile-first UI with animations",
            "RESTful API with proper routing and validation",
            "Production deployment with environment variables",
        ],
    },
    {
        title: "AI-Powered Object Classifier",
        date: "(2025)",
        subtitle:
            "EfficientNet model + TensorFlow, Streamlit UI, deployed on Hugging Face",
        fullDescription:
            "A machine learning application that classifies objects in images using a TensorFlow EfficientNet-based model. Features a clean Streamlit interface where users upload an image and receive predictions with confidence scores. The app includes preprocessing, GPU-ready model code, PDF export, and evaluation utilities. Fully deployed on Hugging Face Spaces.",
        technologies: [
            "TensorFlow",
            "EfficientNet",
            "Python",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Streamlit",
            "Hugging Face Spaces",
            "FPDF",
        ],
        features: [
            "Image upload and preprocessing pipeline",
            "Real-time inference with confidence levels",
            "EfficientNet-based image classifier",
            "PDF report export with predictions",
            "Interactive UI with Streamlit",
            "Cloud deployment on Hugging Face",
        ],
    },
    {
        title: "Telegram InfoBot",
        date: "(2025)",
        subtitle:
            "python-telegram-bot + async APIs, Dockerized, deployed on Render",
        fullDescription:
            "A production-grade Telegram chatbot built using python-telegram-bot v21 with full async support. The bot provides jokes, facts, weather data, echo replies, and supports custom commands via Telegram's bot menu. Containerized using Docker with environment variables, health checks, logging setup, and deployed as a Docker service on Render.",
        technologies: [
            "Python",
            "python-telegram-bot",
            "Asyncio",
            "Aiohttp",
            "Docker",
            "Render",
            "REST API integrations",
            "dotenv",
            "Logging",
        ],
        features: [
            "Command handlers (/start, /help, /joke, /fact, /weather)",
            "Async API fetching from public REST services",
            "Docker deployment with health route",
            "Automatic uptime monitoring",
            "Inline log output for debugging",
            "Clean and scalable command structure",
        ],
    },
    {
        title: "Student Performance Dashboard",
        date: "(2025)",
        subtitle:
            "Pandas + Plotly + Streamlit, analytics dashboard with PDF export",
        fullDescription:
            "An interactive analytics dashboard enabling teachers to analyze student grades, trends, and performance distribution. Built with Pandas for data manipulation, Plotly for interactive charts, and Streamlit for deployment. Includes Excel/PDF exporting, subject averages, top performers ranking, attendance analysis, and clean statistical visualizations.",
        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Plotly",
            "Matplotlib",
            "FPDF",
            "Streamlit",
            "Data Visualization",
            "Statistical Analysis",
        ],
        features: [
            "Interactive charts (bar, pie, line, histogram)",
            "Subject-wise and overall class analysis",
            "Top performers ranking",
            "Pass rate and statistical summary",
            "Excel and PDF export tools",
            "Fully deployed on Streamlit Cloud",
        ],
    },
    {
        title: "VMATE – Object Detection Eyewear",
        date: "(2025)",
        subtitle: "VR-like device for the visually impaired",
        fullDescription:
            "A wearable assistive device designed to help visually impaired individuals navigate safely using object detection, distance measurement, and directional audio feedback.",
        technologies: [
            "Python",
            "Arduino IDE",
            "Computer Vision",
            "Object Detection",
            "Ultrasonic/IR Sensors",
            "Audio Processing",
        ],
        features: [
            "Real-time object detection and classification",
            "Ultrasonic-based distance measurement",
            "Directional audio feedback",
            "Hands-free wearable design",
        ],
    },
    {
        title: "Attendance Management System",
        date: "(2024)",
        subtitle: "Tracks attendance, in/out time, rates, absences",
        fullDescription:
            "An enterprise-level attendance tracking app that logs time-in/out, calculates attendance rate, tracks absences, and provides HR analytics with exportable reports.",
        technologies: [
            "Java",
            "JavaScript",
            "SQL",
            "MySQL",
            "XAMPP",
            "Eclipse",
            "OOP",
            "JDBC",
        ],
        features: [
            "Time-in/out logging",
            "Attendance rate calculation",
            "Absence tracking with analytics",
            "Admin dashboard with reports",
        ],
    },
    {
        title: "Line Tracing & Obstacle Avoiding Car",
        date: "(2024)",
        subtitle: "Autonomous mini car",
        fullDescription:
            "A robotics project where a mini car follows lines using IR sensors and avoids obstacles using ultrasonic sensors, powered by PID control.",
        technologies: [
            "Python",
            "Arduino IDE",
            "IR Sensors",
            "Ultrasonic Sensors",
            "DC Motors",
            "Motor Driver",
            "PID Control",
        ],
        features: [
            "IR line detection",
            "Ultrasonic obstacle detection",
            "Autonomous navigation",
        ],
    },
    {
        title: "Laser Turret with Radar",
        date: "(2024)",
        subtitle: "Detects objects, displays on radar, fires laser",
        fullDescription:
            "A Python + Arduino laser turret with radar visualization, automatic scanning, target detection, and servo aiming.",
        technologies: [
            "Python",
            "Arduino IDE",
            "Servo Motors",
            "Laser Module",
            "Sensors",
            "NumPy",
            "Pygame/Matplotlib",
        ],
        features: [
            "360-degree scanning",
            "Real-time radar interface",
            "Automatic laser aiming",
        ],
    },
    {
        title: "Web App for School Canteen",
        date: "(2023)",
        subtitle: "Realtime stock + reservation system",
        fullDescription:
            "A Firebase-powered canteen reservation system with real-time stock updates and student authentication.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "Firebase Auth",
            "OOP",
        ],
        features: [
            "Real-time syncing",
            "Online reservation",
            "Admin inventory panel",
        ],
    },
    {
        title: "School Building Miniature",
        date: "(2023)",
        subtitle: "SketchUp 3D blueprint",
        fullDescription:
            "A full 3D architectural model of a school building made in SketchUp.",
        technologies: [
            "SketchUp",
            "3D Modeling",
            "Architecture",
            "Technical Drawing",
        ],
        features: ["Accurate scale model", "Interior and exterior detailing"],
    },
    {
        title: "House Miniature",
        date: "(2022)",
        subtitle: "AutoCAD floor plan + physical model",
        fullDescription:
            "A 2D AutoCAD blueprint converted into a physical miniature house model.",
        technologies: ["AutoCAD", "2D CAD", "Scale Modeling"],
        features: ["Blueprint drafting", "Scale modeling"],
    },
];

const wrapIndex = (index: number, length: number) => (index + length) % length;

export default function ProjectsPage() {
    const [current, setCurrent] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Responsive values
    const verticalSpacing = isMobile ? 0 : 10;
    const horizontalSpacing = isMobile ? 0 : 25;
    const cardWidth = isMobile ? Math.min(window.innerWidth - 40, 360) : 700;
    const cardHeight = isMobile ? "auto" : 500;
    const swipeThreshold = 100;
    const visibleCards = isMobile ? 1 : 6;

    // Trigger initial load animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleDragEnd = (info: { offset: { x: number; y: number } }) => {
        if (info.offset.x < -swipeThreshold) {
            setIsSwiping(true);
            setTimeout(() => {
                setCurrent((c) => wrapIndex(c + 1, projects.length));
                setIsSwiping(false);
            }, 150);
        }
    };

    const opacityForPos = (pos: number) => {
        if (isMobile) return pos === 0 ? 1 : 0;
        if (pos >= 5) return 0;
        return Math.max(0, 1 - pos * 0.15);
    };

    return (
        <div
            style={{
                paddingTop: isMobile ? 80 : 20,
                paddingLeft: isMobile ? 0 : 500,
                width: "100vw",
                height: isMobile ? "auto" : "100vh",
                minHeight: "100vh",
                boxSizing: "border-box",
                backgroundColor: "#1B1B1B",
                overflowX: "hidden",
                overflowY: isMobile ? "auto" : "hidden",
            }}
        >
            <div
                className={`
                    absolute
                    ${
                        isMobile
                            ? "top-24 left-1/4 -translate-x-1/2"
                            : "top-1/2 left-[100px] -translate-y-1/2"
                    }
                    ${isMobile ? "text-[26px]" : "text-[36px]"}
                    font-bold 
                    text-[#B7410E]
                    tracking-[0.35em]
                    animate-fadeIn 
                    opacity-0
                `}
                style={{ animationDelay: "0.6s" }}
            >
                PROJECTS
            </div>

            <section
                className={`w-full ${
                    isMobile ? "max-w-full px-4 pb-20" : "max-w-3xl px-6"
                } py-20 bg-transparent flex items-center ${
                    isMobile ? "justify-center" : "justify-start"
                }`}
            >
                <div className="relative w-full">
                    <div
                        className="relative mx-auto"
                        style={{
                            width: isMobile
                                ? cardWidth
                                : cardWidth +
                                  horizontalSpacing * (visibleCards - 1),
                            height: isMobile
                                ? "auto"
                                : 500 + verticalSpacing * (visibleCards - 1),
                            overflow: "visible",
                            perspective: 1000,
                        }}
                    >
                        {projects.map((project, i) => {
                            let pos = i - current;
                            if (pos < 0) pos += projects.length;
                            if (pos >= visibleCards) return null;

                            const top = isMobile ? 0 : -pos * verticalSpacing;
                            const left = isMobile ? 0 : pos * horizontalSpacing;
                            const opacity = opacityForPos(pos);

                            const isFront = pos === 0;

                            const initialX = isMobile ? 0 : 400;
                            const initialY = isMobile ? 0 : -300;
                            const initialOpacity = 0;
                            const initialScale = 0.6;

                            const globalDelay = 1.2;
                            const entryDelay = globalDelay + pos * 0.15;

                            const cardStyle = {
                                width: cardWidth,
                                height: cardHeight,
                                borderRadius: 16,
                                background:
                                    "linear-gradient(180deg, #1B1B1B, #202020)",
                                border: "1px solid rgba(255,255,255,0.04)",
                                boxShadow: "0 20px 45px rgba(0,0,0,0.6)",
                                top,
                                left,
                                opacity,
                                userSelect: "none" as const,
                            };

                            if (isFront) {
                                return (
                                    <motion.div
                                        key={project.title}
                                        className="absolute"
                                        style={{
                                            ...cardStyle,
                                            zIndex: 300,
                                            cursor: "grab",
                                        }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.25}
                                        onDragEnd={(e, info) =>
                                            handleDragEnd(info)
                                        }
                                        whileTap={{ scale: 0.995 }}
                                        initial={
                                            hasLoaded
                                                ? false
                                                : {
                                                      x: initialX,
                                                      y: initialY,
                                                      opacity: initialOpacity,
                                                      scale: initialScale,
                                                  }
                                        }
                                        animate={
                                            isSwiping
                                                ? {
                                                      x:
                                                          -horizontalSpacing *
                                                          20,
                                                      y: -verticalSpacing * 10,
                                                      opacity: 0,
                                                      scale: 0.7,
                                                      rotateY: -80,
                                                  }
                                                : {
                                                      x: 0,
                                                      y: 0,
                                                      opacity: 1,
                                                      scale: 1,
                                                      rotateY: 0,
                                                  }
                                        }
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            mass: 1,
                                            velocity: 0.5,
                                            delay: hasLoaded ? 0 : entryDelay,
                                        }}
                                        layout
                                    >
                                        <CardContent
                                            project={project}
                                            isMobile={isMobile}
                                        />
                                    </motion.div>
                                );
                            }

                            if (isMobile) return null;

                            return (
                                <motion.div
                                    key={`behind-${project.title}`}
                                    className="absolute"
                                    style={{
                                        ...cardStyle,
                                        zIndex: 300 - pos,
                                        pointerEvents: "none",
                                    }}
                                    initial={
                                        hasLoaded
                                            ? false
                                            : {
                                                  top: top + initialY,
                                                  left: left + initialX,
                                                  opacity: initialOpacity,
                                                  scale: initialScale,
                                              }
                                    }
                                    animate={{
                                        top,
                                        left,
                                        opacity,
                                        scale: 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 22,
                                        delay: hasLoaded ? 0 : entryDelay,
                                    }}
                                >
                                    {pos === 1 && (
                                        <CardContent
                                            project={project}
                                            isMobile={isMobile}
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardContent({ project, isMobile }: any) {
    return (
        <div
            className={`flex flex-col ${
                isMobile ? "p-4 gap-2" : "p-6 h-full justify-between"
            }`}
        >
            <div>
                <h3
                    className={`${
                        isMobile ? "text-base" : "text-lg"
                    } font-semibold text-accent-primary`}
                >
                    {project.title}
                </h3>

                <div
                    className={`${
                        isMobile ? "text-[10px]" : "text-xs"
                    } mt-1 text-accent-secondary`}
                >
                    {project.date}
                </div>

                <p
                    className={`${
                        isMobile ? "text-[10px]" : "text-xs"
                    } mt-3 leading-relaxed text-text-dark/70`}
                >
                    {project.subtitle}
                </p>

                <div className="mt-4">
                    <h4
                        className={`${
                            isMobile ? "text-[10px]" : "text-xs"
                        } font-semibold mb-2 text-accent-secondary`}
                    >
                        Description:
                    </h4>
                    <p
                        className={`${
                            isMobile ? "text-[10px]" : "text-xs"
                        } leading-relaxed text-text-dark/70`}
                    >
                        {project.fullDescription}
                    </p>
                </div>

                <div className="mt-4">
                    <h4
                        className={`${
                            isMobile ? "text-[10px]" : "text-xs"
                        } font-semibold mb-2 text-accent-secondary`}
                    >
                        Technologies | Skills:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className={`px-2 py-0.5 rounded ${
                                    isMobile ? "text-[9px]" : "text-xs"
                                } bg-accent-primary/20 text-text-dark`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <h4
                        className={`${
                            isMobile ? "text-[10px]" : "text-xs"
                        } font-semibold mb-2 text-accent-secondary`}
                    >
                        Key Features:
                    </h4>
                    <ul
                        className={`${
                            isMobile ? "text-[10px]" : "text-xs"
                        } space-y-1 text-text-dark/80`}
                    >
                        {project.features.map(
                            (feature: string, idx: number) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-accent-primary mr-2">
                                        •
                                    </span>
                                    <span className="leading-relaxed">
                                        {feature}
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
