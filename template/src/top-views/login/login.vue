
<template>
    <router-view></router-view>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data () {
        return {
            isServerLogin: Math.random() > .35,
            isInit: false
        }
    },

    created () {
        this.isServerLogin = localStorage.getItem('token') ? true : false
        if( !this.isServerLogin ) {
            this.$router.replace({
                path: '/login/weixin',
                query: this.$route.query
            })
            return
        }

        console.log('login')
        let redirectUrl = decodeURIComponent(this.$route.query.redirect_url)
        this.updateLoginStatus({isLogin: true})
        console.log('redirect to', redirectUrl)
        this.$router.replace(redirectUrl)
    },
    methods: {
        ...mapMutations(
            ['updateLoginStatus']
        )
    }
}
</script>

<style>

</style>
