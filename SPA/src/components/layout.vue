<template>
  <div id="app">
    <!-- 头部 -->
    <headr></headr>
    <router-view></router-view>

  </div>
</template>

<script>
import Headr from '../components/Header'
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
    Headr,
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
