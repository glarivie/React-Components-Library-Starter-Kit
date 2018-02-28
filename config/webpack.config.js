const path = require('path')
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default

module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, '../src'),
  entry: [path.resolve(__dirname, '../src/index.js')],
  output: {
    pathinfo: true, // Add /* filename */ comments to generated require()s in the output.
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    extensions: ['.web.js', '.js', '.json', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
      constants: path.resolve(__dirname, '../src/constants'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, '../src'),
      exclude: /(node_modules|bower_components|dist)/,
      use: require.resolve('babel-loader'),
    }, {
      test: /\.css$/,
      include: path.resolve(__dirname, '../src'),
      exclude: /(node_modules|bower_components|dist)/,
      use: [{
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1, // User postcss-loader to handle @import()
          modules: true, // Enable CSS Modules
          localIdentName:'[local]_[hash:base64:5]',
        },
      }, {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
          sourceMap: process.env.NODE_ENV === 'production',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-import')({
              root: path.resolve(__dirname, '../src/assets'),
            }),
            require('postcss-cssnext')(),
            require('postcss-preset-env')(),
          ],
        },
      }],
    }],
  },
  plugins: [
    new PrepackWebpackPlugin({
      sourceMaps: process.env.NODE_ENV === 'production',
      timeout: 60000,
    }),
  ],
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
}
