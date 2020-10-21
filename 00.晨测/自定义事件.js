class EventEmitter {
  // 实现
  constructor() {
    // 初始化存储事件的容器
    /*
      {
        eventName1: [callback1, callback2...],
        eventName2: [callback1, callback2...],
      }
    */
    this.events = {};

    this.unlistener = {};
  }

  /**
   * 绑定事件
   * @param {string} eventName 事件名
   * @param {function} callback 回调函数
   */
  on(eventName, callback) {
    if (this.events[eventName]) {
      // 之前绑定过事件（第二次）
      this.events[eventName].push(callback);
      return;
    }
    // 没有绑定过当前事件(第一次)
    this.events[eventName] = [callback];
  }

  /**
   * 绑定一次性事件: 触发一次后会自动解绑事件
   * @param {string} eventName 事件名
   * @param {function} callback 回调函数
   */
  once(eventName, callback) {
    const cb = (data) => {
      callback(data);
      // 解绑事件
      this.off(eventName, cb);
      this.unlistener[eventName] = cb;
    };
    this.on(eventName, cb);
  }

  /**
   * 解绑事件
   * @param {string} eventName 事件名
   * @param {function} callback 回调函数
   */
  off(eventName, callback) {
    const callbacks = this.events[eventName];
    if (!callbacks) return;
    console.log("off~~~");
    // 过滤掉要解绑的事件回调函数
    this.events[eventName] = callbacks.filter((cb) => {
      return cb !== callback;
    });
  }

  /**
   * 触发事件
   * @param {string} eventName 事件名
   * @param {*} data 数据
   */
  emit(eventName, data) {
    const callbacks = this.events[eventName];
    if (!callbacks) return;
    // 遍历事件对应所有回调函数，调用

    this.events[eventName].forEach((cb) => {
      // 同步调用
      // cb(data);
      // 异步调用
      setTimeout(() => {
        if (this.unlistener[eventName] === cb) {
          delete this.unlistener[eventName];
          return;
        }
        cb(data);
      }, 0);
    });
  }
}

const myEvent = new EventEmitter();

myEvent.on("aaa", function () {
  console.log(111);
});

const cb = function () {
  console.log(222);
};
myEvent.on("aaa", cb);

myEvent.once("aaa", function () {
  console.log(333);
});

// 异步回调队列 （cb1, cb2, cb3）
myEvent.emit("aaa");
// 解绑事件 cb2干掉
myEvent.off("aaa", cb);
// (cb1, cb3)
myEvent.emit("aaa");

/*
  111
  222
  333
  111
*/
