{
  // 函数中使用展开运算符
  function test(a, b, c) {}
  let arr = [1, 2, 3];
  test(...arr);
}

{
  // 数组中使用
  let [a, b, ...c] = [1, 2, 3, 4, 5];
  console.log(a, b, c); // 1 2 [ 3, 4, 5 ]

  let arr1 = [1, 2, 3];
  let arr2 = [...arr1, 4, 5];
  console.log(arr2); // [ 1, 2, 3, 4, 5 ]
}

{
  // 类数组变量转成数组
  function test(a, b, c) {
    console.log([...arguments]);
  }

  test(1, 2, 4); // [1 2 4]
}
