const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './src/index.html',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        public:'/',
    },
    devServer:{
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                text: /\.js$/,
                user: 'babel-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        })
    ]
}