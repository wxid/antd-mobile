// import { queryNotices } from '@/services/api';
// import { isWechat, getClearPath, getClearHref, getClearSearch, loginWechat, getQueryString } from '@/config/login';
import { me, ddLogin } from '@/services/module/user';
import { getAuthCode } from '@/config/dd';
import router from 'umi/router';
import fetch from 'dva/fetch'

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    * getUser({ payload }, { call, put, select }) {
      console.log(4321)
      dd.ready(function() {
        let _corpId = 'dingf77248eb1d8e040b35c2f4657eb6378f' // 企业在钉钉内的唯一标识
        dd.device.notification.showPreloader({ // 显示正在登录 loading 动画
          text: "登录中..", // loading 显示的字符，空表示不显示文字
          showIcon: true, // 是否显示icon，默认true
          onSuccess: function(result) {},
          onFail: function(err) {}
        })
        dd.runtime.permission.requestAuthCode({
          corpId: _corpId,
          onSuccess: (info) => {
            console.log('authcode: ' + info.code) // 通过该免登授权码可以换取用户身份
            fetch('')
            // yield put({
            //   type: 'clearNotices',
            //   payload: {
            //     code: info.code,
            //   },
            // });
            // const response = yield call(ddLogin, { code: info.code }); // 使用 authCode 请求登录
            // if (response) {
            //   dd.device.notification.hidePreloader({ // 关闭正在登录 loading 动画
            //     onSuccess: function(result) {
            //       router.push(payload.path);
            //     },
            //     onFail: function(err) {}
            //   })
            // }
          },
          onFail: function(err) {
            console.log('requestAuthCode fail: ' + JSON.stringify(err))
          }
        })
      })
    },
    * getMe({}, { call, put, select }) {
      console.log('123456')
    },
    * getAuthCode({}, { call, put, select }) {

    },
    * clearNotices({ payload }, { put, select }) {
      console.log(111111)
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
            type: 'getMe',
          });
        } else if (process.env.NODE_ENV === 'development') {
          // 本地登录
          dispatch({
            type: 'getUser'
          });
        } else {
          // 获取免登授权码
          dispatch({
            type: 'getAuthCode'
          });
        }
      });
    },
  },
};
