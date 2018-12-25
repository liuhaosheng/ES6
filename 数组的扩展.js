//  --- 数组的扩展 --- //

// 1. 扩展元算符 扩展运算符（spread）是三个点（...）。将一个数组转为用逗号分隔的参数序列。
function fo(a, b, c) {};
let agg = [1, 2, 3];
fo(...agg);
// 扩展运算符的应用
// A.  复制数组
const arr1 = [1, 2];
const arr2 = arr1.concat(); // 复制数组 ES5
arr2[0] = 2;
console.log(arr1); // [1,2]
// ES6 复制数组
const arr3 = [3, 4];
const arr4 = [...arr3];

// B. 合并数组
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
[...arr1, ...arr2, ...arr3]
// C. 与结构赋值 结合
// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest // [2, 3, 4, 5]
// D. 字符串 扩展运算符可以将字符串转为真正的数组。
// [...'hello'] // [ "h", "e", "l", "l", "o" ]

// E 实现Iterator 接口对象
// 任何Iterator 接口对象，都可以用扩展运算符转化为真正的数组。
let arryList = {
    "name": "liu",
    "sex": "man",
    "aa": "bb"
}
let arr = [...arryList]; // 报错 使用Array.from方法将arrayLike转为真正的数组。

// F. Map 和 Set 结构，Cenerator函数
let map = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);
let arr = [...map.keys()]; // [1,2,3]
// 
const go = function* () {
    yield 1;
    yield 2;
    yield 3;
};
// Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
[...go()] // [1, 2, 3]

//  2. Array.from();用于将两类对象转化为真正的数组。
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
var arr1 = [].slice.call(arrayLike); // ES5   ['a', 'b', 'c']
let arr2 = Array.from(arrayLike); // ES6   ['a', 'b', 'c']

// 3. Array.of() 方法用于将一数值，转换为数组。
Array.of(3, 5, 6); // [3,5,6]
Array.of(9).length; // 1

/**
 * 4. 数组实例的copyWithin()
 * 在当亲数组内，将指定位置的成员赋值到其他位置(覆盖原有成员)，返回当前数组。
 * Array.prototype.copyWithin(target, start = 0, end = this.length)
 * target（必须），从该位置开始替换数据，如果为负数，表示倒数。
 * start (可选)，从开始位置读取数据，默认0，如果是负数，标示倒数。
 * end （可选）， 到该位置停止读取数据，默认数组长度。
 */
[1, 2, 3, 4, 5].copyWithin(0, 3); // [4,2,3,4,5];

// 4. 数组实例的 find() 和 findIndex()
[1, 4, -5, 10].find((n) => n < 0)
// -5

// 5. 数组实例的 fill() fill() 使用给定值，填充一个数组。
["a", "b", "c"].fill(7); // [7,7,7]
new Array(3).fill(7); // [7,7,7]
// fill()接受第二个，第三个参数，用于指定填充的起始位置和结束位置。
[a, b, c].fill(9, 1, 2); // [a,9,c]

// 6. 数组实例的 entries(), keys(), values()
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"

// 7. 数组实例的 includes() 表示某个数组是否包含给定的值。
[1,2,3,4].includes(2); // true 
[1,2,3,5].includes(8); // false

// 8. 数组实例 flat(), flatMap();
// 用于将嵌套的数组拉平，变成一维，数字返回新的数组。
[1,[2,[3]]].flat() // [1,2,[3]]
[1, 2, [3, [4, 5]]].flat(2) // [1, 2, 3, 4, 5]
[1, [2, [3]]].flat(Infinity) // [1,2,3]

// 9. 数组空位
// es6 明确将空位 转为 undefined 
Array.from([1, , 2]);// [1,undefined,2]