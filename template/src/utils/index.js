
/**
 * 动态设置rem
 */
export function remAdjust () {
    var Width = window.screen.width
    var Height = window.screen.height
    var scaleRatio = Width / 375
    if( scaleRatio > 1.36 ) {
      scaleRatio = 1.36
    }
    document.querySelector('html').style.fontSize = 100 * scaleRatio + 'px'
}

export function wechatDetection () {
    var ua = navigator.userAgent.toLowerCase()
    var isWechat = ua.indexOf('micromessenger') != -1
       
    return isWechat
}

export default {
    remAdjust,
    wechatDetection
}
