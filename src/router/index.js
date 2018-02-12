import Vue from 'vue';
import Router from 'vue-router';
import Bomber from '@/components/Bomber';
import VueChatScroll from 'vue-chat-scroll';

Vue.use(Router);
Vue.use(VueChatScroll);

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
