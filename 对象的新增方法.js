// --- 对象的新增方法 --- //

// 1. Object.is() 与严格比较运算符 === 的行为基本一直。
object.is("foo","foo"); // true
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// 2.object.assign() 用于对象的合并，将源对象的所有可枚举属性，复制到目标对象。
// 如果源对象有多个同名属性，则后面的会覆盖前面的属性。
// 浅拷贝 如果对象发生变化，都会反映到目标对象上。
// 同名属性的替换
// 数组的处理
// 取值函数的处理
const fo = {a:1},
const foo = {b:2};
const fooo = {c:3};
object.assign(fo,foo,fooo); // {a:1,b:2,c:3}

// 3. Object.getOwnPropertyDescriptors() 返回对象的描述对象。
const obj = {
    name:'11'
}
Object.getOwnPropertyDescriptors(obj);

// 4. Object.keys()，Object.values()，Object.entries()
const poo = {
    name:'s',
    oo:'sss'
}
for (const key of keys(poo)) {
    console.log(key); // name  oo
}
Object.values(obj)
// s ,sss
for (const value of values(poo)) {
    console.log(value) // s ,sss
}
// Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
Object.entries(obj); // [name, oo ] [s,sss]