<template>
    <transition name="slide-fade">
        <div class="nav-box" v-if="show" id="nav">
            <div class="logo-box">
                <span class="iconfont">&#xe649;</span>
                <span class="logo-name">华龙信用</span>
            </div>
            <div class="nav-list">

                <div class="menu-item"
                     v-for="(item, index) in menuData"
                     :class="{'nav-active' : item.isActive}"
                >
                    <div class="item-title" @click="selectMenuItem(index)">{{item.menuName}}<span class="iconfont">&#xe81c;</span></div>
                    <ul>
                        <li v-for="sunItem in item.sunMenuName">
                            <router-link :to="sunItem.link">
                                {{sunItem.name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                show: true,
                menuData:[{
                    'isActive': false,
                    'menuName': 'Home',
                    'sunMenuName': [
                        {
                            'name': 'Dashbord1',
                            'link': '/home/homeDashboard1'
                        },
                        {
                            'name': 'Dashbord2',
                            'link': '/home/homeDashboard2'
                        },
                        {
                            'name': 'Dashbord3',
                            'link': '/home/homeDashboard3'
                        }
                    ]
                },{
                    'isActive': false,
                    'menuName': 'Forms',
                    'sunMenuName':[
                        {
                            'name': 'General Form',
                            'link': '/from/fromGeneral'
                        },
                        {
                            'name': 'Advanced Components',
                            'link': '/from/fromAdvanced'
                        },
                        {
                            'name': 'Form Validation',
                            'link': '/from/fromValidation'
                        }
                    ]
                }],
                isActive: {
                    menu1: false,
                    menu2: false
                }
            }
        },
        mounted(){
            /**
             * 获取父组件传过来的nav收缩事件
             */
            this.$on('changeNav', function () {
                this.changeNavStatus();
                this.show = !this.show;
            })
        },
        methods: {
            /**
             * 触发父组件传过来的nav收缩事件
             */
            changeNavStatus: function () {
                // alert('收到');
            },
            /**
             * 选择菜单
             */
            selectMenuItem: function (index) {
                this.menuData[index].isActive = !this.menuData[index].isActive;
            }
        }
    }
</script>

<style scoped>
    .nav-box{
        width: 200px;
    }
    /*logo*/
    .logo-box{
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: white;
         text-shadow: rgba(0,0,0,.25) 0 -1px 0;
        background: linear-gradient(#334556,#2C4257),#2A3F54;
        box-shadow: rgba(255,255,255,.16) 0 1px 0, inset rgba(255,255,255,.16) 0 0px 0;
        background-color: white;
        box-sizing: border-box;
    }
    .logo-box .iconfont{
        font-size: 25px;
        margin: 0 10px;
        float: left;
    }
    .logo-box .logo-name{
        font-size: 17px;
    }
    /*菜单列表*/
    .nav-list{
        margin-top: 10px;
    }
    .nav-list .menu-item{

    }
    .nav-list .nav-active .item-title{
        text-shadow: rgba(0,0,0,.25) 0 -1px 0;
        background: linear-gradient(#334556,#2C4257),#2A3F54;
        box-shadow: rgba(0,0,0,.25) 0 1px 0, inset rgba(255,255,255,.16) 0 1px 0;
    }
    .nav-list .menu-item .item-title{
        height: 40px;
        line-height: 40px;
        color: white;
        font-size: 15px;
        box-sizing: border-box;
        padding-left: 20px;
        cursor: pointer;
    }
    .nav-list .menu-item .item-title span.iconfont{
        float: right;
        margin-right: 10px;
        font-size: 19px;
    }
    .nav-list .menu-item ul{
        height: 0;
        overflow: hidden;
        max-height: 20px;
        -webkit-transition: max-height 2s;
        transition: max-height 2s;
    }
    .nav-list .nav-active ul{
        height: auto;
        max-height:200px;
    }
    .nav-list .menu-item ul li{
        height: 30px;
        line-height: 30px;
        color: #efebeb;
        box-sizing: border-box;
        padding-left: 30px;
        cursor: pointer;
    }
    .nav-list .menu-item ul li a{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #efebeb;
        cursor: pointer;
    }


    /* 左边菜单栏的收缩与张开 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
        width: 0px;
    }
</style>