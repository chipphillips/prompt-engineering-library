// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prompt Engineering Library',
  tagline: 'A collection of 50 high-quality prompts for AI systems',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chipphillips.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/prompt-engineering-library/',

  // GitHub pages deployment config.
  organizationName: 'chipphillips',
  projectName: 'prompt-engineering-library',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Set this to '/' to make docs the landing page
          editUrl:
            'https://github.com/chipphillips/prompt-engineering-library/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Prompt Engineering Library',
        logo: {
          alt: 'Prompt Engineering Library Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'promptSidebar',
            position: 'left',
            label: 'Prompts',
          },
          {
            href: 'https://github.com/chipphillips/prompt-engineering-library',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chipphillips/prompt-engineering-library',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Constructiv AI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
