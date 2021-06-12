<template>
  <div class="content">
    <div class="details">
        <div class="inner">
            <div class="breadcrumb">
                <router-link to="/">
                    <img src="../../assets/home_icon.png" alt="图片找不到了">
                    <span>首页</span>
                </router-link>
                <span class="arrow">></span>
                <span>考研</span>
                <span class="arrow">></span>
                <span>教师详情</span>
            </div>
            <div class="details_inner">
                <div class="teachers_left">
                    <div class="teachers_left_header">
                        <img src="../../assets/logo_2.png" alt="图片找不到了">
                    </div>
                    <div class="teachers_left_body">
                        <div class="teachers_left_img">
                            <img :src="teacherInfo.avatar" alt="图片找不到了">
                        </div>
                        <h2 class="teachers_left_title">{{teacherInfo.name}}</h2>
                        <div class="teachers_left_label">
                            <span v-for="(item,index) in teacherInfo.tag" :key="index">{{item}}</span>
                        </div>
                        <p class="teachers_left_text">
                            {{teacherInfo.content}}
                        </p>
                    </div>
                </div>
                <div class="details_right">
                    <div class="details_right_tabbar">
                        <button type="button" class="details_right_btn active" @click="pageScroll('teacher')">教师详情</button>
                        <button type="button" class="details_right_btn" @click="pageScroll('correlation')">相关课程</button>
                    </div>
                    <div class="details_right_inner" ref="teacher">
                        <h4 class="details_right_title">主讲科目：</h4>
                        <p class="details_right_text">{{teacherInfo.subject}}</p>
                        <h4 class="details_right_title">学术背景：</h4>
                        <p class="details_right_text">{{teacherInfo.academic_background}}</p>
                        <h4 class="details_right_title">授课特点：</h4>
                        <p class="details_right_text">{{teacherInfo.teaching_characteristics}}</p>
                        <h4 class="details_right_title">专业证书</h4>
                        <swiper ref="detailsSwiper" :options="swiperOptions">
                            <swiper-slide v-for="(item,index) in teacherInfo.certificate" :key="index" >
                                <img class="details_swiper_img" :src="item" alt="图片找不到了" @click="boots(item)">
                            </swiper-slide>
                        </swiper>
                        <div class="swiper_btn_wrap">
                            <div class="swiper-button-prev swiper-button-black"></div>
                            <div class="swiper-button-next swiper-button-black"></div>
                        </div>
                        <el-dialog :visible.sync="img" width="30%" class="el_boots">
                            <img :src="bootsImg" alt="图片找不到了">
                        </el-dialog>
                        <h4 class="details_right_title" ref="correlation">相关课程</h4>
                        <div class="list_content">
                            <div class="list_box wow fadeInUp" data-wow-delay=".3s">
                                <div class="item" v-for="item in list" :key="item.id">
                                    <a class="bg" href="javascript:;" @click="routerLink(item.type,item.id)">
                                    <div class="text_box">
                                        <div class="tag">{{item.category_name}}</div>
                                        <div class="title">{{item.title}}</div>
                                        <div class="date">时间：{{item.create_time_text}} I {{item.course_hour}}课时</div>
                                        <div class="face_item">
                                            <div class="face_box" v-for="el in item.teacher" :key="el.id">
                                                <div class="face">
                                                <img :src="el.avatar" alt="" />
                                                </div>
                                                <div class="name">{{el.name}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bottom">
                                        <div class="num" v-if="item.type!=0">已有{{item.buy_num}}人{{item.type == 2 ? '购买' : '领取'}}</div>
                                        <div v-else></div>
                                        <div class="price">
                                        <span class="old">￥{{item.original_price}}</span><span class="now">{{item.price==0 ? '免费' : item.price}}</span>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            img:false,
            bootsImg:'',
            teacherInfo:{},
            list:[],
            swiperOptions:{
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView:4,
                spaceBetween:40,

            }
        }
    },
    mounted(){
        document.title='教师详情'
        let teacher_id = this.$route.query.id
        this.get('teacher/detail',true,{teacher_id}).then((res) => {
            this.teacherInfo = res.data
            this.list = res.data.course
        })
    },
    methods: {
        pageScroll(ref){
            let {offsetTop} = this.$refs[ref]
            window.scrollTo({top:offsetTop,behavior: "smooth"});
        },
        routerLink(type,id){
            let componentName;
            if (type===0) {
                componentName='Lesson'
            }else{type===1}{
                componentName='Details'
            }
            this.$router.push({name:componentName,query:{'type':type,'id':id}})
        },
        boots(item){
            this.img = true
            this.bootsImg = item
        }
    }
}
</script>

<style>

</style>