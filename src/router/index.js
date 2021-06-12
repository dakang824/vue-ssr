import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Home' }
      },
      {
        path: 'lesson',
        name: 'Lesson',
        component: () => import('@/views/lesson/index'),
        meta: {title: 'Lesson'}
      },
      {
        path: '/video',
        name: 'Video',
        component: () => import('@/views/lesson/video'),
        meta: {title: 'Video'}
      },
      {
        path: '/teachers',
        name: 'Teachers',
        component: () => import('@/views/lesson/teachers'),
        meta: {title: 'Teachers'}
      },
      {
        path: '/pay',
        name: 'Pay',
        component: () => import('@/views/lesson/pay'),
        meta: {title: 'Pay'}
      },
      {
        path: '/details',
        name: 'Details',
        component: () => import('@/views/lesson/details'),
        meta: {title: 'Details'}
      },
      {
        path: '/learn',
        name: 'Learn',
        component: () => import('@/views/learn/index'),
        meta: {title: 'Learn'}
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index'),
        meta: {title: 'About'}
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info/index'),
        redirect: '/info/infolist',
        meta: {title: 'Info'},
        children: [
          {
            path: 'infolist',
            name: 'Infolist',
            component: () => import('@/layout/components/infoList'),
            alias: '/info'
          },
          {
            path: 'infodetails',
            name: 'Infodetails',
            component: () => import('@/layout/components/infoDetails')
          }
        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index')
      }
    ]
  }
]

export function createRouter(){
  return new VueRouter({
    mode: 'history',
    routes
  })
}
