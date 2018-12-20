// --- 数值的扩展 --- //

// --- 1. Number.isFinite(), Number.isNaN()
// Number.isFinite()用来检查一个数值是否为有限的（finite）;
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false

// --- 2. Number.parseInt() Number.parseFloat();
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

// --- 3. Number.isInteger()用来判断一个数值是否为整数。
Number.isInteger(25) // true
Number.isInteger(25.1) // false

// --- 4. Number.EPSILON的实质是一个可以接受的最小误差范围。
// 浮点数运算
function withinErrorMargin(left, right) {
    return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}

0.1 + 0.2 === 0.3 // false
withinErrorMargin(0.1 + 0.2, 0.3) // true

1.1 + 1.3 === 2.4 // false
withinErrorMargin(1.1 + 1.3, 2.4) // true

// --- 5. 安全整数和 Number.isSafeInteger()
/**
 *  JavaScript 能够准确表示的整数范围在 - 2 ^ 53 到2 ^ 53 之间（ 不含两个端点），
 *  超过这个范围， 无法精确表示这个值。
 *  ES6 引入了Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER 这两个常量， 用来表示这个范围的上下限。
 *  Number.isSafeInteger() 则是用来判断一个整数是否落在这个范围之内。
 */
Number.isSafeInteger('a') // false
Number.isSafeInteger(1.2) // false

// --- 6. Math 对象的扩展
// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
Math.trunc(4.9) // 4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
Math.trunc('123.456') // 123
Math.trunc('foo'); // NaN
// 没有部署这个方法的环境，可以用下面的代码模拟。
Math.trunc = Math.trunc || function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
};
// Math.sign方法用来判断一个数到底是正数、负数、还是零。
/** 
 * 它会返回五种值。
 参数为正数， 返回 + 1；
 参数为负数， 返回 - 1；
 参数为 0， 返回0；
 参数为 - 0， 返回 - 0;
 其他值， 返回NaN。
*/
Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN

// Math.cbrt方法用于计算一个数的立方根。
Math.cbrt(-1) // -1
Math.cbrt(0) // 0
Math.cbrt(1) // 1
Math.cbrt('8') // 2
Math.cbrt('hello')

// Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
Math.imul(2, 4) // 8
Math.imul(-1, 8) // -8
Math.imul(-2, -2) // 4

// Math.hypot方法返回所有参数的平方和的平方根。
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN

// --- 7.ES2016 新增了一个指数运算符（**）。
2 ** 2 // 4
2 ** 3 // 8