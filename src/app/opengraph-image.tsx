import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, Full Stack Developer in Tunisia`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 1200x630 share card rendered at build time, in the site's palette.
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile.png"));
  const src = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          gap: 64,
          color: "#eef0f4",
          background:
            "radial-gradient(circle at 10% 10%, rgba(249,115,22,0.28), transparent 45%), radial-gradient(circle at 90% 80%, rgba(20,184,166,0.25), transparent 45%), #07080b",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 28, color: "#14b8a6", fontFamily: "monospace" }}>
            <span style={{ color: "#f97316", marginRight: 12 }}>&gt;</span> badii.me
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 700, lineHeight: 1, marginTop: 24, letterSpacing: -3 }}>
            <span>Boussaidi</span>
            <span style={{ color: "#fb923c" }}>Badii</span>
          </div>
          <div style={{ display: "flex", fontSize: 34, marginTop: 28, color: "#c7ccd6" }}>Full Stack Developer · Tunisia</div>
          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            {["Next.js", "React", "Node.js", "Flutter"].map((t) => (
              <span
                key={t}
                style={{ fontSize: 22, padding: "8px 20px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)", color: "#2dd4bf" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 360,
            height: 360,
            borderRadius: 999,
            padding: 6,
            background: "linear-gradient(135deg, #f97316, #14b8a6)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={348} height={348} style={{ borderRadius: 999, objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    size
  );
}
