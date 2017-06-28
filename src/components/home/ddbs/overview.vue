<template>
    <div class="overview">
        <div class="object-nav"></div>
        <div class="dss-page">
            <div class="profile">集群概况</div>
            <div class="cluster-box">
                <div class="tit">集群</div>
                <div class="section">
                    <div class="item ram-item">
                        <div class="label">内存概况</div>
                        <div class="usage-block">
                            <div class="top-left">总计分配 (2.24 GB)</div>
                            <div class="top-right">集群总计 (2.24 GB)</div>
                            <div class="usage">
                                <div class="usage-cent a">
                                </div>
                            </div>
                            <div class="bottom-left">集群总计 (2.24 GB)</div>
                            <div class="bottom-mid">未使用 (2.07 GB)</div>
                            <div class="bottom-right">未分配 (0 B)</div>
                        </div>
                    </div>
                    <div class="item ram-item">
                        <div class="label">磁盘概况</div>
                        <div class="usage-block">
                            <div class="top-left">总计分配 (2.24 GB)</div>
                            <div class="top-right">集群总计 (2.24 GB)</div>
                            <div class="usage">
                                <div class="usage-cent a" style="width:80%;">
                                </div>
                            </div>
                            <div class="bottom-left">集群总计 (2.24 GB)</div>
                            <div class="bottom-mid">未使用 (2.07 GB)</div>
                            <div class="bottom-right">未分配 (0 B)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cluster-box">
                <div class="tit">Buckets (4 激活)</div>
                <div class="section">alsdkfj</div>
            </div>
            <div class="cluster-box">
                <div class="tit">服务器</div>
                <div class="section">alsdkfj</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import './scss/overview.scss';
</style>
<script>
export default {
    data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            fetch('http://10.10.10.61:8091/pools/default/overviewStats').then(function(response) {
                return response.json()
            }).then(function(data) {
                console.log(data)
            }).catch(function(e) {
                console.log(e)
            })
        }
}
</script>
