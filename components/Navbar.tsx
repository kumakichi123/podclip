"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ["rgba(10,10,10,0)", "rgba(10,10,10,0.85)"]
    );
    const borderBottom = useTransform(
        scrollY,
        [0, 50],
        ["1px solid rgba(255,255,255,0)", "1px solid var(--border)"]
    );

    return (
        <motion.nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor,
                borderBottom,
                backdropFilter: "blur(12px)",
                padding: "0 clamp(20px, 5vw, 32px)",
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 64,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Image src="/logo.png" alt="ポッドクリップ" width={32} height={32} style={{ objectFit: "contain", flexShrink: 0 }} />
                    <span
                        style={{
                            fontWeight: 800,
                            fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                            background: "linear-gradient(135deg, #A855F7, #C084FC)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            letterSpacing: "-0.02em",
                            whiteSpace: "nowrap",
                        }}
                    >
                        ポッドクリップ
                    </span>
                </div>
                <motion.a
                    href="#contact"
                    className="btn-primary navbar-cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ padding: "10px clamp(16px, 3vw, 24px)", fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)" }}
                >
                    無料動画をリクエスト
                </motion.a>
            </div>
        </motion.nav>
    );
}
