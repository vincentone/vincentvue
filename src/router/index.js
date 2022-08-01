/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-05 07:34:31
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-08 00:58:24
 * @FilePath: /vincentvue/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Nav.vue'), // 组件懒加载，按需加载
      children: [
        {
          path: '/AboutMe/:id',
          name: 'AboutMe',
          redirect: {name: 'AboutMeChilrenA'},
          component: () => import('@/components/AboutMe.vue'),
          children: [
            {
              name: 'AboutMeChilrenA',
              path: '/AboutMeChilrenA',
              component: () => import('@/components/AboutMeChilrenA.vue')
            },
            {
              name: 'AboutMeChilrenB',
              path: '/AboutMeChilrenB',
              component: () => import('@/components/AboutMeChilrenB.vue')
            }
          ]
        }
      ]
    }
  ]
})
