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
const childProcess = require('child_process');
const extractLess = new ExtractTextPlugin({
    allChunks:true,
    filename: "../css/[name]-less.css"  //如果带路径则在此路径下生成
});
var NODE_ENV = process.env.NODE_ENV;
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
                //use:[{loader:"css-loader"},{loader:"less-loader"},{loader: "style-loader"}]
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader",
                        options:{
                            minimize: true,
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader",
                        options:{
                            minimize: true,
                            sourceMap: true
                        }
                    }]
                })
            }

        ]
    },
    plugins: [
        extractLess,
        new CommonsChunkPlugin({
            name: "vendor",
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
            'process.env': {NODE_ENV}
        }),
        new ImageminPlugin({
            //disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: '95-100'
            }
        })

    ]

};
if(NODE_ENV=="production"){
    config.plugins.push(new compress({
        output: {
            comments: false,  // remove all comments
        },
        compress: {
            warnings: false
        }
    }))
}

var options = {
    env: {
        NODE_ENV,
    },
    debug:true
};


module.exports = config;
