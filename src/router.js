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
          path: 'albums',
          name: 'albums',
          component: () => import('@/container/AlbumList')
        },
        {
          path: 'albums/:id',
          name: 'album',
          component: () => import('@/container/AlbumItem')
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
