<template>
  <div class="aboutus">
      <ul class="aboutus_tabbar">
          <li class="aboutus_tabbar_item" :class="item.active ? 'active' : ''" v-for="(item,index) in list" :key="item.id" @click="change(tabbarList,index)">
              <router-link class="aboutus_tabbar_link" :to="item.url">{{item.name}}</router-link>
          </li>
      </ul>
      <div class="breadcrumb">
          <div class="aboutus_title">
              <h5>报名简章</h5>
          </div>
      </div>
      <div class="aboutus_text" >
          
      </div>

  </div>
</template>

<script>
export default {
    name:'aboutUs',
    props:['list'],
    data(){
        return{
            
        }
    },
    methods:{
        change(list,index){
            list.forEach((e,i) => i===index ? e.active=true : e.active=false)
        },
    }
}
</script>

<style>

</style>