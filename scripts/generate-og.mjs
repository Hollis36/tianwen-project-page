#!/usr/bin/env node
// Generate public/og-image.png (1200×630) from a hand-authored SVG.
// Run: npm run og
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public');
mkdirSync(outDir, { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0c0c10"/>
      <stop offset="1" stop-color="#1a1a22"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2563eb" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#2563eb" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#3b82f6"/>
      <stop offset="1" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>

  <!-- background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="980" cy="120" r="320" fill="url(#glow)"/>

  <!-- hairline grid -->
  <g stroke="#2a2a35" stroke-width="0.6" opacity="0.5">
    <line x1="0" y1="160" x2="1200" y2="160"/>
    <line x1="0" y1="480" x2="1200" y2="480"/>
  </g>

  <!-- eyebrow -->
  <text x="80" y="138" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="600" fill="#8a8a96" letter-spacing="4">
    DETECTION · VLM · FUSION
  </text>

  <!-- title -->
  <text x="80" y="280" font-family="'Source Serif 4', Georgia, serif" font-size="148" font-weight="700" fill="#f4f4f6" letter-spacing="-3">
    TianWen
  </text>
  <text x="80" y="350" font-family="'Source Serif 4', Georgia, serif" font-size="56" font-weight="500" fill="#6b7280">
    天问 · tiān wèn
  </text>

  <!-- subtitle -->
  <text x="80" y="430" font-family="Inter, system-ui, sans-serif" font-size="38" font-weight="500" fill="#c5c5cc">
    A Universal Training Framework for
  </text>
  <text x="80" y="478" font-family="Inter, system-ui, sans-serif" font-size="38" font-weight="700" fill="#f4f4f6">
    Detection-VLM Fusion
  </text>

  <!-- author + URL row -->
  <text x="80" y="560" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="500" fill="#c5c5cc">
    Peifu Zhang · Xidian University
  </text>
  <text x="80" y="592" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="18" fill="#8a8a96">
    hollis36.github.io/tianwen-project-page
  </text>

  <!-- monogram -->
  <g transform="translate(1010, 460)">
    <rect width="120" height="120" rx="22" fill="url(#accent)"/>
    <text x="60" y="92" text-anchor="middle" font-family="'Source Serif 4', Georgia, serif" font-size="76" font-weight="700" fill="#ffffff">天</text>
  </g>

  <!-- accent strip -->
  <rect x="0" y="0" width="6" height="630" fill="url(#accent)"/>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ quality: 95 }).toBuffer();
const outPath = join(outDir, 'og-image.png');
writeFileSync(outPath, png);
console.log(`✓ Wrote ${outPath} (${(png.length / 1024).toFixed(1)} KB)`);
