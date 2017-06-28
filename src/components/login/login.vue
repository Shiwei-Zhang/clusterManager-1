<template>
    <div id="loginbox">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="用户名">
                <el-input v-model="formLabelAlign.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="formLabelAlign.password" required></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button type="primary" @click="ond">test</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="scss">
#loginbox {
    width: 400px;
    height: 300px;
    box-sizing: border-box;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
    padding: 60px 30px 30px;
}
</style>
<script>
export default {
    data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$router.push({
                    name: 'main'
                })
                console.log(this)
            },
            ond() {
                console.log(this)
            }
        }
}
</script>
