"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const slides = [
    { src: "/slide-step01.png", alt: "STEP 01 素材を渡すだけ" },
    { src: "/slide-step02.png", alt: "STEP 02 素材をSNS用に最適化" },
    { src: "/slide-step03.png", alt: "STEP 03 完成データをお届け" },
];

const SLIDE_STYLE = {
    maxWidth: 984,
    margin: "0 auto",
    borderRadius: "clamp(12px, 2.5vw, 20px)",
    overflow: "hidden" as const,
    boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,85,247,0.15)",
    background: "var(--surface)",
};

export default function HowItWorks() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="slanted-container" style={{ padding: "clamp(100px, 15vw, 160px) 0" }}>
            <div className="slanted-bg-alt" />
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }} ref={ref}>

                {/* Concept: flow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <p className="section-label">Concept</p>
                    <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: 16 }}>
                        1つの音声から複数のコンテンツへ
                    </h2>
                    <p style={{ color: "var(--muted)", fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", maxWidth: 640, margin: "0 auto" }}>
                        PodcastのURLや素材を渡すだけで、SNSでそのまま使える形で納品します。
                        資産としてのPodcastを最大限に活用しましょう。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    style={{ ...SLIDE_STYLE, marginBottom: "clamp(80px, 12vw, 120px)" }}
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <p className="section-label">How it works</p>
                    <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800 }}>
                        3ステップで完結
                    </h2>
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 8vw, 80px)" }}>
                    {slides.map((slide, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
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
