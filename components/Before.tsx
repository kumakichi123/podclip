"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Before() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="slanted-container" style={{ padding: "clamp(80px, 12vw, 140px) 0" }}>
            <div className="slanted-bg" />
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }} ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <p className="section-label">Before</p>
                    <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.01em" }}>
                        こんな課題はありませんか？
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    style={{
                        maxWidth: 984,
                        margin: "0 auto",
                        borderRadius: "clamp(12px, 2.5vw, 20px)",
                        overflow: "hidden",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(168,85,247,0.15)",
                        background: "var(--surface)",
                    }}
                >
                    <Image
                        src="/slide-before.png"
                        alt="Podcast制作の課題"
                        width={1920}
                        height={1080}
                        unoptimized
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
