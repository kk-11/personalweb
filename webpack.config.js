const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index.bundle.js'
	},
	stats: 'errors-only',
	devServer: {
		clientLogLevel: 'silent'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					"presets": ["@babel/preset-react", "@babel/preset-env"],
					"plugins": [
						"@babel/plugin-syntax-dynamic-import",
						"@babel/plugin-proposal-class-properties"
					]
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					}
				]
				},
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({ template: './src/index.html' }),
	],
}
