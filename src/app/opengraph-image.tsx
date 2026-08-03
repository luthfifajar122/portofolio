import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name} – ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(129,140,248,0.35), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -140,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#a1a1aa",
            fontSize: 22,
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399" }} />
          {site.availability}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#fafafa",
          }}
        >
          <span style={{ color: "#818cf8" }}>{site.firstName}</span>{" "}
          {site.lastName}
        </div>

        <div style={{ fontSize: 28, color: "#a1a1aa" }}>
          {`${site.role} · ${site.location}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
