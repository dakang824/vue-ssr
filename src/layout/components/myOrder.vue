<template>
  <div class="aboutus">
    <ul class="aboutus_tabbar" v-if="!ispay">
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
        <h5 v-if="!ispay">购买课程</h5>
        <h5 v-if="ispay">订单详情</h5>
        <p v-if="ispay" @click="fanhui">
          <img src="../../assets/fanhui.png" alt="">
          返回</p>
      </div>
    </div>

    <div class="myorder" v-if="!ispay">
      <div class="myorder_header">
        <h6 class="myorder_header_title">订单信息</h6>
        <h6 class="myorder_header_title">订单时间</h6>
        <h6 class="myorder_header_title">订单金额</h6>
        <h6 class="myorder_header_title">订单状态</h6>
        <h6 class="myorder_header_title">操作</h6>
      </div>
      <div class="myorder_body">
        <div class="myorder_list">
          <div
            class="myorder_item"
            v-for="(item, index) in orderlist"
            :key="index"
          >
          <div style="display:grid;row-gap:10px;">
           <div class="myorder_item_info" v-for="(v,i) in item.courses"  :key='i'>
              <img style="height:auto;width:100%" :src="v.images" alt="图片找不到了" />
              <div class="myorder_item_title">
                <h2 style="font-size:16px">{{ v.title }}</h2>
                <p class="myorder_item_text">
                  主讲：<span v-for="(v1, i1) in v.teachers" style="margin-right:5px" :key="i1">{{
                    v1
                  }}</span>
                </p>
              </div>
            </div>
          </div>
          
            
            <div class="myorder_item_time">
              {{ item.create_time_text }}
            </div>
            <div class="myorder_item_price">
              <span>￥{{ item.money }}</span>
            </div>
            <div class="myorder_item_state">
              {{ item.status_text }}
            </div>
            <div class="order_item_btn">
              <button type="button" @click="todetail(item.id)">查看详情</button>
              <button
                type="button"
                v-if="item.status == 0"
                @click="cancelorder(item.id)"
              >
                取消订单
              </button>
              <button type="button" class="topay" v-if="item.status == 0"  @click="todetail(item.id)">
                去付款
              </button>
            </div>
          </div>
        </div>
        <div class="pager">
          <el-pagination
          background
          layout="prev, pager, next"
          hide-on-single-page
          :page-size="order.per_page"
          @current-change="handleCurrentChange"
          v-if="!isdetail"
          :total="order.total"
          >
          </el-pagination>
        </div>
      
        <nodata v-if="orderlist.length < 1"></nodata>
      </div>
    </div>
      <div class="order_pay" v-if="ispay">
          <div class="order_body">
            <div class="order_body_img">
              <img src="../../assets/order_icon.png" alt="图片找不到了" />
            </div>
            <div class="order_body_info">
              <p class="order_body_text" style="font-size:26px; font-weight: bold;" >{{orderdetail.status_text}}</p>
              <p class="order_body_text">订单号：{{orderdetail.out_trade_no}}</p>
              <p class="order_body_text">下单时间：{{orderdetail.create_time_text}}</p>
            </div>
            <div class="order_body_price">
              <p>订单金额：<span class="price">￥{{orderdetail.money}}</span></p>
            </div>
          </div>
          <div class="order_list">
            <div class="order_item" v-for="(item,index) in orderdetail.course" :key='index'>
              <div class="order_item_left">
                <img :src="item.images" alt="图片找不到了" />
                <div class="order_item_title">
                  <h2>{{item.title}}</h2>
                  <p class="order_item_text">主讲：<span v-for="(v,i) in item.teachers" :key='i' style="margin-right:5px">{{v}}</span></p>
                </div>
              </div>
              <div class="order_item_center">
                <span>￥{{item.price}}</span>
              </div>
              <!-- <div class="order_item_right">
                <button type="button">删除</button>
              </div> -->
            </div>
          </div>
          <div class="order_footer" v-if="orderdetail.status==0">
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
</template>

<script>
import nodata from "./nodata";
export default {
  data() {
    return {
      order: "",
      orderlist: [],
      page: 1,
      ispay: false,
      index: "",
      orderdetail:'',
      isdetail: false, //查看订单详情
      orderid:'',//zhif
      timer:'',
      wechaturl:'',
      paytype:1,//1=微信支付 2=支付宝支付
      tabbarList: [
        {
          id: 1,
          name: "全部订单",
          url: "",
          active: true,
        },
        {
          id: 2,
          name: "待支付",
          url: "",
          active: false,
        },
        {
          id: 3,
          name: "已支付",
          url: "",
          active: false,
        },
          {
          id: 4,
          name: "已取消",
          url: "",
          active: false,
        },
      ],
    };
  },
  components: {
    nodata,
  },
  created() {
    this.getorder(0);
    document.title='北京中盛润德-我的订单'

  },
  beforeDestroy(){
    clearInterval(this.timer)

  },
  methods: {
    // 查看详情
    todetail(id) {
      clearInterval(this.timer)
      this.orderid=id
      this.ispay = true;
      this.get('order/detail',true,{
        order_id:id
      }).then(res=>{
        if(res.code==1){
          this.orderdetail=res.data
          if(this.orderdetail.status==0){
            this.getwechat()
          }
        }
      })
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
    // 获取微信支付二维码
          getwechat(){
        this.post('payment',{
          order_id:this.orderid
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
            order_id:this.orderid
          }).then(res=>{
            this.wechaturl=res.data.pay_url
            this.getpaystatus()
          })
        },
          getpaystatus(){
            let that=this
            clearInterval(this.timer)
        that.timer=setInterval(() => {
      that.post('pay/status',{
          order_id:that.orderid
        },true).then(res=>{
          if(res.data.status){
            clearInterval(that.timer)
        that.get('order/detail',true,{
        order_id:that.orderid
      }).then(res=>{
        if(res.code==1){
          that.orderdetail=res.data
         
        }
      })
          }
        })

        }, 2000);
      },
    // 查看订单
    fanhui(){
      this.ispay=false
      clearInterval(this.timer)
    },
    // 取消顶单
    cancelorder(id) {
      this.$confirm("确认取消此订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.post("order/cancel", {
            order_id: id,
          }).then((res) => {
            if (res.code == 1) {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getorder(this.index);
            }
          });
        })
        .catch(() => {});
    },

    // 改变页数
    handleCurrentChange(e) {
      this.page = e;
      this.getorder(this.index);
    },
    // 获取订单列表
    getorder(type) {
      this.get("usercenter/order",true, {
        page: this.page,
        status: type,
      }).then((res) => {
        if (res.code == 1) {
          this.order = res.data;
          this.orderlist = res.data.data;
        }
      });
    },
    change(list, index) {
      console.log(index);
      this.index = index;
      this.page = 1;
      this.getorder(index);
      list.forEach((e, i) =>
        i === index ? (e.active = true) : (e.active = false)
      );
    },
  },
};
</script>

<style lang='less'>
.topay {
  padding: 4px 20px;
  background-color: rgb(5, 45, 71);
  color: #ffffff;
  border-radius: 5px;
}
.order_item_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order_item_btn button {
  margin: 2px 0;
  width: 100px;
 
}
.aboutus_title{
  display: flex;
  justify-content: space-between;
  p{
    cursor: pointer;
    display: flex;
    align-items: center;
    img{
      width: 20px;
      height: 20px;
    }
  }
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