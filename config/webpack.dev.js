const path = require('path');
// 配置JS压缩
const uglify = require('uglifyjs-webpack-plugin');
// 打包HTML
const htmlPlugin = require('html-webpack-plugin');
// 将JS中的CSS分离出来
// 注意1：需要修改loader
// 注意2：如果webpack高于4.0
// npm install --save-dev extract-text-webpack-plugin@next
// package.json: "extract-text-webpack-plugin": "^4.0.0-beta.0",
const extractTextPlugin = require('extract-text-webpack-plugin');
// 配置路径
var website = {
    publicPath: "http://localhost:8888/"
}

module.exports = {
    mode: 'development',
    // 入口文件的配置项
    entry: {
        main: './src/js/main.js',
        main1: './src/js/main1.js'
    },
    // 出口文件的配置项
    output: {
        // 打包的路径
        path: path.resolve(__dirname, '../dist'),
        // 打包的文件名称
        filename: 'js/[name].js',
        // publicPath: 主要作用就是处理静态文件路径
        publicPath: website.publicPath
    },
    // 模块：例如解读CSS，图片如何转换，压缩
    module: {
        rules: [
            // css loader
            {
                // 匹配CSS文件的后缀名称
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
                /*use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]*/
            },
            // 图片 loader
            {
                // 匹配图片文件的后缀名称
                test: /\.(png|jpg|gif|jpeg)/,
                use: [{
                    // 指定使用的loader和loader的配置参数
                    loader: 'url-loader',
                    options: {
                        // 把小于500B的文件打成Base64的格式，写入JS
                        limit: 500,
                        // 打包后的图片放到images文件夹下
                        outputPath: 'images/'
                    }
                }]
            },
            // img标签 loader
            {
                // 处理HTML中的图片
                // 需要安装：npm install html-withimg-loader --save-dev
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
            // babel 配置
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    // 插件：用于生产模板和各项功能
    plugins: [
        // 压缩JS
        new uglify(),
        // 分离CSS(css/index.css 是分离后的路径)
        new extractTextPlugin('css/index.css'),
        // 打包HTML
        new htmlPlugin({
            // 指定生成HTML名称以及路径
            filename: 'index.html',
            // JS文件的存放地点 head, body
            inject: 'body',
            // 要打包的HTML模板路径和文件名称
            template: './src/index.html',
            // 为了开发中JS有缓存效果，所以加入hash，这样可以有效避免缓存JS
            hash: true,
            // 对HTML文件进行压缩
            minify: {
                // 去掉属性的双引号
                removeAttributeQuotes: true,
                // 去掉HTML中的空格
                collapseWhitespace: true,
                // 去掉HTML中的注释
                removeComments: true
            },
            // 指定HTML需要加载的JS
            chunks: ['main', 'main1']
        })
    ],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, '../dist'),
        // 服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 8888
    }
}























