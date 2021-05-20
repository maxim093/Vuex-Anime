import { createStore } from "vuex";

export default createStore({
  state: {
    character: {},
  },
  mutations: {
    SET_CHARACTER(state, character) {
      state.character = character;
    },
    LOADINGSTATUS(state, loadingStatus) {
      state.loadingStatus = loadingStatus;
    },
  },
  actions: {
    getCharacter(context, payload) {
      context.commit("LOADINGSTATUS", true);

      const character = payload.character;
      const URL = `https://kitsu.io/api/edge/characters?filter[name]=${character}`;

      fetch(URL)
        .then(async (res) => {
          const data = await res.json();

          if (!res.ok) {
            const error = (data && data.message) || res.statusText;
            return Promise.reject(error);
          }

          const CHARACTER = {
            name: data.data[0].attributes.name,
            image: data.data[0].attributes.image.original,
          };

          context.commit("SET_CHARACTER", CHARACTER);
          context.commit("LOADINGSTATUS", false);
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
  getters: {
    characterName(state) {
      return state.character.name;
    },
    characterImage(state) {
      return state.character.image;
    },
    loadingStatus(state) {
      return state.loadingStatus;
    },
  },
});
