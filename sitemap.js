var sm = require('sitemap')
  , fs = require('fs');

var sitemap = sm.createSitemap({
  hostname: 'http://www.geometre-peters.com',
  cacheTime: 600000,  //600 sec (10 min) cache purge period
  urls: [
    { url: '/' , changefreq: 'weekly', priority: 0.8, lastmodrealtime: true, lastmodfile: 'app/materials/dashboard/dashboard.component.html' }
  ]
});

fs.writeFileSync("src/assets/sitemap.xml", sitemap.toString());
