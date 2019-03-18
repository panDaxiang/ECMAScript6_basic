{
  let name = "xiaohong";
  let obj = {
    // 当key值和变量一致时可省略
    name,
    // 方法可简写成这样
    sayName() {}
  };
}

{
  let obj = {
    name: "xiaohong",
    sayName() {
      console.log(this.name);
    }
  };

  let newObj = {
    name: "xiaoli"
  };

  Object.setPrototypeOf(newObj, obj);
  newObj.sayName(); // xiaoli
}

{
  // 声明类,只能通过new生成对象,不能直接使用
  class Parent {
    // 构造函数
    constructor(name) {
      // 实例私有属性
      this.name = name;
    }

    // 静态属性 不需要通过实例调用,类直接用
    static hello() {
      return "hello";
    }

    // 实例公共方法
    sayName() {
      return this.name;
    }
  }

  // extends继承
  class Child extends Parent {
    constructor(name) {
      // super 父级的构造函数
      super(name);
    }
  }

  let p = new Child("xiaoli");
  console.log(p.name); // xiaoli
  console.log(p.sayName()); // xiaoli
}
