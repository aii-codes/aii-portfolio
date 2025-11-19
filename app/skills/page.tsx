"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "motion/react";

// --- Technical Skills ---
const technicalSkills = [
    { name: "JavaScript", level: 4, desc: "Dynamic scripting for frontend and backend applications." },
    { name: "TypeScript", level: 3, desc: "Used in modern React/Vite environments with typed safety." },
    { name: "Python", level: 4, desc: "Applied in ML, data analysis, and API tooling." },
    { name: "Java", level: 4, desc: "Object-oriented programming and backend development." },
    { name: "C++", level: 3, desc: "Low-level algorithms and performance-focused coding." },
    { name: "React", level: 4, desc: "Built reusable components, routing, context, and animations." },
    { name: "Next.js", level: 3, desc: "SSR, file-based routing, and optimized frontend rendering." },
    { name: "Vite", level: 4, desc: "High-performance frontend tooling, dev server, and bundling." },
    { name: "Tailwind CSS", level: 4, desc: "Utility-first styling for rapid UI development." },
    { name: "Axios", level: 4, desc: "HTTP client for API communication and backend integration." },
    { name: "Lucide Icons", level: 4, desc: "Implemented modern React icon components." },
    { name: "UI Animation", level: 4, desc: "Scroll animations, fade-ins, transitions with Motion/Framer." },
    { name: "Node.js", level: 4, desc: "Built REST APIs for authentication and task management." },
    { name: "Express.js", level: 4, desc: "Middleware-based routing and backend logic." },
    { name: "FastAPI", level: 4, desc: "Deployed ML models as fast Python APIs." },
    { name: "Flask", level: 3, desc: "Lightweight service for ML model endpoints." },
    { name: "JWT Authentication", level: 4, desc: "Implemented secure user authentication workflows." },
    { name: "bcryptjs", level: 4, desc: "Password hashing for secure login systems." },
    { name: "PostgreSQL", level: 4, desc: "Used for production databases on Render; schema design + migrations." },
    { name: "SQL", level: 4, desc: "Querying, normalization, indexing, and joins." },
    { name: "Database Migrations", level: 3, desc: "Manual schema updates, type conversions, ALTER TABLE, etc." },
    { name: "Render Deployment", level: 4, desc: "Deployed Node.js and PostgreSQL apps with environment variables." },
    { name: "Vercel Deployment", level: 4, desc: "Hosted React frontend with rewrite rules and routing fixes." },
    { name: "Docker", level: 4, desc: "Built and deployed containerized Telegram bot services." },
    { name: "Streamlit Cloud", level: 4, desc: "Deployed dashboards with secure and reactive data display." },
    { name: "Hugging Face Spaces", level: 4, desc: "Deployed ML classifiers using Streamlit runtime." },
    { name: "CI/CD Fundamentals", level: 3, desc: "Understood auto-build triggers and cloud logs debugging." },
    { name: "TensorFlow", level: 4, desc: "Built EfficientNet-based image classifiers." },
    { name: "PyTorch (Basics)", level: 3, desc: "Understanding of tensors and model pipelines." },
    { name: "Pandas", level: 4, desc: "Data cleaning, aggregation, and statistical computation." },
    { name: "NumPy", level: 4, desc: "Matrix operations and ML preprocessing." },
    { name: "Plotly", level: 4, desc: "Interactive data visualizations for dashboards." },
    { name: "Matplotlib", level: 3, desc: "Static chart generation for reporting." },
    { name: "FPDF", level: 3, desc: "Generated PDF reports from analytics results." },
    { name: "python-telegram-bot", level: 4, desc: "Async Telegram bots with command handlers and API integrations." },
    { name: "Async Programming", level: 4, desc: "aiohttp, asyncio, async/await logic for real-time bots." },
    { name: "HTTP APIs", level: 4, desc: "Fetched jokes, facts, and weather data from external APIs." },
    { name: "Git & GitHub", level: 4, desc: "Branching, merging, remote repos, push/pull workflows." },
    { name: "PostgreSQL CLI (psql)", level: 4, desc: "Used to inspect tables, fix schemas, and apply migrations." },
    { name: "Environment Management", level: 4, desc: "Handled .env, virtual environments, runtime variables." },
    { name: "VS Code (Advanced)", level: 5, desc: "Extensions, workspace configs, indentation control, debugging." },
    {
        name: "AI-Driven Software Development",
        level: 5,
        desc: "Efficiently utilized AI tools (ChatGPT) for debugging, architecture, code generation, refactoring, and optimization.",
    }
];

// --- Soft Skills ---
const softSkills = [
    { name: "Problem-Solving", level: 5, desc: "Breaks down complex issues and finds efficient solutions." },
    { name: "Debugging Mastery", level: 5, desc: "Diagnosed frontend, backend, deployment, and DB issues methodically." },
    { name: "Time Management", level: 4, desc: "Handled multiple projects with consistent improvement." },
    { name: "Adaptability", level: 4, desc: "Quickly shifted between Python, JS, ML, and DevOps environments." },
    { name: "Attention to Detail", level: 5, desc: "Pixel-perfect UI/UX, migration fixes, and production debugging." },
    { name: "Critical Thinking", level: 4, desc: "Identified root causes behind CORS issues, schema errors, etc." },
    { name: "Growth Mindset", level: 5, desc: "Daily improvement through real multi-stack projects." },
    { name: "Strategic Planning", level: 4, desc: "Planned 4 full projects from MVP → polish → deployment." },
    { name: "Team Collaboration", level: 4, desc: "Understands industry workflows and cross-functional communication." },
    { name: "Self-Awareness", level: 4, desc: "Accurately identifies strengths, weaknesses, and next steps." },
    { name: "UI/UX Design Sense", level: 4, desc: "Clean layouts, consistent spacing, scroll animations, hierarchy." },
    { name: "Project Architecture", level: 5, desc: "Designed scalable modular structures for full-stack & ML apps." },
    { name: "API Integration", level: 4, desc: "Incorporated multiple external APIs across apps." },
    { name: "Data Interpretation", level: 4, desc: "Used dashboards to draw insights from real datasets." },
    {
        name: "AI Collaboration Skill",
        level: 5,
        desc: "Communicated effectively with AI tools for debugging, code generation, design decisions, and rapid iteration.",
    }
];

interface AnimatedItemProps {
    children: ReactNode;
    delay?: number;
}

const PageLoadWrapper = ({
    children,
    index,
}: {
    children: ReactNode;
    index: number;
}) => {
    const GLOBAL_DELAY = 0.8;

    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: GLOBAL_DELAY + index * 0.08,
            }}
        >
            {children}
        </motion.div>
    );
};

const AnimatedItem = ({ children, delay = 0 }: AnimatedItemProps) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }
            }
            transition={{ duration: 0.2, delay }}
        >
            {children}
        </motion.div>
    );
};

export default function SkillsPage() {
    return (
        <div className="md:h-screen md:overflow-hidden">
            <section className="w-full min-h-screen bg-[#1B1B1B] text-[#DADADA] pt-24 pb-8 px-4 md:px-8 flex justify-center">
                <div className="w-full max-w-7xl">
                    {/* Two Column Layout - stacks on mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* --- LEFT COLUMN: TECHNICAL SKILLS --- */}
                        <div className="md:overflow-y-auto md:max-h-[80vh] no-scrollbar pr-2">
                            <h2
                                className="sticky top-0 bg-[#1B1B1B] text-2xl md:text-3xl font-bold text-[#B7410E] mb-4 py-2 z-10 animate-fadeDown opacity-0"
                                style={{ animationDelay: "0.6s" }}
                            >
                                Technical Skills
                            </h2>
                            <div className="space-y-3">
                                {technicalSkills.map((skill, i) => (
                                    <PageLoadWrapper key={i} index={i}>
                                        <AnimatedItem delay={0.1}>
                                            <div className="p-[1px] rounded-lg bg-[#2A2A2A] border border-[#333333] hover:border-[#9DC183] transition-all duration-300">
                                                <div className="bg-[#1B1B1B] rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <div className="flex-1">
                                                        <h3 className="text-sm md:text-base font-semibold text-[#9DC183]">
                                                            {skill.name}
                                                        </h3>
                                                        <p className="text-xs text-gray-400 mt-1">
                                                            {skill.desc}
                                                        </p>
                                                    </div>
                                                    <div className="flex">
                                                        {Array.from({
                                                            length: 5,
                                                        }).map((_, idx) => (
                                                            <span
                                                                key={idx}
                                                                className={`text-sm ${
                                                                    idx <
                                                                    skill.level
                                                                        ? "text-[#B7410E]"
                                                                        : "text-gray-700"
                                                                }`}
                                                            >
                                                                ★
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedItem>
                                    </PageLoadWrapper>
                                ))}
                            </div>
                        </div>

                        {/* --- RIGHT COLUMN: SOFT SKILLS --- */}
                        <div className="md:overflow-y-auto md:max-h-[80vh] no-scrollbar pr-2">
                            <h2
                                className="sticky top-0 bg-[#1B1B1B] text-2xl md:text-3xl font-bold text-[#B7410E] mb-4 py-2 z-10 animate-fadeDown opacity-0"
                                style={{ animationDelay: "0.6s" }}
                            >
                                Soft Skills
                            </h2>
                            <div className="space-y-3">
                                {softSkills.map((skill, i) => (
                                    <PageLoadWrapper key={i} index={i}>
                                        <AnimatedItem delay={0.1}>
                                            <div className="p-[1px] rounded-lg bg-[#2A2A2A] border border-[#333333] hover:border-[#9DC183] transition-all duration-300">
                                                <div className="bg-[#1B1B1B] rounded-lg p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <div className="flex-1">
                                                        <h3 className="text-sm md:text-base font-semibold text-[#9DC183]">
                                                            {skill.name}
                                                        </h3>
                                                        <p className="text-xs text-gray-400 mt-1">
                                                            {skill.desc}
                                                        </p>
                                                    </div>
                                                    <div className="flex">
                                                        {Array.from({
                                                            length: 5,
                                                        }).map((_, idx) => (
                                                            <span
                                                                key={idx}
                                                                className={`text-sm ${
                                                                    idx <
                                                                    skill.level
                                                                        ? "text-[#B7410E]"
                                                                        : "text-gray-700"
                                                                }`}
                                                            >
                                                                ★
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedItem>
                                    </PageLoadWrapper>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}