<template>
  <div class="content">
    <div class="banner banner_4">
      <h1 class="banner_title">了解考研</h1>
      <p class="banner_text">学习点燃梦想 梦想撼动未来</p>
    </div>
    <div class="wrap">
      <div class="inner">
        <div class="place">
          <img src="../../assets/place_icon.png" alt="图片找不到了" />
          <span>&nbsp;&nbsp;您现在在位置：</span>
          <div class="dividers">
            <router-link to="/">首页</router-link>
            <span class="arrow">></span>
            <span>{{ title }}</span>
          </div>
        </div>
        <div class="sub_wrap">
          <ul class="sidebar">
            <li
              class="sidebar_item"
              :class="navActive == index ? 'active' : ''"
              v-for="(item, index) in navList"
              :key="item.id"
              @click="navchange(item, index)"
            >
              <button class="sidebar_link">{{ item.title }}</button>
            </li>
          </ul>
          <div class="aboutus">
            <ul class="aboutus_tabbar" v-if="navActive == 5">
              <li
                class="aboutus_tabbar_item"
                :class="tabbarActive == index ? 'active' : ''"
                v-for="(item, index) in tabbarList"
                :key="item.id"
                @click="tabbarChange(item, index)"
              >
                <button class="aboutus_tabbar_link">{{ item.name }}</button>
              </li>
            </ul>
            <div class="breadcrumb">
              <div class="aboutus_title">
                <h5>{{ title }}</h5>
              </div>
            </div>
            <div class="aboutus_text">
              <!-- <h4 class="aboutus_text_title">{{list.title}}</h4> -->
              <p v-html="list.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <go-top></go-top>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "about",
  asyncData: ({ store }) => {
    return store.dispatch("learn/getData");
  },
  data() {
    return {
      navActive: 0,
      tabbarActive: 0,
    };
  },
  computed: {
    ...mapState({
      tabbarList: (state) => state.learn.tabbarList,
      navList: (state) => state.learn.navList,
      title: (state) => state.learn.title,
      list: (state) => state.learn.list,
    }),
  },
  mounted() {
    document.title = "北京中盛润德-了解考研";
    this.$store.dispatch("learn/getData");
  },
  methods: {
    navchange(item, index) {
      this.navActive = index;
      this.tabbarActive = 0;
      let data = {
        postgraduate_id: item.id,
      };
      item.id == 6&&(data.category_id = this.tabbarList[0].id)
      this.$store.commit('learn/getList',{title:item.title})
      this.$store.dispatch("learn/getList", data);
    },
    tabbarChange(item, index) {
      this.tabbarActive = index;
      this.$store.dispatch("learn/getList", {
        postgraduate_id: 6,
        category_id: item.id,
      });
    },
  },
};
</script>

<style></style>
