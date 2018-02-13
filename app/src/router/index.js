import Vue from 'vue';
import Router from 'vue-router';
import Bomber from '@/components/Bomber';
import VueChatScroll from 'vue-chat-scroll';
import VueSocketio from 'vue-socket.io';

Vue.use(Router);
Vue.use(VueChatScroll);
Vue.use(VueSocketio, 'https://bombermanapi.oligertimothee.fr/');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Bomber',
      component: Bomber,
    },
  ],
});
