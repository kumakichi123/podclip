"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
                borderTop: "1px solid var(--border)",
                padding: "48px 24px",
                textAlign: "center",
                color: "var(--muted)",
                fontSize: "0.8rem",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
                <Image src="/logo.png" alt="ポッドクリップ" width={24} height={24} style={{ objectFit: "contain" }} />
                <span style={{ fontWeight: 700, color: "var(--text)", fontSize: "1rem", letterSpacing: "-0.02em" }}>ポッドクリップ</span>
            </div>
            <p>© {new Date().getFullYear()} PodClip. All rights reserved.</p>
        </motion.footer>
    );
}
