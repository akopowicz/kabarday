
import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
    
const sitemap = new SitemapStream({ hostname: 'https://www.kabarday.com' });

    const urls = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/o-nas', changefreq: 'monthly', priority: 0.8 },
      { url: '/kontakt', changefreq: 'monthly', priority: 0.8 },
      { url: '/products', changefreq: 'monthly', priority: 0.8 },
      { url: '/products/kardigany', changefreq: 'monthly', priority: 0.8 },
      { url: '/products/sukienki', changefreq: 'monthly', priority: 0.8 },
      { url: '/products/szaliki', changefreq: 'monthly', priority: 0.8 },
      { url: '/products/swetry', changefreq: 'monthly', priority: 0.8 },
      // Add additional pages here
    ];
const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream)

urls.forEach(urlObj=>{
    sitemap.write(urlObj)
})
sitemap.end();
