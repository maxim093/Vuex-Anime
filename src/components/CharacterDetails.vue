<template>
  <div class="CharacterDetails">
    <div v-if="loadingStatus">
      <h3 class="CharacterDetails--loading-text">Loading...</h3>
      <img class="CharacterDetails--loading-spinner" src="https://i.gifer.com/ZLnU.gif" alt="" />
    </div>

    <img v-else :src="character" alt="" />
    <base-button class="Btn--green" @click="generateRandomCharacter">Zeig mir mehr!</base-button>
  </div>
</template>

<script>
import BaseButton from "./baseComponents/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      characters: [
        "Monkey D. Luffy",
        "Katsuki Bakugou",
        "Motoko Kusanagi",
        "Erina Nakiri",
        "Kazuto Kirigaya",
        "Itachi Uchiha",
        "Light Yagami",
        "Akame",
        "Baki Hanma",
        "Edward Elric",
        "Inuyasha",
        "Natsu Dragneel",
        "Meliodas",
        "Ken Kaneki",
        "Tatsumaki",
        "Lucy",
      ],
    };
  },
  name: "Header",
  created() {
    this.$store.dispatch("getCharacter", { character: this.characters[1] });
  },
  methods: {
    generateRandomCharacter() {
      const randomCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
      this.$store.dispatch("getCharacter", { character: randomCharacter });
    },
  },
  computed: {
    character() {
      return this.$store.getters.characterImage;
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
.CharacterDetails {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &--loading-text {
    font-size: 50px;
    margin: 0;
  }
}

.Btn {
  margin-top: 75px;
}
</style>
