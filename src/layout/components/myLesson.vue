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
        <h5>{{ type == 1 ? "购买课程" : "试听课程" }}</h5>
      </div>
    </div>
    <div class="studylesson" v-if="type == 1 && historyclass">
      <div class="left">
        <p class="classname">
          <span>{{ classTitFirst }}</span>
          {{ historyclass.title }}
        </p>
        <p class="p2">{{ historyclass.course_hour_title }}</p>
        <p class="study" @click="continueplay">
          <img src="../../assets/videoplay.png" alt="" />
          继续学习
        </p>
      </div>
      <div class="right">
        <div class="teacher">
          <img :src="historyclass.teachers.avatar" alt="" />
          <p>{{ historyclass.teachers.name }}</p>
        </div>
      </div>
    </div>
    <nodata v-if="allclass.length < 1" title="没有相关课程"></nodata>

    <div class="classlist">
      <div class="class" v-for="(item, index) in classlist.data" :key="index">
        <div class="div1">{{ item.category_name }}</div>
        <div class="div2">{{ item.title }}</div>
        <div class="div3">
          时间：{{ gettime(item.create_time) }} &nbsp; | &nbsp;
          {{ item.course_hour }}课时
        </div>
        <div class="div4">
          <div v-for="(v, i) in item.teacher" :key="i">
            <img :src="v.avatar" alt="" />
            <p>{{ v.name }}</p>
          </div>
        </div>
        <div class="div5">
          <div @click="tolearn(item.course_id)">立即学习</div>
        </div>
      </div>
    </div>
    <div class="pager">
      <el-pagination
        background
        layout="prev, pager, next"
        hide-on-single-page
        :current-page="1"
        :page-size="classlist.per_page"
        @current-change="handleCurrentChange"
        :total="classlist.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import nodata from "./nodata";
export default {
  data() {
    return {
      tabbarList: [
        {
          id: 1,
          name: "购买课程",
          url: "",
          active: true,
        },
        {
          id: 2,
          name: "试听课程",
          url: "",
          active: false,
        },
      ],
      historyclass: "",
      classlist: [],
      allclass: [],
      classTitFirst: "",
      type: 1, //课程类型
    };
  },
  components: {
    nodata,
  },
  mounted() {
    document.title = "北京中盛润德-我的课程";
    this.gethistory();
    this.getclass();
  },
  methods: {
    // 继续播放上次播放记录
    continueplay() {
      this.$router.push({
        path: "/video",
        query: {
          id: this.historyclass.course_id,
          course_hour_id: this.historyclass.course_hour_id,
          seconds: this.historyclass.seconds,
        },
      });
    },
    //   立即学习
    tolearn(id) {
      this.$router.push({
        path: "/video",
        query: {
          id: id,
        },
      });
    },
    change(list, index) {
      this.classlist = [];
      this.type = index + 1;
      this.getclass();
      list.forEach((e, i) =>
        i === index ? (e.active = true) : (e.active = false)
      );
    },
    // 切换页数
    handleCurrentChange(e) {
      this.page = e;
      this.getclass();
    },
    // 获取上次观看记录
    gethistory() {
      this.get("usercenter/watch", true).then((res) => {
        if (res.data) {
          this.historyclass = res.data;
          this.classTitFirst = res.data.title.slice(0, 1);
        }
      });
    },
    getclass() {
      this.get("usercenter/course", true, {
        page: this.page,
        type: this.type,
      }).then((res) => {
        this.classlist = res.data;
        this.allclass = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.studylesson {
  height: 195px;
  border: 1px solid #eeeeee;
  width: 90%;
  padding: 0 3%;
  margin-left: 5%;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  .left {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .classname {
      font-size: 22px;
      width: 90%;
      color: #333333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        color: #f10c25;
        border: 1px solid #f10c25;
        font-size: 18px;
        padding: 0 2px;
        border-radius: 5px;
      }
    }
    .p2 {
      font-size: 14px;
      color: #999999;
      margin-top: 6px;
    }
    .study {
      width: 142px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #052d47;
      font-size: 16px;
      color: #ffffff;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 15px;
      img {
        margin-right: 8px;
      }
    }
    .study:hover {
      background-color: #093653;
    }
  }
  .right {
    .teacher {
      display: flex;
      align-items: center;
      margin-top: 30px;
      img {
        width: 44px;
        height: 44px;
        border: 2px solid #f3f3f3;
        border-radius: 50%;
      }
      p {
        font-size: 13px;
        margin-left: 6px;
        color: #333333;
      }
    }
  }
}
.classlist {
  padding-bottom: 30px;
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
  .class {
    height: auto;
    width: 31.33%;
    border-radius: 10px;
    margin: 1%;
    box-sizing: border-box;
    border: 1px solid #eeeeee;
    padding: 15px;
    transition: all 0.6s;
    &:hover {
      transform: scale(1.05);
    }
    .div1 {
      height: 25px;
      width: 80px;
      line-height: 25px;
      text-align: center;
      font-size: 12px;
      color: #ffffff;
      background-color: #b0b3b7;
      border-radius: 2px;
    }
    .div2 {
      font-size: 22px;
      height: 60px;
      font-weight: bold;
      color: #333;
      margin-top: 10px;
      overflow: hidden;

      text-overflow: ellipsis;

      display: -webkit-box;

      -webkit-box-orient: vertical;

      -webkit-line-clamp: 2;
    }
    .div3 {
      margin-top: 20px;
      font-size: 13px;
      color: #999999;
    }
    .div4 {
      display: flex;
      margin-top: 20px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        p {
          font-size: 14px;
          color: #666666;
        }
      }
    }
    .div5 {
      margin-top: 20px;
      div {
        width: 125px;
        height: 42px;
        color: #ffffff;
        line-height: 42px;
        text-align: center;
        font-size: 15px;
        background-color: #052d47;
        border-radius: 5px;
        cursor: pointer;
      }
      div:hover {
        background-color: #0d3d5e;
      }
    }
  }
}
@media screen and (max-width: 1460px) {
  .studylesson {
    height: 175px;
  }
  .studylesson .left .classname {
    font-size: 21px;
  }
  .studylesson .left .study {
    height: 42px;
    font-size: 15px;
  }
  .studylesson .right .teacher img {
    width: 40px;
    height: 40px;
  }
  .classlist .class .div2 {
    height: 54px;
    font-size: 21px;
  }
  .classlist .class .div4 div img {
    width: 45px;
    height: 45px;
  }
  .classlist .class .div5 div {
    height: 38px;
    line-height: 38px;
  }
}
@media screen and (max-width: 1200px) {
  .studylesson {
    height: 160px;
  }
  .studylesson .left .classname {
    font-size: 20px;
  }
  .studylesson .left .study {
    height: 40px;
    font-size: 14px;
  }
  .studylesson .right .teacher img {
    width: 40px;
    height: 40px;
  }
  .classlist .class {
    width: 48%;
  }
  .classlist .class .div2 {
    height: 54px;
    font-size: 21px;
  }
  .classlist .class .div4 div img {
    width: 45px;
    height: 45px;
  }
  .classlist .class .div5 div {
    height: 38px;
    line-height: 38px;
  }
}
@media screen and (max-width: 767px) {
  .studylesson {
    height: 140px;
  }
  .studylesson .left .classname {
    font-size: 18px;
  }
  .studylesson .left .study {
    height: 36px;
    font-size: 14px;
  }
  .studylesson .left .study img {
    width: 20px;
  }
  .studylesson .right .teacher img {
    width: 40px;
    height: 40px;
  }
  .classlist .class {
    width: 48%;
  }
  .classlist .class .div2 {
    height: 50px;
    font-size: 20px;
  }
  .classlist .class .div4 div img {
    width: 40px;
    height: 40px;
  }
  .classlist .class .div5 {
    margin-top: 15px;
  }
  .classlist .class .div5 div {
    height: 34px;
    line-height: 34px;
  }
  .classlist .class .div3 {
    margin-top: 10px;
  }
}
@media screen and (max-width: 480px) {
  .classlist .class {
    width: 98%;
  }
  .studylesson .left {
    width: 65%;
  }
  .studylesson .left .classname {
    font-size: 16px;
  }
  .studylesson .left .p2 {
    font-size: 13px;
  }
  .studylesson .left .study {
    height: 32px;
    font-size: 13px;
    width: 128px;
  }
  .studylesson .left .study img {
    width: 18px;
  }
}
</style>
