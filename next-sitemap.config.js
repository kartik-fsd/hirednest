// next-sitemap.config.js
const siteUrl = "https://hirednest.com";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'public',
    transform: async (config, path) => {
        const defaultConfig = {
            loc: path,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };

        const pathConfigs = {
            '/': { changefreq: 'daily', priority: 1.0 },
        };

        const matchingPath = Object.keys(pathConfigs).find(key => path.startsWith(key));
        const pathConfig = matchingPath ? pathConfigs[matchingPath] : {};

        return {
            ...defaultConfig,
            ...pathConfig,
        };
    },
    exclude: [
        '/private*',
        '/admin*',
        '/api*',
        '/404',
        '/500',
        '/login',
        '/register',
        '/sitemap.xml',
        '/server-sitemap.xml',
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private', '/admin', '/api'], // Consider if you want to keep query strings disallowed
            },
        ],
        additionalSitemaps: [
            `${siteUrl}/sitemap.xml`,
        ],
    },

};