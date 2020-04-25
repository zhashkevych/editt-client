<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'editt'
    }
  },
}
</script>

<style lang="sass">
  @import "./styles"
</style>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>