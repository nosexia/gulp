module.exports = {
	resolve:{
		modulesDirectories:['scripts'],
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