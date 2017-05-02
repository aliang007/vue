<template>
  <div id="app">
    <!-- 产品list -->
    <h6 class='ui-txt-info'>年轻玩法，最in假期</h6>
    <div class="llh-classical-wrap">
      <ul class="ui-list">
        <List
          v-for="item in product" :key="item.prodCode"
          :prodCode="item.prodCode"
          :prodName="item.prodName"
          :thumb="item.thumb"
          :label="item.label"
          :minPrice="item.minPrice">
        </List>
      </ul>
    </div>

  </div>
</template>

<script>
import Headr from '../components/Header'
import List from '../components/List'
export default {
  data(){
    return {
      product:[
        {
            "prodCode": "40119",
            "prodName": "北京-长滩岛6天4晚自由行",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4561/3.jpg",
            "label": "良心路线",
            "minPrice": 366900
        },
        {
            "prodCode": "40042",
            "prodName": "北京-香港4天3晚自由行",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4544/6.jpg",
            "label": "超值特惠",
            "minPrice": 147900
        },
        {
            "prodCode": "39722",
            "prodName": "北京-岘港6天4晚自由行(东方航空直飞）",
            "thumb": "http://p.lailaihui.com/904b0329-024b-4a4e-8740-544e43e04117.jpg",
            "label": "超值特惠",
            "minPrice": 249900
        },
        {
            "prodCode": "42160",
            "prodName": "北京-芽庄6天4晚自由行（三星酒店/越南航空直飞）",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4542/1.jpg",
            "label": "人气好货",
            "minPrice": 329900
        },


        {
            "prodCode": "41028",
            "prodName": "北京-沙巴6天4晚自由行(2人起订)",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4136/4.jpg",
            "label": "来来爆款",
            "minPrice": 359900
        },


        {
            "prodCode": "41527",
            "prodName": "北京-塞班岛7天5晚自由行",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/715/4.jpg",
            "label": "人气好货",
            "minPrice": 699900
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
