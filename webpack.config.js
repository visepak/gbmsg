const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        app: './index.js',
    },
    context: `${__dirname}/static_src`,
    output: {
        path: `${__dirname}/static/build`,
        filename: "app.js",
        //filename: NODE_ENV == 'development' ? '[name].js' : '[name]-[hash].js',
        publicPath: "/static/build/",
    },

    // resolve: {
    //     modules: [`${__dirname}/static.src`, 'node_modules'],
    //     extensions: ['.js', '.jsx'],
    // },
    //
    // watch: NODE_ENV == 'development',
    // watchOptions: {
    //     aggregateTimeout: 100,
    // },
};