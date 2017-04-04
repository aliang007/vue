
<!-- Detail.vue -->
<template>
    <div class="detail">
      <div style="line-height:120px;">
        {{ $route.params.color }}
        <h1>我是详情页</h1><h1>我是详情页</h1><h1>我是详情页</h1>
      </div>
      <img src="http://p.lailaihui.com/LineBigPhoto/4561/3.jpg" alt="">
    </div>
</template>

<style scoped>
    .detail {
      line-height: 30px;
    }
</style>

<script>

    import Hd from '../components/Header'
    export default {
        components: {
            Hd
        },
    }
</script>