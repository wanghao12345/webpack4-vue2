<template>
    <div id="home" class="home-box">
        <div class="nav-box"></div>
        <div class="content-box">
            
            <span class="iconfont">&#xe648;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .home-box{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: left;
        flex-direction: row;
    }
    .nav-box{
        width: 230px;
    }
    .content-box{
        background: #f7f7f7;
        flex-grow: 1;
    }

</style>