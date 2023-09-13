const {merge} = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const commonconfig = require('./webpack.common')
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const devConfig = {
    mode:'development',
    devServer:{
        port:8082,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
     
       new moduleFederationPlugin({
        name:'container',
        remotes:{
            marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        }
        // shared:['react','react-dom']
       }),
         new htmlWebpackPlugin({
template:'./public/index.html'

       })
    ]
}
module.exports = merge(commonconfig,devConfig)