"use client";

import { motion } from "framer-motion";

const bars = Array.from({ length: 40 }, (_, i) => ({
    height: Math.random() * 80 + 20,
    delay: (i * 0.06) % 1.4,
}));

export default function Hero() {
    return (
        <section
            className="slanted-container"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                paddingTop: 56,
            }}
        >
            <div className="slanted-bg-hero" />

            {/* Background waveform */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "65%",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    gap: 4,
                    opacity: 0.06,
                    pointerEvents: "none",
                }}
            >
                {bars.map((b, i) => (
                    <span
                        key={i}
                        className="waveform-bar"
                        style={{ height: b.height, animationDelay: `${b.delay}s`, width: 4 }}
                    />
                ))}
            </div>

            {/* Soft radial glow */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "min(900px, 90vw)",
                    height: "min(600px, 60vw)",
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse, rgba(168,85,247,0.09) 0%, transparent 68%)",
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <div
                style={{
                    textAlign: "center",
                    padding: "0 clamp(20px, 5vw, 24px)",
                    position: "relative",
                    maxWidth: "min(700px, 92vw)",
                    width: "100%",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    <h1
                        style={{
                            fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.2,
                            marginBottom: 40,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        PodcastからSNS用の
                        <br />
                        <span className="gradient-text">動画や記事を作成</span>
                    </h1>
                    <a href="#contact" className="btn-primary" style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
                        無料で切り抜き動画をリクエストする →
                    </a>
                    <p style={{ marginTop: 14, fontSize: "0.76rem", color: "var(--muted)" }}>
                        クレジットカード不要　返信は12時間以内
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
