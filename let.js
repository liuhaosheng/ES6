// --- let 

// 1.只在let命令所在的代码块内有效
{
    let a = 10;
    var b = 11;
}
console.log(a) // a is not defined.
console, log(b) //  11

// 2. 不存在变量提升
// var命令会发生” 变量提升“ 现象， 即变量可以在声明之前使用， 值为undefined。 
// let 所声明的变量一定要在声明后使用， 否则报错。
console.log(c) // undefined
var c = 1;

console.log(d) // 报错ReferenceError
let d = 1;

// 3. 暂时性死区
var tmp = 123;
if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}
/** 
 * ES6 明确规定， 如果区块中存在let和const命令， 这个区块对这些命令声明的变量， 从一开始就形成了封闭作用域。
 * 凡是在声明之前就使用这些变量， 就会报错。
 * 使用let命令声明变量之前， 该变量都是不可用的。
 * 这在语法上， 称为“ 暂时性死区”（ temporal dead zone， 简称 TDZ）。
 * */
// “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
typeof x; // ReferenceError
let x = 1;

function bar(x = y, y = 2) {
    return [x, y];
}
bar(); // 报错

// 4. 不允许重复声明
// 报错
function func() {
    let a = 10;
    let a = 1;
}
// 不能在函数内部重新声明参数
function func(arg) {
    let arg; // 报错
}

function func(arg) {
    {
        let arg; // 不报错
    }
}

// --- 二.块级作用域 ---//
/**
 * 为什么需要块级作用域？
 * ES5 只有全局作用域和函数作用域， 没有块级作用域
 *  */
// 第一种场景，内层变量可能会覆盖外层变量。
var tmp = "sss";

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f(); // undefined
// 第二种场景，用来计数的循环变量泄露为全局变量。
var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5

// ES6 的块级作用域
// let 位 javaScript增加快级作用域
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
// ES6 允许块级作用域的任意嵌套。
{ { { { { let insane = 'Hello World' } } } } }; // 外层作用域无法读取内层作用域的变量。
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};

// 块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
// IIFE 写法
(function () {
  var tmp = "a";
}());

// 块级作用域写法
{
  let tmp = "b";
}

/**
 * 块级作用域 与 函数声明
 * 在 ES6 中 浏览器的实现可以不遵守上面的规定， 有自己的行为方式。
    - 允许在块级作用域内声明函数。
    - 函数声明类似于var， 即会提升到全局作用域或函数作用域的头部。
    - 同时， 函数声明还会提升到所在的块级作用域的头部。
 *  */  
// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());
// Uncaught TypeError: f is not a function
// -- 在 ES6 环境中实际运行的是
function f() { console.log('I am outside!'); }
(function () {
    var f = undefined;
    if (false) {
        function f() { console.log('I am inside!'); }
    }

    f();
}());

/**
 * 考虑到环境导致的行为差异太大， 应该避免在块级作用域内声明函数。 
 * 如果确实需要， 也应该写成函数表达式， 而不是函数声明语句。
 */
// 函数声明语句
{
    let a = "a";
    function f(){
        return a ;
    }
}
// 函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}