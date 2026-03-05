export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                padding: "32px 24px",
                textAlign: "center",
                color: "var(--muted)",
                fontSize: "0.8rem",
            }}
        >
            <p style={{ marginBottom: 6, fontWeight: 600, color: "var(--text)" }}>ポッドクリップ</p>
            <p>© {new Date().getFullYear()} PodcastAmplify. All rights reserved.</p>
        </footer>
    );
}
