<template>
  <div id="app">
    <!-- 头部 -->
    <hd>{{name}}</hd>
    <router-view></router-view>
    <ft></ft>
  </div>
</template>

<script>
import hd from '../components/Header'
import ft from '../components/Footer'
import List from '../components/List'
export default {
  data(){
    return {
      name: "index"
    }
  },
  components: {
    hd,
    ft,
    List
  }
}
</script>

<style>
*{margin:0;padding:0;}
body{background:#e3e9f2;font-family:微软雅黑;font-size:12px;}
img{display:block;width:100%;}
a{text-decoration:none;}
li{list-style:none;}
</style>
