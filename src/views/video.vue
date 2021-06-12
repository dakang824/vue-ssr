<template>
  <div class="content">
    <div class="video">
      <div class="inner">
        <div class="video_title">
          <div class="video_title_back">
            <button type="button" @click="goback">返回</button>
          </div>
          <h2>{{ classinfo.title }}</h2>
        </div>
        <div class="video_data">
          <div class="place">
            <img src="../../assets/place_icon.png" alt="图片找不到了" />
            <span>&nbsp;&nbsp;您现在在位置：</span>
            <div class="dividers">
              <router-link to="/">首页</router-link>
              <span class="arrow">></span>
              <span>{{ classinfo.title }}</span>
            </div>
          </div>
          <span>时间：{{ classinfo.create_time_text }}</span>
          <span></span>
        </div>
        <div class="video_content">
          <div class="video_player">
            <div
              class="video_div"
              @mouseenter="mouseenter"
              @mouseleave="mouseleave"
              @mousemove="mousemove"
            >
              <video
                id="my_video"
                ref="myVid"
                class="video video-js vjs-default-skin vjs-big-play-centered"
                preload="auto"
                controls
                @timeupdate="timeupdate"
                @play="startplay"
                @pause="pauseplay"
                @canplay="canplay"
                @waiting="waiting"
              ></video>
              <div class="setspeed" v-if="speedshow" @click="setspeed">
                {{ speedlist[speedindex] }}×
              </div>
            </div>
          </div>
          <div class="video_list">
            <h3 class="video_list_title">{{ classinfo.title }}</h3>
            <div class="video_list_tabbar">
              <!-- <button type="button">往期</button> -->
              <button type="button" class="active">相关</button>
            </div>
            <div v-for="(item, index) in classinfo.subject" :key="index">
              <h2 style="color: #ffffff;margin-top:15px">{{ item.name }}</h2>
              <div
                class="video_item"
                v-for="(v, i) in item.course_hour"
                :key="i"
                @click="cahngeurl(v)"
              >
                <div class="video_item_img">
                  <img class="img" :src="classinfo.images" alt="图片找不到了" />
                  <span>{{ v.duration }}</span>
                  <img
                    class="img_icon"
                    src="../../assets/played_icon.png"
                    alt="图片找不到了"
                  />
                </div>
                <div class="video_item_title">
                  <h4>{{ v.title }}</h4>
                  <p class="video_item_text">{{ item.subject_name }}</p>
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
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "videojs-contrib-hls";
export default {
  data() {
    return {
      classinfo: "",
      speedshow: false,
      speedlist: ["0.5", "0.8", "1.0", "1.2", "1.5", "2.0"],
      speedindex: 2,
      timer: "",
      hls: "",
      seconds: "", //当前播放秒数
      actual_seconds: 0, //实际播放时间
      gettime_inter: "",
      isplaytrue: false,
      playId: "",
      havevideo:false,
    };
  },
  
  destroyed() {
    clearInterval(this.gettime_inter);
    if (this.hls) {
      this.hls.destroy();
    }
    // 页面退出上传播放记录
    if (this.isplaytrue) {
      // 视频已经成功播放过，有观看记录
      this.post("course/watch", {
        course_hour_id: this.playId,
        seconds: this.seconds,
        actual_seconds: this.actual_seconds,
      });
    }
  },
  mounted() {},
  created() {
    this.hls = "";
    this.getvideo();
  },
  methods: {
    //改变播放链接
    cahngeurl(url) {
      this.playVideo(url.video_url);
      this.playId = url.id;
    },
    // 监听视频开始播放，视频开始播放开始及时，统计观看实际时长
    startplay() {
      console.log("开始播放");
      this.gettime_inter = setInterval(() => {
        if (this.isplaytrue) {
          this.actual_seconds++;
          // console.log("实际播放时间" + this.actual_seconds);
          // console.log("当前播放秒数" + this.seconds);
        }
      }, 1000);
    },
    // 暂停播放
    pauseplay() {
      clearInterval(this.gettime_inter);
      console.log("暂停播放");
    },

    canplay() {
      // 视频成功播放，开始计算播放时间
      this.isplaytrue = true;
      console.log("成功播放");
    },
    waiting() {
      // 视频进入缓存状态，暂停实际播放时间的计算
      this.isplaytrue = false;
      console.log("加载中");
    },
    // 获取播放当前时间
    timeupdate(e) {
      this.seconds = Number(document.getElementById("my_video").currentTime);
    },
    // 设置播放速度
    setspeed() {
      if (this.speedindex < this.speedlist.length - 1) {
        this.speedindex++;
        document.getElementById("my_video").playbackRate = Number(
          this.speedlist[this.speedindex]
        );
      } else {
        this.speedindex = 0;
        document.getElementById("my_video").playbackRate = Number(
          this.speedlist[this.speedindex]
        );
      }
    },
    // 鼠标进入视频窗口
    mouseenter() {
      console.log("鼠标进入");
      clearTimeout(this.timer);
      this.speedshow = true;
      this.timer = setTimeout(() => {
        this.speedshow = false;
      }, 2800);
    },
    // 鼠标在窗口移动
    mousemove() {
      clearTimeout(this.timer);
      this.speedshow = true;
      this.timer = setTimeout(() => {
        this.speedshow = false;
      }, 2800);
    },
    // 鼠标离开视频窗口
    mouseleave() {
      console.log("鼠标离开");
      this.speedshow = false;
    },
    // 获取视频详情
    getvideo() {
      this.post("course/play", {
        course_id: this.$route.query.id,
      }).then((req) => {
        if (req.code == 1) {
          this.classinfo = req.data;
          if (req.data.subject.length > 0) {
            if (this.$route.query.course_hour_id && this.$route.query.seconds) {
              req.data.subject.forEach((v) => {
                v.course_hour.forEach((item) => {
                  if (item.id == this.$route.query.course_hour_id) {
                    let res = item.video_url;
                    this.playId = item.id;
                    this.havevideo=true
                    this.playVideo(
                      "http://ivi.bupt.edu.cn/hls/chchd.m3u8",
                      this.$route.query.seconds
                    );
                    return false;
                  }
                });
              });
              if(!this.havevideo){
                 this.$alert("视频不存在", "提示", {
              confirmButtonText: "确定",
              callback: (action) => {
                this.goback();
              },
            });
              }
            } else {
              let res = req.data.subject[0].course_hour[0].video_url;
              this.playId = req.data.subject[0].course_hour[0].id;
              this.playVideo("http://ivi.bupt.edu.cn/hls/chchd.m3u8");
            }
          } else {
            this.$alert("视频不存在", "提示", {
              confirmButtonText: "确定",
              callback: (action) => {
                this.goback();
              },
            });
          }
        } else {
          this.$alert(req.msg, "提示", {
            confirmButtonText: "确定",
            callback: (action) => {
              this.goback();
            },
          });
        }
      });
    },
    playVideo(e, s) {
      //e为视频的m3u8 url
      this.$nextTick(() => {
        var myPlayer = document.getElementById("my_video");
        if (Hls.isSupported()) {
          this.hls = new Hls();
          this.hls.loadSource(e);
          this.hls.attachMedia(myPlayer);
          this.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            if (s) {
              myPlayer.currentTime = s;
            }
            myPlayer.play();
          });
        }
      });
    },
    destroyed() {},
    // 返回
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>


<style>
.video_item_text {
  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;
}
#my_video {
  width: 100%;
  height: 100%;
  outline: none;
}
.video_div {
  position: relative;
}
.setspeed {
  position: absolute;
  bottom: 30px;
  right: 220px;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  text-align: center;
  border-radius: 18px;
  background-color: rgba(31, 31, 31, 0);
  font-size: 13px;
  color: #fff;
  z-index: 1000000;
  cursor: pointer;
  transition: all 0.3s;
  　-moz-user-select: none; /*火狐*/

  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.setspeed:hover {
  background-color: rgba(31, 31, 31, 0.5);
}
.video_list {
  overflow-y: auto;
}
.video_list::-webkit-scrollbar {
  width: 0 !important;
}
.video_list::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>