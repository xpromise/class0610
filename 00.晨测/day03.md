# day03

## 1、react 生命周期函数

- 旧

  - 初始化
    - constructor 一般被简写
    - componentWillMount 被废弃
      - UNSAFE_componentWillMount
    - render 返回要渲染的虚拟 DOM 对象
    - componentDidMount 发送请求、设置定时器、绑定事件等一次性任务
  - 更新（父组件 render、子组件 setState、子组件 forceUpdate）
    - componentWillReceiveProps 被废弃
      - UNSAFE_componentWillReceiveProps
    - shouldComponentUpdate 性能优化：减少组件的 Diff，减少组件重新渲染
    - componentWillUpdate 被废弃
      - UNSAFE_componentWillUpdate
    - render
    - componentDidUpdate
  - 卸载
    - componentWillUnmount 收尾工作：清除定时器、解绑事件等

- 新
  - 初始化
    - constructor 一般被简写
    - static getDerivedStateFromProps
    - render 返回要渲染的虚拟 DOM 对象
    - componentDidMount 发送请求、设置定时器、绑定事件等一次性任务
  - 更新（父组件 render、子组件 setState、子组件 forceUpdate）
    - static getDerivedStateFromProps
    - shouldComponentUpdate 性能优化：减少组件的 Diff，减少组件重新渲染
    - render
    - getSnapshotBeforeUpdate
    - componentDidUpdate
  - 卸载
    - componentWillUnmount 收尾工作：清除定时器、解绑事件等

## 2、vue 生命周期函数

- 初始化

  - beforeCreate 设置全局事件总线
  - created
  - beforeMount
  - mounted 发送请求、设置定时器、绑定事件等一次性任务

- 更新

  - beforeUpdate
  - updated

- 卸载
  - beforeDestroy 收尾工作：清除定时器、解绑事件等
  - destroyed

## 3、什么是受控组件

通过 state 和 onChange 事件来收集表单数据的组件

## 4、谈谈虚拟 DOM Diff 算法

- tree diff
  - 起因：在开发中，跨层级移动节点很少，可以忽略不计
  - 分层求异：
    - 只对比相同层级节点，不会对比不同层级节点
    - 相同层级节点类型一样，就在继续子节点，如果类型不一样，当前节点和其子节点旧全部移除
  - 注意：不要跨层级移动节点，性能不好  
- component diff
  - 起因：相同类型的组件生成相似的树状结构，不同类型的组件生成不同的树状结构
  - 遇到组件节点，对比组件类型是否一致，如果一致，就继续对比其子节点，如果不一致，就整体移除
  - 可以通过shouldComponentUpdate来进行优化，减少多余的diff
- element diff
  - 起因：相同层级节点，往往需求需要CRUD，如果不处理走tree diif，在某些场景性能不好
  - 给相同层级节点添加一个唯一的key属性来区分，添加了key属性，就会优先对比key
  - key相同对比细节，key不存在就会移除
  - 注意：要保证key的唯一性和稳定性（一般key的值为id）