<template>
  <ul class="sidebar">
    <li
      class="sidebar_item"
      :class="navindex1==index ? 'active' : ''"
      v-for="(item,index) in navList"
      :key="item.id"
      @click="change(navList,index)"
      v-on:click="$emit('change-component',item.componentName)"
    >
      <router-link class="sidebar_link" :to="item.url">{{ item.name }}</router-link>
    </li>
    
    <li  class="sidebar_item" style="cursor:pointer" @click="logout">
      <p class="sidebar_link" >退出登录</p>
    </li>
  </ul>
</template>

<script>
export default {
  // props: ["navList"],
  name: "sideBar",
  data() {
    return {
      navindex1:this.navindex
    };
  },
  props:{
    navindex:{
      default:0,
    },
    navList:{

    }
  },
 
 inject:['reload'],  
 
  methods:{
        change(list,index){
          this.navindex1=index
            // list.forEach((e,i) => i===index ? e.active=true : e.active=false)
        },
        logout(){
               this.$confirm('确认退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.clear()
          this.$router.push('/')
          this.reload()
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          
        });
        },
    }
};
</script>

<style>
.sidebar_link{
  font-size: 16px;
}
</style>