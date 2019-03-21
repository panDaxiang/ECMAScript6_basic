// Promise的参数是一个函数async,async()有resolve和reject两个参数
function Promise(async) {
  // 回调函数中this会指向window,需要保存才会指向Promise实例对象
  let _this = this;
  // Promise三种状态,分别为pending,resolved,rejected.状态只能从pending变成resolved或者rejected
  _this.status = "pending";
  _this.val = undefined;
  // 成功回调方法集合
  _this.onResolvedCallbacks = [];
  // 失败回调方法集合
  _this.onRejectedCallbacks = [];
  // 触发resolve()方法异步状态改变成成功, 将会执行成功回调集合中的方法
  function resolve(val) {
    if (_this.status === "pending") {
      _this.status = "resolved";
      _this.val = val;
      _this.onResolvedCallbacks.forEach(item => item(val));
    }
  }  
  // 触发reject()方法异步状态改变成失败, 将会执行失败回调集合中的方法
  function reject(val) {
    if (_this.status === "pending") {
      _this.status = "rejected";
      _this.val = val;
      _this.onRejectedCallbacks.forEach(item => item(val));
    }
  }
  // 异常捕获
  try {
    async(resolve, reject);
  } catch (err) {
    reject(err);
  }
}
// then方法有两个参数, 第一个异步成功后执行的函数, 第二个是异步出异常后执行的函数
Promise.prototype.then = function(resolved, rejected) {
  let _this = this;
  if (_this.status === "pending") {
    // 将所有then要执行的方法push到回调函数集合中,在状态改为resolved执行其中的方法
    _this.onResolvedCallbacks.push(resolved);
    // 将所有then要执行的方法push到回调函数集合中,在状态改为rejected执行其中的方法
    _this.onRejectedCallbacks.push(rejected);
  }
  if (_this.status === "resolved") {
    resolved(_this.val);
  }
  if (_this.status === "rejected") {
    rejected(_this.val);
  }
};

module.exports = Promise;
