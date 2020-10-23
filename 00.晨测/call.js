/**
 * call方法的实现
 * @param {*} target 要改变函数this指向的目标对象
 * @param  {...any} args 剩下所有参数（要传给函数的参数）
 */
function myCall(target, ...args) {
  // 将函数（this）的this指向为target
  // this指向调用myCall方法的那个函数
  // const _fn = this;
  // target._fn = _fn;
  target.__proto__._fn = this;
  const result = target._fn(...args);
  delete target.__proto__._fn;
  return result;
}

Function.prototype.myCall = myCall;

function fn(x, y) {
  console.log(this);
  console.log(x, y);
  return x + y;
}

const person = { name: "huahua" };

const result = fn.myCall(person, 1, 2);

console.log(result); // 3
console.log(person);
