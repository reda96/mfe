module.exports = {
    module : {
        rules: [
            {
                // initial webpack configuration
                test: /\.m?js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}