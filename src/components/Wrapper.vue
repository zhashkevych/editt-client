<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Wrapper"
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    box-sizing: border-box;
    padding: 0 20px;
    margin: 0 0 2rem;
    width: 100%;
    max-width: 1000px;
  }
</style>
