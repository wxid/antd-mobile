// import { queryNotices } from '@/services/api';
import { isWechat, getClearPath, getClearHref, getClearSearch, loginWechat, getQueryString } from '@/config/login';
import router from 'umi/router';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    * getUser(_, { call, put, select }) {
      console.log(4321)
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
      console.log(123123123123)
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen((path, web) => {
        console.log(path, web);
      });
    },
  },
};
