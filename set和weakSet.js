// ---  set 和 weakSet 数据
// ---- set
/**
 * es6 提供新的数据结构 Set。类似数组，但是成员都是唯一的。
 * Set 本身就是一个构造函数。
 */
// 数组去重
Array.from(new Set(array));
const a = new Set([1, 1, 2, 2, 3, 4, 5]);
// a = [1,2,3,4,5];
// a.size(5)

/**
 * set 实例的操作方法
 *  --- add( value ) 添加某个值,返回set结构本身
 *  --- delete(value) 删除某个值， 返回 boolean
 *  --- has( value) 返回 boolean，表示该值是否为 set的成员。
 *  --- clear()  清除 set，没有返回值
 */
let tt = new Set()
tt.add(1) //tt[1],
tt.add(2).add(3); // tt[1,2,3];
tt.has(1); // true
tt.has(8); // false 

/**
 *  set 结构的实例有四个遍历方法，可以用于遍历成员。
 *  ---  keys()： 返回键名的遍历器
 *  ---  values()： 返回键值的遍历器
 *  --- entries()： 返回键值对的遍历器
 *  ---  forEach()： 使用回调函数遍历每个成员
 */
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// --- 获取 两个数组的 交集，并集，差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a,...b]);  // set(1,2,3,4);
//  交集
let intersect = new Set([...a].filter(x => b.has(x))); // set(2,3);
// 差集
let difference = new Set([...a].filter(x => !b.has(x))); // {1}

// -----  weakSet  ----- // 
// weakSet 的成员只能是对象。 因此 ES6 规定 WeakSet 不可遍历。
const a = [[2,3],[4,5]];
const ws = new WeakSet(a); // {[2,3],[4,5]}