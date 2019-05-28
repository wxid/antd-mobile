// import { queryNotices } from '@/services/api';
// import { isWechat, getClearPath, getClearHref, getClearSearch, loginWechat, getQueryString } from '@/config/login';
import { ddConfig } from '@/services/module/user';
import router from 'umi/router';
import fetch from 'dva/fetch';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    * getConfig(_, { call, put }) {
      const response = yield call(ddConfig);
      const _config = response;
      if (response && response.corpId) {
        dd.config({
          agentId: _config.agentId,
          corpId: _config.corpId,
          timeStamp: _config.timeStamp,
          nonceStr: _config.nonceStr,
          signature: _config.signature,
          jsApiList: ['runtime.info', 'biz.util.scan', 'biz.util.uploadImage', 'biz.util.previewImage']
        })
      } else {
        alert('ddconfig 请求失败');
      }
    }
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

      });
    },
  },
};
