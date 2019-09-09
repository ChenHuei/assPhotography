import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from './constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faMobileAlt,
  faSearch,
  faImage
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLine
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';

library.add(
  faEnvelope,
  faMobileAlt,
  faFacebookF,
  faInstagram,
  faLine,
  faSearch,
  faImage
);

Vue.use(VueFire);

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
