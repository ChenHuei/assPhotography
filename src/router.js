import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

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
    },
    {
      path: '/login',
      name: 'name',
      component: () => import('@/views/Login')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/Admin'),
      beforeEnter: (to, from, next) => {
        if (Object.keys(store.state.user).length === 0) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
