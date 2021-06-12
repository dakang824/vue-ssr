<template>
  <div class="footer">
    <div class="inner">
      <div class="footer_top">
        <router-link to="/" class="logo"
          ><img src="@/assets/footer_logo.png" alt=""
        /></router-link>
        <div class="menu_box">
          <div class="item" v-for="(item, index) in linkList" :key="item.id">
            <a
              href="javascript:;"
              @click="entry(item.url, index)"
              class="title"
              >{{ item.title }}</a
            >
            <div class="sub_menu">
              <div
                class="sub_item"
                v-for="(el, i) in item.two_linkList"
                :key="el.id"
              >
                <a
                  href="javascript:;"
                  @click="entry(el.url, index, el.child, i, el, item)"
                  >{{ el.name }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="item">
            全国统一报名专线：
            <span>{{ site_info.registration_hotline }}</span>
          </div>
          <div class="item">
            客服电话：
            <span>{{ site_info.consumer_hotline }}</span>
          </div>
        </div>
      </div>
      <div class="copy_box">
        <div class="copy">
          {{ site_info.company_name
          }}<a target="blank" href="https://beian.miit.gov.cn/">{{ beian }}</a
          >{{ site_info.address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerMenu",
  inject: ["reload"],
  data() {
    return {
      site_info: {},
      beian: "",
      linkList: [
        {
          id: 1,
          title: "首页",
          url: "/",
          two_linkList: [
            {
              id: 101,
              name: "专业团队",
              url: "/?id=discipline",
              aurl: "discipline",
            },
            // {
            //   id:102,
            //   name:'免费体验',
            //   url:'/?id=experience'
            // },
            {
              id: 103,
              name: "精选课程",
              url: "/?id=elaborately",
              aurl: "elaborately",
            },
            {
              id: 104,
              name: "免费优选课",
              url: "/?id=optimization",
              aurl: "optimization",
            },
            {
              id: 105,
              name: "六大优势",
              url: "/?id=goodness",
              aurl: "goodness",
            },
            {
              id: 106,
              name: "教师团队",
              url: "/?id=teacher",
              aurl: "teacher",
            },
          ],
        },
        {
          id: 2,
          title: "选课中心",
          url: "/lesson",
          two_linkList: [
            {
              id: 4,
              name: "基础系统班",
              url: "/lesson",
            },
            {
              id: 2,
              name: "钻石精讲班",
              url: "/lesson",
            },
            {
              id: 3,
              name: "超钻密训班",
              url: "/lesson",
            },
            {
              id: 1,
              name: "提前面试班",
              url: "/lesson",
            },
             {
              id: 5,
              name: "私密1对1",
              url: "/lesson",
            },
          ],
        },
        {
          id: 3,
          title: "了解考研",
          url: "/learn",
          two_linkList: [
            {
              id: 301,
              name: "报考简章",
              url: "/learn",
            },
            {
              id: 302,
              name: "报考条件",
              url: "/learn",
            },
            {
              id: 303,
              name: "考研流程",
              url: "/learn",
            },
            {
              id: 304,
              name: "报名时间",
              url: "/learn",
            },
            {
              id: 305,
              name: "考试时间",
              url: "/learn",
            },
            {
              id: 306,
              name: "考试科目",
              url: "/learn",
            },
            {
              id: 307,
              name: "考研调剂",
              url: "/learn",
            },
          ],
        },
        {
          id: 4,
          title: "中盛咨询",
          url: "/info",
          two_linkList: [
            {
              id: 401,
              name: "公司资讯",
              url: "/info",
            },
            {
              id: 402,
              name: "考研资讯",
              url: "/info",
            },
          ],
        },
        {
          id: 5,
          title: "关于中盛",
          url: "/about",
          two_linkList: [
            {
              id: 501,
              name: "专业团队",
              url: "/about",
            },
            {
              id: 502,
              name: "企业文化",
              url: "/about",
            },
            {
              id: 503,
              name: "联系我们",
              url: "/about",
            },
            {
              id: 504,
              name: "法律声明",
              url: "/about",
            },
          ],
        },
        {
          id: 6,
          title: "个人中心",
          url: "/user",
          two_linkList: [
            {
              id: 601,
              name: "我的课程",
              url: "/user",
              child: "myLesson",
            },
            {
              id: 602,
              name: "我的班主任",
              url: "/user",
              child: "myTeachers",
            },
            {
              id: 603,
              name: "我的订单",
              url: "/user",
              child: "myOrder",
            },
            {
              id: 604,
              name: "在线答疑",
              url: "/user",
              child: "myAnswering",
            },
            {
              id: 605,
              name: "个人资料",
              url: "/user",
              child: "myInfo",
            },
            {
              id: 606,
              name: "修改密码",
              url: "/user",
              child: "myPassword",
            },
          ],
        },
      ],
    };
  },
  methods: {
    entry(url, index, child, childindex, item, itemq) {
      if (itemq.id == 6) {
        let routeUrl = this.$router.resolve({
          path: "/user",
          query: {
            childpath: child,
            navindex: childindex,
            id: item.id,
            aurl: item.aurl,
          },
        });
        window.open(routeUrl.href, "_blank");
      }else{
  this.$router.push({
        path: url,
        query: {
          childpath: child,
          navindex: childindex,
          id: item.id,
          aurl: item.aurl,
        },
      });
      }
      sessionStorage.setItem("navId", index + 1);
    
      this.reload();
    },
  },
  mounted() {
    this.get("site_info", false).then((res) => {
      this.site_info = res.data.company;
      this.beian = res.data.beian;
    });
    // this.get('course/category',false).then(res => {
    //   this.linkList.forEach((e,i) => {
    //     if (e.id == 2) {
    //       e.two_linkList.forEach((v,j) => {
    //         v.name=res.data[j].name
    //         v.url=`/lesson?id=${res.data[j].id}`
    //       })
    //     }
    //   })
    // });
    // this.get('article/category',false).then(res => {
    //   this.linkList.forEach((e,i) => {
    //     if (e.id == 4) {
    //       e.two_linkList.forEach((v,j) => {
    //         v.name=res.data[j].name
    //         v.url=`/info?id=${res.data[j].id}`
    //       })
    //     }
    //   })
    // });
  },
};
</script>

<style lang="less" scoped>
.footer {
}
</style>