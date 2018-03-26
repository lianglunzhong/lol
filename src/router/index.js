import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import News from '@/components/news/news';
import Recommend from '@/components/news/recommend';
import Version from '@/components/news/version';
import Sports from '@/components/news/sports';
import Government from '@/components/news/government';
import Heros from '@/components/heros/heros';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      children: [
        {
          path: 'recom',
          name: 'recom',
          component: Recommend
        },
        {
          path: 'sports',
          name: 'sports',
          component: Sports
        },
        {
          path: 'govern',
          name: 'govern',
          component: Government
        },
        {
          path: 'version',
          name: 'version',
          component: Version
        }
      ]
    },
    {
      path: '/heros',
      name: 'heros',
      component: Heros
    }
  ]
});
