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
        a: "YouTube Shorts・TikTok・Instagram Reels・X（Twitter）・noteに対応しています。必要に応じて、営業資料・採用広報・オウンドメディア向けの二次利用素材としても再構成します。",
    },
    {
        q: "SNSで使う前提のサービスですか？",
        a: "いいえ。SNS向けの短尺化は代表的な使い方ですが、それに限定していません。出して終わっているPodcastを、営業・採用・広報で再利用しやすい形に再設計するのが主眼です。",
    },
    {
        q: "経営者本人が話しているPodcastだけが対象ですか？",
        a: "限定していません。経営者、事業責任者、社員出演回など、会社の思想や知見が伝わる番組であれば対象です。企業として届けたい文脈があるかを重視しています。",
    },
    {
        q: "契約期間の縛りはありますか？",
        a: "月次契約です。1ヶ月単位でご継続いただけます。まずは無料の1本から実力をご確認ください。",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-light">
            <div className="section" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: "center", marginBottom: 72 }}
                >
                    <p className="section-label">FAQ</p>
                    <h2 className="text-dark" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.01em" }}>
                        よくあるご質問
                    </h2>
                </motion.div>

                <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                            className="card-light"
                            style={{
                                overflow: "hidden",
                                border: open === i ? "1px solid var(--primary)" : "1px solid #E8E0FF",
                                transition: "border-color 0.3s"
                            }}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: "100%",
                                    background: "none",
                                    border: "none",
                                    padding: "24px 28px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 16,
                                    textAlign: "left",
                                }}
                            >
                                <span className="faq-question" style={{ fontWeight: 700, fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)" }}>
                                    Q. {faq.q}
                                </span>
                                <motion.span
                                    animate={{ rotate: open === i ? 45 : 0, color: open === i ? "var(--primary)" : "#1A1A2E" }}
                                    transition={{ duration: 0.25 }}
                                    style={{ fontSize: "1.5rem", flexShrink: 0, lineHeight: 1 }}
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
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <p className="faq-answer" style={{ padding: "0 28px 24px", fontSize: "clamp(0.9rem, 1.6vw, 0.95rem)", lineHeight: 1.8, opacity: 0.9 }}>
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
