<template>
    <div>
        hello it's me!
        <router-link :to="{name:'AboutMeChilrenA'}">A</router-link>
        <router-link :to="{name:'AboutMeChilrenB'}">B</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'AboutMe',
  created () {
    console.log('I get router params: id :' + this.$route.params.id)
  }
}
</script>
