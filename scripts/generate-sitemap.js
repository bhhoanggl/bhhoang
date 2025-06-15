const fs = require('fs');
const { globby } = require('globby');
const prettier = require('prettier');

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
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
              <loc>${`https://bhhoang.com${route}`}</loc>
              <changefreq>daily</changefreq>
              <priority>${route === '' ? '1.0' : '0.7'}</priority>
            </url>
          `;
      })
      .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
}

generateSitemap();