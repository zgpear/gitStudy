/*

	变量的结构赋值

	数组的结构赋值

*/

//var 数组的结构赋值与顺序有关[a,b,c] = [1,2,3];
//let [a=111,b,c] = [,123,];
//console.log(a,b,c);

//对象的结构赋值
//let {foo,bar} = {foo:'hello',bar :'hi'};

//对象属性别名,如果有了别名，原来的名字就无效了
//let {foo:abc,bar} = {foo:'hello',bar :'nihao'};
//console.log(foo,bar);

//let {cos,sin,random} = Math;
//console.log(typeof cos);
//console.log(typeof sin);
//console.log(typeof random);
//---------------------------
//字符串的结构赋值
// let [a,b,c,d] = "hello";
// console.log(a,b,c,d);
// console.log("hello".length);

let {length} = "hi";
console.log(length);
