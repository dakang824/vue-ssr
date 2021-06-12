<template>
  <div class="content">
    <div class="banner banner_2">
      <h1 class="banner_title">关于中盛</h1>
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
            <span>{{noticedetail.title}}</span>
          </div>
        </div>
        <div class="sub_wrap">
          <ul class="sidebar">
            <li
              class="sidebar_item"
              :class="index==checked ? 'active' : ''"
              v-for="(item, index) in noticelist"
              :key="item.id"
              @click="change(item.id, index)"
            >
              <button class="sidebar_link">{{ item.title }}</button>
            </li>
          </ul>
          <div class="aboutus">
            <ul class="aboutus_tabbar">
              <li class="aboutus_tabbar_item active">
                <div class="aboutus_tabbar_link" >{{noticedetail.title}}</div>
              </li>
            </ul>
            <div class="breadcrumb">
              <div class="aboutus_title">
                <h5>{{noticedetail.title}}</h5>
              </div>
            </div>
            <div class="aboutus_text" v-html="noticedetail.content"></div>
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
      attrName:'aboutus',
      noticelist:'',
      noticedetail:"",

      checked:0,
    };
  },
  mounted() {
    document.title='北京中盛润德-关于我们'
    // this.get("about",true).then((res) => {
    //   this.list = res.data;
    // });
    this.getlist()
  },
  methods: {
    getlist(){
      this.get('aboutus').then(res=>{
        this.noticelist=res.data
        this.getdetail(res.data[0].id)
      })
    },
    getdetail(id){
      this.get('aboutus/detail',true,{
          id
      }).then(res=>{
        this.noticedetail=res.data
      })
    },
    change(id, index) {
      if(this.checked!=index){
  this.getdetail(id)
    this.checked=index
      }
  
    },
  },
};
</script>

<style>
</style>