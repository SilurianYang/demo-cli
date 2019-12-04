const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')


const resolvePath = function (dir) {
    return path.resolve(process.cwd(), dir)
}

console.log(process.env.NODE_ENV)

module.exports = {
    mode: 'production',
    entry: {
        app: resolvePath('src/index.js')
    },
    output: {
        filename: '[name].bundler.js',
        path: resolvePath('dist')
    },
    devtool: 'socure-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options:{
                presets:['@babel/preset-env'],
                plugins:['@babel/transform-runtime']
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '学习一下Rxjs'
        })
    ]
}