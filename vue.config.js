/*
 * @Author: vincent 1343327598@qq.com
 * @Date: 2022-08-04 17:03:24
 * @LastEditors: vincent 1343327598@qq.com
 * @LastEditTime: 2022-08-12 10:36:10
 * @FilePath: /vincentvue/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/': {
            target: process.env.VUE_APP_BASE_URL,  // 后台接口域名
            ws: false,        //如果要代理 websockets，配置这个参数
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
        }
    }
  },
})
