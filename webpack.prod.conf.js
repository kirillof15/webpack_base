const base = require('./webpack.base.conf')
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const prod = {
    mode: 'production',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
              new TerserPlugin()
        ],
        minimize: true,
    },
    
}

module.exports = merge(base, prod)