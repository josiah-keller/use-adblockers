const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3000,
    },
};