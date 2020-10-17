/*
  入口js文件：webpack打包的第一个文件
  
  将App组件渲染到页面指定容器中 root
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
