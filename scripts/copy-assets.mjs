// Copies deck/assets to dist/assets so relative image paths work in the HTML build.
import { cp, mkdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'deck', 'assets');
const dest = join(root, 'dist', 'assets');

try {
  await stat(src);
} catch {
  console.log('No deck/assets directory found, skipping asset copy.');
  process.exit(0);
}

await mkdir(dest, { recursive: true });
await cp(src, dest, {
  recursive: true,
  filter: (source) => !source.endsWith('.gitkeep'),
});
console.log(`Copied assets: ${src} -> ${dest}`);
