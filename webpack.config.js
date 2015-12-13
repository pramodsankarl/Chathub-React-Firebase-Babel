var path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-maps' ,
    entry:{
        main:[
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output:{
        filename: './public/[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            }
        ]
    }
}
