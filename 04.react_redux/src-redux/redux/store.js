/* 
  用来集中存储所有数据
    读取数据、更新数据的方法都在store中
*/

import { createStore } from 'redux';

import reducers from './reducers';
// 创建store对象
const store = createStore(reducers);

export default store;