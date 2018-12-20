  
  // --- const --- //
  // const 声明一个只读的常量，一旦声明，就不能改变。
  // const 一旦声明，就必须初始化值。
  const PO = "110";

// const的作用域与let命令相同：只在声明所在的块级作用域内有效。
if (true) {
    const MAX = 5;
}
console.log(MAX); // MAX is not defined

// -- 对象冻结 应该使用Object.freeze({})方法。 -- //
const foo = {};
foo.name = "name";  // 可执行

const a = [];
a.push('Hello'); // 可执行
a.length = 0; // 可执行
a = ['Dave']; // 报错
