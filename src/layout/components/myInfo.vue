<template>
  <div class="aboutus">
      <ul class="aboutus_tabbar">
          <li class="aboutus_tabbar_item" :class="item.active ? 'active' : ''" v-for="(item,index) in tabbarList" :key="item.id" @click="change(tabbarList,index)">
              <router-link class="aboutus_tabbar_link" :to="item.url">{{item.name}}</router-link>
          </li>
      </ul>
      <div class="breadcrumb">
          <div class="aboutus_title">
              <h5>个人资料</h5>
          </div>
      </div>
      <div class="myinfo">
          <form class="myinfo_form" action="post">
              <div class="myinfo_account">
                  <h4 class="myinfo_form_title">账户信息</h4>
               
                    <div class="myinfo_form_item">
                      <label for="nickname">用户头像:</label>
                     <el-upload
  class="avatar-uploader"
  action="https://www.zhongshengrunde.com/upload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
 >
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

                  </div>
                     <div class="myinfo_form_item">
                      <label for="nickname">用户昵称:</label>
                      <input type="text" name="nickname" v-model="nickname" id="nickname">
                  </div>
              </div>
              <div class="myinfo_students">
                  <h4 class="myinfo_form_title">学员信息</h4>
                  <div class="myinfo_form_item">
                      <label for="nickname">真实姓名:</label>
                      <input type="text" name="nickname" v-model="studyname" id="nickname">
                  </div>
                  <div class="myinfo_form_item">
                      <label for="tel">手机号:</label>
                      <input type="number" name="tel" disabled v-model="phone" id="tel">
                  </div>
                  <div class="myinfo_form_item">
                      <label for="email">邮箱:</label>
                      <input type="email" name="email" v-model="email" id="email">
                  </div>
              </div>
                <div class="sub" @click="setinfo">提交</div>
              <!-- <input type="submit" value="提交"> -->
          </form>
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
                    name: "个人资料",
                    url: "",
                    active: true,
                  
                },  
            ],
              username:'',
                    studyname:'',
                    phone:'',
                    email:'',
                    imageUrl:'',
        }
    },
 inject:['reload'],  

    created(){
        document.title='北京中盛润德-个人资料'
        this.get('course/detail',true,{
            course_id:5
        }).then(res=>{
            
        })
        if(localStorage.getItem('userinfo')){
 let info=JSON.parse(localStorage.getItem('userinfo'))
        this.nickname=info.nickname
        this.studyname=info.truename
        this.phone=info.mobile
        this.email=info.email
        this.imageUrl=info.avatar
        }else{
            this.$router.push('/login')
        }
      
    },
    methods:{
        change(list,index){
            list.forEach((e,i) => i===index ? e.active=true : e.active=false)
        },
        // 获取用户信息
        getuserinfo(){
            this.post('getuserinfo').then(res=>{
                let info=res.data
                 this.username=info.nickname
                    this.studyname=info.truename
        this.phone=info.mobile
        this.email=info.email
        this.imageUrl=info.avatar
        localStorage.setItem('userinfo',JSON.stringify(res.data))   
            this.reload()

          this.$emit('getuserinfo')
            })
        },
        // 上传头像
        handleAvatarSuccess(res){
            let that=this
            that.imageUrl=res.data.url
        },
        setinfo(){
            let that=this
            if(!this.imageUrl){
                this.$message.error('请上传头像')
                return false
            }else if(!this.nickname){
                this.$message.error('请输入用户昵称')
                return false

            }else if(!this.studyname){
                this.$message.error('请输入学员用户昵称')
                return false

            }else if(!this.phone){
                this.$message.error('请输入手机号')
                return false

            }else if(!this.email){
                this.$message.error('请输入邮箱')
                return false

            } 
            this.post('usercenter/profile',{
                email:this.email,
                truename:this.studyname,
                mobile:this.mobile,
                nickname:this.nickname,
                avatar:this.imageUrl

            }).then(res=>{
                if(res.code==1){
                       this.$message({
                        message: res.msg,
                        type: "success",
                    });
                    this.getuserinfo()
                }else{
                    this.$message.error(res.msg)

                }
            })
        },
    }
}
</script>

<style>
    .myinfo_form_item{
        display: flex;

    }
       .sub{
        text-indent: 0;
    width: 140px;
    height: 40px;
    background-color: #052d47;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    cursor: pointer;
    }
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .avatar {
    width: 78px;
    height: 78px;
    display: block;
  }

</style>