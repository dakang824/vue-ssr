<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () { // 父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true // 控制视图是否显示的变量
    }
  },
  created () {
    // 判断token是否过期
    if (process.browser && localStorage.getItem('token')) {
      this.post('check').then(res => {
        if (res.data.expires_in == 0) {
        // token已过期，刷新token
          this.post('refresh').then(res => {
            localStorage.setItem('token', res.data.token)
          })
        }
      })
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false // 先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true // 再打开
      })
    }
  }
}
</script>

<style>
</style>
