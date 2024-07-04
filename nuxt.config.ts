// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: false},
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            htmlAttrs: {
                lang: "vi"
            },
            charset: 'utf-8',
            viewport: 'width=device-width,initial-scale=1',
            title: "MonkeyD - Chuyên cập nhật các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024",
            meta: [
                {charset: 'utf-8'},
                {
                    name: 'title',
                    content: 'MonkeyD - Chuyên cập nhật các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024'
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#ffffff'
                },
                {
                    name: 'msapplication-TileImage',
                    content: 'https://monkeyd.vn/images/favicon/ms-icon-144x144.png'
                },
                {
                    name: 'theme-color',
                    content: '#ffffff'
                },
                {property: 'og:type', content: 'website'},
                {
                    name: 'description',
                    content: 'MonkeyD nơi đọc truyện và cập nhập các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024'
                },
                {name: 'image', content: 'https://monkeyd.vn/images/seo/seo-image.png'},
                {
                    property: 'og:title',
                    content: 'MonkeyD - Chuyên cập nhật các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024'
                },
                {property: 'og:image', content: 'https://monkeyd.vn/images/seo/seo-image.png'},
                {
                    property: 'og:description',
                    content: 'MonkeyD nơi đọc truyện và cập nhập các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024'
                },
                {name: 'author', content: 'MonkeyD'},
                {name: 'copyright', content: 'Copyright©2024 MonkeyD.　All Right Reserved.'},
                {property: 'og:url', content: process.env.NUXT_PUBLIC_SITE_URL},
                {property: 'og:locale', content: 'vi_VN'},
                {property: 'og:site_name', content: 'MonkeyD'},
                {property: 'rating', content: 'general'},
                {property: 'distribution', content: 'global'},
                {
                    name: 'keywords',
                    content: 'monkeyd, truyện ngắn, ngôn tình, tiểu thuyết, trọng sinh, truyện chữ, tổng tài, đoản văn'
                },
            ],
            link: [
                {rel: 'index', href: process.env.NUXT_PUBLIC_SITE_URL},
                {rel: 'icon', type: 'image/x-icon', href: 'https://monkeyd.vn/images/favicon/android-icon-192x192.png'},
                {rel: 'shortcut icon', href: 'https://monkeyd.vn/images/favicon/android-icon-192x192.png'},
                {rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL},
                // {
                //     rel: 'stylesheet',
                //     type: 'text/css',
                //     href: 'https://monkeyd.vn/assets/app.min.css?ver=2.0.3'
                // },
                {
                    rel: 'dns-prefetch',
                    href: '//fonts.googleapis.com'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//googleads.g.doubleclick.net'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//pagead2.googlesyndication.com'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//www.google-analytics.com'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//www.googletagservices.com'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//www.facebook.com'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//connect.facebook.net'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//apis.google.com'
                },
                {
                    rel: 'dns-prefetch',
                    href: '//static.xx.fbcdn.net'
                },
                {
                    href: process.env.NUXT_PUBLIC_SITE_URL
                },
            ],
            script: [
                {src: 'https://www.googletagmanager.com/gtag/js?id=__ID__', async: true},
                {
                    innerHTML: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', '__ID__');
                    `,
                    type: 'text/javascript'
                },
                {
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "@id":"#website",
                        "name": "MonkeyD",
                        "url": process.env.NUXT_PUBLIC_SITE_URL,
                        "description": "MonkeyD nơi đọc truyện và cập nhập các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024",
                        "keywords": 'monkeyd, truyện ngắn, ngôn tình, tiểu thuyết, trọng sinh, truyện chữ, tổng tài, đoản văn',
                        "alternateName": "MonkeyD - Chuyên cập nhật các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024",
                        "potentialAction":{
                            "@type": "SearchAction",
                            "target": `${process.env.NUXT_PUBLIC_SITE_URL}?s={search_term_string}`,
                            "query-input": "required name=search_term_string"
                        }
                    }),
                    type: 'application/ld+json'
                }
            ],
            __dangerouslyDisableSanitizersByTagID: {
                'gtag-inline-script': ['innerHTML'],
                'json-ld-script': ['innerHTML']
            },
        }
    },
    modules: [
        // "@nuxt/ui",
        "@nuxtjs/seo",
        '@pinia/nuxt',
    ],
    nitro: {
        // prerender: {
        //     crawlLinks: true,
        //     routes: [
        //         '/',
        //         '/sitemap.xml'
        //     ],
        //     ignore: ['/tak', '/konfiguration', '/checkout'],
        // },
        compressPublicAssets: true,
    },
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL,
        name: 'MonkeyD',
        SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
        description: "MonkeyD nơi đọc truyện và cập nhập các truyện tiểu thuyết, ngôn tình, truyện ngắn hot nhất 2024",
        defaultLocale: "vi"
    },
    sitemap: {
        sources: ['/api/sitemap'],
    },
    seo: {
        redirectToCanonicalSiteUrl: true
    },
    runtimeConfig: {
        public: {
            SITE_URL: process.env.NUXT_PUBLIC_SITE_URL
        }
    }
})
