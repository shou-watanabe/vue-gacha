import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface UserState {
  name: string;
  token: string;
}

const mutaions = {
  setUserName(state: UserState, name: string): void {
    state.name = name;
  },
  setUserToken(state: UserState, token: string): void {
    console.log(token);
    state.token = token;
  },
};

export default new Vuex.Store({
  state: { name: "", token: "" },
  mutations: mutaions,
});
