import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/content/profile";

export const runtime = "nodejs";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, text: string) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl).then((res) => res.text());
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) {
    throw new Error(`Could not resolve ${family} font source from Google Fonts CSS`);
  }
  const fontResponse = await fetch(match[1]);
  return fontResponse.arrayBuffer();
}

const SUBTITLE_TEXT = `${profile.title} yashab.com`;

export default async function OpengraphImage() {
  const [caprasimoData, figtreeData, photoBuffer] = await Promise.all([
    loadGoogleFont("Caprasimo", profile.name),
    loadGoogleFont("Figtree", SUBTITLE_TEXT),
    readFile(join(process.cwd(), "public", "images", "yashab.jpg")),
  ]);

  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 96px",
          backgroundColor: "#f5ead8",
          fontFamily: "Figtree",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div
            style={{
              fontFamily: "Caprasimo",
              fontSize: 76,
              color: "#201e1d",
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              color: "#c67139",
            }}
          >
            {profile.title}
          </div>
          <div
            style={{
              marginTop: 56,
              fontSize: 24,
              color: "#82796a",
            }}
          >
            yashab.com
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={280}
          height={280}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "6px solid #ebddc5",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Caprasimo",
          data: caprasimoData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Figtree",
          data: figtreeData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
