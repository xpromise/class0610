/*
  actions模块：
    1. 同步action
      执行action函数，返回值是对象
    2. 异步action
      执行action函数，返回值是函数，在函数中执行异步操作

    看对数据有几种操作，定义action函数  
*/
import { ADD_COMMENT, DEL_COMMENT } from "./contants";

export const addComment = (comment) => ({ type: ADD_COMMENT, data: comment });

export const delComment = (id) => ({ type: DEL_COMMENT, data: id });
