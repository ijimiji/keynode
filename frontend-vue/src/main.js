import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
