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
        filename: '[name].js',
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
            },
            {
                test: /\.less$/,
                include:path.join(__dirname, 'src'),
                loader: "style!css!less"
            },{
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    }
}
