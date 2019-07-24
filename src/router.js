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
          path: 'albums',
          name: 'albums',
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
        if (window.localStorage.getItem('uid').length === 0) {
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
