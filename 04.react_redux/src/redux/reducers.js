import { ADD_COMMENT, DEL_COMMENT } from "./contants";

const initComments = [
  {
    id: 1,
    name: "huahua",
    content: "i like jingge",
  },
  {
    id: 2,
    name: "jingge",
    content: "i like yangge",
  },
];

// reducers函数名称就是要管理的数据名称
// prevState的默认值就是将来状态的初始化值（因为一上来reducer会被调用，并传入undefined）
function comments(prevState = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...prevState];
    case DEL_COMMENT:
      return prevState.filter((comment) => comment.id !== action.data);
    default:
      return prevState;
  }
}

export default comments;
