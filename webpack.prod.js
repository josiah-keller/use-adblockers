const merge = require("webpack-merge");
const MiniCssExtracPlugin = require("mini-css-extract-plugin");
const config = require("./webpack.config");

module.exports = merge(config, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtracPlugin.loader,
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
});