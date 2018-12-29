// -----  map  ------ //

const map = new Map([
    ['name', 'liuhaosheng'],
    ['title', 'nan']
]);
map.size // 2
map.get('name') // liuhoasheng
map.has('name'); // true
map.set('a', 555) // {['name','liuhaosheng],.,['a',555]};
map.delete('name'); // true
map.clear() // 清除 map

/**
 * 遍历方法
 * keys() 返回健名的遍历器
 * valuse() 返回健值得遍历器
 * entries() 返回 健名和剪值 
 */
const map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);

for (let key of map.keys()) {
    console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
    console.log(value);
}
// "no"
// "yes"
for (let [key, value] of map.entries()) {
    console.log(key, value);
}
// "F" "no"
// "T" "yes"

// map 结构转为数组，使用扩展运算符
const maps = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
[...maps.keys()]; // [1,2,3]
[...maps.values()]; // [one.two.three]
[...maps]; // [[1,'one'], [2, 'two'], [3, 'three']]

// 结合数组的 map方法，filter方法，可以对map进行过滤
const map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

const map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

// 1. 数组转map
new Map([
    [true, 7],
    [{
            foo: 3
        },
        ['abc']
    ]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }

// 2. map 转对象
function mapToObj(strMap) {
    let obj = Object.create(null);
    for (const [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
const myMap = new Map()
    .set('yes', true)
    .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }

// 3. 对象 转map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
objToStrMap({
    yes: true,
    no: false
})
// Map {"yes" => true, "no" => false}

// 4.  map 转json
let myMap = new Map().set('yes', true).set('no', false);
JSON.stringify(myMap);
let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
JSON.stringify([...map]);

// 5. json 转 map
new Map(JSON.parse('[[true,7],[{"foo":3},["abc"]]]'));
// Map {true => 7, Object {foo: 3} => ['abc']}