import React from "react";

export default function App() {
  /*
    React.useState(0) 用来给工厂函数组件使用state
    const [state, setState] = React.useState(defaultValue)
      state 就是状态数据
      setState 就是更新状态数据的方法
      defaultValue 就是状态数据的初始化值
  */

  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}
