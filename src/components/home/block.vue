<template>
    <div class="block-project" @click="visitDDBS(projectName)">
        <slot name="title"></slot>
    </div>
</template>
<style lang="scss">
.block-project {
    width: 310px;
    height: 200px;
    margin: 10px;
    float: left;
    background-color: white;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    &:hover {
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    }
}
</style>
<script>
export default {
    props: ['projectName'],
    data() {
        return {

        }
    },
    methods: {
        visitDDBS(title) {
            this.$router.push({
                name: 'ddbs',
                params: {
                    project_name: title
                }
            })
        }
    }
}
</script>
