const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const ejs = require("ejs");
const subtemplate = require("./subtemplate");

module.exports = {
    entry: ["./app/use-adblockers.js", "./app/style.scss"],
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "bundle.js",
        publicPath: "/dist",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"]),
            },
            {
                test: /\.ejs$/,
                loader: "ejs-loader",
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css",
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title: "UseAdblockers.org - learn how to block annoying ads",
            template: "app/template.ejs",
            filename: "index.html",
            extraData: {
                analytics: subtemplate("./app/analytics.ejs"),
                subtemplate: subtemplate("./app/views/home.ejs"),
            },
        }),
        new HtmlWebpackHarddiskPlugin(),
    ],
};