import Vue from 'vue'
import router from './router';
import App from './App.vue';

// 疑问？ 1： vue vue.common.js 区别
// 2 render 和 ...App 用哪个
const app = new Vue({
    router,
    render: h=>h(App)
});
app.$mount('#app');
