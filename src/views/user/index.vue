<template>
  <div class="content">
    <div class="wrap">
      <div class="inner">
        <div class="place">
          <img src="../../assets/place_icon.png" alt="图片找不到了" />
          <span>&nbsp;&nbsp;您现在在位置：</span>
          <div class="dividers">
            <router-link to="/">首页</router-link>
            <span class="arrow">></span>
            <span>个人中心</span>
          </div>
        </div>
        <div class="sub_wrap">
          <div class="user">
              <div class="headshot">
                  <img :src="userinfo.avatar" alt="图片找不到了">
                  <h4>{{userinfo.nickname}}</h4>
              </div>
              <side-bar :nav-list="navList" v-on:change-component="changeComponent" :navindex='navindex'/>
          </div>
          <keep-alive>
            <transition name="fade-transform" mode="out-in">
              <component :is="componentList" @getuserinfo='getuserinfo' ></component>
            </transition>
          </keep-alive>
        </div>
      </div>
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
import sideBar from "@/layout/components/sideBar";
export default {
  components: {
    sideBar
  },
  data() {
    return {
      userinfo:"",
      navindex:0,
      navList: [
        {
          id: 1,
          name: "我的课程",
          url: "",
          componentName:"myLesson",
          active: true,
        },
        {
          id: 2,
          name: "我的班主任",
          url: "",
          componentName:"myTeachers",
          active: false,
        },
        {
          id: 3,
          name: "我的订单",
          url: "",
          componentName:"myOrder",
          active: false,
        },
        {
          id: 4,
          name: "在线答疑",
          url: "",
          componentName:"myAnswering",
          active: false,
        },
        {
          id: 5,
          name: "个人资料",
          url: "",
          componentName:"myInfo",
          active: false,
        },
        {
          id: 6,
          name: "修改密码",
          url: "",
          componentName:"myPassword",
          active: false,
        },
      ],
      componentList: () => import("@/layout/components/myLesson")
    };
  },
  created(){
    if(localStorage.getItem('token')){
    this.getuserinfo1()
    }else{
      this.$router.push('/login')
    }
    if(this.$route.query.childpath){
      this.changeComponent(this.$route.query.childpath)
      this.navindex=this.$route.query.navindex
    }
  },
  methods:{
    // 获取用户信息
        getuserinfo1(){
            this.post('getuserinfo').then(res=>{
        this.userinfo=res.data
            })
        },
    getuserinfo(){
      this.getuserinfo1()
    },
    changeComponent(event){
      this.componentList= () => import("@/layout/components/"+event)
    }
  }
}
</script>

<style>

</style>