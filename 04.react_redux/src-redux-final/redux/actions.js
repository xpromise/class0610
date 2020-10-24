/* 
  用来创建action对象的工厂函数模块
    action：{type: xxx, data: xxx}
*/
import { INCREMENT, DECREMENT } from "./contants";

// 要定义多少个action函数：看要对数据有多少种操作
// function increment(num) {
//   return {
//     type: 'increment', // 要对数据操作的类型：加、减
//     data: num // 参与更新的数据
//   }
// }
export const increment = (num) => ({ type: INCREMENT, data: num });

// function decrement(num) {
//   return {
//     type: 'decrement', // 要对数据操作的类型：加、减
//     data: num // 参与更新的数据
//   }
// }
// 同步action返回值是一个action对象
export const decrement = (num) => ({ type: DECREMENT, data: num });

// 异步action返回值是一个函数，函数中执行异步代码
export const incrementAsync = (num) => {
  return (dispatch) => {
    // 执行异步代码
    setTimeout(() => {
      const action = increment(num);
      dispatch(action);
    }, 1000);
  };
};
