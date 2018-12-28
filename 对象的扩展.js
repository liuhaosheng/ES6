// --- 对象的扩展 --- // 

// 1. 属性的简洁表达法
const ba = {foo};
// 等于
const ba = { foo:foo};

// 2. 属性名表达式
object.foo = true;
object["a"+"b"] = 123;
var object = {
    foo:true,
    ab: 123
}

// 3. 方法的 name 属性
// 函数的 name 属性，返回函数名。
const person = {
    sayName() {
        console.log('hello!');
    },
};
person.sayName.name // "sayName"

// 4. super 关键字
// es6 新增的关键字 super，指向对象的原型对象。
// super 关键字标示原型对象时，只能用在对象的方法中，用在其他地方都会报错。
const proto = {
    foo:"hello"
}
const obj  = {
    foo:"world",
    find(){
        return super.foo
    }
}
Object.setPrototypeOf(obj,proto);
obj.foo() // hello

// 5. 对象的扩展运算符
// 解构赋值
let { x,y,...z} = {x:1,y:2,a:3,b:4};
// x 1  y 2 z { a:3, b:4}