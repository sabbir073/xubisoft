// All Of Your Site Conifuration

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "We believe in quality",
    titleTemplate: `Xubisoft Ltd.`,
    description: `Xuisoft is a fast growing software company in Bangladesh, We work worldwide. Softwares, mobile apps, Websites, servers, IT trainings etc are our main focused work, We already got approved by government to run their training projects, Our main strenght is ous honesty in work.`,
    author: `@XUBISOFT`,
    twitterUsername: `@xubisoft`,
    image: 'landing.png',
    siteUrl: 'https://xubisoft.com',
    getform: "https://getform.io/f/2e0d9d07-d062-48a4-b64d-2418d0792119",
    copyright: "Xubisoft Ltd. <a href='https://xubisoft.com/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
    social: {
      facebook: "https://www.facebook.com/Xubisoft",
      twitter: "https://twitter.com/xubisoft",
      instagram: "https://www.instagram.com/xubisoft_ltd/",
      linkedin: "https://www.linkedin.com/company/xubisoft/"
    },
    contact: {
      phone: '+880 241090373 | +8801611609372',
      address: "House-45, Road-7, Sector-4, Uttara, Dhaka 1230.",
      email: 'info@xubisoft.com',
      website: "https://xubisoft.com/",
      rating: "4.9",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "head-office",
          "state": "Head Office",
          "address": "House-45(8th Floor), Road-07, Sector-04, Uttara, Dhaka-1230.",
          "email": "info@xubisoft.com",
          "phone": "+8801714-028710"
        },
        {
          "id": "branch-office",
          "state": "Branch Office",
          "address": "House-53 (Level-3), Road - 1/1, East Guptapara, Rangpur 5402",
          "email": "xubisoftltd@gmail.com",
          "phone": "+8801722-139426"
        },
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/layout/layout.js`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "Xubisoft Ltd.",
        "short_name": "Xubisoft",
        "theme_color": "#086ad8",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/favicon.png",
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://xubisoft.com',
        sitemap: 'https://xubisoft.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about-us/`,
          `/why-choose-us/`,
          `/our-history/`,
          `/faq/`,
          `/careers/`,
          `/contact-us/`,
          `/products/*`,
          `/call-center/`,
          `/training/*`,
          `/case-studies/`,
          `/it-services/`,
          `/leadership/`,
          `/service/*`
        ]
      }
    }
  ]
}
