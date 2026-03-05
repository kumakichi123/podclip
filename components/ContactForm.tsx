"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactForm() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
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
        <section id="contact" style={{ padding: 0 }}>
            <div className="section" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: "center",
                        maxWidth: 600,
                        margin: "0 auto",
                        marginBottom: 48,
                    }}
                >
                    <p className="section-label">Free Trial</p>
                    <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 16 }}>
                        あなたの最新エピソードから、
                        <br />
                        <span className="gradient-text">無料で1本ショート動画</span>をお作りします。
                    </h2>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                        リスクゼロでご確認ください。返信は通常12時間以内。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="card"
                    style={{ maxWidth: 560, margin: "0 auto", padding: "clamp(24px, 5vw, 40px)" }}
                >
                    {submitted ? (
                        <div style={{ textAlign: "center", padding: "32px 0" }}>
                            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
                            <h3 style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: 8 }}>
                                ご依頼ありがとうございます！
                            </h3>
                            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                                担当者より12時間以内にご連絡いたします。
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {[
                                { label: "企業名", name: "company", type: "text", placeholder: "株式会社〇〇" },
                                { label: "担当者名", name: "name", type: "text", placeholder: "山田 太郎" },
                                { label: "PodcastのURL", name: "podcast_url", type: "url", placeholder: "https://open.spotify.com/..." },
                                { label: "メールアドレス", name: "email", type: "email", placeholder: "you@company.com" },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label
                                        style={{
                                            display: "block",
                                            fontSize: "0.8rem",
                                            fontWeight: 600,
                                            color: "var(--muted)",
                                            marginBottom: 8,
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        required
                                        style={{
                                            width: "100%",
                                            background: "var(--surface2)",
                                            border: "1px solid var(--border)",
                                            borderRadius: 10,
                                            padding: "12px 16px",
                                            color: "var(--text)",
                                            fontSize: "0.9rem",
                                            outline: "none",
                                            transition: "border-color 0.2s",
                                        }}
                                        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                                    />
                                </div>
                            ))}

                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={loading}
                                style={{ width: "100%", opacity: loading ? 0.7 : 1 }}
                            >
                                {loading ? "送信中..." : "無料で切り抜き動画をリクエストする →"}
                            </button>
                            {error && (
                                <p style={{ textAlign: "center", fontSize: "0.85rem", color: "#f87171", marginTop: -4 }}>
                                    ⚠️ {error}
                                </p>
                            )}
                            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--muted)" }}>
                                送信後、スパムメールをお送りすることは一切ありません。
                            </p>
                        </form>

                    )}
                </motion.div>
            </div>
        </section>
    );
}
