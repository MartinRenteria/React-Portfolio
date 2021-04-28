module.exports = {
  siteMetadata: {
    title: `Martin Renteria's Portfolio`,
    description: `Martin Renteria's React Portfolio built with Gatsby`,
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
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
}
