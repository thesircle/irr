let babelOptions = {
    "presets": ["es2015","react", "stage-0"]
};
module.exports = {
 entry: './src/index.tsx',
 output: {
   filename: './dist/bundle.js',
     path: __dirname
 },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                }
            ]
        },{
          test: /\.json$/,
          exclude: /(node_modules)/,
          loader: "json-loader"
        },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
          },
          {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader'
          }

        ]
    },
 resolve: {
   extensions: [".tsx", ".ts", ".js", "json"]
 },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  }
};