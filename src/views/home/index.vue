<template>
  <div class="content">
    <swiper
      class="home_swiper wow fadeIn"
      ref="mySwiper"
      v-if="bannerShow"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="banner in banners"
        :style="{ backgroundImage: 'url(' + banner.image + ')' }"
        :key="banner.id"
        style="cursor:pointer"
      >
        <a class="link" @click="tourl(banner)">
          <div class="inner">
            <div class="text">
              <img :src="banner.font_image" alt="" />
            </div>
          </div>
        </a>
      </swiper-slide>
      <div class="home-pagination swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="section section_1 wow fadeInUp" id="elaborately">
      <div class="inner">
        <div class="section_title">
          <img src="@/assets/section_1_title.png" alt="" />
        </div>
        <div class="list_box">
          <div class="item wow fadeInUp" data-wow-delay=".1s">
            <div class="bg">
              <div class="icon">
                <i class="iconfont iconguanli"></i>
              </div>
              <div class="line"></div>
              <div class="title">基础系统班</div>
              <a href="javascript:;" class="view" @click="seeclass(4)"
                >查看课程</a
              >
            </div>
          </div>
          <div class="item wow fadeInUp" data-wow-delay=".2s">
            <div class="bg">
              <div class="icon">
                <i class="iconfont iconzhengzhi"></i>
              </div>
              <div class="line"></div>
              <div class="title">钻石精讲班</div>
              <a href="javascript:;" class="view" @click="seeclass(2)"
                >查看课程</a
              >
            </div>
          </div>
          <div class="item wow fadeInUp" data-wow-delay=".3s">
            <div class="bg">
              <div class="icon">
                <i
                  class="iconfont iconzhongxiyijieheweichuangbaxiangliaofa"
                ></i>
              </div>
              <div class="line"></div>
              <div class="title">超钻密训班</div>
              <a href="javascript:;" class="view" @click="seeclass(3)"
                >查看课程</a
              >
            </div>
          </div>
          <div class="item wow fadeInUp" data-wow-delay=".4s">
            <div class="bg">
              <div class="icon">
                <i class="iconfont iconjiaoyu"></i>
              </div>
              <div class="line"></div>
              <div class="title">提前面试班</div>
              <a href="javascript:;" class="view" @click="seeclass(1)"
                >查看课程</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section_2" id="optimization">
      <div class="inner">
        <div class="section_title wow fadeInUp">
          <img src="@/assets/section_2_title.png" alt="" />
        </div>
        <div class="list_box">
          <div
            class="item wow fadeInUp"
            v-for="(item, index) in free_course"
            :key="item.id"
            :data-wow-delay="((index + 1) / 10).toFixed(1) + 's'"
          >
            <div class="bg">
              <div class="img_box">
                <img :src="item.images" alt="" />
              </div>
              <div class="text_box">
                <div class="title">
                  <span class="tag">{{ item.category_name }}</span
                  >{{ item.title }}
                </div>
                <div class="speaker" v-for="el in item.teacher" :key="el.id">
                  <div class="img">
                    <img :src="el.avatar" alt="" />
                  </div>
                  <div class="name">{{ el.name }}</div>
                  <div class="tag">主讲：{{ el.subject }}</div>
                </div>
              </div>
              <div class="bottom">
                <div class="price">
                  <span class="old">￥{{ item.original_price }}</span>
                  <span class="now">{{
                    item.price == 0 ? "免费" : item.price
                  }}</span>
                </div>
                <div class="num">已有{{ item.buy_num }}人购买</div>
              </div>
              <div class="hover_text">
                <div class="text">
                  {{ item.description }}
                </div>
                <el-button
                  class="btn"
                  @click="draw(item.id, item.is_receive)"
                  v-if="item.is_receive == 0"
                  >立即领取</el-button
                >
                <el-button
                  class="btn"
                  @click="playlesson(item.id, item.is_receive)"
                  v-if="item.is_receive == 1"
                  >立即播放</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Form -->
        <el-dialog title="免费领取" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="您的名字" :label-width="formLabelWidth">
              <el-input
                v-model="form.name"
                autocomplete="off"
                placeholder="请输入您的姓名"
              ></el-input>
            </el-form-item>
            <el-form-item label="电话号码" :label-width="formLabelWidth">
              <el-input
                v-model="form.phone"
                autocomplete="off"
                placeholder="请输入您的电话号码"
              ></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" :label-width="formLabelWidth">
              <el-input
                v-model="form.email"
                autocomplete="off"
                placeholder="请输入您的电子邮箱（非必填）"
              ></el-input>
            </el-form-item>
            <el-form-item label="QQ号码" :label-width="formLabelWidth">
              <el-input
                v-model="form.qq"
                autocomplete="off"
                placeholder="请输入您的QQ号码（非必填）"
              ></el-input>
            </el-form-item>
            <el-form-item label="留言内容" :label-width="formLabelWidth">
              <el-input
                type="textarea"
                v-model="form.content"
                maxlength="200"
                show-word-limit
                placeholder="请输入您的留言内容（非必填）"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button class="enter_btn" type="primary" @click="receive()"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
    </div>
    <div class="section section_3" id="discipline">
      <div class="inner">
        <div class="section_title wow fadeInUp">
          <img src="@/assets/section_3_title.png" alt="" />
        </div>
        <div class="text_box wow fadeInUp" data-wow-delay=".1s">
          拥有一支思想创新，锐意进取的团队，勇担时代使命，持续创造新的市场，秉承不忘初心，开发优质课程，推进品质服务，努力打造服务、品质始终如一的教育品牌。
        </div>
        <div class="list_box wow fadeInUp" data-wow-delay=".2s">
          <div class="item">
            <div class="icon">
              <img src="@/assets/section_3_icon_03.png" alt="" />
            </div>
            <div class="num_box">
              <div class="num">
                <span :data-num="site_info.senior_consultant">{{
                  site_info.senior_consultant
                }}</span
                >课
              </div>
              <div class="text">高级顾问团队打造</div>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/section_3_icon_01.png" alt="" />
            </div>
            <div class="num_box">
              <div class="num">
                <span :data-num="site_info.teacher_resources">{{
                  site_info.teacher_resources
                }}</span
                >K
              </div>
              <div class="text">专业教师资源</div>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/section_3_icon_02.png" alt="" />
            </div>
            <div class="num_box">
              <div class="num">
                <span :data-num="site_info.course_num">{{
                  site_info.course_num
                }}</span
                >个
              </div>
              <div class="text">网络课程随时随地的听课</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section_4" id="goodness">
      <div class="inner">
        <div class="section_title wow fadeInUp">
          <img src="@/assets/section_4_title.png" alt="" />
        </div>
        <div class="list_box">
          <div class="line">
            <img src="@/assets/section_4_img_line.png" alt="" />
          </div>
          <div class="row_item">
            <div class="item wow slideInDown" data-wow-delay=".1s">
              <img src="@/assets/section_4_img_01.png" alt="" />
            </div>
            <div class="item wow slideInDown" data-wow-delay=".3s">
              <img src="@/assets/section_4_img_02.png" alt="" />
            </div>
            <div class="item wow slideInDown" data-wow-delay=".5s">
              <img src="@/assets/section_4_img_03.png" alt="" />
            </div>
          </div>
          <div class="row_item">
            <div class="item wow slideInUp" data-wow-delay=".2s">
              <img src="@/assets/section_4_img_04.png" alt="" />
            </div>
            <div class="item wow slideInUp" data-wow-delay=".4s">
              <img src="@/assets/section_4_img_05.png" alt="" />
            </div>
            <div class="item wow slideInUp" data-wow-delay=".6s">
              <img src="@/assets/section_4_img_06.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section_5" id="teacher">
      <div class="inner">
        <div class="section_title wow fadeInUp">
          <img src="@/assets/section_5_title.png" alt="" />
        </div>
        <div class="seciton_5_slider wow fadeInUp" data-wow-delay=".2s">
          <swiper
            class="fiveSwiper wow fadeIn"
            v-if="show"
            :options="fiveSliderOption"
          >
            <swiper-slide v-for="item in teachers" :key="item.id">
              <div class="bg">
                <div class="img">
                  <img :src="item.avatar" alt="" />
                </div>
                <div class="name">{{ item.name }}</div>
                <div class="tag">{{ item.subject }}</div>
                <div class="text">
                  {{ item.content }}
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <div class="section section_6">
      <div class="inner">
        <div class="section_title wow fadeInUp">
          <img src="@/assets/section_6_title.png" alt="" />
        </div>
        <div class="img_box">
          <img
            class="img wow zoomIn"
            data-wow-delay=".1s"
            src="@/assets/section_6_img_01.png"
            alt=""
          />
          <div class="img_center">
            <img src="@/assets/section_6_img.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <go-top></go-top>
    <pendant :site="site"></pendant>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  name: "home",
  inject:['reload'],
  asyncData: ({store}) => {
    return store.dispatch("home/getBanner");
  },
  data() {
    const that = this;
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        email: "",
        qq: "",
        content: "",
        delivery: false,
      },
      formLabelWidth: "120px",
      teachers: [],
      free_course: [],
      category: [],
      site: {},
      site_info: {},
      course_id: 0,
      show: false,
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".home-pagination",
          clickable: true,
        },
      },
      fiveSliderOption: {
        slidesPerView: "auto",
        loopedSlides: 6,
        autoplay: true,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".seciton_5_slider .swiper-button-next",
          prevEl: ".seciton_5_slider .swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
      bannerShow: (state) => state.home.banner,
    }),
  },
  mounted() {
    document.title = "欢迎来到北京中盛润德";

    if (document.documentElement.clientWidth <= 768) {
      this.formLabelWidth = "80px";
    }

    function dynamicNum(dom) {
      if ($(dom).hasClass("animated") || $(window).width() <= 767) {
        dom.find(".item").each(function(i, e) {
          if (!$(e).hasClass("active")) {
            $(this).addClass("active");
            var count = 0;
            var result = $(e)
              .find(".num span")
              .attr("data-num");
            var pre = result / 60;
            var number = 0;
            var setDynamic = setInterval(function() {
              number += pre;
              count++;
              $(e)
                .find(".num span")
                .text(parseInt(number));
              if (count >= 60) {
                $(e)
                  .find(".num span")
                  .text(result);
                clearInterval(setDynamic);
              }
            }, 20);
          }
        });
      }
    }

    setTimeout(() => {
      if (this.$route.query.aurl) {
        let top = $("#" + this.$route.query.aurl).offset().top;
        $("html,body").animate({ scrollTop: top }, 500);
      }
    }, 200);

    this.get("home/category", false).then((res) => {
      this.category = res.data;
      setTimeout(() => {
        if (this.$route.query.aurl) {
          let top = $("#" + this.$route.query.aurl).offset().top;
          $("html,body").animate({ scrollTop: top }, 500);
        }
      }, 200);
    });
    this.get("home/free_course", false).then((res) => {
      this.free_course = res.data;
      setTimeout(() => {
        if (this.$route.query.aurl) {
          let top = $("#" + this.$route.query.aurl).offset().top;
          $("html,body").animate({ scrollTop: top }, 500);
        }
      }, 200);
    });
    this.get("teacher/list", false).then((res) => {
      this.teachers = res.data;
      this.show = true;
      setTimeout(() => {
        if (this.$route.query.aurl) {
          let top = $("#" + this.$route.query.aurl).offset().top;
          $("html,body").animate({ scrollTop: top }, 500);
        }
      }, 200);
    });
    this.get("site_info", false).then((res) => {
      this.site = res.data;
      this.site_info = res.data.course;
      setTimeout(() => {
        $(window).scroll(function() {
          dynamicNum($(".section_3 .list_box"));
        });
        if (this.$route.query.aurl) {
          let top = $("#" + this.$route.query.aurl).offset().top;
          $("html,body").animate({ scrollTop: top }, 500);
        }
      }, 200);
    });
    setTimeout(() => {
      if (this.$route.query.aurl) {
        let top = $("#" + this.$route.query.aurl).offset().top;
        $("html,body").animate({ scrollTop: top }, 500);
      }
    }, 200);
  },
  methods: {
    tourl(e) {
      if (e.jump_type == 3) {
        window.open(e.url, "_blank");
      }
    },
    seeclass(id) {
      sessionStorage.setItem("navId", 2);
      let routeUrl = this.$router.resolve({
        path: "/lesson",
        query: { id },
      });
      window.open(routeUrl.href, "_blank");
      this.reload()
    },
    playlesson(id) {
      this.$router.push({
        path: "/video",
        query: {
          id,
        },
      });
    },
    routerLink() {
      let routeUrl = this.$router.resolve({
        path: "/share",
        query: { id: 96 },
      });
      window.open(routeUrl.href, "_blank");
    },
    receive() {
      let { name, phone, email, qq, content } = this.form;
      if (!name.trim()) {
        this.$message({
          message: "名字不能为空",
          type: "warning",
        });
      } else if (!phone.trim()) {
        this.$message({
          message: "手机号不能为空",
          type: "warning",
        });
      } else {
        this.dialogFormVisible = false;
        let token = localStorage.getItem("token");
        if (token) {
          this.post("course/receive", {
            course_id: this.course_id,
            name,
            phone,
            email,
            qq,
            content,
          }).then((res, error) => {
            if (res.code == 1) {
              this.$message({
                message: "领取成功",
                type: "success",
              });
              this.$router.replace({ name: "User" });
            } else {
              this.$message.error(res.msg);
            }
          });
        } else {
          this.$message.error("请进行登录");
          this.$router.replace({ name: "Login" });
        }
      }
    },
    draw(id, is_receive) {
      if (is_receive == 0) {
        this.dialogFormVisible = true;
      }
      this.course_id = id;
    },
  },
};
</script>

<style></style>
