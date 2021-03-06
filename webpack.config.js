const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: `${__dirname}/static_src`,
    output: {
        path: `${__dirname}/static/build`,
        filename: "app.js",
        //filename: NODE_ENV == 'development' ? '[name].js' : '[name]-[hash].js',
        publicPath: "/static/build/",
    },

    optimization: {
        // minimize: NODE_ENV !== 'development',
        minimize: false
    },

    // plugins: [
    //     new webpack.NoEmitOnErrorsPlugin(),
    // ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: `${__dirname}/static_src`,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                loader: 'url-loader?limit=4096&name=[path][name].[ext]',
            },
        ],
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