<template>
  <info>
    <div class="infodetails">
      <div class="inner">
        <div class="infodetails_title">
          <h3>{{ detailsData.title }}</h3>
          <div class="infodetails_title_source">
            <span>{{ detailsData.author }}</span>
            <span>发布时间：{{ detailsData.create_time_text }}</span>
          </div>
        </div>
        <div class="infodetails_text" v-html="detailsData.content"></div>
        <div class="flip">
          <div class="flip_prev">
            <button @click="changePage(detailsData.prev)">
              上一篇：{{ detailsData.prev_title }}
            </button>
          </div>
          <div class="flip_next">
            <button @click="changePage(detailsData.next_id)">
              下一篇：{{ detailsData.next_title }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </info>
</template>

<script>
import Info from "@/layout/components/info";
import { mapState } from "vuex";
export default {
  name: "InfoDetail",
  asyncData: ({ store, route }) => {
    return store.dispatch("info/getDetail", route);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      detailsData: (state) => state.info.detailsData,
    }),
  },
  components: {
    Info,
  },
  watch: {
    $route: {
      handler(val) {
        this.$store.dispatch("info/getDetail", this.$route);
      },
      deep: true,
    },
  },
  created() {
    this.$store.dispatch("info/getDetail", this.$route);
  },
  methods: {
    changePage(article_id) {
      this.$router.push({ query: "/detail", query: { id: article_id } });
    },
  },
};
</script>

<style></style>
