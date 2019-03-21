// 生成器
function fn(val) {
  let i = 0;
  return {
    next() {
      let done = i === val.length;
      let value = val[i++];
      return {
        value,
        done
      };
    }
  };
}

// 迭代器
let it = fn([1, 2, 3]);
let result;
do {
  result = it.next();
  console.log(result);
} while (!result.done);
