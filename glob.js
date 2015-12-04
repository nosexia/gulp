var glob = require('glob');
//匹配app目录下，＊Main.js
//**,匹配0个或多个路径，
glob('scripts/app/**/*Main.js', function(err, filename){
	
})