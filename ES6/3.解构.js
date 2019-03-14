{
  // 数组解构赋值
  let [a, b, c] = [123, "abc", { name: "xiaohong" }];
  console.log(a, b, c); // 123 'abc' { name: 'xiaohong' }
}

{
  // 对象解构赋值
  let { name, age } = {
    name: "xiaohong",
    age: 25
  };

  console.log(name, age); // xiaohong 25
}

{
  // 对解构赋值的值自定义名称
  let { name: myname, age: myage } = {
    name: "xiaohong",
    age: 25
  };

  console.log(myname, myage); // xiaohong 25
}

{
  // 默认赋值,若是给age赋值将覆盖默认值
  let { name, age = 19 } = {
    name: "xiaohong"
  };

  console.log(name, age); // xiaohong 19
}

{
  // 省略赋值
  let [, , a] = [1, 2, 3];
  console.log(a); // 3
}
