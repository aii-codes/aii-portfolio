"use client";

import { useEffect, useState } from "react";

interface Props {
    text: string;
    speed?: number;
    duration?: number;
    className?: string;
    start?: boolean; // when true → begin reveal
    scrambleUntilStart?: boolean; // NEW ✔ keep scrambling until reveal
    onDone?: () => void;
}

export default function DecryptText({
    text,
    speed = 35,
    duration = 900,
    className = "",
    start = true,
    scrambleUntilStart = false,
    onDone,
}: Props) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*-_+=?";
    const [output, setOutput] = useState(text);

    useEffect(() => {
        if (scrambleUntilStart && !start) {
            const interval = setInterval(() => {
                setOutput(
                    text
                        .split("")
                        .map((c) =>
                            c === " "
                                ? " "
                                : chars[
                                      Math.floor(Math.random() * chars.length)
                                  ]
                        )
                        .join("")
                );
            }, Math.max(20, speed));

            return () => clearInterval(interval);
        }
    }, [scrambleUntilStart, start, text, speed]);

    
    const [done, setDone] = useState(false);

    // 👉 Continuous scramble before reveal
    useEffect(() => {
        if (!scrambleUntilStart) return;
        if (start) return; // stop scramble when reveal begins

        const interval = setInterval(() => {
            setOutput(
                text
                    .split("")
                    .map((c) =>
                        c === " "
                            ? " "
                            : chars[Math.floor(Math.random() * chars.length)]
                    )
                    .join("")
            );
        }, Math.max(20, speed));


        return () => clearInterval(interval);
    }, [scrambleUntilStart, start, text, speed]);

    // 👉 Reveal animation
    useEffect(() => {
        if (!start || done) return;
        if (scrambleUntilStart) {
            setOutput(
                text
                    .split("")
                    .map((c) =>
                        c === " "
                            ? " "
                            : chars[Math.floor(Math.random() * chars.length)]
                    )
                    .join("")
            );
        }
        let frame = 0;
        const totalFrames = duration / speed;

        const interval = setInterval(() => {
            frame++;

            setOutput((prev) =>
                prev
                    .split("")
                    .map((char, i) => {
                        if (frame >= totalFrames) return text[i];
                        if (char === " ") return " ";
                        if (
                            i <=
                            Math.min(
                                text.length,
                                (frame / totalFrames) * text.length
                            )
                        )
                            return text[i];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (frame >= totalFrames) {
                clearInterval(interval);
                setDone(true);
                if (onDone) onDone();
            }
        }, speed);

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, done, text, speed, duration, onDone]);

    return <span className={className}>{output}</span>;
}
