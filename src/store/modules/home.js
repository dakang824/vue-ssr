import request from "@/request/request";
const state = {
  banners: [],
  bannerShow:false
};

const mutations = {
  setBanner(state, list) {
    state.banners = list;
  },
  setBannerShow(state, boolean) {
    state.bannerShow = boolean;
  },
};

const actions = {
  async getBanner({ commit }) {
    commit("setBannerShow", false);
    const {data} = await request.get("banner", true);
    commit("setBanner", data);
    commit("setBannerShow", true);
    return data
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
