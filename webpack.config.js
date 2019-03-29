module.exports = {
    entry: {
      app: './client/index.jsx',
      test: './client/test.jsx'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: '[name]-bundle.js'
    }
  };