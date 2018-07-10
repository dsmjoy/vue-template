
const routes = [
    {
        path: '/home',
        redirect: '/home/index',
    },
    {
        name: 'home-index',
        path: '/home/index',    
        component: resolve => {
            require.ensure(['@/views/home/index/index.vue'], () => {
                resolve(require('@/views/home/index/index.vue'))
            })
        }
    },
    {
        name: 'home-user',
        path: '/home/user',    
        component: resolve => {
            require.ensure(['@/views/home/user/user.vue'], () => {
                resolve(require('@/views/home/user/user.vue'))
            })
        }
    }
]

export default routes