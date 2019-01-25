const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //每次构建清理dist目录
module.exports = {
	mode:'production',
	entry: './src/index.js',
	output: {
		filename: 'plus.min.js',
		library: 'plus',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
	]
};