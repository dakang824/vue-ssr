<template>
  <div class="content">
      <div class="banner banner_1" >
          <h1 class="banner_title">选课中心</h1>
          <p class="banner_text">专注教育23年 缔造教学神话</p>
      </div>
      <div class="inner">
          <div class="breadcrumb">
                <router-link to="/">
                    <img src="../../assets/home_icon.png" alt="图片找不到了">
                    <span>首页</span>
                </router-link>
                <span class="arrow">></span>
                <span>选课中心</span>
          </div>
          <div class="tabbar" v-if="!search">
              <ul class="tabbar_item">
                  <h6 class="tabbar_title">课程</h6>
                  <li class="tabbar_btn" :class="lessonActive==index ? 'active' : ''" v-for="(item,index) in lessonList" :key="item.id" @click="lessonChange(item,index)">
                      <button type="button">{{item.name}}</button>
                  </li>
              </ul>
              <ul class="tabbar_item">
                  <h6 class="tabbar_title">分类</h6>
                  <li class="tabbar_btn" :class="categoryActive==index ? 'active' : ''" v-for="(item,index) in categoryList" :key="item.id" @click="categoryChange(item,index)">
                      <button type="button">{{item.name}}</button>
                  </li>
              </ul>
          </div>
          <div v-else class="search_text">
              搜索结果“{{search}}”
          </div>
      </div>
      <div class="wrap list">
          <div class="inner">
              <div class="list_title">
                  <div class="list_title_left">
                      <img src="../../assets/book_icon.png" alt="图片找不到了">
                      <h4>课程列表</h4>
                  </div>
                  <div class="list_title_right">
                      共<span class="blue_text">{{pager.total}}</span>个课程
                  </div>
              </div>
              <div class="list_content" >
                  <div v-if="type == 0 " >
                    <div v-for="(item,index) in list" :key='index'>
                        <div v-for="e in item.subject" :key="e.id">
                            <div class="list_content_inner" >
                                <h5 class="list_content_title">{{e.name}}</h5>
                                <div class="list_content_item" v-for="v in e.course_hour" :key="v.id">
                                    <h6>{{v.title}}</h6>
                                    <router-link :to="'/video?id='+item.id+'&course_hour_id='+v.id+'&seconds=0'">
                                        <!-- <span class="blue_text">{{item.duration}}</span> -->
                                        <span class="blue_text">播放</span>
                                        <img src="../../assets/play_circle_icon.png" alt="图片找不到了">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div v-else-if="type != 0 ">
                    <div class="list_box wow fadeInUp" data-wow-delay=".3s">
                        <div class="item" v-for="(item,index) in list" :key='index'>
                            <a class="bg" href="javascript:;" @click="routerLink(item.type,item.id)">
                            <div class="text_box">
                                <div class="tag">{{item.category_name}}</div>
                                <div class="title">{{item.title}}</div>
                                <div class="date">时间：{{item.create_time_text}} I {{item.course_hour}}课时</div>
                                <div class="face_item">
                                    <a href="javascript:;" v-for="el in item.teacher" :key="el.id" @click.stop="subRouterLink(el.id)">
                                        <div class="face">
                                        <img :src="el.avatar" alt="" />
                                        </div>
                                        <div class="name">{{el.name}}</div>
                                    </a>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="num">已有{{item.buy_num}}人{{item.type == 2 ? '购买' : '领取'}}</div>
                                <div class="price">
                                <span class="old">￥{{item.original_price}}</span><span class="now">{{item.price==0 ? '免费' : item.price}}</span>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
              </div>
                <div v-if="pager.total==0">
                      <nodata></nodata>
                  </div>
              <div class="pager">
                <el-pagination
                background
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页"
                :total="pager.total"
                :page-size="pager.per_page"
                @current-change="currentChange"
                hide-on-single-page>
                </el-pagination>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import nodata from '@/layout/components/nodata.vue'
export default {
    name:'lesson',
    components:{
        nodata
    },
    data(){
        return{
            search:'',
            type:0,
            page:1,
            pager:{},
            category_id:0,
            lessonActive:0,
            categoryActive:0,
            lessonList: [],
            categoryList:[],
            subject:[],
            list:[]
        }
    },
    mounted(){
        document.title = '选课中心'
        this.search = this.$route.query.search
        if(this.search){
                this.get('course/list',true,{page:this.page,keyword:this.search}).then((res) => {
                this.pager = res.data
                this.list = res.data.data
                if(res.data.total) this.type = res.data.data[0].type
                // if(res.data.total && res.data.data[0].type==0) this.subject = res.data.data[0].subject
            })
            return false
        }
        this.type = this.$route.query.type
        this.get('course/category',true).then((res) => {
            this.lessonList = res.data
            this.categoryList = res.data[0].two_category
            let id = this.$route.query.id
            let two_category_id;
            if (id) {
                this.category_id = id
                // two_category_id = res.data.filter(e => e.two_category[0].pid==id)[0].two_category[0].id
                this.lessonList.forEach(v=>{
                    if(v.id== this.$route.query.id){
                        this.lessonChange(v,this.lessonList.indexOf(v))
                    }
                })
            }else{
                this.category_id = res.data[0].id
                two_category_id = res.data[0].two_category[0].id
                this.lessonChange(this.lessonList[0],0)
            }
            // this.get('course/list',false,{category_id:this.category_id,two_category_id,page:this.page}).then((res) => {
            //     this.pager = res.data
            //     if(res.data.data) this.list = res.data.data
            //     if(res.data.total) this.type = res.data.data[0].type
            //     if(res.data.total && res.data.data[0].type==0) this.subject = res.data.data[0].subject
            // })
        })
    },
    methods:{
        lessonChange(item,index){
            this.page = 1
            this.lessonActive = index
            this.categoryActive = 0
            this.categoryList = item.two_category
            this.category_id = item.id
            this.get('course/list',true,{category_id:this.category_id,two_category_id:item.two_category[0].id,page:this.page}).then((res) => {
                this.pager = res.data
                this.list = res.data.data
                if(res.data.total) this.type = res.data.data[0].type
                // if(res.data.total && res.data.data[0].type==0) this.subject = res.data.data[0].subject
            })
        },
        categoryChange(item,index){
            this.page = 1
            this.categoryActive = index
            this.category_id = item.pid
            this.get('course/list',true,{category_id:this.category_id,two_category_id:item.id,page:this.page}).then((res) => {
                this.pager = res.data
                this.list = res.data.data
                if(res.data.total) this.type = res.data.data[0].type
                // if(res.data.total && res.data.data[0].type==0) this.subject = res.data.data[0]
            })
        },
        routerLink(type,id){
            let componentName;
            if (type===0) {
                componentName='Lesson'
            }else{type===1}{
                componentName='Details'
            }
            this.$router.push({name:componentName,query:{type,id}})
        },
        subRouterLink(id){
            this.$router.push({name:'Teachers',query:{id}})
        },
        currentChange(e){
            this.page=e
            this.get('course/list',true,{page:this.page,category_id:this.category_id}).then((res) => {
                this.infoList = res.data.data
            })
        }
    }
}
</script>

<style>

</style>