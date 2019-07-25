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
          path: 'videos',
          name: 'videos',
          component: () => import('@/container/Videos')
        },
        {
          path: 'videos/:id',
          name: 'video',
          component: () => import('@/container/Video')
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
          component: () => import('@/admin/List')
        },
        {
          path: ':id',
          name: 'adminAlbum',
          component: () => import('@/admin/Album')
        }
      ],
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('uid') === null) {
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
