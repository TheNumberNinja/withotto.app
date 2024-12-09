import {defineConfig} from 'astro/config';

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://withotto.app",
    adapter: netlify(),
    integrations: [
        sitemap({
            lastmod: new Date(),
        }),
    ]
});
