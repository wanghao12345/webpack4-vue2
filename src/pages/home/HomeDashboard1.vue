<template>
    <div id="home" class="home-box">
        <div class="table-box table-box1">
            <div class="table-top">
                Network Activities
                <small>Graph title sub-title</small>
                <input type="text" class="layui-input" id="laydate">
            </div>
            <div class="table-bottom">
                <div class="table-line">
                    <keep-alive>
                        <network-activities></network-activities>
                    </keep-alive>
                </div>
                <div class="table-info">

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import NetworkActivities from './HomeDashboard1/NetworkActivities'
    export default {
        name: "HomeDashboard1",
        components:{
            NetworkActivities
        },
        data () {
            return {

            }
        },
        mounted () {
        }
    }
</script>

<style scoped>
    .table-box{
        margin: 10px;
        height: 400px;
        background: #ffffff;
        border: 1px solid #E6E9ED;
        box-sizing: border-box;
    }
    .table-top{
        width: 100%;
        height: 50px;
        border-bottom: 2px solid #E6E9ED;
        color: #73879C;
        font-weight: 400;
        font-size: 24px;
        line-height: 50px;
        text-indent: 25px;
        overflow: hidden;
    }
    .table-top small{
        font-size: 70%;
        color: #777;
        line-height: 50px;
    }
    .table-bottom{
        width: 100%;
        height: 100%;
        margin-top: -50px;
        box-sizing: border-box;
        padding-top: 50px;
        overflow: hidden;
    }
    .table-box1 .table-bottom .table-line{
        width: 70%;
        height: 100%;
        float: left;
    }
    .table-box1 .table-bottom .table-info{
        width: 30%;
        height: 100%;
        float: left;
    }
    .layui-input{
        background: #fff;
        cursor: pointer;
        border: 1px solid #ccc;
        float: right;
        margin: 9px;
        width: 280px;
        height: 28px;
        margin-right: 20px;
        box-sizing: border-box;
        padding: 0 5px;
        color: #a29e9e;
    }

</style>