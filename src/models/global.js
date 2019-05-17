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
      return history.listen((path) => {
        // console.log(path)
        if (!isWechat()) {
          if (path.path !== '/shop/openwx') {
            router.push('/shop/openwx');
          }
        }
        const token = localStorage.getItem('jwt-token')

        if (token !== null && token !== 'undefined') {
          dispatch({
            type: 'getUser'
          });
        } else {
          const backcode = getQueryString('code');
          if (backcode !== null && backcode !== 'undefined') {
            dispatch({
              type: 'login',
              payload: {
                code: backcode,
              }
            });
          } else {
            loginWechat();
          }
        }
        // if (typeof window.ga !== 'undefined') {
        //   window.ga('send', 'pageview', path.pathname + path.search);
        // }

      });
    },
  },
};
