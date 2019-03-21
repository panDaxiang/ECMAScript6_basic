// let Promise = require("./11.手写promise");

// resolve()会触发then方法第一个回调, reject()会触发then方法第二个回调或catch方法
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("成功操作");
    } else {
      reject("失败操作");
    }
  });
});

p.then(
  res => {
    console.log(res);
  },
  err => {
    console.log(err);
  }
);

Promise.all([])
