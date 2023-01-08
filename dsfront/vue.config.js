
// import Icons from 'unplugin-icons'
// import vue from '@vitejs/plugin-vue'
// import Icons from 'unplugin-icons/vite'
// import Components from 'unplugin-vue-components/vite'
// import IconsResolve from 'unplugin-icons/resolver'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

    // plugins: [
  //   vue(),
  //   Components({
  //     resolvers: [IconsResolve()],
  //     dts: true
  //   }),
  //   Icons({
  //     compiler: 'vue3',
  //     autoInstall: true
  //   })
  // ],


  // configureWebpack: {
  //   plugins: [
  //     require('unplugin-icons/webpack')({ /* options */ }),
  //   ]
  // }
})
