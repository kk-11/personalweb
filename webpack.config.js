const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index.bundle.js'
	},
	stats: 'errors-only',
	module: {
		rules: [
			{
				test: /\.module\.sass$/,
				loader: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]' 
							}
						}
					},
					'sass-loader'
				]
			},
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
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({ template: './src/index.html' })
	],
	resolve: {
		extensions: ['.js', '.jsx', '.sass']
	}
}
