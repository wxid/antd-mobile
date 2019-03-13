// 配置 rest，用于发起 http 请求
const rest = require('rest')
const pathPrefix = require('rest/interceptor/pathPrefix')
const mime = require('rest/interceptor/mime')
const defaultRequest = require('rest/interceptor/defaultRequest')
const errorCode = require('rest/interceptor/errorCode')
const config = require('./index')
const jwtAuth = require('./jwtAuth')

export default rest.wrap(pathPrefix, { prefix: config.api.base_url })
                    .wrap(mime)
                    .wrap(defaultRequest, config.api.defaultRequest)
                    .wrap(errorCode, { code: 400 })
                    .wrap(jwtAuth)