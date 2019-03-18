// 函数可以设置默认参数
function Person(name = "xiaohong", age = 18) {
  this.name = name;
  this.age = age;
}
let person1 = new Person();

console.log(person1.name); // xiaohong

// 函数省略参数
function test(...arg) {
  let res = arg.reduce(function(sum, item) {
    return sum + item;
  });
  console.log(res); // 6
}

test(1, 2, 3);

// 箭头函数
let sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 2)); // 3

// 单个参数可省略小括号,直接返回可省略函数大括号
let double = num => num * 2;
console.log(double(2)); // 4

// 箭头函数没有this,内部的this就是上层代码块的this
let obj = {
  name: "xiaohong",
  say: function() {
    // 指向上层代码块obj
    setTimeout(() => {
      console.log(this.name); // xiaohong
    });

    // 指向window
    setTimeout(function() {
      console.log(this.name); // undefined
    });
  }
};
obj.say();

let fn = () => {
  console.log(this); // window
};
fn();

{
  let arr = [, ,];
  console.log(arr.fill(1)); // [1, 1]
}

{
  let arr = [1, 2, 3];
  let item = arr.find(item => {
    return item > 1;
  });
  console.log(item); // 2
}

{
  let arr = [1, 2, 3];
  let index = arr.findIndex(item => {
    return item > 1;
  });
  console.log(index); // 1
}

{
  let arr = [1, 2, 3];
  let flag = arr.some(item => {
    return item >= 3;
  });
  console.log(flag); // true
}

{
  let arr = [1, 2, 3];
  let flag = arr.every(item => {
    return item >= 3;
  });
  console.log(flag); // false
}

{
  function sum() {
    return Array.from(arguments).reduce((val, item) => {
      return val + item;
    });
  }
  console.log(sum(1, 2, 4)); // 7
}
