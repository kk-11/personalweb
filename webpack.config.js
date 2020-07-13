const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
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
				test: /\.module\.s(a|c)ss$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: isDevelopment
				}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: isDevelopment
					}
				}
				]
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment
						}
					}
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
				use: [
					{
						loader: 'file-loader',
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({ template: './src/index.html' }),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.sass']
	}
}
