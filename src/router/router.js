import {createRouter, createWebHashHistory} from "vue-router";
import store from '../store/store';

const routes = [
    {name: 'MainPage', path: '', component: () => import('@/pages/MainPage')},
    {name: 'ItemPage', path: '/item/:id(\\d+)', component: () => import('@/pages/ItemPage'), meta: { disableButton: true }}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  router.beforeEach((to, from, next) => {
    store.commit('setLoading', true);
    next();
  });
  router.afterEach(() => {
    setTimeout(() => {
      store.commit('setLoading', false);
    }, 500);
  });
export default router