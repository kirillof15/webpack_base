const base = require('./webpack.base.conf')
const path = require('path')
const { merge } = require('webpack-merge')

const dev = {
    mode: 'development',
    devServer: {
        port: 8081,
        watchFiles: path.resolve(__dirname, 'src'),
    },
    devtool: 'source-map',
}

module.exports = merge(base, dev)