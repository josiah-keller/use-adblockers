const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const subtemplate = require("./subtemplate");

module.exports = {
    entry: ["./app/use-adblockers.js", "./app/style.scss"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[hash].js",
        publicPath: "/dist",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env',
                                {
                                    targets: {
                                        "ie": "11",
                                    },
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.ejs$/,
                loader: "ejs-loader",
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[hash].css",
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