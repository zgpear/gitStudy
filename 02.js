

var sum = function(a,b){
	return parseInt(a)+parseInt(b);
}

//导出模块成员
exports.sum = sum;
//导出成员的另一种方式
module.exports = sum;
/*
	模块户开发
	传统非模块化有如下缺点：
	1.命名冲突
	2.文件依赖
	前段标准的模块化规范
	1. amd - requirejs
	2. cmd - seajs 淘宝
	
	服务器端的模块化规范
	1.CommonJs - Node.js
	
	模块化相关的规则：
	1. 如何定义模块：一个js文件就是一个模块，模块内的成员是相对独立的
	2. 模块成员的导出和引入	
*/