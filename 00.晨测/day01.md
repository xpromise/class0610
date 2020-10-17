# day01

## 1、react 创建虚拟 DOM 对象的两种方式

- 原生 js 语法：`React.createElement(type, props, ...children)`
- jsx 语法: `<h1>xxx</h1>`

## 2、谈谈 jsx 语法

- 全称：javascript xml
- 语法：
  - 以<开头，如果标签名首字母是小写，就会当做 html 标签解析（解析不了就会报错），
    如果标签名首字母是大写，就会当做组件解析
  - 在<中，以{开头，内部会当做 js 代码解析
- 作用: 用来简化创建虚拟 DOM 对象
- 默认情况下，浏览器不能识别 jsx 语法，需要借助 babel 编译

## 3、创建组件的两种方式

- 工厂函数组件

```jsx
function MyComponent() {
  return <h1>xxx</h1>;
}
```

- ES6 类组件

```jsx
class MyComponent extends React.Component {
  render() {
    return <h1>xxx</h1>;
  }
}
```

## 4、创建组件三个注意事项

1. 组件首字符大写
2. 必有有一个根标签
3. 标签必须有结束符（单标签带结束符或双标签）

## 5、组件的 state 用法

- state 状态: 用来控制用户界面变化
- 使用
  - 初始化
    ```jsx
      constructor(props) {
        super(props);
        this.state = {
          xxx: yyy
        }
      }
      // 简写
      state = {
        xxx: yyy
      }
    ```
  - 读取
    `this.state.xxx`
  - 更新
    `this.setState({xxx: yyy})`
