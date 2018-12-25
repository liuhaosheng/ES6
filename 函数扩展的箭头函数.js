// ---- 函数扩展的 箭头函数 --- //
/**
 *  箭头函数有几个使用注意点
 * 1. 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
 * 2. 不可以作为构造函数，也就是说，不能使用 New 命令，否则抛出错误。
 * 3. 不可以使用 arguments 对象，该对象在函数体内不存在。
 * 4. 不可以使用 yield 命令，以此尖头函数不能作为 generator 函数。
 */

let f = a => a;
// 等于
let ff = function (aa) {
    return aa;
};

// 如果箭头函数不需要参数或者 多个 参数，就使用一个圆括号代表参数。
let a = () => 5;
// 等于
let a = function () {
    return 5;
}
let b = (c, d) => c + d;
//等于
let b = function (c, d) {
    return c + d;
}

// 箭头函数的一个用处是简化回调函数
// 正常函数写法
[1,2,3].map(function(x){
    return x * x;
})
// 箭头函数
[1,2,3].map(x=> x* x);
// 正常函数写法
let result = valuse.sort(function(a,b){
    return a-b;
});
// 箭头函数
let result = valuse.sort((a,b) => a+b);

// rest 参数与箭头函数结合
const nums = (...num) => num;
nums(1,2,3); // 1,2,3
const a = (b,...c) => (b,c);
a(1,2,3); // [1,[2,3]]
