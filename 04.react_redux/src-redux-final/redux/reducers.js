/*
  用来根据previousState和action来计算生成newState
*/
import { INCREMENT, DECREMENT } from "./contants";
// reducer函数是纯函数
// redux为了获取状态的初始值，一上来会调用一次count方法
// 调用时第一个参数是 undefined {type: xxx}
function count(prevState = 0, action) {
  console.log(prevState, action);
  
  switch (action.type) {
    case INCREMENT: 
      return prevState + action.data;
    case DECREMENT:
      return prevState - action.data;
    default:
      return prevState;
  }
}

export default count;
