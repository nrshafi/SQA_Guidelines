// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SQA Guidelines',
  tagline: 'Software Quality Assurance Guidelines & Best Practices',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-org.github.io',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'your-org',
  projectName: 'SQA_Guidelines',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-org/SQA_Guidelines/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/your-org/SQA_Guidelines/tree/main/website/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {name: 'og:title', content: 'SQA Guidelines'},
        {name: 'og:description', content: 'Software Quality Assurance Guidelines & Best Practices'},
        {name: 'og:image', content: 'img/docusaurus-social-card.jpg'},
        {name: 'og:type', content: 'website'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'SQA Guidelines'},
        {name: 'twitter:description', content: 'Software Quality Assurance Guidelines & Best Practices'},
        {name: 'description', content: 'Comprehensive software quality assurance guidelines covering testing, code review, CI/CD, and best practices.'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: 'light',
      },
      navbar: {
        title: 'SQA Guidelines',
        logo: {
          alt: 'SQA Guidelines Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guidelines',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/your-org/SQA_Guidelines',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Getting Started', to: '/docs/intro'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'GitHub', href: 'https://github.com/your-org/SQA_Guidelines'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SQA Guidelines. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
