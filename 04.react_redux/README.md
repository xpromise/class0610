# redux 开发流程

1. 首先下载包
   yarn add redux react-redux redux-thunk redux-devtools-extension

2. 定义 redux 四个模块

- store
- actions
- reducers
- contants

首先可以确定写死的是 store 模块，其他模块要根据需求去完成

3. 使用 react-redux
   在 index.js 中使用 Provider 组件
   <Provider store={store}>
    <App />
   </Provider>

以上就是 redux 的准备工作

4. 分析需求

- 根据实际需求分析有哪些数据要存储在 redux 中（看数据有没有多个组件使用）
- 分析对数据有多少种操作行为

5. 定义 actions

- 根据对数据的操作行为来定义 action 函数
  - 如果要发送请求就定义异步 action，否则就是同步 action
  - 异步 action 往往都需要一个同步 action 来生成 action 对象

6. 定义 reducers

- 根据 actions 操作类型，定义 case 语句，来对数据进行计算，生成 newState
- reducers 需要一个初始化值，作为第一个参数 prevState 的默认值

7. 组件使用

- 通过 connect 高阶组件给组件传递 redux 的数据和更新数据的方法
- 组件通过 ths.props.xxx 使用
