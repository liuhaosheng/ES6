// --- 字符串的扩展 --- //

// --- 1. includes(), startsWith(), endsWith()
/**
 * includes()：   返回布尔值， 表示是否找到了参数字符串。
 * startsWith()： 返回布尔值， 表示参数字符串是否在原字符串的头部。
 * endsWith()：   返回布尔值， 表示参数字符串是否在原字符串的尾部。
 * 
 */
let s = '123456!';
s.includes('2');
s.startsWith('1');
s.endsWith('6');

console.log(s.startsWith('1')); // true
console.log(s.endsWith('!')); // true
console.log(s.includes('2')); // true

// --- 2. repeat() 将原字符串重复n次
"abc".repeat(2); // abcabcabc
'na'.repeat(2.9) // "nana" 小数取整

// --- 3. matchAll方法返回一个正则表达式在当前字符串的所有匹配。