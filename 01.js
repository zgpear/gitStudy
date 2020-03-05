/*
声明变量let和const
*/
//var flag = 123;
//测试commit
//console.log(flag);

//let flag = 123
var flag = 123;
var flag = 456;
console.log(flag)
if(true){
	let flag = 123;
	console.log(flag);

}
const n = 1;
console.log(n);
console.log('hello kitty')

function sum(n){
	var sum = 0;
	for (var i = 0;i<=n;i++){
		sum += i;
	}
	return sum;
}
var ret = sum(100);
console.log(ret);
console.log(process.arch)
