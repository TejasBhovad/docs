// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs",
  tagline: "Documentation for Engineering Programs",
  url: "https://tejasbhovad.github.io",
  baseUrl: "/docs/c",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TejasBhovad", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // plugins: [
  //   [
  //     '@docusaurus/plugin-google-tag-manager',
  //     {
  //       containerId: 'GTM-NV9TL4B',
  //     },
  //   ],
  // ],
  plugins: [
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "G-H9YFDYX7H4",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-H9YFDYX7H4",
        anonymizeIP: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // gtag: {
        //   trackingID: 'G-H9YFDYX7H4',
        //   anonymizeIP: true,
        // },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: this.clientModules,
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "<docs>",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/TejasBhovad/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/TejasBhovad",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/tejas_bhovad",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "https://tejasbhovad.vercel.app",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tejas Bhovad`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
// (module.exports = {
//     config
//     plugins: ["docusaurus-plugin-sass"],
//   });
