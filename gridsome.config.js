// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Du',
  siteDescription: 'static blog site grnerated by Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      },
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        typeName: 'Strapi', // ! templates[`${typeName}${contentTypes[i]}`]
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      },
    },
  ],
  templates: {
    // ! `${typeName}${contentTypes[i]}`
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue',
      },
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue',
      },
    ],
  },
};
