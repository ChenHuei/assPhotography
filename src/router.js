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
          name: 'list',
          component: () => import('@/container/List')
        },
        {
          path: 'albums/:id',
          name: 'album',
          component: () => import('@/container/Album')
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
      component: () => import('@/views/Admin'),
      children: [
        {
          path: '',
          name: 'adminList',
          component: () => import('@/container/AdminList')
        },
        {
          path: ':id',
          name: 'adminAlbum',
          component: () => import('@/container/AdminAlbum')
        }
      ],
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
