/**
 * Fetches all images from Cloudinary and prints their URLs,
 * grouped by folder, so they can be mapped to export files.
 *
 * Usage:
 *   node scripts/sync-cloudinary.js <api_key> <api_secret>
 */

const https = require('https');

const CLOUD_NAME = 'dahzswwzk';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto`;
const [,, API_KEY, API_SECRET] = process.argv;

if (!API_KEY || !API_SECRET) {
  console.error('Usage: node scripts/sync-cloudinary.js <api_key> <api_secret>');
  process.exit(1);
}

function fetchPage(nextCursor) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams({
      max_results: '500',
      prefix: 'Debbie Site',
      ...(nextCursor ? { next_cursor: nextCursor } : {}),
    });
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload?${params}`;
    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

    https.get(url, { headers: { Authorization: `Basic ${auth}` } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Failed to parse response: ' + data)); }
      });
    }).on('error', reject);
  });
}

async function fetchAll() {
  const resources = [];
  let cursor;
  do {
    const page = await fetchPage(cursor);
    if (page.error) {
      console.error('Cloudinary error:', page.error.message);
      process.exit(1);
    }
    resources.push(...page.resources);
    cursor = page.next_cursor;
  } while (cursor);
  return resources;
}

async function main() {
  console.log('Fetching assets from Cloudinary...\n');
  const resources = await fetchAll();

  // Group by folder
  const byFolder = {};
  for (const r of resources) {
    const parts = r.public_id.split('/');
    const folder = parts.slice(0, -1).join('/');
    const filename = parts[parts.length - 1];
    if (!byFolder[folder]) byFolder[folder] = [];
    const version = `v${r.version}`;
    const ext = r.format;
    const url = `${BASE_URL}/${version}/${r.public_id}.${ext}`;
    byFolder[folder].push({ filename, url, public_id: r.public_id });
  }

  // Print grouped URLs
  for (const [folder, assets] of Object.entries(byFolder).sort()) {
    console.log(`\n📁 ${folder}`);
    for (const { filename, url } of assets) {
      console.log(`   ${filename}`);
      console.log(`   ${url}`);
    }
  }

  console.log(`\nTotal: ${resources.length} assets`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
