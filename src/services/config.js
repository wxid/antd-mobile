/*
 * @Author: Jan-superman
 * @Date: 2018-10-14 16:02:44
 * @Last Modified by: superman
 * @Last Modified time: 2018-12-25 01:26:10
 */

import { stringify } from 'qs';
import request from './request';

const dev = process.env.NODE_ENV === 'development';
const defaultHost = 'http://192.168.1.10:8031';
const lineHost = 'https://wx.haplox.cn';

console.log(dev);

// 请求地址是当前访问地址
const currentHost = () => {
  if (dev) {
    return defaultHost;
  } else {
    return lineHost;
  }
};
console.log(currentHost())
// console.log('环境变量', currentHost());
// 自定义前缀，对应后端微服务
const apiUrlfun = val => {
  if (val) {
    return `${currentHost()}/api/${val}`;
  }
  return `${currentHost()}/api`;
};

export { stringify, apiUrlfun, request, currentHost };
