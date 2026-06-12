// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SQA Guidelines',
  tagline: 'A practical handbook for software quality assurance — and for turning it into a remote career.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://nrshafi.github.io',
  baseUrl: '/SQA_Guidelines/',
  trailingSlash: true,

  organizationName: 'nrshafi',
  projectName: 'SQA_Guidelines',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
  ],

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
          editUrl: 'https://github.com/nrshafi/SQA_Guidelines/tree/main/',
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
        {name: 'og:description', content: 'Practical software quality assurance guidelines — testing craft, automation, and the playbook for remote QA jobs and freelancing.'},
        {name: 'og:image', content: 'img/docusaurus-social-card.jpg'},
        {name: 'og:type', content: 'website'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'SQA Guidelines'},
        {name: 'twitter:description', content: 'Practical SQA guidelines: testing craft, automation, and the remote/freelance QA career playbook.'},
        {name: 'description', content: 'Comprehensive software quality assurance guidelines covering testing fundamentals, bug reporting, test automation, and a complete playbook for remote QA jobs and freelancing.'},
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

          {
            href: 'https://github.com/nrshafi/SQA_Guidelines',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guidelines',
            items: [
              {label: 'Getting Started', to: '/docs/intro/'},
              {label: 'The Core Craft', to: '/docs/category/the-core-craft/'},
              {label: 'Six-Month Roadmap', to: '/docs/career/six-month-roadmap/'},
              {label: 'Templates', to: '/docs/resources/templates/'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'GitHub', href: 'https://github.com/nrshafi/SQA_Guidelines'},
              {label: 'Ministry of Testing', href: 'https://www.ministryoftesting.com/'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Freelancing Playbook', to: '/docs/category/freelancing-playbook/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SQA Guidelines. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'sql', 'yaml'],
      },
    }),
};

export default config;
