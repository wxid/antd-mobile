// 这里引用全局js
import '@babel/polyfill';
import fetch from 'dva/fetch';


fetch('https://wx.haplox.cn/api/dingding/getconfig/workorder-reply').then(
  (res) => {
    return res.json();
  }
).then(
  (res) => {
    console.log(res);
    let _config = res
    dd.config({
      agentId: _config.agentId,
      corpId: _config.corpId,
      timeStamp: _config.timeStamp,
      nonceStr: _config.nonceStr,
      signature: _config.signature,
      jsApiList: ['runtime.info',
        'biz.contact.choose',
        'device.notification.confirm',
        'device.notification.alert',
        'device.notification.prompt',
        'biz.ding.post',
        'biz.util.openLink',
        'biz.util.scan',
        'biz.util.uploadImage',
        'biz.util.previewImage']
    })
  }
)
