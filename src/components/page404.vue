<template>
    <p>404 page not found</p>
</template>
<style lang="scss">
</style>
<script>
export default {
    name: 'login',
    data() {
        return {

        }
    },
    mounted() {
        this.$http.post('/apix/uilogin', {
            'user': 'admin',
            'password': '11111112'
        }).then(
            function(res) {
                console.log(res.body)
            },
            function(res) {
                console.error('err', res)
            }
        )
    }
}
</script>
