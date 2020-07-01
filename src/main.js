/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n'
import vnMessage from '../lang/vn.json'
import enMessage from '../lang/en.json'
Vue.use(VueI18n)
const messages = {
  vn: vnMessage,
  en: enMessage,
}
const i18n = new VueI18n({
  locale: 'vn', // set locale
  messages,
  fallbackLocale: 'vn',
})
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false;

export const app = new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
window['vue'] = app
window.store = store