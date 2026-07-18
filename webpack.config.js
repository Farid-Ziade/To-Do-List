const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode || 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      hot: true,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: 'index.html',
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'styles.[contenthash].css',
            }),
          ]
        : []),
    ],
    // The "debug thing": full source maps in dev so breakpoints/console errors
    // point at your real .js/.css files instead of the bundled output.
    // Disabled in production for smaller, faster, less exposed builds.
    devtool: isProduction ? false : 'source-map',
  };
};