<template>
  <the-header></the-header>
  <character-details></character-details>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import CharacterDetails from "./components/CharacterDetails";

export default {
  name: "Home",
  components: {
    TheHeader,
    CharacterDetails,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
