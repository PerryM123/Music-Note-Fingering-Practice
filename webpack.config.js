const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// env setup
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});


module.exports = {
    entry: path.resolve(__dirname, './src/js/index.tsx'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "perry_bundle.js",
        publicPath: '/'
    },

    //開発サーバーの設定
    devServer: {
      contentBase: path.resolve(__dirname, './public'),
      inline: true,
      open: true
    },


    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    target: 'web',
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
};
