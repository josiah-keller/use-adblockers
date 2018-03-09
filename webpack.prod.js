const merge = require("webpack-merge");
const config = require("./webpack.config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(config, {
    plugins: [
        new UglifyJsPlugin(),
    ],
});