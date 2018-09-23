<template>
    <div class="head-box">
        <div class  = "nav-btn"
             @click = "changeNav"
        >
            <span class="iconfont">&#xe648;</span>
        </div>
        <div class="info-box">
            <router-link class="link-btn login-btn" to="/login">login</router-link>
            <router-link class="link-btn register-btn" to="/register">register</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head",
        methods: {
            /**
             * 给父组件传值：改变左边菜单栏的状态（展开、收缩）
             */
            changeNav: function () {
                this.$emit("listenNavStatus");
            }
        }
    }
</script>

<style scoped>
    .head-box{
        width: 100%;
        height: 50px;
        background: #EDEDED;
        display: flex;
        justify-content: space-between;
    }
    .head-box .nav-btn{
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .head-box .nav-btn span.iconfont{
        font-size: 25px;
    }
    .info-box {
        line-height: 50px;
        margin-right: 10px;
    }
    .info-box .link-btn{
        color: #2a3f54;
        font-size: 15px;
        text-decoration: none;
    }
    .info-box .link-btn:hover{
        color: red;
    }


</style>