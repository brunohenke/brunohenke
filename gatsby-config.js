module.exports = {
  siteMetadata: {
    title: 'Bruno Henke',
    author: {
      name: 'Bruno Henke',
    },
    description: 'Hey, I’m Bruno Henke! I’ve been living in Porto Alegre working as a designer at BriviaDez - BR. Say hi, brunohenkekds@gmail.com',
    siteUrl: 'http://brunohenke.com/',
    social: {
      email: 'brunohenkekds@gmail.com',
      linkedin: 'https://www.linkedin.com/in/brunohenke/',
      instagram: 'https://www.instagram.com/bruno.henke/',
      savee: 'https://savee.it/bruno/'
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Archivo`,
            variants: [`400`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bruno Henke`,
        short_name: `Bruno Henke`,
        start_url: `/`,
        background_color: `#0C0C0C`,
        theme_color: `#0C0C0C`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
