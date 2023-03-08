const {merge} = require("webpack-merge") // to merge code in common file here
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig = {
    mode:'production',
    output: {
       filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'host',
            remotes: {
                marketing:`marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]

};
module.exports = merge(commonConfig, prodConfig);