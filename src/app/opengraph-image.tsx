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
          gap: 28,
          backgroundColor: "#fffdf5",
          border: "24px solid #000000",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 64,
            width: 120,
            height: 120,
            border: "8px solid #000000",
            backgroundColor: "#4cc9f0",
            transform: "rotate(12deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 64,
            width: 96,
            height: 96,
            border: "8px solid #000000",
            borderRadius: "50%",
            backgroundColor: "#ffd23f",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            border: "4px solid #000000",
            backgroundColor: "#ffd23f",
            boxShadow: "6px 6px 0 0 #000000",
            color: "#000000",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              border: "2px solid #000000",
              backgroundColor: "#34d399",
            }}
          />
          {site.availability}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            fontSize: 76,
            fontWeight: 900,
            letterSpacing: -2,
            color: "#000000",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              display: "flex",
              padding: "4px 18px",
              border: "6px solid #000000",
              backgroundColor: "#4cc9f0",
              boxShadow: "8px 8px 0 0 #000000",
            }}
          >
            {site.firstName}
          </span>
          <span style={{ display: "flex" }}>{site.lastName}</span>
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#3f3a32",
          }}
        >
          {`${site.role} · ${site.location}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
