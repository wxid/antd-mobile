// 这里引用全局js
import '@babel/polyfill';
import request from '@/services/request';

function authCodeLogin(authCode) {
  request(`/dingding/auth/sales?code=${  authCode}`).then(
    () => {
      dd.device.notification.hidePreloader({ // 关闭正在登录 loading 动画
        onSuccess(result) {},
        onFail(err) {}
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
      // console.log(res)
    },
    () => {
      getAuthCode()
    }
  )
}

function getAuthCode() {
  dd.ready(() => {
    const _corpId = 'dingf77248eb1d8e040b35c2f4657eb6378f' // 企业在钉钉内的唯一标识
    dd.device.notification.showPreloader({ // 显示正在登录 loading 动画
      text: "登录中..", // loading 显示的字符，空表示不显示文字
      showIcon: true, // 是否显示icon，默认true
      onSuccess(result) {},
      onFail(err) {}
    })
    dd.runtime.permission.requestAuthCode({
      corpId: _corpId,
      onSuccess(info) {
        console.log(`authcode: ${  info.code}`) // 通过该免登授权码可以换取用户身份
        authCodeLogin(info.code) // 使用 authCode 请求登录
      },
      onFail(err) {
        console.log(`requestAuthCode fail: ${  JSON.stringify(err)}`)
      }
    })
  })
}

const token = localStorage.getItem('jwt-token')
if (token) {
  // 使用 jwt-token 请求登录
  jwtTokenLogin()
} else if (process.env.NODE_ENV === 'development') {
  // 本地测试环境登录
  request(`/loginwx`, {
    method: 'POST',
    body: {
      code: 'woshijc'
    },
  }).then(
    (res) => {
      // console.log(res)
      localStorage.setItem('jwt-token', res.token);
    },
    () => {
      alert('本地登陆失败')
    }
  )
} else {
  // 获取免登授权码

  getAuthCode();

}

// console.log(dd.ready)



// console.log(145145)
