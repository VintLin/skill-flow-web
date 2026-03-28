import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const assets = [
  {
    url: 'https://framerusercontent.com/images/8asr78D5meIMtS4mf0XWXPYhwcA.png',
    path: 'public/favicon.png'
  },
  {
    url: 'https://framerusercontent.com/images/Z5rytqRLCJduFFo8oNpaep0QM.png',
    path: 'public/apple-touch-icon.png'
  },
  {
    url: 'https://framerusercontent.com/images/AX28DiXGE9IEUSTSdRTgQ5Cz2zE.png?width=184&height=186',
    path: 'public/images/avatar.png'
  },
  {
    url: 'https://framerusercontent.com/images/AJy6YPgDrlrOtesTW1x8CdAHdyc.gif?width=480&height=360',
    path: 'public/images/synth.gif'
  }
];

async function downloadAssets() {
  await mkdir('public/images', { recursive: true });

  for (const asset of assets) {
    try {
      console.log(`Downloading ${asset.url}...`);
      const response = await fetch(asset.url);
      const buffer = await response.arrayBuffer();
      await writeFile(asset.path, Buffer.from(buffer));
      console.log(`✓ Saved to ${asset.path}`);
    } catch (error) {
      console.error(`✗ Failed to download ${asset.url}:`, error);
    }
  }
}

downloadAssets();
