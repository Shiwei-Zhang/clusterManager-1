<template>
    <div class="ddbsMain">
        <div class="master-nav">
            <div class="master-nav__logo">
                <router-link to="/">logo</router-link>
            </div>
            <div class="master-nav__tile" @click="loadTo('')">塔罗科技</div>
            <div class="master-nav__tile" @click="loadTo('flow')">flow</div>
            <div class="master-nav__tile" @click="loadTo('datasets')">datasets</div>
            <div class="master-nav__tile" @click="loadTo('analysis')">analysis</div>
            <div class="master-nav__tile" @click="loadTo('notebooks')">notebooks</div>
            <div class="master-nav__tile" @click="loadTo('jobs')">jobs</div>
            <div class="master-nav__tile" @click="loadTo('dashboards')">dashboards</div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
.ddbsMain {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .master-nav {
        background-color: #333333;
        color: #ffffff;
        line-height: 24px;
        height: 24px;
        &>div {
            cursor: pointer;
        }
        a {
            color: inherit;
            text-decoration: none;
        }
        .master-nav__logo {
            width: 40px;
            height: 100%;
            float: left;
            text-align: center;
        }
        .master-nav__tile {
            height: 100%;
            line-height: 24px;
            float: left;
            display: inline-block;
            padding: 0 5px;
        }
    }
}
</style>
<script>
export default {
    data() {
            return {

            }
        },
        methods: {
            loadTo(arg) {
                var projectName = this.$route.params.project_name
                this.$router.push({
                    path: '/ddbs/' + projectName + '/' + arg
                })
            }
        }
}
</script>
