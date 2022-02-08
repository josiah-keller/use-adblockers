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
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname, "public"),
                publicPath: "/",
            },
            {
                directory: path.join(__dirname, "dist"),
                publicPath: "/",
            },
        ],
        port: 3000,
    },
});