const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports={
	entry:[
		'react-hot-loader/patch',
		path.resolve(__dirname,'./src/index.js')
		],
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js',
		publicPath:'/'
	},
	devtool:'inline-source-map',
	devServer:{
		publicPath:'/',
		contentBase:path.resolve(__dirname,'dist'),
		inline:true,
		hot:true
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:[
					'babel-loader'
				],
				exclude:path.resolve(__dirname,'node_modules')
			},
			{
				test:/\.less$/,
				use:[
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[
					'url-loader'
				]
			}

		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.html',
			filename:'index.html'
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.HotModuleReplacementPlugin()
	]
}