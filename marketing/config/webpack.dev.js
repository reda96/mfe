const {merge} = require("webpack-merge") // to merge code in common file here
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback :{
            index:'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './Marketing':'./src/bootstrap'
            },
            // shared: ['react','react-dom']
            shared: packageJSON.dependencies
        }),
           new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
module.exports = merge(commonConfig,devConfig); // devConfig will override any duplicates in commonConfig