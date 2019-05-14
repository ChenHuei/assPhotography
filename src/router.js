import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Ass'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/container/Home')
        },
        {
          path: 'photo/:id',
          name: 'photo',
          component: () => import('@/container/Photo')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/container/Contact')
        }
      ]
    }
  ]
})
