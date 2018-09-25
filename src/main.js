import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'


import 'styles/css/reset.css'
import 'styles/iconfont.css'

Vue.prototype.$echarts = echarts

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})