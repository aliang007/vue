<template>
  <div id="app">
    <!-- 头部 -->
    <hd></hd>
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
      name: "index",
      product:[
        {
            "prodCode": "40119",
            "prodName": "北京-长滩岛6天4晚自由行",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4561/3.jpg",
            "label": "良心路线",
            "minPrice": 366900
        }
    ]
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
