const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
    },
    devtool: "inline-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('sass')
                        }
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: "/",
        hot: true,
        port: 3000,
        stats: 'minimal',
        watchContentBase: true
    },
});