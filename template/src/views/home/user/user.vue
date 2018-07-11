
<template>

    <div class="home-user">
        uid: {{ uid }}
    </div>

</template>

<script>
export default {
    data () {
        return {
            uid: this.$route.query.uid
        }
    }
}
</script>