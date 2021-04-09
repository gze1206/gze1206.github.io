import colors from 'vuetify/lib/util/colors'
import { getConfigForKeys } from './lib/config.js'

const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_PERSON_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID',
  'CTF_PROTFOLIO_TYPE_ID'
])
// console.log(ctfConfig)
// console.log(process.env)

const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

module.exports = {
  target: 'static',
  dev: process.env.NODE_ENV !== 'production',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (titleChunk) => {
      const siteTitle = 'gze1206.github.io'
      return titleChunk ? `${titleChunk} - ${siteTitle}` : siteTitle;
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'gze1206 personal blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/index.css' },
      { rel: 'stylesheet', href: '/css/fonts.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    transpile: [/^vuetify/],
    extend (config, {isDev}) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/vuetify',
  ],
  css: [
    { src: '~/node_modules/highlight.js/styles/atom-one-dark.css', lang: 'css' }
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.cyan.darken3,
          secondary: colors.teal.darken3,
          accent: colors.teal.accent4,

          error: colors.deepOrange.accent2,
          info: colors.grey.darken3,
          success: colors.green.accent3,
          warning: colors.amber.base,
        }
      }
    }
  },
  plugins: [
    '~/plugins/contentful'
  ],
  generate: {
    routes () {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
        }),
        // get the blog post content type
        cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ])
        .then(([entries, postType]) => {
          return [
          // map entries to URLs
            ...entries.items.map(entry => `/posts/${entry.fields.slug}`)
          // map all possible tags to URLs
          ]
        })
    }
  },
  webpack: {
    poll: 1000
  },
  /*
  ** Define environment variables being available
  ** in generate and browser context
  */
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_CMA_ACCESS_TOKEN: ctfConfig.CTF_CMA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_PERSON_TYPE_ID: ctfConfig.CTF_PERSON_TYPE_ID,
    CTF_PROTFOLIO_TYPE_ID: ctfConfig.CTF_PROTFOLIO_TYPE_ID
  }
}
