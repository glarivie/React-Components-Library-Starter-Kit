const path = require('path')

const resolve = pathname => path.resolve(__dirname, pathname)
const nodeModule = name => require.resolve(name)

module.exports = {
  resolve: {
    modules: [resolve('../node_modules')],
    extensions: ['.web.js', '.js', '.json', '.jsx'],
    alias: {
      '@': resolve('../src'),
      components: resolve('../src/components'),
      constants: resolve('../src/constants'),
      helpers: resolve('../src/helpers'),
      assets: resolve('../src/assets'),
      styles: resolve('../src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: resolve('../src'),
        use: [
          nodeModule('style-loader'),
          {
            loader: nodeModule('css-loader'),
            options: {
              modules: true, // Enable CSS Modules
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          nodeModule('sass-loader'),
        ],
      },
      {
        test: /\.(png|svg)$/,
        loader: nodeModule('url-loader'),
      },
    ],
  },
}
