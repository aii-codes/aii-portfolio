/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // keep this for future light mode flexibility
    theme: {
        extend: {
            /* ------------------------------
               🎨 Color Palette (Harmonious Theme)
            ------------------------------ */
            colors: {
                accent: {
                    primary: "#B7410E", // Burnt Sienna – strong warm accent
                    secondary: "#9DC183", // Moss green – natural balance
                },
                bg: {
                    dark: "#1B1B1B", // Deep charcoal
                },
                text: {
                    dark: "#DADADA", // Muted white
                },
            },

            /* ------------------------------
               🎬 Custom Animations (only used in Hero)
            ------------------------------ */
            keyframes: {
                // Navbar + subtle fade
                fadeDown: {
                    "0%": { opacity: "0", transform: "translateY(-20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },

                // 👋 Waving hand + Hello bubble (from below)
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },

                // "I'm" text + Profile image – simple fade in
                fadeInDelayed: {
                    "0%": { opacity: "0" },
                    "70%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },

                // Subtitle + Paragraph (delayed fade)
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },

                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(40px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideOutLeft: {
                    "0%": { opacity: "1", transform: "translateX(0)" },
                    "100%": { opacity: "0", transform: "translateX(-40px)" },
                },

                dropIn: {
                    "0%": {
                        transform: "scale(1.3)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },

                slideInFromCenterLeft: {
                    "0%": {
                        transform: "translateX(-40%) translateY(-50%)", // Added translateY(-50%) to maintain vertical centering
                        opacity: "0",
                    },
                    "60%": {
                        transform: "translateX(-40%) translateY(-50%)", // Added translateY(-50%)
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0) translateY(-50%)", // Added translateY(-50%)
                        opacity: "1",
                    },
                },
                slideInFromCenterRight: {
                    "0%": {
                        transform: "translateX(40%) translateY(-50%)", // Added translateY(-50%) to maintain vertical centering
                        opacity: "0",
                    },
                    "60%": {
                        transform: "translateX(40%) translateY(-50%)", // Added translateY(-50%)
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateX(0) translateY(-50%)", // Added translateY(-50%)
                        opacity: "1",
                    },
                },
            },

            animation: {
                fadeDown: "fadeDown 0.6s ease-out forwards",
                fadeUp: "fadeUp 0.8s ease-out forwards",
                fadeIn: "fadeIn 0.6s ease-out forwards",
                fadeInDelayed: "fadeInDelayed 2s ease-out forwards",
                slideInRight: "slideInRight 0.8s ease-out forwards",
                slideOutLeft: "slideOutLeft 0.8s ease-in forwards",
                dropIn: "dropIn 0.8s ease-out forwards",
                slideInFromCenterLeft:
                    "slideInFromCenterLeft 2s ease-out forwards",
                slideInFromCenterRight:
                    "slideInFromCenterRight 2s ease-out forwards",
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("daisyui")],
};
