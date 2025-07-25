const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const subtemplate = require("./subtemplate");

module.exports = {
    entry: ["./app/use-adblockers.js", "./app/style.scss"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[hash].js",
        publicPath: "/"
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
                                        node: "16"
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
                options: {
                    esModule: false
                }
            }
        ],
    },
    plugins: [
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