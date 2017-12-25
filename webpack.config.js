const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
	entry : [
		'./index.js'
	],
	output : {
		filename : 'bundle.js',
		path : resolve(__dirname,'dist'),
		publicpath : '/'
	},
	context : resolve(__dirname.'src'),
	devtool : 'inline-source-map',
	devServer : {
		"publicPath" : '/'
	},
	module : {
		rules :[
			{
				test : /\.js$/,
				use : [
					'babel-loader'
				],
				exclude : /node_modules/
			},
			{
				test : /\.css$/,
				use : [
					'style-loader',
					'post-css'
				]
			}
		]
	},
	plugins : [
		new webpack.HotModuleReplacement(),
	]
};