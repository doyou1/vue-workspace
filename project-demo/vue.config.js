const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        // '@assets': path.resolve(__dirname, 'src/assets'),
        // '@pages': path.resolve(__dirname, 'src/components/pages'),
        // '@template': path.resolve(__dirname, 'src/components/template'),
        '@components': path.resolve(__dirname, 'src/components/common'),
        '@partials': path.resolve(__dirname, 'src/components/partials')
        // '@constants': path.resolve(__dirname, 'src/constants'),
        // '@store': path.resolve(__dirname, 'src/store'),
        // '@utils': path.resolve(__dirname, 'src/utils'),
        // '@api': path.resolve(__dirname, 'src/api'),
        // '@hook': path.resolve(__dirname, 'src/data/hook'),
        // '@': path.resolve(__dirname, 'src'),
      },
    },
    extensions: ['.js', '.vue', '.json'],
  }
})