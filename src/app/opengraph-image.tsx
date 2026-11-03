import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 85% 10%, rgba(245,158,11,0.35), transparent 45%), #0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#fbbf24",
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#d4d4d4" }}>
            {site.role.toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 38, color: "#f59e0b" }}>
            Web apps · APIs · Dashboards
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#a3a3a3" }}>
          Available for full-time roles and freelance projects
        </div>
      </div>
    ),
    size,
  );
}
