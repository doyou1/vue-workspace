const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'))
    config.resolve.alias.set('@data', path.resolve(__dirname, 'src/data'))
    config.resolve.alias.set('@stores', path.resolve(__dirname, 'src/stores'))
  }
})
