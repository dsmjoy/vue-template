export function remAdjust () {
    var Width = window.screen.width
    var Height = window.screen.height
    var scaleRatio = Width / 375
    if( scaleRatio > 1.36 ) {
      scaleRatio = 1.36
    }
    document.querySelector('html').style.fontSize = 100 * scaleRatio + 'px'
}

export default {
    remAdjust
}
