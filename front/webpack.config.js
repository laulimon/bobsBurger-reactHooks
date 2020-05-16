module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // target: 'async-node',
    output: {
        filename: "bundle.js",
        path: __dirname + '/../back/public'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    context: __dirname,
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "@babel/preset-react",
                        "@babel/env"
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {

                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.(mov|mp4)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    devtool: 'source-map'
}