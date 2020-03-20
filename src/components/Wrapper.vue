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
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1000px;
  }
</style>
