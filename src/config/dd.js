export function getAuthCode(nextStep) {
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
      onSuccess: function(info) {
        console.log('authcode: ' + info.code) // 通过该免登授权码可以换取用户身份
        authCodeLogin(info.code, nextStep) // 使用 authCode 请求登录
      },
      onFail: function(err) {
        console.log('requestAuthCode fail: ' + JSON.stringify(err))
      }
    })
  })
}

// export function authCodeLogin(authCode, entry) {
//   request('/dingding/auth/sales?code=' + authCode).then(
//     () => {
//       dd.device.notification.hidePreloader({ // 关闭正在登录 loading 动画
//         onSuccess: function(result) {
//           entry()
//         },
//         onFail: function(err) {}
//       })
//     },
//     () => {
//       alert('authCode 验证失败')
//     }
//   )
// }

// export function jwtTokenLogin(entry) {
//   request('/users/me').then(
//     () => {
//       entry()
//     },
//     () => {
//       getAuthCode(entry)
//     }
//   )
// }
