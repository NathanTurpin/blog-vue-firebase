import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const stores = {};

const state = {};
const getters = {};
const mutations = {};
const actions = {};

const modules = Object.entries(stores).reduce((modules, [name, store]) => {
  modules[name] = {
    namespaced: true,
    ...store,
  };
  return modules;
}, {});

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
});
