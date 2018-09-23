<template>
    <div id="app" class="app-box">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World123!'
            }
        }
    }
</script>

<style scoped>
    .app-box{
        width: 100%;
        height: 100%;
    }
</style>