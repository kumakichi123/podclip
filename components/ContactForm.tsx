"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactForm() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.currentTarget;
        const data = {
            company: (form.elements.namedItem("company") as HTMLInputElement).value,
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            podcast_url: (form.elements.namedItem("podcast_url") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error ?? "送信に失敗しました");
            }

            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "送信に失敗しました。もう一度お試しください。");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" style={{ paddingBottom: 120 }}>
            <div className="section" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        textAlign: "center",
                        maxWidth: 640,
                        margin: "0 auto",
                        marginBottom: 64,
                    }}
                >
                    <p className="section-label">Free Trial</p>
                    <h2 style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)", fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
                        あなたの最新エピソードから、
                        <br />
                        <span className="gradient-text">無料で1本ショート動画</span>をお作りします。
                    </h2>
                    <p style={{ color: "var(--muted)", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
                        リスクゼロで実力をご確認ください。通常12時間以内に返信いたします。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="card"
                    style={{
                        maxWidth: 580,
                        margin: "0 auto",
                        padding: "clamp(32px, 6vw, 48px)",
                        boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                    }}
                >
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{ textAlign: "center", padding: "40px 0" }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                                    style={{ fontSize: "4rem", marginBottom: 24 }}
                                >
                                    🎉
                                </motion.div>
                                <h3 style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: 12 }}>
                                    ご依頼ありがとうございます！
                                </h3>
                                <p style={{ color: "var(--muted)", fontSize: "1rem" }}>
                                    内容を確認し、担当者より12時間以内にご連絡いたします。
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                style={{ display: "flex", flexDirection: "column", gap: 24 }}
                            >
                                {[
                                    { label: "企業名", name: "company", type: "text", placeholder: "株式会社〇〇 (個人の場合は個人と記入)" },
                                    { label: "担当者名", name: "name", type: "text", placeholder: "山田 太郎" },
                                    { label: "PodcastのURL", name: "podcast_url", type: "url", placeholder: "https://open.spotify.com/..." },
                                    { label: "メールアドレス", name: "email", type: "email", placeholder: "you@company.com" },
                                ].map((field) => (
                                    <div key={field.name}>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "0.85rem",
                                                fontWeight: 600,
                                                color: "var(--muted)",
                                                marginBottom: 10,
                                                letterSpacing: "0.04em",
                                            }}
                                        >
                                            {field.label}
                                        </label>
                                        <motion.input
                                            whileFocus={{ borderColor: "var(--primary)", scale: 1.01 }}
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            required
                                            style={{
                                                width: "100%",
                                                background: "var(--surface2)",
                                                border: "1px solid var(--border)",
                                                borderRadius: 12,
                                                padding: "14px 18px",
                                                color: "var(--text)",
                                                fontSize: "0.95rem",
                                                outline: "none",
                                                transition: "all 0.2s",
                                            }}
                                        />
                                    </div>
                                ))}

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px var(--primary-glow)" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="btn-primary"
                                    disabled={loading}
                                    style={{
                                        width: "100%",
                                        opacity: loading ? 0.7 : 1,
                                        marginTop: 8,
                                        padding: "18px"
                                    }}
                                >
                                    {loading ? "送信中..." : "無料で切り抜き動画をリクエストする →"}
                                </motion.button>
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        style={{ textAlign: "center", fontSize: "0.9rem", color: "#f87171", marginTop: -4 }}
                                    >
                                        ⚠️ {error}
                                    </motion.p>
                                )}
                                <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--muted)", opacity: 0.8 }}>
                                    送信後、スパムメールをお送りすることは一切ありません。
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
