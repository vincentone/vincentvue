<template>
<div>
<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">{{homePage}}</el-menu-item>
  <el-menu-item index="2"><router-link :to="{name:'AboutMe',params:{id:'hello'}}">{{aboutMe}}</router-link></el-menu-item>
  <el-menu-item index="3">{{recommend}}</el-menu-item>
  <el-submenu index="4">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
</el-menu>
<router-view></router-view>
</div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      aboutMe: '关于我啦',
      homePage: '主页',
      recommend: '推荐',
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.router-link-active {
    text-decoration: none;
    color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
