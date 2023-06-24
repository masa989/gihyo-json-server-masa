// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// const path = require('path')
// const { dirname } = require('path')

// module.exports = {
//   "typescript": { reactDocgen: false },
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions"
//   ],
//   "framework": "@storybook/react",
//   "core": {
//     "builder": "@storybook/builder-webpack5"
//   },

//   "staticDirs": ['public'],
//   babel: async options => ({
//     ...options,
//     plugins: [
//       '@babel/plugin-proposal-class-properties',
//       '@babel/plugin-proposal-private-methods',
//       '@babel/plugin-proposal-private-property-in-object',
//     ],
//   }),

//   webpackFinal: async (config) => {
//     config.resolve.plugins = [
//       new TsconfigPathsPlugin({
//         configFiles: path.resolve(...dirname, '../tsconfig.json')
//       }),
//     ];

//     return config
//   },
//   // webpackFinal: async (config, { configType }) => {
//   //   // Fixes npm packages that depend on some modules
//   //   config.resolve = {
//   //     extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
//   //     fallback: {
//   //       fs: false,
//   //       path: false,
//   //     },
//   //   };

//   //   // Important: return the modified config
//   //   return config;
//   // },
// }




const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  staticDirs: ['public'],
  babel: async options => ({
    ...options,
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ],
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      }),
    ];

    return config
  },
}
