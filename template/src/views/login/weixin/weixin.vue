
<template>

    <div class="login-weixin">
        login weixin
    </div>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
    created () {
        localStorage.setItem('token', 'token')
        console.log('login weixin')
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