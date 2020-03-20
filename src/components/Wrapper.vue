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
    max-width: 1400px;
    padding: 0 20px;
    margin: 0 auto;

    @include desktop {
      max-width: 1000px;
    }
  }
</style>
