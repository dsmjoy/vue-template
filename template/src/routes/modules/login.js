
export default [
    {
        name: 'login-weixin',
        path: '/login/weixin',
        meta: {
            requireNoAuth: true
        },
        component: resolve => {
            require.ensure(['@/views/login/weixin/weixin.vue'], () => {
                resolve(require('@/views/login/weixin/weixin.vue'))
            })
        }
    }
]