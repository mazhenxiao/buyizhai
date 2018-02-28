/**
 * Created by mazhenxiao on 2018/2/1.
 */
const path = require("path");
const webpack =require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const compress = require("webpack/lib/optimize/UglifyJsPlugin"); //压缩
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"); //thunk
const DedupePlugin = require("webpack/lib/optimize/DedupePlugin"); //多文件
const ImageminPlugin = require('imagemin-webpack-plugin').default;//图片压缩
const config = {
    entry:{
        main:path.join(__dirname,"/public/javascripts/mian.js"),
        vendor:["babel-polyfill",'react', 'react-dom']
    },
    output:{
        // path:"/Users/mazhenxiao/Documents/buyizhai/express/public/dist/js/",
        path:path.join(__dirname,"/public/dist/js/"),
        filename: '[name]-es5.js',
        publicPath:path.join(__dirname,"./public/dist/js/"),////此处决定了chunkFilename要加载的路径，此处为坑
        chunkFilename: 'chunk.js'//文件拆分chunk
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','stage-0','react']
                    }
                }
            },
            {
                test: /\.less$/,
                 use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }] 
               /*  use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                         options:{
                            minimize: true,
                            sourceMap: true
                        } 
                    }, {
                        loader: "less-loader"
                    }]
                }) */
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "chunk",
            minChunks:2
        }),
        /*  new compress({
         output: {
         comments: false,  // remove all comments
         },
         compress: {
         warnings: false
         }
         }), */
        new DedupePlugin({
            'process.env': {NODE_ENV: '"production"'}
        }),
        new ImageminPlugin({
            //disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '95-100'
            }
        })
    ]

};
module.exports = config;
