import ComponentCustomize  from './ComponentCustomize.js'
Vue.use(ComponentCustomize, {
    name: 'wrapper',
});

import store from '/store'
new Vue({
  el: '#root',
  store
})
