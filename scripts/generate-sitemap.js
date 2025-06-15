const { writeFileSync } = require('fs');
const globby = require('globby');

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('.tsx', '')
          .replace('/index', '');
        const route = path === '/index' ? '' : path;
        return `
            <url>
              <loc>${`https://bhhoang.netlify.app${route}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
      })
      .join('')}
    </urlset>
  `;

  writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();