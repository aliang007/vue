<template>
  <div id="app">
    <!-- 头部 -->
    <hd>{{name}}</hd>
    <section class="ui-container">
        <router-view></router-view>
    </section>
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
.ui-container{
    margin-top: 45px;
}
</style>
