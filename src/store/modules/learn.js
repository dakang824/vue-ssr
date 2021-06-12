import request from "@/request/request";

const state = {
  title: "",
  navName: "",
  navList: [],
  tabbarList: [],
  list: {},
};

const mutations = {
  setTabbarList(state, data) {
    state.tabbarList = data;
  },
  setNavList(state, data) {
    if(data.navList){
      state.navList = data.navList
    }
    state.title = data.title;
  },
  setList(state, data) {
    state.list = data;
  },
};

const actions = {
  async getData({ commit, dispatch }) {
    const { data } = await request.get("postgraduate/category", true);
    commit("setTabbarList", data);
    const { data: navList } = await request.get("postgraduate/list", false, {
      category_id: data[0].id,
    });
    const { title, id } = navList[0];
    commit("setNavList", { navList, title });
    await dispatch("getList", { postgraduate_id: id });
    return data;
  },
  async getList({ commit }, params) {
    const { data: list } = await request.get(
      "postgraduate/detail",
      false,
      params
    );
    commit("setList", list);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
