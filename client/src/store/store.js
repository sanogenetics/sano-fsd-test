import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menu_hidden: true,
        mobile_menu_hidden: true
    },
    getters: {
        menu_hidden: (state) => state.menu_hidden
    },
    mutations: {},
    actions: {}
});
