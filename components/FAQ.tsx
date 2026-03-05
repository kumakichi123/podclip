"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
    {
        q: "映像データの用意は必要ですか？",
        a: "不要です。音声データ（mp3等）だけで、字幕・波形付きの高品質な動画を作成します。",
    },
    {
        q: "打ち合わせは必要ですか？",
        a: "一切不要です。すべてチャット（非同期）ベースで完結します。忙しい経営者様でも負担なくご利用いただけます。",
    },
    {
        q: "どのプラットフォームに対応していますか？",
        a: "YouTube Shorts・TikTok・Instagram Reels・X（Twitter）・noteに対応しています。",
    },
    {
        q: "契約期間の縛りはありますか？",
        a: "月次契約です。1ヶ月単位でご継続いただけます。まずは無料の1本から実力をご確認ください。",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="section-light">
            <div className="section" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 56 }}
                >
                    <p className="section-label">FAQ</p>
                    <h2 className="text-dark" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800 }}>
                        よくあるご質問
                    </h2>
                </motion.div>

                <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="card-light"
                            style={{ overflow: "hidden" }}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: "100%",
                                    background: "none",
                                    border: "none",
                                    padding: "20px 24px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 16,
                                    textAlign: "left",
                                }}
                            >
                                <span className="faq-question" style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                                    Q. {faq.q}
                                </span>
                                <motion.span
                                    animate={{ rotate: open === i ? 45 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ fontSize: "1.5rem", color: "var(--primary)", flexShrink: 0, lineHeight: 1 }}
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <p className="faq-answer" style={{ padding: "0 24px 20px", fontSize: "0.9rem", lineHeight: 1.75 }}>
                                            A. {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
