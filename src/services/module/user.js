import { stringify } from 'qs';
import request from '@/services/request'

export async function me() {
  return request('/users/me');
}

export async function ddLogin(params) {
  return request(`/dingding/auth/sales?code=${params.code}`);
}

export async function ddConfig() {
  return request(`https://wx.haplox.cn/api/dingding/getconfig/sales`);
}
