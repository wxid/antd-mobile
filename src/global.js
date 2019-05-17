// 这里引用全局js
import '@babel/polyfill';
import request from './config/client';

const enterTab = () => {
  console.log('进入路由做一些事情，嘿嘿嘿')
}
const leaveTab = () => {
  console.log('要离开路由了')
}

// console.log(12312123123123);

function localLogin() {
  request({ path: '/loginwx', entity: { code: 'woshijc' } }).then(
    () => {
      // entry()
    },
    () => {
      alert('本地登陆失败')
    }
  )
}

function getAuthCode() {
  dd.ready(function() {
    let _corpId = 'dingf77248eb1d8e040b35c2f4657eb6378f' // 企业在钉钉内的唯一标识
    console.log(dd.device.notification.showPreloader);
    dd.device.notification.showPreloader({ // 显示正在登录 loading 动画
      text: "登录中..", // loading 显示的字符，空表示不显示文字
      showIcon: true, // 是否显示icon，默认true
      onSuccess: function(result) {},
      onFail: function(err) {}
    })
    dd.runtime.permission.requestAuthCode({
      corpId: _corpId,
      onSuccess: function(info) {
        console.log('authcode: ' + info.code) // 通过该免登授权码可以换取用户身份
        authCodeLogin(info.code) // 使用 authCode 请求登录
      },
      onFail: function(err) {
        console.log('requestAuthCode fail: ' + JSON.stringify(err))
      }
    })
  })
}

function authCodeLogin(authCode) {
  request('/dingding/auth/sales?code=' + authCode).then(
    () => {
      dd.device.notification.hidePreloader({ // 关闭正在登录 loading 动画
        onSuccess: function(result) {
          // entry()
        },
        onFail: function(err) {}
      })
    },
    () => {
      alert('authCode 验证失败')
    }
  )
}

function jwtTokenLogin() {
  request('/users/me').then(
    (res) => {
      // entry()
      // console.log(res);
    },
    () => {
      getAuthCode()
    }
  )
}

const token = localStorage.getItem('jwt-token')
if (token) {
  // console.log(123123123);
  jwtTokenLogin() // 使用 jwt-token 请求登录
} else if (process.env.NODE_ENV === 'development') {
  localLogin() // 本地测试环境登录
} else {
  getAuthCode() // 获取免登授权码
}
