<template>
  <div class="header">
      <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '底部'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{ line-height: 60px; text-align: center; margin-bottom: 20px; background: #fff; color: #000;}
</style>
