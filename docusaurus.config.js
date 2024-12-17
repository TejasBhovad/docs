// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs",
  tagline: "Code Docs by Tejas Bhovad",
  url: "https://tejasbhovad.github.io",
  baseUrl: "/docs",

  organizationName: "TejasBhovad", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  clientModules: [require.resolve("./src/analytics.js")],
  favicon: "img/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          path: "docs/one",
          routeBasePath: "one",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/TejasBhovad/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          // customCss: "./src/css/custom.css",
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_FHWJnR3TU7aAP9GLzbFo6l37YXY4P95mkZFyspEq9LP",
        enableInDevelopment: true, // optional
        // other options are passed to posthog-js init as is
      },
    ],
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexPages: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "two",
        path: "docs/two",
        routeBasePath: "two",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "three",
        path: "docs/three",
        routeBasePath: "three",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "four",
        path: "docs/four",
        routeBasePath: "four",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "five",
        path: "docs/five",
        routeBasePath: "five",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "training",
        path: "docs/training",
        routeBasePath: "training",
        sidebarPath: "./sidebars.js",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "description",
          content: "Code Docs by Tejas Bhovad",
        },
        {
          name: "keywords",
          content: "docs, code, tejas, bhovad",
        },
      ],
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "<docs>",
        // logo: {
        //   alt: "Code Docs Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            label: "Semesters",
            position: "left",
            items: [
              { to: "/docs/one", label: "Semester 1" },
              { to: "/docs/two", label: "Semester 2" },
              { to: "/docs/three", label: "Semester 3" },
              { to: "/docs/four", label: "Semester 4" },
              { to: "/docs/five", label: "Semester 5" },
              { to: "/docs/training", label: "Training" },
            ],
          },
          { to: "/blog", label: "Blog", position: "left" },

          {
            href: "https://tejasbhovad.com",
            label: "Website",
            position: "right",
          },
          {
            href: "https://dypatil.vercel.app",
            label: "Notes App",
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
                label: "Semester One",
                to: "/docs/one",
              },
              {
                label: "Semester Two",
                to: "/docs/two",
              },
              {
                label: "Semester Three",
                to: "/docs/three",
              },
              {
                label: "Semester Four",
                to: "/docs/four",
              },
              {
                label: "Semester Five",
                to: "/docs/five",
              },
              {
                label: "Training",
                to: "/docs/training",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/TejasBhovad/docs",
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
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Website",
                href: "https://tejasbhovad.com",
              },
              {
                label: "Notes App",
                href: "https://dypatil.vercel.app",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TejasBhovad, Made with Docusauorus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oceanicNext,
        additionalLanguages: ["java", "python", "bash"],
      },
    }),
};

export default config;
