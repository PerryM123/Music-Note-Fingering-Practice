const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
plugins: [
    new CopyWebpackPlugin([
        // Copy directory contents to {output}/to/directory/
        { from: 'from/directory', to: 'to/directory' }
        ])
],


module.exports = {
    entry: path.resolve(__dirname, './src/js/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: "perry_bundle.js",
        publicPath: '/'
    },

    //開発サーバーの設定
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
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
      new CopyWebpackPlugin([
        // TODO: 以下のファイル設定あんまりよくない。
        //       publicフォルダーに入ってるファイルをcopyするように修正しないといけない
        {
          from: path.resolve(__dirname, './public/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
          toType: 'dir'
      },
      {
        from: path.resolve(__dirname, './public/manifest.json'),
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      },
      {
        from: path.resolve(__dirname, './public/index.html'),
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      }
    ], {
          copyUnmodified: true
      })
    ]
};
