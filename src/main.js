// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createStore } from './store'
import { createRouter } from './router'
import navBar from '@/layout/components/navBar'
import goTop from '@/layout/components/goTop'
import pendant from '@/layout/components/pendant'
var VueAwesomeSwiper
if (process.browser) {
  Vue.prototype.WOW = require("wowjs");
  VueAwesomeSwiper = require('vue-awesome-swiper')
  Vue.use(VueAwesomeSwiper)
}

import 'videojs-contrib-hls'
import videojs from 'video.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'swiper/swiper-bundle.css'

import request from '@/request/request'

import '@/style/animate.min.css'

import '@/style/index.scss' // global css
import '@/style/iconfont.scss'
ElementUI.Dialog.props.lockScroll.default = false

Vue.component('navBar', navBar)
Vue.component('goTop', goTop)
Vue.component('pendant', pendant)


Vue.use(ElementUI)
Vue.prototype.post = request.post
Vue.prototype.get = request.get
Vue.config.productionTip = false

createRouter().beforeEach((to, from, next) => {
  if (to.name.includes('Details') || to.name.includes('Video')) {
    let token = localStorage.getItem('token')
    if (!token) {
      router.push({path: '/login'})
      // sessionStorage.setItem('navId',6)
      // Vue.reload()
    }
  }

  next()
})
// 跳转页面返回顶部
createRouter().afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

// 时间戳转时间格式
Vue.prototype.gettime = function (fmt) {
  var time = ''
  var date = new Date(fmt * 1000)
  var Y = date.getFullYear()
  var M = date.getMonth() + 1
  var D = date.getDate()
  var h = date.getHours()
  var m = date.getMinutes()
  if (m < 10) {
    m = '0' + m
  }
  var s = date.getSeconds()
  if (s < 10) {
    s = '0' + s
  }
  time = Y + '年' + M + '月' + D + '日' + '   ' + h + ':' + m + ':' + s
  return time
}

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

export function createApp () {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return app
}
