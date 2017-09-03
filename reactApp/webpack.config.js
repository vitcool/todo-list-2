var config = {
    entry: './main.js',
     
    output: {
       path:'/',
       filename: 'index.js',
    },
     
    devServer: {
       inline: true,
       port: 8080
    },
     
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
                 
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ]
 }
 
 module.exports = config;