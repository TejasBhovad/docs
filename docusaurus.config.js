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
            ],
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/TejasBhovad/docs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://tejasbhovad.vercel.app/",
            label: "Website",
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
                href: "https://tejasbhovad.vercel.app/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TejasBhovad, Made with Docusauorus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["java"],
      },
    }),
};

export default config;
