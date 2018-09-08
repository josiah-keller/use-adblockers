const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
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
        contentBase: [path.join(__dirname, "public/dist"), path.join(__dirname, "public/static")],
        watchContentBase: true,
        port: 3000,
    },
});