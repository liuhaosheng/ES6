// --- 函数的扩展  ---//

// 1. 函数参数的默认值
// es6 之前 不能直接为函数的参数指定默认值，只能采用变通的方式。
function fun(a,b){
    b = b || "world";
};
fun("11");   // 11 world 
fun("hello" , "222"); // hello  222 
fun("111",""); // 1111 world 
// es6 允许为函数设置默认参数， 直接写在参数定义的后面
function pi(x,y = "aaa"){
    console.log(x,y);
}
pi("bbb") //  bbb aaa
pi("bbb","ccc"); // bbb ccc 
pi("bbb","");  // bbb 

// 2. rest 参数
// es6 引入rest 参数 获取函数的多余参数，rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
// rest 参数之后不能再有其他参数。
// 函数的length 属性，不包括 rest 参数
function add( ...items ){
    let sum = 0;
    for (const val of items) {
        sum += val;
    }
    return sum ;
}
add( 1,2,3,4); // 10

// 3. 严格模式
function funDoing(){
    'use strict'  // es 5
}
// es6 规定，只要函数参数使用了 默认值，解构赋值，或者扩展运算，
// 那么函数内部就不能设定为严格模式，否则报错。
function aa(a,b= a){  // 报错
    'use strict'; 
}
function b({a,b}){ // 保存
    'use strict';
}
const c = (...d) =>{ // 报错
    'use strict';
}

// 4. name 属性  返回该函数的函数名
function foo(){};
foo.name // foo
const a = function aaa(){};
a.name  // aaa

// 5. 箭头函数
// 6. 双冒号运算符
/**
 * 箭头函数 可以绑定this 对象，大大的减少了显示绑定this 对象的写法call， apply， bind
 * 但是，箭头函数并不使用所有的场合， 提出 ” 函数绑定“ 运算符，来取代 call apply ，bind
 * 函数绑定运算符是并排的两个冒号( :: ),双冒号左边是对象，右边是函数，该运算符会自动将左边的
 * 对象，作为上下文环境（this 对象），绑定到右边函数上。
 */
// foo :: fi;
 // 等于 fun.bind(foo);

//  foo::fu(...arr);
 /// 等于 fu.apply(fu,arr);

 // 7. 尾调用优化
 /**
  * 尾调用 是函数式编程的一个重要概念。本身非常简单，就是某一个函数最后一步调用另一个函数。
  */
 function f(x){
     return g(x); // 函数f的最后一步是调用函数g，这就叫尾调用。
 }
 // 尾递归 
 /**
  * 函数调用自身就是递归，尾调用自身，就是尾递归。
  * 函数式编程有一个概念，就做 柯里化。就是将多参数的函数转化成单参数的形式。
  */