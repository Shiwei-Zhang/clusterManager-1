<template>
    <div class="blockView">
        <block-project v-for="cluster in clusters" :key="cluster.key" :projectName="cluster.title">
            <div slot="title">{{cluster.title}}1</div>
        </block-project>
    </div>
</template>
<style lang="scss">
.blockView {
    padding-top: 50px;
}
</style>
<script>
import blockProject from './block.vue'
export default {
    data() {
            return {
                clusters: []
            }
        },
        methods: {

        },
        components: {
            'blockProject': blockProject
        },
        mounted() {
            var self = this
            this.$http.get('/api').then(function(res) {
                self.clusters = res.data
            })
        }
}
</script>
