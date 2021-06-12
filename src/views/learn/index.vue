<template>
  <div class="content">
    <div class="banner banner_4">
      <h1 class="banner_title">了解考研</h1>
      <p class="banner_text">学习点燃梦想 梦想撼动未来</p>
    </div>
    <div class="wrap">
      <div class="inner">
        <div class="place">
          <img src="../../assets/place_icon.png" alt="图片找不到了" />
          <span>&nbsp;&nbsp;您现在在位置：</span>
          <div class="dividers">
            <router-link to="/">首页</router-link>
            <span class="arrow">></span>
            <span>{{title}}</span>
          </div>
        </div>
        <div class="sub_wrap">
          <ul class="sidebar">
            <li
              class="sidebar_item"
              :class="navActive==index ? 'active' : ''"
              v-for="(item, index) in navList"
              :key="item.id"
              @click="navchange(item,index)"
            >
              <button class="sidebar_link">{{ item.title }}</button>
            </li>
          </ul>
          <div class="aboutus">
            <ul class="aboutus_tabbar" v-if="navActive==5">
                <li class="aboutus_tabbar_item" :class="tabbarActive==index ? 'active' : ''" v-for="(item,index) in tabbarList" :key="item.id" @click="tabbarChange(item,index)">
                    <button class="aboutus_tabbar_link">{{item.name}}</button>
                </li>
            </ul>
            <div class="breadcrumb">
              <div class="aboutus_title">
                <h5>{{navName}}</h5>
              </div>
            </div>
            <div class="aboutus_text">
              <!-- <h4 class="aboutus_text_title">{{list.title}}</h4> -->
                <p v-html="list.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      title:'',
      navName:'',
      navActive:0,
      tabbarActive:0,
      navList: [],
      tabbarList: [],
      list:{}
    };
  },
  mounted(){
    document.title='北京中盛润德-了解考研'
    this.get('postgraduate/category',true).then((res) => {
      this.tabbarList = res.data
      let category_id = res.data[0].id
      this.get('postgraduate/list',false,{category_id}).then((res) => {
        this.navList = res.data
        this.navName = res.data[0].title
      this.title = res.data[0].title

        let postgraduate_id = res.data[0].id
        
        this.get('postgraduate/detail',false,{postgraduate_id}).then((res) => {
          this.list = res.data
        })
      })
    })    
  },
  methods:{
    navchange(item,index){
        this.navActive = index
        this.navName = item.title
        this.tabbarActive=0
         this.title=item.title
        let data={
          postgraduate_id:item.id 
        }
        if(item.id==6){
            data.category_id=this.tabbarList[0].id
        }
        this.get('postgraduate/detail',true,data).then((res) => {
        
          this.list = res.data
        })
    },
    tabbarChange(item,index){
      console.log(item)
      this.tabbarActive = index
         this.get('postgraduate/detail',false,{
           postgraduate_id:6,
           category_id:item.id
           }).then((res) => {
          this.list = res.data
        })
      // this.get('postgraduate/list',true,{category_id:item.id}).then((res) => {
      //   this.navList = res.data
      //   // this.navName = res.data[0].title
      //   let postgraduate_id = res.data[0].id
     
      // })
    }
  }
};
</script>

<style>

</style>