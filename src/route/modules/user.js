
const routes = [
    {
        path: '/user',
        redirect: '/user/preview',
    },
    {
        name: 'userpreview',
        path: '/user/preview',    
        component: resolve => {
            require.ensure(['@/views/User/Preview/Preview.vue'], () => {
                resolve(require('@/views/User/Preview/Preview.vue'))
            })
        }
    }
]

export default routes