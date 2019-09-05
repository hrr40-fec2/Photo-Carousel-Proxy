var path = require('path');

module.exports = {
  entry: {
    itemdata: path.join(__dirname,'../item-data-service/client/src/index.jsx'),
    more: path.join(__dirname, '../more_like_this_service/client/src/index.js'),
    carousel: path.join(__dirname, '../Photo-Carousel/client/src/index.jsx')
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader:'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        }
      }
    }
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
    }
  },
  output: {
    filename:'[name].bundle.js',
    path: __dirname + '/public'
  }
}