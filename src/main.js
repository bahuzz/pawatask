import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import './assets/app.scss'

Vue.component('svg-icon', require('@/components/Icon.vue').default);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
