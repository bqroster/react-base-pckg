var path = require('path');
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    // `alias` is also set on .babelrc, just wanted to make it twice for fun
    alias: {
     '~components': path.resolve(__dirname, './src/components')
    },
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': 'commonjs react'
  }
};