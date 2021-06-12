<template>
  <div class="header wow fadeInUp">
    <div class="header_top">
      <div class="inner">
        <div class="welcome">欢迎来到北京中盛润德！</div>
        <div class="login_box">
          <router-link v-if="!userinfo" to='login' class="login">
            <span>登录</span>
          </router-link>
          <router-link v-if="!userinfo" to='login' class="register">
            <span>注册</span>
          </router-link>
          <img :src="userinfo.avatar" style="width:26px;height:26px;border-radius: 50%;margin-right:5px;margin-left:10px" alt="" v-if="userinfo">
          <a href="javascript:;" v-if="userinfo" @click="goUser" style="position: relative;top:4px;">个人中心{{path}}</a>
        </div>
      </div>
    </div>
    <div class="header_menu">
      <div class="inner">
        <div class="logo_box">
          <router-link to="/home" class="logo">
            <img src="@/assets/logo.png" alt="" />
          </router-link>
          <div class="logo_text">
            <img src="@/assets/logo_text.png" alt="" />
          </div>
        </div>
        <div :class="['menu_box',mobile ? 'mobile' : '']" @click="mobile=false">
          <div class="menu_list" @click.stop="">
            <div :class="['item',item.active || navId==item.id ? 'active' : '']" v-for="(item,index) in linkList" :key="item.id" @click="change(linkList,item,index)">
              <router-link :to="item.url" :target="item.id==2?'_blank':''">{{item.name}}</router-link>
            </div>
          </div>
        </div>
        <div class="mobile_btn" @click="mobile=true">
          <i class="iconfont iconenabled"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'navBar',
  props: ['routeName'],
 inject:['reload'],  

  data(){
    return{
      path: '',
      searchBox:false,
      userinfo:'',
      navId:1,
      text:'',
      mobile:false,
      linkList:[
        {
          id: 1,
          name: '首页',
          url: '/',
          active: false
        },
        {
          id: 2,
          name: '选课中心',
          url: '/lesson',
          active: false
        },
        {
          id: 3,
          name: '了解考研',
          url: '/learn',
          active: false
        },
        {
          id: 4,
          name: '中盛资讯',
          url: '/info',
          active: false
        },
        {
          id: 5,
          name: '关于中盛',
          url: '/about',
          active: false
        },
      ],
    }
  },

  mounted(){
    this.getinfo()
    this.navId = sessionStorage.getItem('navId')
  },
  methods:{
    getinfo(){
      if(localStorage.getItem('userinfo')){
        this.userinfo=JSON.parse(localStorage.getItem('userinfo'))
        console.log(this.userinfo)
      }
    },
    change(list,item,index){
      list.forEach((e,i) => i===index ? e.active=true : e.active=false)
      this.navId = item.id
      sessionStorage.setItem('navId',item.id)
      this.mobile = false
    },
    goUser(){
      if (!this.$route.path.includes('/user')) {
        this.$router.push({path:'/user'})
        sessionStorage.setItem('navId',6)
        this.reload()
      }
    }
  },
}
</script>

<style lang="less" scoped>
  // .head{
  //   height: 40px;
  //   width: 100%;
  //      background-color: #f5f5f5;
  //   .head1{
  //     width: 1330px;
  //     height: 40px;
  //     margin:0 auto;
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     font-size: 13px;
  //     color:#676767;
  //     .right{
  //       display: flex;
  //       align-items: center;
  //       span{
  //         margin-left: 30px;
  //       }
  //     }
  //   }
  // }
  // .inner,.menu_box,.menu_list{
  //   height: 80px;
  // }
  // .inner{
  //   .logo{
  //     img{
  //       height: 46px!important;
  //     }
  //     height: 46px;
  //     width: 46px;
  //   }
  // }

</style>