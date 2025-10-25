const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'index.tsx'),

  devServer: {
    open: true,
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.(ts|js|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },

          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.module\.s(a|c)ss$/i,
        use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(a|c)ss$/i,
        exclude: /\.module\.s(a|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
