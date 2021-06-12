import request from "@/request/request";
const state = {
  navList: [],
  category_id: 0,
  pager: {},
  page: 1,
  infoList: [],
  navActive: 0,
  detailsData:{}
};

const mutations = {
  setNavList(state, data) {
    state.navList = data;
  },
  setCategory_id(state, data) {
    state.category_id = data;
  },
  setInfoList(state, data) {
    state.infoList = data;
  },
  setPager(state, data) {
    state.pager = data;
  },
  setPage(state, data) {
    state.page = +data;
  },
  setNavActive(state, data) {
    state.navActive = data;
  },
  setDetailsData(state, data){
    state.detailsData = data;
  }
};

const actions = {
  async getCategory({ state, commit, dispatch }, params) {
    const { data } = await request.get("article/category", true);
    commit("setNavList", data);
    if (params.query.id) {
      const {id,page}=params.query
      const index = state.navList.findIndex(
        (item) => item.id === +id
      );
      commit("setPage",page );
      dispatch("getList", { index, id:+id });
    } else {
      dispatch("getList", { index: 0, id: data[0].id });
      commit("setCategory_id", data[0].id);
    }
  },
  async getList({ state, commit }, params) {
    commit("setNavActive", params.index);
    commit("setCategory_id", params.id);
    const { page, category_id } = state;
    const { data } = await request.get("article/list", true, {
      page,
      category_id,
    });
    const { data: list, ...pager } = data;
    commit("setInfoList", list);
    commit("setPager", pager);
  },
  async getDetail({ commit }, params) {
    if (params.query.id) {
      const { data } = await request.get("article/detail", true, { article_id:params.query.id });
      commit("setDetailsData", data);
    }
  },
 
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
