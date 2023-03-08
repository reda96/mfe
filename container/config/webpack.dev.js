const {merge} = require("webpack-merge") // to merge code in common file here
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json')
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback :{
            index:'index.html'
        }
    },
    plugins: [
          new ModuleFederationPlugin({
            name:'host',
            remotes:{
                'marketing': 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared: ['react','react-dom'],
            shared: packageJSON.dependencies
          }),
         
    ]
};
module.exports = merge(commonConfig,devConfig); // devConfig will override any duplicates in commonConfig