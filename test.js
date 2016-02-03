var parseUrl = require('package_practice');
var searchStr = '?name=nose&age=23';
var searchObj = parseUrl.getSearchObj(searchObj);
console.log(searchObj);