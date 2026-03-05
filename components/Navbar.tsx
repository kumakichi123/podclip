"use client";

export default function Navbar() {
    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: "rgba(10,10,10,0.85)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid var(--border)",
                padding: "0 clamp(16px, 4vw, 24px)",
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 56,
                }}
            >
                <span
                    style={{
                        fontWeight: 800,
                        fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                        background: "linear-gradient(135deg, #A855F7, #C084FC)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    ポッドクリップ
                </span>
                <a
                    href="#contact"
                    className="btn-primary"
                    style={{ padding: "9px clamp(14px, 3vw, 22px)", fontSize: "clamp(0.78rem, 1.5vw, 0.875rem)" }}
                >
                    無料動画をリクエスト
                </a>
            </div>
        </nav>
    );
}
