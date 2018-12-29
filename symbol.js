// -----  symbol  --- // 
/**
 *  es6 引入新的原始数据类型 symbol， 表示独一无二的值。是js的第七种数据类型。
 * http: //es6.ruanyifeng.com/#docs/symbol
 * 
 */
let a = Symbol("aa");
let b = Symbol("bb");
console.log(a) // Symbol(aa);
console.log(b); // Symbol( bb)

// Symbol 值不能和其他类型的值进行运算，会报错。
let c = Symbol("hello");
 // "world" + c // can't convert symbol to string

 // Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
 // 有参数的情况
 let s1 = Symbol('foo');
 let s2 = Symbol('foo');
 s1 === s2 // false

 // 2. 作为属性名的Symbol ，Symbol 值作为对象属性名时，不能用点运算符。
 // 在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
 let d = Symbol();
 let dd = {};
 dd[d] = "hello";

 //  3. 属性名的遍历
 /**
  * Symbol 作为属性，不会出现在 for...in for...of 循环中，也不会被
  * Object.keys()、 Object.getOwnPropertyNames()、 JSON.stringify() 返回.
  * 但是有一个 有一个Object.getOwnPropertySymbols方法， 可以获取指定对象的所有 Symbol 属性名。
  */
const obj = {};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
const objectSymbols = Object.getOwnPropertySymbols(obj);
objectSymbols
// [Symbol(a), Symbol(b)]

// 4. Symbol.for()，Symbol.keyFor()
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
s1 === s2 // true
//
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined