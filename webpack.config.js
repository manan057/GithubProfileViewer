module.exports = {
  entry: [
    // js file we create that will be compiled
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'app/js/main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
