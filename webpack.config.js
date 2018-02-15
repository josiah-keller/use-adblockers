const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const ejs = require("ejs");
const homeTemplate = require("./app/views/home.ejs");

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
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.css",
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title: "Use Adblockers to stay safe online and avoid scams",
            template: "app/template.ejs",
            filename: "index.html",
            extraData: {
                subtemplate: homeTemplate,
            },
        }),
        new HtmlWebpackHarddiskPlugin(),
    ],
    devServer: {
        contentBase: [path.join(__dirname, "public/dist"), path.join(__dirname, "public/static")],
        watchContentBase: true,
        port: 3000,
    },
};