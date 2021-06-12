<template>
  <div class="content">
    <div class="banner banner_1">
      <h1 class="banner_title">选课中心</h1>
      <p class="banner_text">学习点燃梦想 梦想撼动未来</p>
    </div>
    <div class="headtop">
      <img src="../../assets/lessontop.png" alt="" />
    </div>
    <div class="class">
      <div class="classtop">
        <div
          :class="checkedcalsstype == index ? 'pp' : 'p'"
          @click="changeclasstype(index,item.id)"
          v-for="(item,index) in classlist"
          :key='index'
        >
          {{item.name}}
        </div>
       
      
      </div>
      <div class="classtit">
        <span class="span1">{{lessondetail.name}}:</span>
        <span   v-html="lessondetail.content"></span>
      </div>

      <div class="lessonnav">
        <div
          class="lesson"
          :class="checkedlessontype == index ? 'lesson1' : ''"
          v-for="(item, index) in lessonlist"
          :key="index"
          @click="changelessontype(index,item.category_id)"
        >
          {{ item.category_name }}
        </div>
      </div>
      <nodata v-if="!lessondetail.courses" title="没有相关课程"></nodata>
      <div class="classlistbox" v-if="lessondetail.courses!==undefined&&lessondetail.courses.length>0">

      <div class="classlist">
        <div class="top">
          <div class="left">
            <p>课程名称</p>
            <p>授课老师</p>
            <p>课程学时</p>
            <p>课程价格</p>
          </div>
          <div class="center">课程</div>
          <div class="right">服务</div>
        </div>
        <div class="list">
          <div class="left">
            <div class="child" v-for="(item,index) in lessondetail.courses" :key="index">
              <div class="childp1">
                <el-checkbox @change="change(index,item)" style="display:flex;align-items: center" :checked=item.checked><span v-html="nl2br(item.title)"></span></el-checkbox>
                <!-- <span></span> -->
              </div>
              <div class="childp2" >
                <!-- <div class="teachers" v-for="(v,i) in item.teachers" :key='i'>
                  <img :src="v.avatar" alt="" />
                  <span>{{v.name}}</span>
                </div> -->
                 <div class="teachers" >
                  <span v-html="nl2br(item.teachers)"></span>
                </div>
              </div>
              <div class="childp3">{{item.course_hour}}课时</div>
              <div class="childp4">￥{{item.price}}</div>
            </div>
          </div>
          <div class="center">
            <div class="child_left" v-for="(v,i) in lessondetail.types" :key="i">
              <img src="../../assets/xuanzhong.png" alt="" />
              <span>{{v}}</span>
            </div>
          </div>
          <div class="right">
            <div class="child_left" v-for="(v,i) in lessondetail.services" :key="i">
              <img src="../../assets/xuanzhong.png" alt="" />
              <span>{{v}}</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div class="buylesson" v-if="lessondetail.courses!==undefined&&lessondetail.courses.length>0">
        <div class="lessonprice">
          <p class="buyp1">已选{{checkedlessonlist | getnum}}课程</p>
          <div class="buyp2" v-if="checkedlessonlist.length>0">
            应付金额：{{checkedlessonlist | getprice}}=￥<span>{{checkedlessonlist | getmonry}}</span>
          </div>
        </div>
        <div class="buy" @click="buylesson">立即购买</div>
      </div>
    </div>
    <div class="headtop1">
      <img src="../../assets/classimg12.png" alt="" />
    </div>
    <div class="niticelist">
      <div class="child">
        <p class="tit">在线答疑</p>
        <img class="image" src="@/assets/lessonicon1.png" alt="" />
        <p class="tit1">人工客服在线答疑</p>
      </div>
      <div class="child">
        <p class="tit">班主任1V1服务</p>
        <img class="image" src="@/assets/lessonicon2.png" alt="" />
        <p class="tit1">课程老师一对一</p>
      </div>
      <div class="child">
        <p class="tit">针对性学习计划</p>
        <img class="image" src="@/assets/lessonicon3.png" alt="" />
        <p class="tit1">针对个人制定学习计划</p>
      </div>
      <div class="child">
        <p class="tit">学习效果跟踪</p>
        <img class="image" src="@/assets/lessonicon4.png" alt="" />
        <p class="tit1">课程学习随时跟踪</p>
      </div>
      <div class="child">
        <p class="tit">报考协助</p>
        <img class="image" src="@/assets/lessonicon5.png" alt="" />
        <p class="tit1">学员报考全程协助</p>
      </div>
      <div class="child">
        <p class="tit">网课重读</p>
        <img class="image" src="@/assets/lessonicon6.png" alt="" />
        <p class="tit1">享受第二年网课重读</p>
      </div>
      <div class="child">
        <p class="tit">移动听课</p>
        <img class="image" src="@/assets/lessonicon7.png" alt="" />
        <p class="tit1">手机APP在线听课</p>
      </div>
      <div class="child">
        <p class="tit">移动做题</p>
        <img class="image" src="@/assets/lessonicon8.png" alt="" />
        <p class="tit1">手机APP在线做题</p>
      </div>
    </div>
 <div class="headtop1">
      <img src="../../assets/classimg13.png" alt="" />
    </div>

    <div class="tips">  
      <img src="../../assets/tips.jpg" alt="">
    </div>
    <div class="tiplist">
      <div class="top">
      <div class="child1">
        <p class="p1">基础导学</p>
        <p class="p3">
         全阶段备考规划，熟知考研备考常识及各科目基础知识。分级基础词汇营。
        </p>
        <div class="text">
          <strong>01</strong>
          <b>01</b>
        </div>
      </div>
      <div class="child2">
        <p class="p1">基础巩固</p>
        <p class="p3">
          巩固基础知识，梳理科目考试大纲，构建学科只是框架。分级核心词汇营。
        </p>
        <div class="text">
          <strong>02</strong>
          <b>02</b>
        </div>
      </div>
      <div class="child3">
        <p class="p1">基础进阶</p>
        <p class="p3">明晰考试重难点，掌握核心基础知识，了解答题的技巧。分级高分词汇营</p>
        <div class="text">
          <strong>03</strong>
          <b>03</b>
        </div>
      </div>
       <div class="child3">
        <p class="p1">强化提高</p>
        <p class="p3">夯实学科基础，攻克考试重难点，强化学科知识框架，熟练应用答题技巧。</p>
        <div class="text">
          <strong>04</strong>
          <b>04</b>
        </div>
      </div>
       <div class="child3">
        <p class="p1">精讲精练 </p>
        <p class="p3">历年真题精讲，专项突破查漏补缺，磨练高分技巧，提升考场实战的能力。</p>
        <div class="text">
          <strong>05</strong>
          <b>05</b>
        </div>
      </div>
       <div class="child3">
        <p class="p1">冲刺点睛</p>
        <p class="p3">业内权威点睛预测，密集模考锤炼心态知识点串讲，考前最后冲刺提升。</p>
        <div class="text">
          <strong>06</strong>
          <b>06</b>
        </div>
      </div>
       <div class="child3">
        <p class="p1">复试辅导</p>
        <p class="p3">综合面试指导，英语专项加强，专业能力提高，掌握得分技巧，一战成硕。</p>
        <div class="text">
          <strong>07</strong>
          <b>07</b>
        </div>
      </div>
      
      </div>
      <div class="bottom">
        <img src="../../assets/lessonfoot.png" alt=""> </div>
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
import nodata from "@/layout/components/nodata.vue";
export default {
  name: "lesson",
  components: {
    nodata,
  },
  data() {
    return {
      checkedcalsstype: '',
      checkedlessontype: 0,
      classlist:'',
      lessonlist: [],

      checkedcalssid:'',
      checkedlessonid:'',

      lessondetail:'',

      checkedlessonlist:[],

      
    };
  },
  filters:{
    getnum(e){
      return e.length
    },

    getprice(e){
      let price=''
     e.forEach(v=>{
        price+=v.price+'+'
      })
      return price.slice(0,price.length-1)
    },
    getmonry(e){
        let money=0
     e.forEach(v=>{
        money+=Number(v.price)
      })
      return money.toFixed(2)
    },
  },
  mounted() {
    document.title = "北京中盛润德-选课中心";
    this.getclass()
  },
  methods: {
       nl2br (str, is_xhtml) {   
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br/>' : '<br>';    
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
},
    //购买课程
    buylesson(){
    
      if(localStorage.getItem('token')){
      if(this.checkedlessonlist.length<=0){
        this.$message.error('请选择要购买的课程')
      }else{
        let ids=[]
        this.checkedlessonlist.forEach(v=>{
          ids.push(v.course_id)
        })
        this.post('merge_submit',{
          course_ids:ids.toString(),
          banxing_id:this.checkedcalssid,
          category_id:this.checkedlessonid
        }).then(res=>{
          if(res.code==1){
            this.$router.push({
              path:'pay',
              query:{
                id:res.data.id
              }
            })
          }

        })
      }
      }else{
        this.$router.push('/login')
      }

    },
      getclass(){
          this.get('banxing').then(res=>{
              this.classlist=res.data
              if(res.data.length>0){
                 res.data.forEach((v,i) =>{
                   if(this.$route.query.id){
                     if(v.id==this.$route.query.id){
                       this.checkedcalssid=v.id
                      this.checkedcalsstype=i
                      this.getcategory(v.id)
                      return false
                     }
                   }else{
                   if(v.checked==1){
                      this.checkedcalssid=v.id
                      this.checkedcalsstype=i
                      this.getcategory(v.id)
                      return false
                    }
                  }
              })
              }
            
          })
      },
     getcategory(id){
         console.log(id)
          this.get('banxing/category',true,{
              banxing_id:id
          }).then(res=>{
              if(res.data.category.length>0){
              this.lessonlist=res.data.category
              this.checkedlessonid=res.data.category[0].category_id
              this.getdetail()
              }else{
              this.lessonlist=''
              this.getdetail1()

              }
            
          })
      },
      getdetail(){
        this.lessondetail = ''
          this.get('banxing/detail',true,{
              banxing_id:this.checkedcalssid,
              category_id:this.checkedlessonid
          }).then(res=>{
            let data=res.data
             data.courses.forEach(v=>{
               v.checked=false
             })
              this.lessondetail=data
          })
      },
       getdetail1(){
        this.lessondetail = ''
          this.get('banxing/detail1',true,{
              banxing_id:this.checkedcalssid,
          }).then(res=>{
            let data=res.data
              this.lessondetail=data
          })
      },
    change(e,item) {
      console.log(item)
      this.lessondetail.courses[e].checked=!this.lessondetail.courses[e].checked
      if( this.lessondetail.courses[e].checked){
      this.checkedlessonlist.push( this.lessondetail.courses[e])
      }else{
         this.checkedlessonlist.forEach(v=>{
           if(v.course_id==item.course_id){
              this.checkedlessonlist.splice(this.checkedlessonlist.indexOf(v),1)
              return false
           }
         })
      }
    },
     change1(e,item) {
      this.lessondetail.courses[e].checked=!this.lessondetail.courses[e].checked
      if( this.lessondetail.courses[e].checked){
      this.checkedlessonlist.push( this.lessondetail.courses[e])
      }else{
         this.checkedlessonlist.forEach(v=>{
           if(v.course_id==item.course_id){
              this.checkedlessonlist.splice(this.checkedlessonlist.indexOf(v),1)
              return false
           }
         })
      }
    },
    changeclasstype(i,id) {
      this.checkedlessonlist=[]
      this.checkedcalsstype = i;
      this.checkedcalssid=id
        this.getcategory(id)
        this.checkedlessontype=0


    },
    changelessontype(i,id) {
      this.checkedlessonlist=[]

        this.checkedlessonid=id
      this.checkedlessontype = i;
      this.getdetail()
    },
  },
};
</script>

<style lang='scss' scoped>
.el-checkbox__label {
  font-size: 16px!important;
}

.headtop {
  width: 640px;
  height: 135px;
  margin: 60px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.headtop1 {
  width: 640px;
  height: 78px;
  margin: 60px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.class {
  max-width: 1400px;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 60px;
  .classtop {
    width: 100%;
    height: 60px;
    border: 6px solid #ff6600;
    border-bottom: none;
    display: flex;
    align-items: center;
      background-color: #ff6600;

    justify-content: space-between;
    .p {
      flex: 1;
      height: 54px;
      line-height: 54px;
      background-color: #ff6600;
      text-align: center;
      color: #fff;
      cursor: pointer;
      font-size: 22px;
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
    }
    .p:hover {
      background-color: #ff6600e7;
    }
    .pp {
      flex: 1;
      height: 54px;
      line-height: 54px;
      background-color: #fff;
      text-align: center;
      font-size: 22px;

      color: #ff6600;
      user-select: none;
    }
  }
  .classtit {
    margin: 30px 40px;
    border: 1px dashed #ff6600;
    padding: 40px 30px;
    font-size: 16px;
    color: #666666;
    line-height: 1.6;
    letter-spacing: 1px;
    .span1 {
      color: #ff6600;
    }
  }
  .lessonnav {
    margin: 0px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .lesson {
      width: 12.2%;
    //   height: 55px;
      border: 1px solid #ff6600;
      margin-bottom: 20px;
      font-size: 16px;
      color: #ff6600;
      text-align: center;
      margin: 1%;
      padding: 14px 0;
    //   line-height: 55px;
      cursor: pointer;
    }
    .lesson:hover {
      background-color: #ff6600;
      color: #fff;
    }
 
    .lesson1 {
      background-color: #ff6600;
      color: #fff;
    }
  }
  .classlist {
    margin: 0 40px;
    margin-top: 30px;
    .top {
      height: 70px;
      border-top: 2px solid #ffb27f;
      border-bottom: 1px solid #ffb27f;
      display: flex;
      justify-content: space-between;
      .left{
        // flex: 1;
        width: 64%;
        display: flex;
        align-items:center;
        justify-content: space-between;
        
        p{
            font-size: 20px;
        color: #333333;
        font-weight: bold;
        width: 25%;
        text-align: center;
        }
      }
      .center,.right{
        width: 18%;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333333;
        font-weight: bold;
      }
    }
    .list {
      display: flex;
      justify-content: space-between;
      .left {
        width: 64%;
        .child {
          padding: 30px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px dashed #dcdcdc;

          .childp1 {
            display: flex;
            justify-content: flex-start;
            padding-left: 10px;
            width: 25%;
            span {
              font-size: 15px;
              line-height: 25px;
            }
          }
          .childp2 {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .teachers {
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 3px 0;
              img {
                width: 25px;
                height: 25px;
              }
              span {
                margin-left: 10px;
                font-size: 15px;
                line-height: 25px ;
                color: #666666;
              }
            }
          }
          .childp3 {
            width: 25%;
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: #666666;
          }
          .childp4 {
            width: 25%;
            display: flex;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            color: #ff6600;
          }
        }
      }
      .center {
        width: 18%;
        border-left: 1px dashed #dcdcdc;
        border-right: 1px dashed #dcdcdc;
        border-bottom: 1px dashed #dcdcdc;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        .child_left {
          display: flex;
          margin: 5px 0;
          margin-left: 24px;

          img {
            width: 17px;
            height: 17px;
          }
          span {
            font-size: 15px;
            color: #666666;
            margin-left: 8px;
          }
        }
      }
      .right {
        width: 18%;
        border-right: 1px dashed #dcdcdc;
        border-bottom: 1px dashed #dcdcdc;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 10px 0;
        .child_left {
          display: flex;
          margin: 5px 0;
          margin-left: 24px;

          img {
            width: 17px;
            height: 17px;
          }
          span {
            font-size: 15px;
            color: #666666;
            margin-left: 8px;
          }
        }
      }
    }
  }
  .buylesson {
    margin: 60px 40px 0 40px;
    height: 100px;
    display: flex;
    align-items: flex-end;
    position: relative;
    .lessonprice {
      height: 87px;
      width: calc(100% - 250px);
      background-image: linear-gradient(to right, #98a0a9, #50556c);
      border-top-left-radius: 44px;
      border-bottom-left-radius: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 70px 0 50px;
      p {
      }
      .buyp1 {
        color: #fff;
        font-size: 17px;
      }
      .buyp2 {
        color: #fff;
        font-size: 17px;
        max-width: 830px;
        text-align: right;
        span {
          font-size: 26px;
          font-weight: bold;
        }
      }
    }
    .buy {
      width: 300px;
      height: 100px;
      background-image: url("../../assets/buyback.png");
      background-size: 100% 100%;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 30px;
      padding-left: 30px;
      color: #ffffff;
      font-weight: bold;
      line-height: 100px;
      text-align: center;
      cursor: pointer;
    }
  }
}
.niticelist {
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 50px;
  justify-content:center;

  // .child:hover{
  //     width: 300px;
  //     height: 280px;
  // }
  .child {
    width: 280px;
    transition: all 0.2s;
    height: 260px;
    margin:0 20px;
    background-image: url("../../assets/lessonback.png");
    background-size: 100% 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .4s;
    &:hover{
      transform: translateY(-10px);
    }
    .tit {
      font-size: 28px;
      color: #fff;
      font-weight: bold;
      line-height: 73px;
      text-align: center;
    }
    .image {
      width: 50px;
      height: 50px;
      margin: 20px 0;
    }
    .tit1 {
      text-align: center;
      font-size: 20px;
      color: #a9a9a9;
    }
  }
}
.tiplist {
  width: 1240px;
  margin: 0 auto;
  padding: 0 50px;
  margin-top: 60px;
  padding-bottom: 50px;
  .top{
    display: flex;
    justify-content: space-between;
  }
  .child1,
  .child2,
  .child3 {
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .p1 {
      font-size: 30px;
      font-weight: bold;
      color: #e8a842;
    }
    .p2 {
      font-size: 24px;
      color: #333333;
      font-weight: bold;
      margin: 10px 0;
    }
    .p3 {
      font-size: 17px;
      color: #666666;
      line-height: 1.6;
      text-align: center;
    }
    .text{
      display: none;
    }
  }
  .child1 {
    margin-top: 100px;
  }
  .child2 {
    margin-top: 50px;
  }
  .bottom{
    img{
      margin-left: 20px;
      margin-top: -100px;
    }
  }
}
@media screen and (max-width:1400px) {
    .headtop{
        width: 576px;height: 120px;margin: 54px auto;
    }
    .class{
        margin: 0 5%;
        padding-bottom: 54px;
        .classtop{
            height: 54px;
            .p{
                height: 48px;line-height: 48px;font-size: 20px;
            }
            .pp{
                height: 48px;line-height: 48px;font-size: 20px;
            }
        }
        .classtit{
            margin: 27px 36px;padding: 36px 27px; font-size: 15px;line-height: 1.5;
        }
        .lessonnav{
            .lesson{
                font-size: 16px;padding: 12px 0;width: 15%;margin: .8%;
            }
        }
        .classlist{
            overflow-x: auto;
            margin-top: 27px;
            .top{
                min-width: 950px;
                .left{
                  width: 60%;
                    p{
                        font-size: 18px;
                    }
                }
                .center{
                  width: 20%;
                  font-size: 18px;
                }
                .right{
                  width: 20%;
                  font-size: 18px;
                }
            }
            .list{
                min-width: 950px;
                .left{
                    width: 60%;
                    .child{
                        padding: 27px 0;
                    }
                }
                .center{
                  width: 20%;
                  .child_left{
                    margin-left: 16px;
                    span{
                      font-size: 14px;
                    }
                  }
                }
                .right{
                  width: 20%;
                  .child_left{
                    margin-left: 16px;
                    span{
                      font-size: 14px;
                    }
                  }
                }
            }
        }
        .buylesson{
            margin-top: 54px;
            // .lessonprice{
            //     height: 80px;
            //     .buyp1{
            //         font-size: 16px;
            //     }
            // }
            // .buy{
            //     width: 270px;
            //     height: 90px;
            // }
        }
    }
    .headtop1{
        width: 576px;height: 70px;margin: 54px auto;
    }
    .tiplist{
        width: 100%;
        margin-top: 54px;
        padding-bottom: 45px;
        .child1,.child2,.child3{
            width: 234px;
            .p1{
                font-size: 27px;
            }
            .p2{
                font-size: 22px;
                margin: 9px 0;
            }
            .p3{
                font-size: 16px;
                line-height: 1.5;
            }
        }
        .child1{
            margin-top: 90px;
        }
        .child2{
            margin-top: 45px;
        }
        .child3{

        }
        .bottom{
            img{
                width: 100%;
                margin-top: -110px;
            }
        }
    }
}

@media screen and (max-width:1200px) {
    .headtop{
        width: 520px;height: 108px;margin: 50px auto;
    }
    .class{
        padding-bottom: 50px;
        .classtop{
            height: 50px;
            .p{
                height: 44px;line-height: 44px;font-size: 18px;
            }
            .pp{
                height: 44px;line-height: 44px;font-size: 18px;
            }
        }
        .classtit{
            margin: 24px 32px;padding: 32px 24px; font-size: 15px;line-height: 1.5;
            span{
              span{
                font-size: 15px !important;
              }
            }
        }
        .lessonnav{
            .lesson{
                font-size: 15px;padding: 10px 0;width: 18%;margin: 1%;
            }
        }
        .classlist{
            overflow-x: auto;
            margin-top: 24px;
            .top{
                min-width: 1200px;
                height: 63px;
                .left{
                    p{
                        font-size: 17px;
                    }
                }
                .center{
                    font-size: 17px;
                }
                .right{
                    font-size: 17px;
                }
            }
            .list{
                min-width: 1200px;
                .left{
                    .child{
                        padding: 24px 0;
                        .childp1{
                          .el-checkbox__label{
                            font-size: 13px;
                          }
                        }
                        .childp2{
                          .teachers{
                            span{
                              font-size: 14px;
                            }
                          }
                        }
                        .childp3{
                          font-size: 15px;
                        }
                        .childp4{
                          font-size: 18px;
                        }
                    }
                }
                .center{
                  .child_left{
                    img{
                      width: 15px;height: 15px;
                    }
                    span{
                      font-size: 14px;
                    }
                  }
                }
                .right{
                  .child_left{
                    img{
                      width: 15px;height: 15px;
                    }
                    span{
                      font-size: 14px;
                    }
                  }
                }
            }
        }
        .buylesson{
            margin-top: 50px;
            .lessonprice{
                height: 80px;
                .buyp1{
                    font-size: 16px;
                }
            }
            .buy{
                height: 93px;font-size: 27px;bottom: 0;top: auto;
            }
        }
    }
    .headtop1{
        width: 520px;height: 63px;margin: 50px auto;
    }
    .niticelist{
      .child{
        width: 252px;height: 234px;
        .tit{
          font-size: 24px;
          line-height: 66px;
        }
        .image{
          width: 45px;
          height: 45px;
          margin: 17px 0;
        }
        .tit1{
          font-size: 17px;
        }
      }
    }
    .tiplist{
        width: 100%;
        margin-top: 50px;
        padding-bottom: 40px;
        .child1,.child2,.child3{
            width: 234px;
            .p1{
                font-size: 24px;
            }
            .p2{
                font-size: 20px;
                margin: 8px 0;
            }
            .p3{
                font-size: 14px;
                line-height: 1.4;
            }
        }
        .child1{
            margin-top: 80px;
        }
        .child2{
            margin-top: 40px;
        }
        .child3{

        }
        .bottom{
            img{
                width: 100%;
                margin-top: -110px;
                margin-left: 0;
            }
        }
    }
}

@media screen and (max-width:992px) {
    .headtop{
        width: 470px;height: 98px;margin: 45px auto;
    }
    .class{
        padding-bottom: 45px;
        .classtop{
            height: 45px;
            .p{
                height: 40px;line-height: 40px;font-size: 17px;
            }
            .pp{
                height: 40px;line-height: 40px;font-size: 17px;
            }
        }
        .classtit{
            margin: 21px 29px;padding: 29px 21px; font-size: 15px;line-height: 1.5;
            span{
              span{
                font-size: 14px !important;
              }
            }
        }
        .lessonnav{
            .lesson{
                font-size: 15px;padding: 10px 0;width: 23%;margin: 1%;
            }
        }
        .classlist{
            overflow-x: auto;
            margin-top: 24px;
            .top{
                min-width: 1100px;
                height: 57px;
                .left{
                    p{
                        font-size: 16px;
                    }
                }
                .center{
                    font-size: 16px;
                }
                .right{
                    font-size: 16px;
                }
            }
            .list{
                min-width: 1100px;
                .left{
                    .child{
                        padding: 21px 0;
                        .childp1{
                          display: flex;
                          justify-content: flex-start;
                          .el-checkbox__label{
                            font-size: 13px;
                          }
                        }
                        .childp2{
                          .teachers{
                            span{
                              font-size: 14px;
                            }
                          }
                        }
                        .childp3{
                          font-size: 15px;
                        }
                        .childp4{
                          font-size: 17px;
                        }
                    }
                }
                .center{
                  .child_left{
                    img{
                      width: 15px;height: 15px;
                    }
                    span{
                      font-size: 14px;
                    }
                  }
                }
                .right{
                  .child_left{
                    img{
                      width: 15px;height: 15px;
                    }
                    span{
                      font-size: 14px;
                    }
                  }
                }
            }
        }
        .buylesson{
            margin-top: 45px;
            flex-direction: column;
            height: 150px;
            .lessonprice{
                width: 100%;
                height: 70px;
                border-radius: 0 44px 0 44px;
                .buyp1{
                    font-size: 15px;
                }
                .buyp2{
                  font-size: 15px;
                  span{
                    font-size: 22px;
                  }
                }
            }
            .buy{
                position: static;
                background: #d39e6b;
                border-radius: 0 44px 0 44px;
                margin-top: 10px;
                width: 100%;
                height: 70px;font-size: 22px;bottom: 0;top: auto;line-height: 70px;
            }
        }
    }
    .headtop1{
        width: 470px;height: 57px;margin: 45px auto;
    }
    .niticelist{
      .child{
        width: 225px;height: 210px;
        .tit{
          font-size: 20px;
          line-height: 62px;
        }
        .image{
          width: 40px;
          height: 40px;
          margin: 15px 0;
        }
        .tit1{
          font-size: 15px;
        }
      }
    }
    .tiplist{
        width: 100%;
        margin-top: 45px;
        padding-bottom: 36px;
        .child1,.child2,.child3{
            width: 234px;
            .p1{
                font-size: 22px;
            }
            .p2{
                font-size: 18px;
                margin: 7px 0;
            }
            .p3{
                font-size: 14px;
                line-height: 1.4;
            }
        }
        .child1{
            margin-top: 80px;
        }
        .child2{
            margin-top: 40px;
        }
        .child3{

        }
        .bottom{
            img{
                width: 100%;
                margin-top: -70px;
                margin-left: 0;
            }
        }
    }
}

@media screen and (max-width:768px) {
    .headtop{
        width: 420px;height: 88px;margin: 40px auto;
    }
    .class{
        padding-bottom: 40px;
        .classtop{
            height: 40px;
            .p{
                height: 36px;line-height: 36px;font-size: 16px;
            }
            .pp{
                height: 36px;line-height: 36px;font-size: 16px;
            }
        }
        .classtit{
            margin: 19px 26px;padding: 26px 19px; font-size: 15px;line-height: 1.5;
            span{
              span{
                font-size: 14px !important;
              }
            }
        }
        .lessonnav{
            .lesson{
                font-size: 15px;padding: 10px 0;width: 31.33%;margin: 1%;
            }
        }
        .classlist{
            overflow-x: auto;
            margin-top: 24px;
            .top{
                min-width: 1100px;
                height: 52px;
                .left{
                    p{
                        font-size: 15px;
                    }
                }
                .center{
                    font-size: 15px;
                }
                .right{
                    font-size: 15px;
                }
            }
            .list{
                min-width: 1100px;
                .left{
                    .child{
                        padding: 19px 0;
                        .childp1{
                          display: flex;
                          justify-content: flex-start;
                          .el-checkbox__label{
                            text-align: left;
                              display: flex;
                          justify-content: flex-start;
                            font-size: 13px;
                          }
                        }
                        .childp2{
                          .teachers{
                            span{
                              font-size: 13px;
                            }
                          }
                        }
                        .childp3{
                          font-size: 14px;
                        }
                        .childp4{
                          font-size: 16px;
                        }
                    }
                }
                .center{
                  .child_left{
                    img{
                      width: 15px;height: 15px;
                    }
                    span{
                      font-size: 14px;
                    }
                  }
                }
                .right{
                  .child_left{
                    img{
                      width: 15px;height: 15px;
                    }
                    span{
                      font-size: 14px;
                    }
                  }
                }
            }
        }
        .buylesson{
            margin-top: 40px;
            height: 130px;
            .lessonprice{
                height: 60px;padding-left:4%;
                .buyp1{
                    font-size: 13px;
                }
                .buyp2{
                  font-size: 13px;
                  span{
                    font-size: 17px;
                  }
                }
            }
            .buy{
                height: 60px;font-size: 19px;bottom: 0;top: auto;line-height: 64px;
            }
        }
    }
    .headtop1{
        width: 420px;height: 52px;margin: 40px auto;
    }
    .niticelist{
      .child{
        width: 200px;height: 190px;
        .tit{
          font-size: 18px;
          line-height: 56px;
        }
        .image{
          width: 36px;
          height: 36px;
          margin: 14px 0;
        }
        .tit1{
          font-size: 13px;
        }
      }
    }
    .tiplist{
        width: 100%;
        margin-top: 40px;
        padding-bottom: 32px;
        .child1,.child2,.child3{
            width: 30%;
            .p1{
                font-size: 20px;
            }
            .p2{
                font-size: 16px;
                margin: 6px 0;
            }
            .p3{
                font-size: 13px;
                line-height: 1.3;
            }
        }
        .child1{
            margin-top: 80px;
        }
        .child2{
            margin-top: 40px;
        }
        .child3{

        }
        .bottom{
            img{
                width: 100%;
                margin-top: -70px;
                margin-left: 0;
            }
        }
    }
}

@media screen and (max-width:480px) {
    .headtop{
        width: 80%;height: auto;margin: 35px auto;
    }
    .class{
        padding-bottom: 35px;
        .classtop{
            height: 35px;
            .p{
                height: 30px;line-height: 30px;font-size: 13px;
            }
            .pp{
                height: 30px;line-height: 30px;font-size: 13px;
            }
        }
        .classtit{
            margin: 15px 15px;padding: 15px 15px; font-size: 14px;line-height: 1.4;
            span{
              span{
                font-size: 13px !important;
              }
            }
        }
        .lessonnav{
            margin: 0 15px;
            .lesson{
                font-size: 13px;padding: 8px 0;width: 48%;margin: 1%;
            }
        }
        .classlist{
            overflow-x: visible;
            // transform: scale(.5);
            // margin-top: 24px;
            margin: 24px 5px 0;
            .top{
                // min-width: 1100px;
                min-width: 90%;
                height: 42px;
                .left{
                  width: 58%;
                    p{
                        font-size: 6px;
                    }
                }
                .center{
                  width: 21%;
                    font-size: 6px;
                }
                .right{
                  
                    font-size: 6px;
                }
            }
            .list{
                // min-width: 1100px;
                min-width: 90%;
                .left{
                  width: 58%;
                    .child{
                        padding: 13px 0;
                        .childp1{
                          span{
                              font-size: 6px;

                          }

                          .el-checkbox{
                              font-size: 6px;

                            .el-checkbox__label{
                              padding-left: 4px;
                              transform: scale(0.7);
                            }
                          }
                          
                        }
                        .childp2{
                          .teachers{
                            span{
                              font-size: 6px;
                            }
                          }
                        }
                        .childp3{
                          font-size: 6px;
                        }
                        .childp4{
                          font-size: 7px;
                        }
                    }
                }
                .center{
                  width: 21%;
                  .child_left{
                    margin-left: 2px;
                    img{
                      width: 8px;height: 8px;
                    }
                    span{
                      margin-left: 2px;
                      font-size: 6px;
                    }
                  }
                }
                .right{
                  width: 21%;
                  .child_left{
                    margin-left: 2px;
                    img{
                      width: 8px;height: 8px;
                    }
                    span{
                      font-size: 6px;
                      margin-left: 2px;
                    }
                  }
                }
            }
        }
        .buylesson{
            height: 85px;
            // margin-top: 0;
            margin: 10px 0 0;
            height: 110px;
            .lessonprice{
                height: 50px;padding: 0 10% 0 8%;
                display: grid;
                .buyp1{
                    font-size: 11px;
                }
                .buyp2{
                  font-size: 12px;
                  span{
                    font-size: 14px;
                  }
                }

            }
            .buy{
                height: 50px;font-size: 11px;bottom: 0;top: auto;line-height: 50px;padding-left: 0;
            }
        }
    }
    .headtop1{
        width: 80%;height: auto;margin: 35px auto;
    }
    .niticelist{
      .child{
        width: 200px;height: 190px;
        .tit{
          font-size: 16px;
          line-height: 56px;
        }
        .image{
          width: 36px;
          height: 36px;
          margin: 14px 0;
        }
        .tit1{
          font-size: 13px;
        }
      }
    }
    .tiplist{
        width: 100%;
        margin-top: 40px;
        padding-bottom: 32px;
        .top{
          flex-direction: column;
        }
        .child1,.child2,.child3{
            width: 100%;
            margin-top: 30px;
            box-sizing: border-box;
            padding: 20px 20px 60px 20px;
            align-items: flex-start;
            box-shadow: 0 0 10px rgba(0,0,0,0.15);
            position: relative;
            transition: all .6s linear;
            overflow: hidden;
            background-color: transparent;
            z-index: 1;
            .p1{
                font-size: 18px;
            }
            .p2{
                font-size: 15px;
                margin: 6px 0;
            }
            .p3{
                font-size: 13px;
                line-height: 1.3;
                text-align: left;
            }
            &::before{
              content: '';
              width: 250px;
              height: 350px;
              border-radius: 50%;
              background-color: rgba(224,190,85,.5);
              position: absolute;
              top: 0;
              left: -40%;
              transform: scale(0);
              z-index: -1;
              transition: all .6s;
            }
            &:hover::before {
              transform: scale(1);
            }
            &:hover .text{
              strong{
                margin-top: -30px;
              }
            }
            .text{
              display: block;
              height: 30px;
              line-height: 30px;
              font-size: 30px;
              position: absolute;
              right: 15px;
              bottom: 15px;
              display: grid;
              overflow: hidden;
              strong{
                color: #E0BE55;
                grid-column: 1;
                grid-row: 1 / -1;
                transition: all .6s;
                
              }
              b{
                color: #000;
                grid-column: 1;
              }
            }
        }
        .bottom{
            img{
                display: none;
            }
        }
    }
}

</style>