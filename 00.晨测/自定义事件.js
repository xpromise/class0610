class EventEmitter {
  // 实现
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

myEvent.emit("aaa");
myEvent.off("aaa", cb);
myEvent.emit("aaa");

/*
  111
  222
  333
  111
*/
