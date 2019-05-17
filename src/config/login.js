import config from './index'

export function isWechat() {
  if (config.debug) {
    return true;
  }
  var ua = navigator.userAgent.toLowerCase();
  return /micromessenger/i.test(ua) || /windows phone/i.test(ua);
}

export function getClearPath() {
  var search = getClearSearch(window.location.search.substr(1) + '&')
  return window.location.pathname + search
}

export function getClearHref() {
  // remove the search of url
  var search = getClearSearch(window.location.search.substr(1) + '&')
  var urlParse = window.location.href.split('?')
  var url = urlParse[0] + search + window.location.hash

  return url
}

export function getClearSearch(search) {
  if (search.length > 1) {
    var reg = new RegExp("(^|&)(code=([^&]*)&)", "ig")
    var reg2 = new RegExp("(^|&)(state=([^&]*)&)", "ig")
    search = search.replace(reg, '$1')
    search = search.replace(reg2, '$1')
    search = search.length > 1 ? '?' + search : ''
    return search
  }
  return '';
}

export function loginWechat() {
  var fromurl = getClearHref()
  var state = 'haplox' + Math.round(Math.random() * 10000)
  var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3d65030a8bc5c7c9&redirect_uri=' + encodeURIComponent(fromurl) + '&response_type=code&scope=snsapi_base&state=' + state + '#wechat_redirect'
  location.href = url
}

export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  console.log(r)
  if (r != null) {
    return (r[2]);
  }
  return null;
}
