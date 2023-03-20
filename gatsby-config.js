/* eslint-disable eol-last */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const url = process.env.URL || 'http://localhost';
module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    siteUrl: url,
    title: 'Gatsby Site',
    description: 'Gatsby Site',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Site',
        short_name: 'Gatsby Site',
        start_url: '/',
        display: 'standalone',
        icon: './src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        sitemap: `${url}/sitemap/sitemap-0.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};