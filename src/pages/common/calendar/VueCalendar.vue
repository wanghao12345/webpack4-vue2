<template>
    <div class="calendar-box">
        <input type="text" placeholder="YY-MM-DD ~ YY-MM-DD" class="layui-input" id="laydate">
        <div class="calendar-main">
            <div class="calendar-main-top">

            </div>
            <div class="calendar-main-middle">

            </div>
            <div class="calendar-main-bottom">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VueCalendar"
    }
</script>

<style scoped>
    .layui-input{
        background: #fff;
        cursor: pointer;
        border: 1px solid #e6e6e6;
        float: right;
        margin: 9px;
        height: 35px;
        margin-right: 20px;
        box-sizing: border-box;
        padding: 0 5px;
        color: #a29e9e;
        text-align: right;
        border-radius: 4px;
    }
    .calendar-main{
        width: 272px;
        height: 324px;
        background: red;
    }
</style>