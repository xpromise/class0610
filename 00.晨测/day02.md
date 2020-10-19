# day02

## 1、react 组件的 props 用法

- 作用：用于父子组件通信
- 用法：
  - 传递数据
    <List name={name} />
  - 声明接受（声明接受属性类型和必要性）
    static propTypes = {
      xxx: PropTypes.string.isRequired
    }  
    static defaultProps = {
      xxx: defaultValue
    }
  - 组件使用
    this.props.xxx  

## 2、react 组件的 refs 用法

- 作用：
  获取DOM元素或者组件实例对象
  项目中使用：获取组件实例对象，从而父组件获取子组件数据
              一般不会使用ref操作DOM
- 使用：
  初始化
    xxxRef = React.createRef();
  设置ref
    <input ref={this.xxxRef} />  
  使用ref
    this.xxxRef.current

## 3、vue 的 props 用法

- 传递数据
    <List :name="name" v-bind:age="age />
- 声明接受
  props: ['name', 'age']   
  props: {
    name: String
  }  
  props: {
    name: {
      type: String,
      required: true,
      default: xxx,
      validator: function () {}
    }
  }  
- 组件使用
  this.xxx

## 4、vue 的 refs 用法

设置ref
<input ref="xxxRef"/>
使用ref
this.$refs.xxxRef

## 5、谈谈闭包

1. 什么是闭包
一个包含被引用局部变量的“closure”对象，存在嵌套的内部函数中

2. 怎么产生闭包
- 函数嵌套
- 内部函数引用外部函数的局部变量
- 调用外部函数

3. 闭包的作用&缺点
- 作用：
  - 延长局部变量的存活时间
  - 让函数外部操作函数内部的数据
- 缺点：
  - 容易导致内存泄漏  --> 及时释放 - 让嵌套的内部函数成为垃圾对象

4. 闭包生命周期
- 产生：当内部函数定义执行完
- 死亡：当内部函数成为垃圾对象

5. 闭包项目中应用
- React组件中高阶函数（复用函数、为了给内部函数传参）
- Vue原理