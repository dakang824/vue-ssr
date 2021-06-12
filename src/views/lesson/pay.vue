<template>
  <div class="content">
    <div class="wrap">
      <div class="inner">
        <div class="breadcrumb">
                <router-link to="/">
                    <img src="../../assets/home_icon.png" alt="图片找不到了">
                    <span>首页</span>
                </router-link>
                <span class="arrow">></span>
                <span>课程中心</span>
                <!-- <span class="arrow">></span>
                <span>教师详情</span>
                <span class="arrow">></span>
                <span>课程详情</span> -->
                <span class="arrow">></span>
                <span>课程支付</span>
          </div>
          <div class="order">
            <div class="order_header">
              <h3 class="order_header_title">轻松购课仅需3步</h3>
              <div class="order_header_wrap">
                <div class="order_header_item">
                  <span :class="['order_header_label',step==0 && 'active']">1</span>
                  <p class="order_header_text">确认订单</p>
                </div>
                <div class="order_header_item">
                  <span :class="['order_header_label',step==1 && 'active']">2</span>
                  <p class="order_header_text">支付订单</p>
                </div>
                <div class="order_header_item">
                  <span class="order_header_label">3</span>
                  <p class="order_header_text">订单完成</p>
                </div>
              </div>
            </div>
            <div class="order_confirm" v-if="step==0">
              <div class="order_confirm_title">
                <h6>订单详情</h6>
                <h6>课程金融</h6>
                <h6>操作</h6>
              </div>
              <div class="order_list" v-if="orderInfo.course!==undefined&&orderInfo.course.length!=0">
                <div class="order_item"  v-for="(item,index) in orderInfo.course" :key="index">
                  <div class="order_item_left">
                    <img :src="item.images" alt="图片找不到了">
                    <div class="order_item_title">
                      <h2>{{item.title}}</h2>
                      <p class="order_item_text">主讲：<span style="margin-right:5px" v-for="el in item.teachers" :key="el.id">{{el}}</span></p>
                    </div>
                  </div>
                  <div class="order_item_center">
                    <span>￥{{item.price}}</span>
                  </div>
                  <div class="order_item_right">
                    <button type="button" @click="del(item)">删除</button>
                  </div>
                </div>
              </div>
              <div v-else>
                <nodata></nodata>
              </div>
              <div class="order_confirm_price">
                <p>课程金额总价：<span class="price">￥{{orderInfo.money}}</span></p>
              </div>
              <div class="order_confirm_btn">
                <!-- <el-button class="order_confirm_back" type="button" @click="link()">继续选课</el-button> -->
                <el-button class="order_confirm_pay" type="button" :disabled="orderInfo.course!==undefined&&orderInfo.course.length==0" @click="submit()">去支付</el-button>
              </div>
            </div>
            <div class="order_pay" v-else-if="step==1">
              <div class="order_body"> 
              <div class="order_body_img">
                <img src="../../assets/order_icon.png" alt="图片找不到了">
              </div>
              <div class="order_body_info">
                <p class="order_body_text">订单提交成功，请您尽快付款！  订单号：{{orderInfo.out_trade_no}}</p>
                <strong>订单将为您保留30分钟   请尽快支付</strong>
              </div>
              <div class="order_body_price">
                <p>课程金额总价：<span class="price">￥{{orderInfo.money}}</span></p>
              </div>
            </div>
            <div class="order_footer">
           
               <div class="order_footer_tabbar">
              <button type="button" :class=" paytype==1?'active':'' " @click="changepaytype(1)">微信支付</button>
              <button type="button" :class=" paytype==2?'active':'' " @click="changepaytype(2)">支付宝支付</button>
            </div>
            <div class="order_footer_inner">
              <div class="top">
                <div class="left">
                  <img src="../../assets/wechatpay.png" alt="" v-if="paytype==1">
                  <img src="../../assets/ailipay.png" alt="" v-if="paytype==2">
                </div>
                <div class="right">
                  <p class="p1">{{paytype==1?'微信支付':'支付宝支付'}}</p>
                  <p class="p2">使用{{paytype==1?'微信':'支付宝'}}APP扫码支付</p>
                </div>
              </div>
              <div class="bottom">
                <div class="left">
                  <img :src="wechaturl" alt="">
                  <p>打开手机端{{paytype==1?'微信':'支付宝'}}</p>
                  <p>扫一扫继续付款</p>
                </div>
                <div class="right">
                  <img src="../../assets/wechatsao.png" alt="" v-if="paytype==1">
                  <img src="../../assets/alisao.png" alt="" v-if="paytype==2">
                </div>
              </div>
              <!-- <img :src="wechaturl" class="url" alt="图片找不到了" />
              <p>打开手机端微信 扫一扫继续付款</p> -->
            </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import nodata from '@/layout/components/nodata.vue'
export default {
    components:{
      nodata
    },
    data(){
        return{
            goodsList:[],
            step:0,
            orderInfo:{},
            orderid:"",
            wechaturl:"",
            alipayurl:"",
            timer:'',
            paytype:1,

        }
    },
    filters:{
        getprice(res){
          let price=0
          res.forEach(v=>{
              price+=Number(v.price)
          })
          return price.toFixed(2)
        }
    },
    mounted(){
      document.title='支付订单'
      let course_id = this.$route.query.id;
      this.getorderinfo(course_id)
      // this.get('course/detail',false,{course_id}).then((res) => {
      //   this.goodsList.push(Object.assign(res.data))
      //   // this.goodsList.forEach(e => {let arr = e.price})
      // })
      
        
      // this.post('order/submit',{course_id}).then((res) => {

      // })
    },
    computed:{
      remaining:function(){
        let timer,time=1800,minute,second;
        clearInterval(timer);
        timer = setInterval(()=>{
          time=time-1;
          // this.orderInfo.create_time
          minute=parseInt(time/60);
          second=parseInt(time%60);
        },1000)
        return `${minute}:${second}`
      }
    },
    destroyed(){
      console.log(11111111111111111)
      clearInterval(this.timer)
    },
    methods:{
      getorderinfo(id){
        this.post('order_info',{
          order_id:id
        }).then(res=>{
          this.orderInfo=res.data
          console.log(this.orderInfo)

        })
      },
      link(){
        this.$router.push({
          path:'/lesson'
        })
      },
      // 删除某个课程
      del(item){
        if( this.orderInfo.course.length<=1){
          this.$message.error('请至少选择一个课程')
        }else{

                   this.$confirm('确定删除此课程?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
             console.log(item.course_id,item.order_id)
        this.post('order_delete',{
          order_id:item.order_id,
          course_id:item.course_id
        }).then(res=>{
          this.orderInfo=res.data
        })
         
        }).catch(() => {
          
        });
        }
     
      },
      
       // 改变支付方式
    changepaytype(type){
        this.paytype=type
        clearInterval(this.timer)
        if(type==1){
          this.getwechat()
        }else if(type==2){
          this.getalipay()
        }
    },
      submit(){
            this.step=1
            this.getwechat()
        // let course_id = this.$route.query.id;
        // this.post('order/submit',{course_id}).then(res => {
        //   if (res.code==1) {
        //     this.$message({
        //       message: '提交成功',
        //       type: 'success'
        //     });
        //     this.orderid=res.data.id
        //     this.orderInfo = res.data
        //     this.getwechat()
            
        //   }else{
        //     this.$message.error('提交订单失败');
        //   }
        // })
      },
      getwechat(){
        this.post('payment',{
          order_id:this.orderInfo.id
        }).then(res=>{
          if(res.code==1){
            this.wechaturl=res.data.pay_url
            this.getpaystatus()
          }
        })
      },
         // 获取支付宝支付二维码
        getalipay(){
          this.post('alipay/payment',{
          order_id:this.orderInfo.id

          }).then(res=>{
            this.wechaturl=res.data.pay_url
            this.getpaystatus()
          })
        },
      getpaystatus(){
        let that=this
        clearInterval(this.timer)
        this.timer=setInterval(() => {
                  that.post('pay/status',{
          order_id:this.$route.query.id
        },true).then(res=>{
          if(res.data.status){
            clearInterval(that.timer)
                   that.$confirm('订单支付成功', '提示', {
          confirmButtonText: '查看订单',
          cancelButtonText: '继续选课',
        }).then(() => {
          that.$router.push({
            path:'user',
            query:{
              childpath:'myOrder',
              navindex:2
            }
          })
        }).catch(() => {
         that.$router.push({
            path:'lesson',
         
          })      
        });
          }
        })

        }, 2000);
      },
      
    }
}
</script>

<style lang='less'>
.order_confirm_btn{
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}
.order_footer_inner{
  width: 520px;
  margin:0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  .top{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left{
      width: 46px;
      height: 46px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 14px;
      
      .p1{
        font-size: 30px;
        font-weight: bolder;
        color: #333333;
      }
      .p2{
        font-size: 15px;
        color: #999999;
      }
    }

  }
  .bottom{
    display: flex;
    
    .left{
width: 204px;
    border: 1px solid #ccc;
    padding-bottom: 20px;
    margin-top: 10px;
      margin-left: 60px;

    }
    .right{
      width: 200px;
    }
    p{
      text-align: center;
      font-size: 14px;
      color: #999999;
    }

  }
  .weali{
    height: 44px;
  }
  .url{
    width: 180px;
    height: 180px;
  }
  p{
    font-size: 13px;
    color: #999999;
  }
}

</style>