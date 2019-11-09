import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'

//Components
import 'v-slim-dialog/dist/v-slim-dialog.css'
import 'vue-flash-message/dist/vue-flash-message.min.css'
import SlimDialog from 'v-slim-dialog'
import VueFlashMessage from 'vue-flash-message';

axios.defaults.baseURL = 'http://localhost:9000/api';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(SlimDialog);
Vue.use(VueFlashMessage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
