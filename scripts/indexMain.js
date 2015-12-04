var glob = require('glob');
//glob插件找到当前目录下的文件名  
//字符‘＊’匹配人意多个字符
glob('*.js', function(err, filenames){
	console.log(filenames);
})