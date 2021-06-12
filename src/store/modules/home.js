import request from "@/request/request";
const state = {
  banners: [],
  bannerShow:false,
  category:[],
  free_course:[],
  teachers:[],
  site: {},
  site_info: {},
};

const mutations = {
  setBanner(state, data) {
    state.banners = data;
  },
  setBannerShow(state, data) {
    state.bannerShow = data;
  },
  setShow(state, data) {
    state.show = data;
  },
  setCategory(state, data) {
    state.category = data;
  },
  setFree_course(state, data){
    state.free_course = data;
  },
  setTeachers(state, data){
    state.teachers = data;
  },
  setSite(state, data){
    state.site = data;
  },
  setSite_info(state, data){
    state.site_info = data;
  }
};

const actions = {
  async getBanner({ commit }) {
    commit("setBannerShow", false);
    const {data} = await request.get("banner", true);
    commit("setBanner", data);
    commit("setBannerShow", true);
    return data
  },
  async category({ commit }) {
    const {data} = await request.get("home/category", false);
    commit("setCategory", data);
    return data
  },
  async free_course({ commit }) {
    const {data} = await request.get("home/free_course", false);
    commit("setFree_course", data);
    return data
  },
  async getTeachers({ commit }) {
    const {data} = await request.get("teacher/list", false);
    commit("setTeachers", data);
    return data
  },
  async getSiteInfo({ commit }) {
    const {data} = await request.get("site_info", false);
    commit("setSite", data);
    commit("setSite_info", data.course);
    return data
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
