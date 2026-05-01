import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outputDir = path.join(process.cwd(), "public", "images");

const scenes = [
  {
    file: "seoul-arrival-clean.png",
    title: "Seoul Arrival",
    subtitle: "Narita to Incheon",
    colors: ["#f7efe4", "#cfe7df", "#294c60"],
    accents: ["#e94f37", "#f2c94c"],
  },
  {
    file: "palace-market-clean.png",
    title: "Palace & Market",
    subtitle: "Gyeongbokgung, Myeongdong, Gwangjang",
    colors: ["#fff8ed", "#d9e7cb", "#6d2f2f"],
    accents: ["#2f7d59", "#c65a3a"],
  },
  {
    file: "culture-city-clean.png",
    title: "K-Pop & City",
    subtitle: "Hongdae, HYBE, Gangnam",
    colors: ["#f3f0ff", "#d4f1f4", "#2a2540"],
    accents: ["#7d5fff", "#ff6b6b"],
  },
  {
    file: "museum-tower-clean.png",
    title: "Tower & Museum",
    subtitle: "Lotte World, Lotte Tower, National Museum",
    colors: ["#eef7ff", "#ffe7d6", "#22324a"],
    accents: ["#1597bb", "#f2994a"],
  },
];

function skyline(accent, dark) {
  return `
    <rect x="70" y="410" width="85" height="170" rx="8" fill="${dark}" opacity=".92"/>
    <rect x="180" y="350" width="95" height="230" rx="8" fill="${dark}" opacity=".82"/>
    <rect x="302" y="280" width="72" height="300" rx="8" fill="${dark}" opacity=".9"/>
    <rect x="402" y="380" width="120" height="200" rx="8" fill="${dark}" opacity=".76"/>
    <rect x="548" y="315" width="86" height="265" rx="8" fill="${dark}" opacity=".86"/>
    <path d="M715 580V240L760 170L805 240V580Z" fill="${accent}" opacity=".82"/>
    <rect x="860" y="390" width="130" height="190" rx="8" fill="${dark}" opacity=".7"/>
  `;
}

function windows() {
  const dots = [];
  for (let x = 94; x < 990; x += 52) {
    for (let y = 390; y < 540; y += 42) {
      dots.push(`<circle cx="${x}" cy="${y}" r="4" fill="#fff8e8" opacity=".5"/>`);
    }
  }
  return dots.join("");
}

async function renderScene(scene) {
  const [light, mid, dark] = scene.colors;
  const [accentA, accentB] = scene.accents;
  const svg = `
    <svg width="1200" height="760" viewBox="0 0 1200 760" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${light}"/>
          <stop offset="55%" stop-color="${mid}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18"/>
        </filter>
      </defs>
      <rect width="1200" height="760" fill="url(#sky)"/>
      <circle cx="960" cy="150" r="78" fill="#fff7d6" opacity=".72"/>
      <circle cx="205" cy="165" r="110" fill="${accentA}" opacity=".18" filter="url(#soft)"/>
      <circle cx="1020" cy="520" r="145" fill="${accentB}" opacity=".18" filter="url(#soft)"/>
      <path d="M0 560C160 520 260 610 410 565C560 520 610 460 780 495C925 525 1018 610 1200 545V760H0Z" fill="#ffffff" opacity=".2"/>
      ${skyline(accentA, dark)}
      ${windows()}
      <path d="M78 632H1122" stroke="#fff8e8" stroke-width="10" stroke-linecap="round" opacity=".72"/>
      <path d="M205 675H995" stroke="${accentB}" stroke-width="24" stroke-linecap="round" opacity=".78"/>
    </svg>
  `;

  await sharp(Buffer.from(svg)).png().toFile(path.join(outputDir, scene.file));
}

await mkdir(outputDir, { recursive: true });
await Promise.all(scenes.map(renderScene));
await writeFile(path.join(outputDir, "README.md"), "Generated travel guide raster assets.\n");
