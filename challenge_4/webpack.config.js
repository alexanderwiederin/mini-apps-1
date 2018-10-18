var path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/app.jsx', // tells the client where to start looking for files
  output: {
    path: path.resolve(__dirname, 'public'), // folder where webpack will put bundle
    filename: 'bundle.js' // what webpack will name the file
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // babel needs to run on .js or .jsx files
        // include: [
        //   path.resolve(__dirname, '/client')
        // ],
        exclude: [
          path.resolve(__dirname, '/node_modules')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ]
      }
    ]
  }
}