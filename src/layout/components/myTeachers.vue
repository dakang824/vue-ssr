<template>
  <div class="aboutus">
      <ul class="aboutus_tabbar">
          <li class="aboutus_tabbar_item" :class="item.active ? 'active' : ''" v-for="(item,index) in tabbarList" :key="item.id" @click="change(tabbarList,index)">
              <router-link class="aboutus_tabbar_link" :to="item.url">{{item.name}}</router-link>
          </li>
      </ul>
      <div class="breadcrumb">
          <div class="aboutus_title">
              <h5>我的班主任</h5>
          </div>
      </div>
      <div class="myteachers">
          <h6 class="myteachers_title">联系电话：</h6>
          <p class="myteachers_text">{{teacher.phone}}</p>
          <h6 class="myteachers_title">微信号：</h6>
          <p class="myteachers_text">{{teacher.wechat}}</p>
          <h6 class="myteachers_title">QQ号：</h6>
          <p class="myteachers_text">{{teacher.qq_account}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            tabbarList:[
                {
                    id: 1,
                    name: "我的班主任",
                    url: "",
                    active: true,
                },  
            ],
            teacher:'',
        }
    },
    created(){
        this.getmyTeacher()
    document.title='北京中盛润德-我的班主任'

    },
    methods:{
        getmyTeacher(){
            this.get('usercenter/teacher',true).then(res=>{
                    this.teacher=res.data
            })
        },
        change(list,index){
            list.forEach((e,i) => i===index ? e.active=true : e.active=false)
        },
    }
}
</script>

<style>

</style>