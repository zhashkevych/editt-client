// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/index.sass"`
      },
      scss: {
        prependData: `@import "~@/styles/index.sass";`
      },
    }
  }
}
