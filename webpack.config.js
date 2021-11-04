const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')


module.exports = {
	mode:'development',
	devtool: 'eval-cheap-module-source-map',
	devServer:{
		hot:true,
		compress:true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'index.html'),
			cache: true
		}),
		new CleanWebpackPlugin()
	],
	cache:{
		type:"filesystem"
	},
	entry:{
		index:path.resolve(__dirname,'src/index.ts')
	},
	output: {
		path: path.resolve(__dirname,'dist')
	},
	resolve: {
		extensions: [".tsx",".ts",".jsx",".js"],
		alias:{
			"@":path.resolve(__dirname,'/src/')
		}
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				loader: "esbuild-loader",
				options: {
					loader: "ts",
					target:"es2015"
				}
			}
		]
	}
}
