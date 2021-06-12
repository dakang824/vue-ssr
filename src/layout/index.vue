<template>
  <div class="wrap">
    <nav-bar :route-name="routeName" />
    <app-main />
    <footerMenu />
  </div>
</template>

<script>
import appMain from "./components/appMain";
import footerMenu from "./components/footerMenu";
export default {
  name: "layout",
  components: {
    appMain,
    footerMenu,
  },
  data() {
    return {
      routeName: "",
    };
  },
  mounted() {
    if (this.$route.path == "/home") {
      this.routeName = "Home";
    }
    if (
      !/msie [6|7|8|9]/i.test(navigator.userAgent) &&
      window.screen.width > 768
    ) {
      if (process.browser) {
        new this.WOW.WOW().init();
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.routeName = to.name;
    next();
  },
};
</script>

<style></style>
