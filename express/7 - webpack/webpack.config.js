const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
    },
    module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env']],  // ← corrigido
                sourceType: 'module'
            }
        }
        },
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
        }
    ]
    },
    devtool: 'source-map'
};