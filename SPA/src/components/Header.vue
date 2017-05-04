<template>
    <header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i><h1>{{title}}</h1>
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
