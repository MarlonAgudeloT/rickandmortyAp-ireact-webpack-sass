const path = require("path")

/** @type {import('webpack').Configuration} */

module.exports = {
    entry:"./index.js",
    output:{
        path: path.resolve(_dirname,"../dist"),
        filename: "bundle.[contenthash].js",
        publicPath:"",
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
            },

            {
                use:["style-loader","css-loader","sass-loader"],
                test:/\.(css|scss|sass)$/,
            },
            {
                type:"asset",
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ]
    },
    resolve:{
        extensiones:[".js","jsx","json"]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackplugin({
            template:"./public/index.html"
        })
    ]
}