# day05

## 1、谈谈前端路由

前端路由简单理解是一种 key-value 的映射关系，key 指的是路由路径，value 指的是路由组件
用来开发单页面应用（SPA）
单页面应用（SPA）
整个应用只有一个完整页面，所以变化都是在这个页面中进行的
点击链接不会刷新页面，也不会发送请求，会改变浏览历史记录和更新局部页面

react-router-dom
BrowserRouter 提供前端路由的模式 history
HashRouter 提供前端路由的模式 hash
Link 路由跳转
NavLink 路由跳转
Route 根据当前路由路径和 path 匹配，匹配上就加载 component 对应的组件
Switch 切换
Redirect 重定向

## 2、路由三种传递参数方式

1. params
   <Route path="/home/message/:id" />
   this.props.match.params

2. query
<Link to="/home?name=jack&age=18">home</Link>
this.props.location.search

3. state
   this.props.history.push('/home', {name: 'jack'})
   this.props.location.state

## 3、路由跳转的两种方式

1. 路由链接导航
<Link to="/home">home</Link>
<NavLink to="/home">home</NavLink>

2. 编程式导航
   this.props.history.push/replace/goBack/goForward()

如果只需要跳转地址，就用路由链接导航
如果即要跳转地址，还要做一些其他的事（发送请求。。。），就用编程式导航

## 4、前端路由的原理

1. history
   内部禁止 a 标签的默认行为（所以不会刷新页面，发送请求请求网址），绑定点击事件，
   点击事件内部通过 history.pushstate()完成路由跳转
   onpopstate 事件来监听路由路径变化，来完成路由组件切换

2. hash
   内部禁止 a 标签的默认行为（所以不会刷新页面，发送请求请求网址），绑定点击事件，
   点击事件内部通过 location.hash 完成路由跳转
   onhashchange 事件来监听路由路径变化，来完成路由组件切换

## 5、hash 和 history 模式的区别

1. history

- 不带 #
- 兼容性较差
- 域名后面路径发生了变化 /home --> /home/message
- 手动刷新页面时，会将整个地址发送请求到后端服务器
  - 如果后端服务器只处理根路径，发生 404
  - 不管什么请求，都返回 index.html 给前端
- 使用跳转和监听方法不一样

2. hash

- 带 #
- 兼容性较好
- 路由变化的是#后面的值（前面是不变的）/#/home --> /#/home/message
- 手动刷新页面时，会将#前面地址发送请求到后端服务器（#后面的地址不会发送）
  - 后端服务器只会接受到 / 根路径，所以没有 404 问题
- 使用方法跳转和监听不一样