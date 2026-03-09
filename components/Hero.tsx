"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const bars = Array.from({ length: 40 }, (_, i) => ({
        height: 20 + ((i * 37) % 81),
        delay: (i * 0.06) % 1.4,
    }));

    const { scrollY } = useScroll();
    const glowY = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
                    <motion.span
                        key={i}
                        className="waveform-bar"
                        initial={{ height: 0 }}
                        animate={{ height: b.height }}
                        transition={{ duration: 1, delay: b.delay, ease: "easeOut" }}
                        style={{ animationDelay: `${b.delay}s`, width: 4 }}
                    />
                ))}
            </div>

            {/* Soft radial glow */}
            <motion.div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    x: "-50%",
                    y: glowY,
                    width: "min(900px, 92vw)",
                    height: "min(600px, 60vw)",
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                    filter: "blur(40px)",
                }}
            />

            {/* Content */}
            <motion.div
                style={{
                    textAlign: "center",
                    padding: "0 clamp(20px, 5vw, 24px)",
                    position: "relative",
                    maxWidth: "min(740px, 92vw)",
                    width: "100%",
                    opacity,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <h1
                        style={{
                            fontSize: "clamp(2rem, 7vw, 4.25rem)",
                            fontWeight: 900,
                            lineHeight: 1.15,
                            marginBottom: 24,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        音声しかないPodcastを
                        <br />
                        <span className="gradient-text">見られる短尺コンテンツへ再設計</span>
                    </h1>

                    <p
                        style={{
                            maxWidth: 720,
                            margin: "0 auto 32px",
                            color: "var(--muted)",
                            fontSize: "clamp(0.95rem, 1.9vw, 1.08rem)",
                            lineHeight: 1.8,
                        }}
                    >
                        出して終わりになっているPodcastを、採用候補者や見込み客に届く形へ再利用。
                        Shortsや記事などのSNS展開はもちろん、営業・採用・広報で使える二次利用素材として再設計します。
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ display: "inline-block", width: "100%", maxWidth: 400 }}
                    >
                        <a href="#contact" className="btn-primary" style={{
                            fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                            padding: "clamp(14px, 2.5vw, 18px) clamp(20px, 4vw, 36px)",
                            width: "100%",
                            textAlign: "center"
                        }}>
                            無料で切り抜き動画をリクエストする →
                        </a>
                    </motion.div>

                    <p style={{ marginTop: 20, fontSize: "0.85rem", color: "var(--muted)", fontWeight: 500 }}>
                        <span style={{ opacity: 0.8 }}>クレジットカード不要</span>
                        <span style={{ margin: "0 12px", opacity: 0.3 }}>|</span>
                        <span style={{ opacity: 0.8 }}>返信は12時間以内</span>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
