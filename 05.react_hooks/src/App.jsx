import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function App() {
  /*
    React.useState(0) 用来给工厂函数组件使用state
    const [state, setState] = React.useState(defaultValue)
      state 就是状态数据
      setState 就是更新状态数据的方法
      defaultValue 就是状态数据的初始化值

    React.useEffect() 用来给工厂函数组件使用生命周期函数
  */

  const [count, setCount] = useState(0);
  // const [num, setNum] = React.useState(0);

  // componentDidMount
  // useEffect(() => {}, [])

  useEffect(() => {
    /*
      相当于componentDidMount和componentDidUpdate
    */
    console.log("useEffect");

    return () => {
      // componentDidUpdate，比上面函数先触发
      // componentWillUnmount
      console.log("cb");
    };
    // 第二个参数是数组，数组中放置当前函数的依赖的值，如果依赖的值发生了变化，就会重新触发多次
    // 如果没有变化，就不会触发多次
  }, []);

  console.log(111);

  const handleClick = () => {
    setCount(count + 1);
    // ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}
