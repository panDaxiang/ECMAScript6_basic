{
  // 不支持变量提升
  console.log(a); // 此处报错

  let a = "a";
}

{
  // 不能重复声明同一个变量
  let a = "a";
  let a = "abc"; // 报错
}

{
  // 支持块级作用域
  if (true) {
    let a = "a";
  }

  console.log(a) // 报错

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    });
  }
}
