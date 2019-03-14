{
  // 不可更改常量值
  const PI = 3.14;
  PI = 3.141; // 报错
}

{
  // 可以对对象增加属性和更改属性值
  const obj = {
    name: "小张"
  };

  obj.name = "小红";
  obj.age = 25;
}
