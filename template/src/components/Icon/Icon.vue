
<template>

 <svg class="svg-icon"><use :xlink:href="iconname" /></svg>

</template>

<script>

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/icons', false, /\.svg$/)
requireAll(req)

export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },

    computed: {
        iconname () {
            return `#icon-${this.name}`
        }
    }
}
</script>

<style>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
