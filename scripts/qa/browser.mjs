// Shared browser launcher for the QA and measuring scripts.
import fs from 'node:fs';
import { chromium } from 'playwright-core';

const CANDIDATES = [process.env.CHROME_PATH, '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', '/opt/pw-browsers/chromium/chrome-linux/chrome'].filter(Boolean);

export async function launch(opts = {}) {
  const executablePath = CANDIDATES.find((p) => fs.existsSync(p));
  if (!executablePath) throw new Error('No Chromium found. Set CHROME_PATH.');
  return chromium.launch({ executablePath, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader', '--use-gl=swiftshader'], ...opts });
}

export const BASE = process.env.QA_BASE || 'http://127.0.0.1:5199';
