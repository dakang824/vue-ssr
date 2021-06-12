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
                <span>选课中心</span>
                <span class="arrow">></span>
                <span>教师详情</span>
                <span class="arrow">></span>
                <span>课程详情</span>
            </div>
            <div class="details_inner">
                <div class="details_right">
                    <div class="details_ads">
                        <img :src="lessonInfo.images" alt="图片找不到了">
                    </div>
                    <div ref="present" class="details_right_tabbar">
                        <a href="javascript:;" class="details_right_btn active" @click="pageScroll('present')">课程介绍</a>
                        <a href="javascript:;" class="details_right_btn" @click="pageScroll('timetable')">课程表</a>
                        <a href="javascript:;" class="details_right_btn" @click="pageScroll('explain')">购买须知</a>
                    </div>
                    <div class="details_right_inner">
                        <div v-for="item in teachersInfo" :key="item.id">
                            <h4 class="details_right_title">老师介绍：{{item.name}}</h4>
                            <p class="details_right_text">{{item.content}}</p>
                        </div>
                        <h4 ref="timetable" class="details_right_title">课程表：</h4>
                        <div class="list_content">
                            <div class="list_content_inner" v-for="item in subject" :key="item.id">
                                <div class="list_content_title table">
                                    <h5>{{item.name}}</h5>
                                    <h6>共{{item.hour}}课时</h6>
                                </div>
                                <div class="list_content_item" v-for="item in item.course_hour" :key="item.id">
                                    <h6>{{item.title}}</h6>
                                    <p class="list_content_time">时长：{{item.duration}}</p>
                                </div>
                            </div>
                        </div>
                        <h4 ref="explain" class="details_right_title">购买须知：</h4>
                        <p class="details_right_text" v-html="lessonInfo.purchase_notes"></p>
                        <h4 class="details_right_title">报考条件</h4>
                        <p class="details_right_text" v-html="lessonInfo.condition"></p>
                        <h4 class="details_right_title">报名时间</h4>
                        <p class="details_right_text" v-html="lessonInfo.registration_time"></p>
                    </div>
                </div>
                <div class="details_left">
                    <h2 class="details_left_title">{{lessonInfo.title}}</h2>
                    <p class="details_left_text">主讲：<span v-for="item in teachersInfo" :key="item.id">{{item.name}}</span></p>
                    <div class="details_left_wrap">
                        <h2 class="details_left_title price">{{lessonInfo.price==0 ? '免费课程' : lessonInfo.price}}</h2>
                        <p class="details_left_text">课程服务：{{lessonInfo.course_service}}</p>
                        <p class="details_left_text">授课形式：{{lessonInfo.teaching_form}}</p>
                    </div>
                    <div class="details_left_btn">
                        <el-button class="free_btn" type="button" v-if="lessonInfo.type==1" @click="routerLink(lessonInfo)">{{lessonInfo.is_receive==0 ? '免费领取' : '立即播放'}}</el-button>
                        <div class="charge_btn" v-else>
                            <el-button  class="info_btn" @click="centerDialogVisible = true">立即咨询</el-button>
                            <el-button  class="enlist_btn" @click="routerLink(lessonInfo)" >{{lessonInfo.is_buy==0 ? '立即报名' : '立即播放'}}</el-button>
                        </div>

                        <el-dialog
                            title="免费咨询"
                            :visible.sync="centerDialogVisible"
                            width="30%"
                            center>
                            <img :src="lessonInfo.qrcode" alt="图片找不到了">
                            <span slot="footer" class="dialog-footer">
                                <span>添加老师微信，免费在线咨询</span>
                            </span>
                        </el-dialog>

                        <!-- Form -->
                        <el-dialog title="免费领取" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="您的名字" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="电话号码" :label-width="formLabelWidth">
                                <el-input v-model="form.phone" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱" :label-width="formLabelWidth">
                                <el-input v-model="form.email" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="QQ号码" :label-width="formLabelWidth">
                                <el-input v-model="form.qq" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="留言内容" :label-width="formLabelWidth">
                                <el-input type="textarea" v-model="form.content" maxlength="200" show-word-limit></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="receive">确 定</el-button>
                        </div>
                        </el-dialog>
                    </div>
                    <p class="details_left_text">已有{{lessonInfo.buy_num}}人{{lessonInfo.type == 2 ? '购买' : '领取'}}</p>
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
            centerDialogVisible:false,
            dialogFormVisible: false,
            form: {
                name: '',
                phone: '',
                email: '',
                qq: '',
                content: '',
                delivery: false,
            },
            formLabelWidth: '120px',
            course_id:'',
            lessonInfo:{},
            teachersInfo:[],
            subject:[],
            list:[]
        }
    },
    mounted(){
        this.course_id = this.$route.query.id
        this.get('course/detail',true,{course_id:this.course_id}).then((res) => {
            this.lessonInfo = res.data
            this.teachersInfo = res.data.teachers
            this.subject = res.data.subject
        })
        document.title='课程详情'
    },
    methods: {
        pageScroll(ref){
            let {offsetTop} = this.$refs[ref];
            window.scrollTo({top:offsetTop,behavior:'smooth'});
        },
        receive(){
            let {name,phone,email,qq,content} = this.form
            if (!name.trim()) {
                this.$message({
                    message: '名字不能为空',
                    type: 'warning'
                });
            } else if (!phone.trim()) {
                this.$message({
                    message: '手机号不能为空',
                    type: 'warning'
                });
            } else if (!email.trim()) {
                this.$message({
                    message: '邮箱不能为空',
                    type: 'warning'
                });
            } else if (!qq.trim()) {
                this.$message({
                    message: 'QQ号码不能为空',
                    type: 'warning'
                });
            }else{
                this.dialogFormVisible = false
                this.post('course/receive',{course_id:this.course_id,name,phone,email,qq,content}).then((res) => {
                if (res.code == 1) {
                    this.$message({
                        message: '领取成功',
                        type: 'success'
                    });
                    this.$router.replace({name:'User'})
                }else{
                    this.$message.error('领取失败');
                }
            })
            }
        },
        routerLink(lessonInfo){
            if (lessonInfo.type==1 && lessonInfo.is_receive==0) {
                this.dialogFormVisible = true
            }else if(lessonInfo.type!=1 && lessonInfo.is_buy==0){
                this.$router.push({name:'Pay',query:{id:lessonInfo.id}})
            }else{
                this.$router.push({name:'Video',query:{id:lessonInfo.id}})
            }
        }
    }
}
</script>

<style>

</style>