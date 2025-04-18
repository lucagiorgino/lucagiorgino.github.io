import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Luca Giorgino',
  tagline: 'Cybersecurity - Computer engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lucagiorgino.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lucagiorgino', // Usually your GitHub org/user name.
  projectName: 'lucagiorgino.github.io', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      'classic',
      {
        docs: false, 
        // {
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   remarkPlugins: [remarkMath],
        //   rehypePlugins: [rehypeKatex],
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-6XTZ9YMEBB',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
      type: 'text/css',
      crossorigin: 'anonymous',
    }
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/luca-social-card.png',
    navbar: {
      title: 'Luca Giorgino',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          href: 'https://github.com/lucagiorgino/lucagiorgino.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   // {
      //   //   title: 'Docs',
      //   //   items: [
      //   //     {
      //   //       label: 'Tutorial',
      //   //       to: '/docs/intro',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: 'Other',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       }
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'LinkedIn',
      //         href: 'https://www.linkedin.com/in/luca-giorgino/',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/lucagiorgino',
      //       },
      //       {
      //         label: 'X/Twitter',
      //         href: 'https://twitter.com/LucaGiorginoo',
      //       },
            
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Luca Giorgino. Built with Docusaurus. Image by storyset on <a href="https://www.freepik.com">Freepik</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
