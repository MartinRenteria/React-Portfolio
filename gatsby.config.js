module.exports = {
    siteMetadata: {
      title: `Martin Renteria's Portfolio`,
      description: `React Portfolio built with Gatsby`,
      url: '',
      author: `Martin Renteria`,
      social: [
        {
          title: 'GitHub',
          link: 'https://github.com/MartinRenteria',
        },
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/martin-renteria/',
        },
      ],
      projects: [
        {
          title: 'Google Books With React ',
          description: 'A MERN project made with the Google Books API with a search and save functionality. This project required the use of React components, MVC architecture, and utilize React lifecycle methods to query and display books based on user searches. This required the use of Node, Express and MongoDB so that users can save books to review or purchase later.',
          image: `./meets.gif`,
          github: 'https://github.com/chomieu/Meets',
          link: 'https://uw-meets.herokuapp.com',
        },

      ],
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          fonts: {
            google: [
              {
                family: "Oxanium",
                variants: ["400", "600"],
              },
              {
                family: "Poppins",
                variants: ["400"],
              },
            ],
          },
        },
      },
      `gatsby-plugin-sass`,
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-gatsby-cloud`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  }