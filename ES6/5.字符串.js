{
  // 模板字符串
  let name = "xiaohong",
    age = 25;
  let str = `我叫:${name},今年${age}岁了`;
  console.log(str); // 我叫:xiaohong,今年25岁了
}

{
  // 自定义模板字符串的返回值
  let name = "xiaohong",
    age = 25;
  // ...rest作为参数只是放在最后
  function desc(string, ...rest) {
    let str = "";

    for (let i = 0, len = rest.length; i < len; i++) {
      str += string[i] + rest[i];
    }
    str += string[string.length - 1];
    return str.toLocaleUpperCase();
  }

  let str = desc`我叫:${name},今年${age}岁了`;
  console.log(str); // 我叫:XIAOHONG,今年25岁了
}

{
  let str = "hello world!";
  console.log(str.startsWith('h')); // true
  console.log(str.endsWith('!')); // true
  console.log(str.includes('hello')); // true
  console.log(str.repeat(3)); // hello world!hello world!hello world!
}
