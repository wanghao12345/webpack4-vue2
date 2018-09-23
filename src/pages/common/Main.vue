<template>
    <div id="main" class="main-box">
        <div class="nav-box">
            <common-nav ref="nav"></common-nav>
        </div>
        <div class="content-box">
            <div class="head-box">
                <common-head
                    v-on:listenNavStatus="GetNavBtnClick"
                ></common-head>
            </div>
            <div class="main-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonHead from '@/pages/common/Head'
    import CommonNav from '@/pages/common/Nav'
    export default {
        name: "Main",
        components: {
            CommonHead,
            CommonNav
        },
        methods: {
            /**
             * 获取nav-btn的点击事件，并触发nav的收缩事件
             * @constructor
             */
            GetNavBtnClick: function () {
                this.$refs.nav.$emit('changeNav');
            }
        }
    }
</script>

<style scoped>
    .main-box{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: left;
        flex-direction: row;
    }
    .content-box{
        background: #f7f7f7;
        flex-grow: 1;
    }

</style>