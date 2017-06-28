<template>
    <div id="clusterManager">
        <div class="bar">
            <ul class="top-manager">
                <li class="logo">Cluster Manager</li>
                <li @click="viewSelect('')">PROJECTS</li>
                <li @click="viewSelect('catalog')">CATALOG</li>
                <li @click="viewSelect('automation')">AUTOMATION</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
@import './main.scss';
</style>
<script>
export default {
    data() {
            return {}
        },
        methods: {
            viewSelect(k) {
                this.$router.push('/' + k)
            }
        }
}
</script>
