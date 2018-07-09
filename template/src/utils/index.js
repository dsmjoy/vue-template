
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

export function platformDetector () {
    if( wechatDetector() ) {
        return 'weixin'
    } else if( weiboDetector() ) {
        return 'weibo'
    } else {
        return 'other'
    }
}

export function wechatDetector () {
    var ua = navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i) == 'micromessenger'
}

export function weiboDetector () {
    var ua = navigator.userAgent.toLowerCase()
    return ua.match(/WeiBo/i) == "weibo"
}

export default {
    remAdjust,
    platformDetector
}
