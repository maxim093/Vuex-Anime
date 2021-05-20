<template>
  <Button class="Btn"><slot></slot></Button>
</template>

<style lang="scss" scoped>
.Btn {
  border-radius: 100vh;
  color: black;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
  transition: all ease-in 0.15s;
  display: block;
  height: 250px;
  width: 250px;

  &--green {
    background-color: darkslategray;
    border: 10px solid palegreen;
    color: white;

    &:hover {
      background-color: rgba(47, 79, 79, 0.884);
    }
  }
}
</style>
