import Vue from 'vue';
import App from './App.vue';
import router from './router';
// @ts-ignore
import store from './store/store.ts';
// @ts-ignore
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from '@/filters/date'

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))

  Vue.component(componentName, componentConfig.default || componentConfig)
})
Vue.config.productionTip = false;
Vue.use(Vuelidate)
Vue.filter('date',DateFilter)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
