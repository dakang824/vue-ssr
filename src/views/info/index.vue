<template>
  <div class="content">
    <div class="banner banner_3">
      <h1 class="banner_title">考研资讯</h1>
      <p class="banner_text">学习点燃梦想 梦想撼动未来</p>
    </div>
    <router-view></router-view>
    <go-top></go-top>
  </div>
</template>

<script>
export default {
    data(){
        return{
            navList: [],
            infoList: []
        }
    },
    mounted(){
      document.title='北京中盛润德-资讯'
    },
    methods:{
        
    }
}
</script>

<style>

</style>