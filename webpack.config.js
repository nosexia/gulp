module.exports = {
	resolve:{
		modulesDirectories:['scripts'],
		//webpack能够给backbone找到jquery和underscore依赖
		alias:{
			'underscore': 'lib/underscore.js',
			'jquery': 'lib/jquery',
			'backbone': 'lib/backbone'
		}
	},

	entry:'app/app1/app1Main.js',

	output:{
		path:'scripts-build/app/app1/',

		publicPath: 'scripts-build/app/app1/',
		filename: '[name].js'
	}

};