window.old_alert = window.alert;


window.alert = function () {
    console.log(arguments[0]);
};


window.old_alert("我是old_alert");
window.alert("我是alert");



// // 唯一的全局变量MYAPP:
// var MYAPP = {};
//
// // 其他变量:
// MYAPP.name = 'myapp';
// MYAPP.version = 1.0;
//
// // 其他函数:
// MYAPP.foo = function () {
//     return 'foo';
// };
// 把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。
//
// 许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等。


