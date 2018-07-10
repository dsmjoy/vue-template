import vbus from '@/services/vbus/vbus'

export default {
    data () {
        return {
            keepAliveRoutes: []
        }
    },

    created () {
        this.bindEvents()
    },

    methods: {
        bindEvents () {
            vbus.$on('$loading.show', ({text = ''}) => {

            })
    
            vbus.$on('$toast.show', (text = '') => {
                
            })
        }
    }
}