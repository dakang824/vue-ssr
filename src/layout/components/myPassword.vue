<template>
  <div class="aboutus">
    <ul class="aboutus_tabbar">
      <li
        class="aboutus_tabbar_item"
        :class="item.active ? 'active' : ''"
        v-for="(item, index) in tabbarList"
        :key="item.id"
        @click="change(tabbarList, index)"
      >
        <router-link class="aboutus_tabbar_link" :to="item.url">{{
          item.name
        }}</router-link>
      </li>
    </ul>
    <div class="breadcrumb">
      <div class="aboutus_title">
        <h5>修改密码</h5>
      </div>
    </div>
    <div class="mypassword">
      <form class="mypassword_form" action="post">
        <div class="mypassword_account">
          <h4 class="mypassword_form_title">
            当前手机号{{ info.mobile.slice(0, 3) }}****{{
              info.mobile.slice(7, 11)
            }}
          </h4>
          <div class="mypassword_form_item">
            <label for="code">滑块验证</label>
            <div class="box" ref="box">
              <!--滑块-->
              <div ref="btn" class="btn" v-if="!flag" @mousedown="mouseDown" @touchstart="touchstart">
                >>
              </div>
              <div class="btn" v-else>>></div>
              <!--文字-->
              <p class="text" ref="text">请按住滑块，拖动到最右边</p>
              <!--背景-->
              <div class="bg" ref="bg"></div>
            </div>
          </div>
          <div class="mypassword_form_item">
            <label for="code">短信验证码</label>
            <input
              type="number"
              name="code"
              id="code"
              v-model="code"
              class="mypassword_form_code"
            />
            <button type="button" @click="getcode">{{getCodeTit}}</button>
          </div>
          <div class="mypassword_form_item">
            <label for="newpassword">新密码:</label>
            <input type="password" name="newpassword" v-model="npass" id="newpassword" />
          </div>
          <div class="mypassword_form_item">
            <label for="confirmpassword">确认密码:</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              v-model="truepass"
            />
          </div>
        </div>
      </form>
        <input type="submit" value="提交" @click="sub"/>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbarList: [
        {
          id: 1,
          name: "修改密码",
          url: "",
          active: true,
        },
      ],
      downX: "",
      moveX: "",
      upX: "",
      flag: false,
      info: "",
      code:'',
      getCodeTit: "获取短信验证码",
      isSendCode:true,
      interval:'',
      npass:'',
      truepass:''
    };
  },
  created() {
    document.title='北京中盛润德-修改密码'

    this.info = JSON.parse(localStorage.getItem("userinfo"));
  },
  methods: {
    change(list, index) {
      list.forEach((e, i) =>
        i === index ? (e.active = true) : (e.active = false)
      );
    },
    // 提交
    sub(){
        if(!this.code){
        this.$message("请输入验证码");
        return  false
        }
        if(!this.npass){
        this.$message("请输入新密码");
        return  false
        }
         if(!this.truepass){
        this.$message("请确认新密码");
        return  false
        }
        if(this.npass!=this.truepass){
            this.$message("两次密码输入不一致");
        return  false
        }
        this.post('resetpwd',{
          mobile:this.info.mobile,
          captcha:this.code,
          newpassword:this.npass
        }).then(res=>{
          if(res.code==1){
                  this.$alert('密码修改成功，请重新登录', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            localStorage.clear()
             this.reload();

           this.$router.push('/login')

          }
        });
          }else{
            this.$message.error(res.msg);

          }
        })
    },
    // 获取短信验证码

    getcode() {
        if(this.flag){

      if (this.isSendCode) {
        this.post("sms/send", {
            mobile:this.info.mobile,
            event:'resetpwd'
        }).then((res) => {
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
              this.getCodeTit = a;
              if (a == 0) {
                this.getCodeTit = "获取短信验证码";
                this.isSendCode = true;
                clearInterval(this.interval);
              }
            }, 1000);
          } else {
            this.$message.error(res.msg);
          }
        });
      } else {
        this.$message("请在倒计时结束后重新获取");
      }
        }else{
        this.$message("请先验证滑块");

        }

    },
    mouseDown(e) {
      this.downX = e.clientX;
      document.onmousemove = function (ev) {
        this.moveX = ev.clientX - this.downX;
        if (this.moveX > -2) {
          this.$refs.btn.style.left = this.moveX + "px";
          this.$refs.bg.style.width = this.moveX + "px";
          if (
            this.moveX >=
            this.$refs.box.offsetWidth - this.$refs.btn.offsetWidth
          ) {
            this.flag = true;
            this.$refs.text.innerHTML = "验证成功";
            this.$refs.text.style.color = "white";
            document.onmousemove = null;
          }
        }
      }.bind(this);
      document.onmouseup = function () {
        document.onmousemove = null;
        if (this.flag) return;
        this.$refs.btn.style.left = 0;
        this.$refs.bg.style.width = 0;
      }.bind(this);
    },
    touchstart(e){
      this.downX = e.targetTouches[0].clientX;
      document.ontouchmove = function (ev) {
        this.moveX = ev.targetTouches[0].clientX - this.downX;
        if (this.moveX > -2) {
          this.$refs.btn.style.left = this.moveX + "px";
          this.$refs.bg.style.width = this.moveX + "px";
          if (
            this.moveX >=
            this.$refs.box.offsetWidth - this.$refs.btn.offsetWidth
          ) {
            this.flag = true;
            this.$refs.text.innerHTML = "验证成功";
            this.$refs.text.style.color = "white";
            document.ontouchmove = null;
          }
        }
      }.bind(this);
      document.ontouchend = function () {
        document.ontouchmove = null;
        if (this.flag) return;
        this.$refs.btn.style.left = 0;
        this.$refs.bg.style.width = 0;
      }.bind(this);
    }
  },
};
</script>

<style>
</style>