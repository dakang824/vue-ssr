<template>
  <info>
    <div class="info">
      <div class="inner">
        <ul class="info_tabbar">
          <li
            class="info_tabbar_item"
            :class="navActive == index ? 'active' : ''"
            v-for="(item, index) in navList"
            :key="item.id"
            @click="changeCategory(index, item.id)"
          >
            <button type="button">{{ item.name }}</button>
          </li>
        </ul>
        <div class="info_list">
          <router-link
            :to="'/detail?id=' + item.id"
            class="info_item"
            :class="itemActive == index ? 'active' : ''"
            v-for="(item, index) in infoList"
            :key="item.id"
          >
            <div class="info_item_inner" @mouseenter="moveIn(index)">
              <div class="info_item_img">
                <img :src="item.image" alt="图片找不到了" />
              </div>
              <div class="info_item_warp">
                <h4 class="info_item_title">{{ item.title }}</h4>
                <p class="info_item_text">{{ item.description }}</p>
                <div class="info_item_reads">
                  <img src="../../assets/eyes_icon.png" alt="图片找不到了" />
                  <span>{{ item.pageviews }}阅读</span>
                </div>
              </div>
              <div class="info_date">
                <span>{{ item.create_time }}</span>
                <img src="../../assets/arrow.png" alt="图片找不到了" />
              </div>
            </div>
          </router-link>
        </div>
        <div class="pager">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            :total="pager.total"
            :page-size="pager.per_page"
            :current-page="page"
            @current-change="currentChange"
            hide-on-single-page
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </info>
</template>

<script>
import Info from "@/layout/components/info";
import { mapState } from "vuex";
export default {
  name: "InfoList",
  asyncData: ({ store, route }) => {
    return store.dispatch("info/getCategory", route);
  },
  data() {
    return {
      itemActive: 0,
    };
  },
  components: {
    Info,
  },
  computed: {
    ...mapState({
      category_id: (state) => state.info.category_id,
      navList: (state) => state.info.navList,
      pager: (state) => state.info.pager,
      page: (state) => state.info.page,
      infoList: (state) => state.info.infoList,
      navActive: (state) => state.info.navActive,
    }),
  },
  watch: {
    $route: {
      handler(val) {
        this.$store.dispatch("info/getCategory", this.$route);
      },
      deep: true,
    },
  },
  created() {
     this.$store.dispatch("info/getCategory", this.$route);
  },
  methods: {
    changeCategory(index, id) {
      this.$store.commit("info/setPage", 1);
      this.$store.commit("info/setNavActive", index);
      this.$store.commit("info/setCategory_id", id);
      this.$store.dispatch("info/getList", {
        index: index,
        category_id: id,
      });
    },
    moveIn(index) {
      this.itemActive = index;
    },
    currentChange(page) {
      this.$router.push({
        path: "/info",
        query: {
          page,
          id: this.category_id,
        },
      });
    },
  },
};
</script>

<style></style>
