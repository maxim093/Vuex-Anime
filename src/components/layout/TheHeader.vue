<template>
  <div class="Header">
    <h1 class="Header--characterName">{{ characterName }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    characterName() {
      return this.$store.getters.characterName;
    },
  },
};
</script>

<style lang="scss" scoped>
.Header {
  background: darkslategrey;
  color: #fff;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  &--characterName {
    margin: 0;
  }
}
</style>
