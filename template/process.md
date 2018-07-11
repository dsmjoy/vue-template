
isServerLogin: 是否已经登录, 判断依据: Cookie是否存在Token
isInit: 在isLogin的前提下, 应用是否已经初始化, 初始化操作: 获取用户信息等
isLogin = isServerLogin && isInit

APP
->
router-view
->
beforeEach
->
if( 进入的页面需要授权 && isLogin ) {
    next()
} else if ( 进入的页面需要授权 && !isLogin ) {
    next(login?redirect_url)
} else if ( 进入的页面不需要授权 ) {
    next()
}
->next(login)
在login top-views页面统一判断, login不重定向到子路由
if( !isServerLogin ) {
    根据平台判断 跳转登录 如 replace(login/weixin?redirect_url), replace(login/weibo?redirect_url)
    return
}

if( !isInit ) {
    appInit()
        .then(() => {
            replace(redirect_url)
        })
}
->replace(login/weibo?redirect_url)
登录成功, 同时appInit


