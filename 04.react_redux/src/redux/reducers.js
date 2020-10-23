/*
  用来根据previousState和action来计算生成newState
*/

function count(prevState = 0, action) {
  switch (action.type) {
    case "increment":
      return prevState + action.data;
    case "decrement":
      return prevState - action.data;
    default:
      return prevState;
  }
}

export default count;
