// import { queryNotices } from '@/services/api';
// import { isWechat, getClearPath, getClearHref, getClearSearch, loginWechat, getQueryString } from '@/config/login';
import {} from '@/services/module/user'
import router from 'umi/router';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    * getUser({}, { call, put, select }) {
      console.log(4321)
    },
    * getMe({}, { call, put, select }) {

    },
    * clearNotices({ payload }, { put, select }) {

    },
    * changeNoticeReadState({ payload }, { put, select }) {

    },
  },

  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
  },

  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen((path, web) => {
        const token = localStorage.getItem('jwt-token');
        if (token) {
          // 使用 jwt-token 请求登录
          dispatch({
            type: 'getUser',
          });
        } else if (process.env.NODE_ENV === 'development') {
          // 本地登录
        } else {
          // 获取免登授权码
        }
      });
    },
  },
};
