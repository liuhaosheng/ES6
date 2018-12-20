//--- 变量的解构赋值 ---//

// --- 1. 数组的解构赋值
// ES6 允许按照一定模式， 从数组和对象中提取值， 对变量进行赋值， 这被称为解构。
let [a,b,c] = [1,2,3];
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3

let [, , third] = ["foo", "bar", "baz"];
console.log(third); // baz

let [head, ...tail] = [1, 2, 3, 4];
console.log(head)  // 1
console.log(tail) // [2,3,4]

// 解构不成功，变量的值就等于undefined。
let [foo] = [];
console.log(foo) // undefined

// --- 2. 对象的解构赋值
let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

// --- 3. 字符串的解构赋值
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

// --- 4.数值和布尔值的解构赋值
// 值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
let {toString: s} = 123;
s === Number.prototype.toString // true

// --- 5. 函数参数的解构赋值
function add([x,y]){
    return x+y;
}
add([1,2]);  // 3

// --- 6. 用途
// 1.交换变量的值
let x = 1;
let y = 2;
[x,y] = [y,x];

// 2.从函数返回多个值
// 返回一个数组
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();

// 3.函数参数的定义
function f([x, y, z]) {};
f[1,2,3];
function f([x, y, z]) {};
f({z: 3, y: 2, x: 1});

// 4.提取JSON数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number); //42, "OK", [867, 5309]

// 5. 函数参数的默认值

// 6.遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world

// 获取键名
for (let [key] of map) {
  // ...
}
// 获取键值
for (let [,value] of map) {
  // ...
}

// 7.输入模块的指定方法
// const { SourceMapConsumer, SourceNode } = require("source-map");
