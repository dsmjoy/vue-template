
const routes = [
    {
        path: '/home',
        redirect: '/home/index',
    },
    {
        name: 'homeindex',
        path: '/home/index',    
        component: resolve => {
            require.ensure(['@/views/Home/Index/Index.vue'], () => {
                resolve(require('@/views/Home/Index/Index.vue'))
            })
        }
    }
]

export default routes