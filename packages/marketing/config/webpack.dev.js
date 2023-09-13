const {merge} = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const commonconfig = require('./webpack.common')
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const devConfig = {
    mode:'development',
    output:{
        publicPath: 'http://localhost:8081/',
    },
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new moduleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            }
            // shared:['react','react-dom']
           }),
       new htmlWebpackPlugin({
template:'./public/index.html'

       })
      
    ]
}
module.exports = merge(commonconfig,devConfig)