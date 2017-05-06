<template>
    <header class="llh-tou-tubiao llh-guding">
        {{title}}
        <i class="llh-icon-youhuiquanfcopy3"></i>
        <!--首页icon-->
        <a href="/member/center" class="llh-zhong llh-left"><i class="llh-icon-oval18copy2"></i></a>
        <!--搜索icon-->
        <i class="llh-icon-sousuo llh-zhong llh-right" id="llh-icon-sousuo" onclick="window.location.href='/search'"></i>
    </header>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
