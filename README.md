# gitStudy
## 第一次将程序commit到github的仓库中，有4个js的程序。

## React项目的创建
1. 运行 'cnpm i react react-dom -S' 安装包
2. 在项目中导入两个相关的包
...
// 1.在react学习中需要安装两个包  react，react-dom
// 1.1 react这个包，是专门用来创建我们react组件，还有组件生命周期等这些东西的，
// 1.2 react-dom里面主要封装了和dom操作相关的包，比如要把组件渲染到页面上，就在这个包里面
import React from 'react'
import ReactDOM from 'react-dom'
...
3. 使用js的api创建虚拟dom节点
...
// 2. 在react中如果要创建dom元素了，只能使用React提供的js的api来创建，不能直接像vue那样，手写html元素
// React.createElement()方法用于创建虚拟dom对象，它接收3个及以上的参数
// 参数1：是个字符串类型的参数，表示要创建的元素类型
// 参数2：是一个属性对象，表示创建的这个元素上，有哪些属性
// <div title = 'this is a div' id = 'mydiv'>这是一个div</div>
// 参数3：从第三个参数的为止开始，后面可以放好多的虚拟dom对象，这些参数，表示当前元素的子节点
var myH1 = React.createElement('h1',null,'这是一个大大的h1');

var myDiv = React.createElement('div',{title:'this is a div',id:'mydiv'},'这是一个div',myH1);
...
4. 使用reactdom把元素渲染到页面指定的容器中
...
// ReactDOM.render('要渲染的dom元素','要渲染到页面上的哪个位置中');
// ReactDOM.render的第二个参数，不接受字符串，而是需要传递一个原生的dom对象
ReactDOM.render(myDiv,document.getElementById('app'))
...