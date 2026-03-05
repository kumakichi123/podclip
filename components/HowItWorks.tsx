"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const slides = [
    { src: "/slide-step01.png", alt: "STEP 01 音声データを送るだけ" },
    { src: "/slide-step02.png", alt: "STEP 02 AIと編集で最適化" },
    { src: "/slide-step03.png", alt: "STEP 03 各プラットフォームへ配信" },
];

const SLIDE_STYLE = {
    maxWidth: 984,
    margin: "0 auto",
    borderRadius: "clamp(8px, 2vw, 14px)" as string,
    overflow: "hidden" as const,
    boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,85,247,0.2)",
};

export default function HowItWorks() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="slanted-container" style={{ padding: "clamp(80px, 12vw, 120px) 0" }}>
            <div className="slanted-bg-alt" />
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }} ref={ref}>

                {/* Concept: flow */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 48 }}
                >
                    <p className="section-label">Concept</p>
                    <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)", fontWeight: 800, marginBottom: 10 }}>
                        1つの音声から複数のコンテンツへ
                    </h2>
                    <p style={{ color: "var(--muted)", fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)" }}>
                        収録した音声を渡すだけで、SNS配信まで仕上げます。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{ ...SLIDE_STYLE, marginBottom: "clamp(56px, 8vw, 96px)" }}
                >
                    <Image
                        src="/slide-flow.png"
                        alt="全体フロー"
                        width={1920}
                        height={1080}
                        unoptimized
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </motion.div>

                {/* 3 Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 48 }}
                >
                    <p className="section-label">How it works</p>
                    <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)", fontWeight: 800 }}>
                        3ステップで完結
                    </h2>
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 5vw, 56px)" }}>
                    {slides.map((slide, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            style={SLIDE_STYLE}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                width={1920}
                                height={1080}
                                unoptimized
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
