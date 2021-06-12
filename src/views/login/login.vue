<template>
  <div class="content">

    <div class="login_div">
      <div class="content">
        <div class="left">
          <img src="../../assets/login_logo.png" alt="" />
          <p class="p1">北京中盛润德</p>
          <p class="p2">
            <span>Bei</span>
            <span>Jing</span>
            <span>Zhong</span>
            <span>Sheng</span>
            <span>Run</span>
            <span>De</span>
          </p>

          <p class="p3">学习成就梦想 梦想成就未来</p>
        </div>
        <div class="right">
          <div class="type" v-if="logintype == 1 || logintype == 2">
            <p :class="logintype == 1 ? 'p' : ''" @click="changetype(1)">
              快捷登录
            </p>
            <p :class="logintype == 2 ? 'p' : ''" @click="changetype(2)">
              密码登录
            </p>
          </div>
          <!-- 手机号 -->
          <div class="input">
            <input type="text" placeholder="请输入手机号" v-model="mobile" />
          </div>
          <!-- 用户名 -->
          <div class="input" v-if="logintype == 3">
            <input type="text" placeholder="请输入用户名" v-model="nickname" />
          </div>
          <!-- 密码 注册 -->
          <div class="input" v-if="logintype == 3">
            <input type="password" placeholder="请设置密码" v-model="regiestpass" />
          </div>
          <!-- 验证码 -->
          <div
            class="input"
            v-if="logintype == 1 || logintype == 3 || logintype == 4"
          >
            <input type="text" placeholder="请输入验证码" v-model="code" />
            <p class="getcode" @click="getcode">{{getcode_tit}}</p>
          </div>
          <!-- 密码 登录 -->
          <div class="input" v-if="logintype == 2">
            <input type="password" placeholder="请输入密码" v-model="loginpass" />
          </div>
          <!-- 新密码 重置 -->
          <div class="input" v-if="logintype == 4">
            <input type="password" placeholder="请输入新密码" v-model="newpass" />
          </div>
          <!-- 确认密码 -->
          <div class="input" v-if="logintype == 4">
            <input
              type="password"
              placeholder="请再次输入新密码"
              v-model="newpassagain"
            />
          </div>

          <div class="agreemet">
            <input type="checkbox" :checked="agree" @click="agree = !agree" />
            <p>
              我已阅读并接受 <span @click="open(1)">《注册条款》</span>、<span
                @click="open(2)">《隐私保护协议》</span
              >
            </p>
          </div>
          <div
            class="login"
            v-if="logintype == 1 || logintype == 2"
            @click="login"
          >
            登录
          </div>
          <div class="login" v-if="logintype == 3" @click="regiest">
            立即注册
          </div>
          <div class="login" v-if="logintype == 4" @click="resetpwd">
            重置密码
          </div>

          <div class="caozuo" v-if="logintype == 1 || logintype == 2">
            <span @click="changetype(4)">忘记密码</span> |
            <span @click="changetype(3)">注册</span>
          </div>
          <div
            class="caozuo"
            v-if="logintype == 3 || logintype == 4"
            @click="changetype(1)"
          >
            <p>已有账号，<span>请登录</span></p>
          </div>
        </div>
      </div>
    </div>
         <el-dialog
  :title="xieyitit"
  :visible.sync="dialogVisible"
 >
  <div style="text-algin:left"  v-html="xieyi"></div>
  <span slot="footer" class="dialog-footer">
    <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
  </span>
</el-dialog>
  </div>
</template>

<script>
import navBar from '../../layout/components/navBar'
export default {
  data() {
    return {
      agree: false,
      logintype: 1, //1=验证码登录 2=密码登录 3=注册 4=忘记密码
      getcode_tit: "获取验证码",
      mobile: "",
      nickname: "",
      regiestpass: "",
      code: "",
      isSendCode: true,
      loginpass: "",
      newpass: "",
      newpassagain: "",
      dialogVisible:false,
      interval: "",
      xieyi:"",
      xieyitit:"注册协议",
    };
  },
 inject:['reload'],  

  mounted() {
    document.title = "登录";
    // sessionStorage.setItem('navId',6)
    // this.reload()
  },
  methods: {
    open(type){
      this.get('/config',true).then(res=>{
          if(type==1){
            this.xieyitit='注册条款'
            this.xieyi=res.data.register_protocol
          }else {
            this.xieyitit='隐私保护协议'

            this.xieyi=res.data.policy

          }
      })
      this.dialogVisible=true
    },
    changetype(e) {
      this.logintype = e;
      this.code = "";
      if (e == 1 || e == 2) {
        document.title = "登录";
      } else if (e == 3) {
        document.title = "注册";
      } else if (e == 4) {
        document.title = "忘记密码";
      }
    },
    // 获取验证码
    getcode() {
        if(this.isSendCode){

       
      if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
        this.$message.error("手机号格式不正确");
        return false;
      }
      let data = {
        mobile: this.mobile,
      };
      if (this.logintype == 1) {
        data.event = "mobilelogin";
      } else if (this.logintype == 3) {
        data.event = "register";
      } else if (this.logintype == 4) {
        data.event = "resetpwd";
      }
      this.post("sms/send", data).then((res) => {
        if (res.code == 1) {
          this.$message({
            message: res.msg,
            type: "success",
          });
          // 发送成功 按钮进入倒计时
          this.isSendCode = false;
          let a = 60;
          this.interval = setInterval(() => {
            a--;
            this.getcode_tit = a;
            if (a == 0) {
              this.getcode_tit = "获取验证码";
              this.isSendCode = true;
              clearInterval(this.interval);
            }
          }, 1000);
        } else {
          this.$message.error(res.msg);
        }
      });
       }else{
            this.$message('请在倒计时结束后重新获取')
        }
    },
    // 登录
    login() {
            if (this.agree) {
                  if (this.logintype == 1) {
        // 手机号验证码登录
        this.post("mobile/login", {
          mobile: this.mobile,
          captcha: this.code,
        }).then((res) => {
              if(res.code==1){
            this.$message({
            message: res.msg,
            type: "success",
          });
                localStorage.setItem('userinfo',JSON.stringify(res.data))
                localStorage.setItem('token',res.data.token)
                this.reload();

                this.$router.push('/')
          }else{
              this.$message.error(res.msg)
          }
        });
      } else if (this.logintype == 2) {
        // 手机号密码登录
        this.post("password/login", {
          mobile: this.mobile,
          password: this.loginpass,
        }).then((res) => {
          if(res.code==1){
            this.$message({
            message: res.msg,
            type: "success",
          });
                localStorage.setItem('userinfo',JSON.stringify(res.data))
                localStorage.setItem('token',res.data.token)
                this.reload();

                this.$router.push('/')
          }else{
              this.$message.error(res.msg)
          }
        });
      }
            }else{
        this.$message("请勾选同意注册协议及隐私保护协议");

            }

  
    },
    // 注册
    regiest() {
      if (this.agree) {
        if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
          this.$message.error("手机号格式不正确");
          return false;
        } else if (!this.nickname) {
          this.$message.error("请输入用户名");
        } else if (!this.nickname) {
          this.$message.error("请输入密码");
        } else if (!this.nickname) {
          this.$message.error("请输入验证码");
        } else {
          this.post("register", {
            mobile: this.mobile,
            username: this.nickname,
            password: this.regiestpass,
            captcha: this.code,
          }).then((res) => {
            if (res.code == 1) {
                localStorage.setItem('userinfo',JSON.stringify(res.data))
                localStorage.setItem('token',res.data.token)
                this.reload()
                this.$router.push('/')
                this.mobile=''
                this.code=''
                this.password=''
            }else{
              this.$message.error(res.msg);
            }
          });
        }
      } else {
        this.$message("请勾选同意注册协议及隐私保护协议");
      }
    },
    // 重置密码
    resetpwd(){
      if (this.agree) {
         if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
          this.$message.error("手机号格式不正确");
          return false;
        } else if (!this.code) {
          this.$message.error("请输入验证码");
        } else if (!this.newpass) {
          this.$message.error("请输入新密码");
        } else if (!this.newpassagain) {
          this.$message.error("请再次输入新密码");
        } else{
            this.post('resetpwd',{
                mobile:this.mobile,
                captcha:this.code,
                newpassword:this.newpass
            }).then(res=>{
              if(res.code==1){
                this.$message({
            message: res.msg,
            type: "success",
          });
              this.logintype=1
              }else{
                this.$message.error(res.msg)
              }
            })
        }
      }else{
        this.$message("请勾选同意注册协议及隐私保护协议");

      }
         
    },
  },
};
</script>

<style lang='less' scoped>
.login_div {
  background: url("../../assets/loginback.png") no-repeat;
  width: 100%;
  height: calc(100vh - 87px);
  // margin-top: 87px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 1024px;
    height: 570px;
    display: flex;
    margin-top: -20px;
    .left {
      width: 512px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        height: 120px;
        width: auto;
      }
      p {
        color: #ffffff;
      }
      .p1 {
        font-size: 40px;
        font-weight: bolder;
        letter-spacing: 10px;
        margin-top: 30px;
      }
      .p2 {
        font-size: 16px;
        font-weight: bold;
        span {
          margin-right: 10px;
        }
      }
      .p3 {
        font-size: 16px;
        margin-top: 52px;
      }
    }

    .right {
      width: 512px;
      height: 100%;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      flex-direction: column;
      .type {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        p {
          font-size: 18px;
          padding: 10px 0;
          margin: 0 30px;
          cursor: pointer;
          box-sizing: border-box;
        }
        .p {
          border-bottom: 2px solid #052d47;
          box-sizing: border-box;
        }
      }
      .input {
        width: 386px;
        border-bottom: 1px solid #e5e5e5;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        input {
          font-size: 15px;
          height: 36px;
          border: none;
        }
        .getcode {
          height: 36px;
          width: 122px;
          background-color: #f2f2f2;
          line-height: 36px;
          text-align: center;
          font-size: 14px;
          color: #666666;
          border-radius: 4px;
          cursor: pointer;
        }
      }
      .agreemet {
        display: flex;
        align-items: center;
        width: 386px;
        margin-top: 20px;
        input {
          cursor: pointer;
          width: auto;
          height: auto;
          text-indent: 0  ;
          border-radius: 0;
        }

        p {
          color: #999999;
          margin-left: 5px;
          span {
            color: #052d47;
            cursor: pointer;
          }
        }
      }
      .login {
        height: 50px;
        width: 386px;
        line-height: 50px;
        background-color: #052d47;
        text-align: center;
        color: #ffffff;
        font-size: 13px;
        border-radius: 25px;
        margin-top: 30px;
        cursor: pointer;
      }
      .caozuo {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #999999;
        margin-top: 30px;
        span {
          margin: 0 5px;
        }
        span:hover {
          cursor: pointer;
          color: #333333;
        }
        p {
          font-size: 16px;
          color: #999999;
          cursor: pointer;
          span {
            color: #052d47;
          }
        }
      }
    }
  }
}
@media screen and (max-width:1400px) {
  .login_div{
    .content{
      transform: scale(0.85);
    }
  }
}
@media screen and (max-width:1200px) {
  .login_div{
    .content{
      transform: scale(0.8);
    }
  }
}
@media screen and (max-width:1024px) {
  .login_div{
    .content{
      transform: scale(.9);
      justify-content: center;
      .left{
        display: none;
      }
      .right{
        width: 462px;
      }
    }
  }
}
@media screen and (max-width:480px) {
  .login_div{
    .content{
      transform: scale(1);
      justify-content: center;
      align-items: center;
      .left{
        display: none;
      }
      .right{
        width: 80%;
        height: 90%;
        padding: 2% 0;
        border-radius: 8px;
        .type{
          margin: 60px 25px 0;
          p{
            font-size: 16px;
          }
        }
        .input{
          width: 80%;
          margin-top: 25px;
          input{
            width: 80%;
          }
          .getcode{
            font-size: 12px;
          }
        }
        .agreemet{
          width: 80%;
        }
        .login{
          width: 80%;
          height: 40px;
          line-height: 40px;
        }
        .caozuo{
          p{
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media screen and (max-width:400px) {
  .login_div{
    .content{
      .right{
        width: 80%;
        height: 80%;
        padding: 3% 0;
        border-radius: 8px;
        .type{
          margin: 10% 25px 0;
          p{
            font-size: 15px;
            margin: 0 25px;
          }
        }
        .input{
          width: 80%;
          margin-top: 15px;
          input{
            width: 80%;
          }
          .getcode{
            font-size: 12px;
          }
        }
        .agreemet{
          width: 80%;
        }
        .login{
          width: 80%;
          height: 40px;
          line-height: 40px;
          margin-top: 20px;
        }
        .caozuo{
          margin-top:20px;
        }
      }
    }
  }
}
</style>