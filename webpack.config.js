const path = require('path');

module.exports = {
  entry: {
      index: './src/index.js',
      display: './src/display.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
      ],
  },
};