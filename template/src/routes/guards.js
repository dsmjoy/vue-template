import store from '@/store'
export function routerBeforeEachGuard (to, from, next) {
    if( !store.state.isLogin && to.meta.requireNoAuth !== true ) {
        next({
            path: 'login',
            query: {
                redirect_url: encodeURIComponent(to.fullPath)
            }
        })
        return
    }
    next()
}

export function routerAfterEachGuard (to, from) {
    
}