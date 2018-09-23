import Vue from 'vue'
import App from './App.vue'
import router from './router'


import 'styles/css/reset.css'
import 'styles/iconfont.css'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})