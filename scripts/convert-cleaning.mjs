import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "C:/Users/batou/Downloads";
const OUT = "C:/Users/batou/OneDrive/Bureau/Projet WebSite/la_cle_des_sols/la_cle_des_sols2/public/images/cleaning";

mkdirSync(OUT, { recursive: true });

const jobs = [
  { in: "IMG_6348.PNG", out: "window-cleaning-1.webp" },
  { in: "IMG_6349.PNG", out: "window-cleaning-2.webp" },
  { in: "IMG_6350.PNG", out: "window-cleaning-3.webp" },
];

for (const j of jobs) {
  const src = join(SRC, j.in);
  const dst = join(OUT, j.out);
  await sharp(src)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(dst);
  console.log(`✓ ${j.in} -> ${j.out}`);
}
