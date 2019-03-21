// yield会终止fn()的执行,需要next()方法触发fn()向下执行
function* fn(x) {
  yield x[0];
  yield x[1];
  yield x[2];
}

let res;
let t = fn([1, 2, 3]);
do {
  res = t.next();
  console.log(res);
} while (!res.done);

// 执行结果
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
