module.exports = {
	//watch: true,
	resolve:{
		//moduleDirectories参数
		//相对于require的baseUrl配置
		modulesDirectories:['scripts'],
		//alias相当于path
		alias:{
			'underscore': 'lib/underscore.js'		}
	},

	entry:'app/app1/app1Main.js',

	output:{
		path:'scripts-build/app/app1/',

		publicPath: 'scripts-build/app/app1/',
		filename: '[name].js'
	}

};