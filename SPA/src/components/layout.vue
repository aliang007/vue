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
@import 'http://m.lailaihui.com/static/css/lib/frozen.css';
#ui-container{margin-top: 0!important;}
</style>
