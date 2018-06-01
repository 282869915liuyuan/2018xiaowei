/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = ''
let routerMode = 'history'
let baseImgPath = ''
let baseWebSocketPath = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://xf.tandatech.com:4080'
  baseImgPath = 'http://xf.tandatech.com:4080'
  baseWebSocketPath = 'xf.tandatech.com:4080'

  // baseUrl = 'http://www.jzxfyun.net'
  // baseImgPath = 'http://www.jzxfyun.net'
  // baseWebSocketPath = 'www.jzxfyun.net'
} else {
  baseUrl = window.location.protocol + '//' + window.location.host
  baseImgPath = window.location.protocol + '//' + window.location.host
  baseWebSocketPath = window.location.host
}
export {
  baseUrl,
  routerMode,
  baseImgPath,
  baseWebSocketPath
}
