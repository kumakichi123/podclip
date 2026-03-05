"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Before() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="slanted-container" style={{ padding: "clamp(64px, 10vw, 100px) 0" }}>
            <div className="slanted-bg" />
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)" }} ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 48 }}
                >
                    <p className="section-label">Before</p>
                    <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)", fontWeight: 800 }}>
                        こんな課題はありませんか？
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{
                        maxWidth: 984,
                        margin: "0 auto",
                        borderRadius: "clamp(8px, 2vw, 14px)",
                        overflow: "hidden",
                        boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(168,85,247,0.2)",
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
