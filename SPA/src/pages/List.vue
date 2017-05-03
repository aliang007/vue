<template>
  <div id="app">
    <!-- 产品list -->
    <div class="llh-classical-wrap">
        <div class="llh-classical-hd">
            <hgroup class="hgroup-wrap">
                <h2>阿亮-精心精选 </h2>
            </hgroup>
        </div>
        <div class="llh-classical-bd">
            <List
              v-for="item in product" :key="item.prodCode"
              :prodCode="item.prodCode"
              :prodName="item.prodName"
              :thumb="item.thumb"
              :label="item.label"
              :minPrice="item.minPrice">
            </List>
        </div>
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
            prodCode: "42347",
            prodName: "北京-伊斯坦布尔6-30天往返机票 含首晚酒店（乌克兰航空）",
            thumb: "http://p.lailaihui.com/2014/5/28/201405281112468468.jpg",
            label: "限量抢购",
            referDate: "",
            minPrice: 309900,
            productDesc: "地跨欧亚两洲的伊斯坦布尔，是土耳其最大的城市、最大的港口和主要的旅游胜地。这里气候宜人，风景优美。",
            marketPrice: 0
              },
        {
            prodCode: "42366",
            prodName: "天津-冲绳5天4晚自由行",
            thumb: "http://p.lailaihui.com/2013/12/24/201312241009228923.jpg",
            label: "来来爆款",
            referDate: "",
            minPrice: 339900,
            productDesc: "国航直飞冲绳，入住三星酒店，正班不红眼",
            marketPrice: 0
              },
        {
            prodCode: "42373",
            prodName: "北京-马尔代夫小班度士岛6天4晚/7天5晚自由行(首航直飞)",
            thumb: "http://p.lailaihui.com/2015/8/17/201508171650325018.jpg",
            label: "限量抢购",
            referDate: "",
            minPrice: 799900,
            productDesc: "首航北京直飞往返马尔代夫，尽享马尔代夫海岛风情",
            marketPrice: 0
              },
        {
            prodCode: "42378",
            prodName: "北京-吉隆坡 热浪岛6天4晚半自由行",
            thumb: "http://p.lailaihui.com/2015/11/20/201511201123533928.jpg",
            label: "人气好货",
            referDate: "",
            minPrice: 469900,
            productDesc: "热浪岛是马来西亚公认最美丽的岛屿之一，和小来一起，开启岛上的热带雨林寻幽探秘。",
            marketPrice: 0
              },
        {
            prodCode: "42431",
            prodName: "北京-东京4-14日往返机票(全日空）",
            thumb: "http://p.lailaihui.com/55233f8f-82f6-4eaf-adfa-62ecd489bbf6.jpg",
            label: "来来爆款",
            referDate: "",
            minPrice: 249900,
            productDesc: "精选五星航空全日空，直飞东京，早对晚航班，多团期任选，+199/+599可办单次/五年日本个人旅游签证",
            marketPrice: 0
              },
        {
            prodCode: "42481",
            prodName: "天津-芽庄5天4晚自由行（精品酒店/越南航空直飞）",
            thumb: "http://p.lailaihui.com/LineBigPhoto/4425/2.jpg",
            label: "来来爆款",
            referDate: "",
            minPrice: 299900,
            productDesc: "越南不止有河内和胡志明，还有绵长的海岸线，芽庄是一座可以让你停下脚步晒太阳的小城~",
            marketPrice: 0
              },
        {
            prodCode: "42486",
            prodName: "北京-迪拜4晚6日奢华半自由行（阿联酋航空）",
            thumb: "http://p.lailaihui.com/fd4f2d50-4eee-4273-bc9f-f0ce6328a6d1.jpg",
            label: "免签/落地签",
            referDate: "",
            minPrice: 1099900,
            productDesc: "阿联酋航空直飞，单程体验A380空中巨无霸，八星皇宫酒店+卓美亚运河古堡酒店-逸宫；2小时加长悍马豪车游迪拜，卓美亚古堡酒店自助餐，阿布扎比八星皇宫酒店晚餐+卓美亚疯狂维迪水上乐园",
            marketPrice: 0
              },
        {
            prodCode: "42518",
            prodName: "北京-苏梅岛7天5晚自由行（亚洲航空）",
            thumb: "http://p.lailaihui.com/2014/5/7/201405071458494754.jpg",
            label: "来来爆款",
            referDate: "",
            minPrice: 299900,
            productDesc: "北京出发，苏梅岛高品质精品酒店住宿，多套餐可选，尽享愉悦假期。",
            marketPrice: 0
              },
        {
            prodCode: "42544",
            prodName: "北京-巴厘岛7天5晚自由行（五星酒店/东方航空）",
            thumb: "http://p.lailaihui.com/LineBigPhoto/4317/3.jpg",
            label: "来来爆款",
            referDate: "",
            minPrice: 579900,
            productDesc: "万种风情，景物甚为绮丽，与小来一起开启巴厘岛五星酒店之旅！",
            marketPrice: 0
              },
        {
            prodCode: "42551",
            prodName: "北京-贝加尔湖5天往返机票",
            thumb: "http://p.lailaihui.com/2014/7/17/201407171629497288.jpg",
            label: "青春旅行",
            referDate: "",
            minPrice: 269900,
            productDesc: "北京直飞往返贝加尔湖，经济实惠，暑期多团期，赠送团队签证！",
            marketPrice: 0
              },
        {
            prodCode: "42556",
            prodName: "北京-巴厘岛7天5晚自由行（Mulia穆利雅/超六星顶级奢享）",
            thumb: "http://p.lailaihui.com/LineBigPhoto/4268/3.jpg",
            label: "来来爆款",
            referDate: "",
            minPrice: 709900,
            productDesc: "鹰航直飞，努沙杜瓦区，富丽堂皇高贵典雅，顶级七国料理餐厅，客房智能化系统，尽享奢华假期！",
            marketPrice: 0
              },
        {
            prodCode: "42607",
            prodName: "【超值特惠】北京-巴厘岛7天5晚自由行（三星酒店/东方航空）",
            thumb: "http://p.lailaihui.com/2015/11/11/201511111544319723.jpg",
            label: "来来爆款",
            referDate: "",
            minPrice: 379900,
            productDesc: "东方航空，北京直飞巴厘岛；含全程早餐+境外接送机服务；多星级酒店可选",
            marketPrice: 0
          },
          {
            "prodCode": "42378",
            "prodName": "北京-吉隆坡  热浪岛6天4晚半自由行",
            "thumb": "http://p.lailaihui.com/2015/11/20/201511201123533928.jpg",
            "label": "人气好货",
            "referDate": "",
            "minPrice": 469900,
            "productDesc": "热浪岛是马来西亚公认最美丽的岛屿之一，和小来一起，开启岛上的热带雨林寻幽探秘。",
            "marketPrice": 0
        }, {
            "prodCode": "42431",
            "prodName": "北京-东京4-14日往返机票(全日空）",
            "thumb": "http://p.lailaihui.com/55233f8f-82f6-4eaf-adfa-62ecd489bbf6.jpg",
            "label": "来来爆款",
            "referDate": "",
            "minPrice": 249900,
            "productDesc": "精选五星航空全日空，直飞东京，早对晚航班，多团期任选，+199/+599可办单次/五年日本个人旅游签证",
            "marketPrice": 0
        }, {
            "prodCode": "42486",
            "prodName": "北京-迪拜4晚6日奢华半自由行（阿联酋航空）",
            "thumb": "http://p.lailaihui.com/fd4f2d50-4eee-4273-bc9f-f0ce6328a6d1.jpg",
            "label": "免签/落地签",
            "referDate": "",
            "minPrice": 1099900,
            "productDesc": "阿联酋航空直飞，单程体验A380空中巨无霸，八星皇宫酒店+卓美亚运河古堡酒店-逸宫；2小时加长悍马豪车游迪拜，卓美亚古堡酒店自助餐，阿布扎比八星皇宫酒店晚餐+卓美亚疯狂维迪水上乐园",
            "marketPrice": 0
        }, {
            "prodCode": "42518",
            "prodName": "北京-苏梅岛7天5晚自由行（亚洲航空）",
            "thumb": "http://p.lailaihui.com/2014/5/7/201405071458494754.jpg",
            "label": "来来爆款",
            "referDate": "",
            "minPrice": 299900,
            "productDesc": "北京出发，苏梅岛高品质精品酒店住宿，多套餐可选，尽享愉悦假期。",
            "marketPrice": 0
        }, {
            "prodCode": "42544",
            "prodName": "北京-巴厘岛7天5晚自由行（五星酒店/东方航空）",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4317/3.jpg",
            "label": "来来爆款",
            "referDate": "",
            "minPrice": 579900,
            "productDesc": "万种风情，景物甚为绮丽，与小来一起开启巴厘岛五星酒店之旅！",
            "marketPrice": 0
        }, {
            "prodCode": "42551",
            "prodName": "北京-贝加尔湖5天往返机票",
            "thumb": "http://p.lailaihui.com/2014/7/17/201407171629497288.jpg",
            "label": "青春旅行",
            "referDate": "",
            "minPrice": 269900,
            "productDesc": "北京直飞往返贝加尔湖，经济实惠，暑期多团期，赠送团队签证！",
            "marketPrice": 0
        }, {
            "prodCode": "42556",
            "prodName": "北京-巴厘岛7天5晚自由行（Mulia穆利雅/超六星顶级奢享）",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4268/3.jpg",
            "label": "来来爆款",
            "referDate": "",
            "minPrice": 709900,
            "productDesc": "鹰航直飞，努沙杜瓦区，富丽堂皇高贵典雅，顶级七国料理餐厅，客房智能化系统，尽享奢华假期！",
            "marketPrice": 0
        }, {
            "prodCode": "42607",
            "prodName": "【超值特惠】北京-巴厘岛7天5晚自由行（三星酒店/东方航空）",
            "thumb": "http://p.lailaihui.com/2015/11/11/201511111544319723.jpg",
            "label": "来来爆款",
            "referDate": "",
            "minPrice": 379900,
            "productDesc": "东方航空，北京直飞巴厘岛；含全程早餐+境外接送机服务；多星级酒店可选",
            "marketPrice": 0
        }, {
            "prodCode": "42734",
            "prodName": "北京-普吉1晚7天自由行（国航直飞）",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4547/4.jpg",
            "label": "青春旅行",
            "referDate": "",
            "minPrice": 399900,
            "productDesc": "年度最佳航空公司—国航，直飞普吉，落地签说走就走！",
            "marketPrice": 0
        }, {
            "prodCode": "42739",
            "prodName": "北京-普吉5晚7天自由行（国航/卡伦兰花度假村四星级酒店）",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4488/3.jpg",
            "label": "青春旅行",
            "referDate": "",
            "minPrice": 449900,
            "productDesc": "年度最佳航空公司—国航，直飞普吉，当地卡伦兰花度假村四星级酒店，落地签说走就走！",
            "marketPrice": 0
        }, {
            "prodCode": "42758",
            "prodName": "北京-普吉4-14天往返含税机票赠送2晚四星酒店（香港转机）",
            "thumb": "http://p.lailaihui.com/LineBigPhoto/4483/3.jpg",
            "label": "错峰出游",
            "referDate": "",
            "minPrice": 279900,
            "productDesc": "普吉岛以其迷人的热带风光和丰富的旅游资源被称为安达曼海上的一颗明珠，和小来一起嗨游普吉！",
            "marketPrice": 0
        }, {
            "prodCode": "42796",
            "prodName": "北京-塞舌尔7天5晚自由行(瑞莱克斯酒店/阿提哈德航空)",
            "thumb": "http://p.lailaihui.com/2015/9/17/201509171712243226.jpg",
            "label": "来来爆款",
            "referDate": "",
            "minPrice": 879900,
            "productDesc": "优质航空，舒适酒店含早餐，免签海岛说走就走",
            "marketPrice": 0
        },{
          "prodCode": "42316",
          "prodName": "北京-巴厘岛7天往返机票（东方航空）",
          "thumb": "http://p.lailaihui.com/LineBigPhoto/4538/1.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 369900,
          "productDesc": "北京东方航空直飞不转机,前往拥有热带雨林气候的巴厘岛。",
          "marketPrice": 0
      }, {
          "prodCode": "42239",
          "prodName": "北京-东京6天往返机票(全日空）",
          "thumb": "http://p.lailaihui.com/2014/4/4/201404041754077839.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 269900,
          "productDesc": "北京直飞往返日本东京，甄选五星全日空航空，超多团期任选，+199/+599可代办日本单次/五年个人旅游签证",
          "marketPrice": 0
      }, {
          "prodCode": "40240",
          "prodName": "北京-香港4天往返含税机票（晚对晚）",
          "thumb": "http://p.lailaihui.com/00a990de-47cd-4861-958c-48354734e347.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 107000,
          "productDesc": "五星港龙航空直飞香港，住宿随心搭，说走就走天天班！",
          "marketPrice": 0
      }, {
          "prodCode": "42587",
          "prodName": "北京-香港4天3晚自由行(五星酒店)",
          "thumb": "http://p.lailaihui.com/LineBigPhoto/4143/3.jpg",
          "label": "周末小旅行",
          "referDate": "",
          "minPrice": 209900,
          "productDesc": "五星港龙航空北京直飞香港，入住五星酒店，购物享不停！",
          "marketPrice": 0
      }, {
          "prodCode": "42784",
          "prodName": "北京-巴厘岛7天5晚自由行（四星酒店/东方航空）",
          "thumb": "http://p.lailaihui.com/a1bddae0-7bca-4fbd-85b6-c2d76058f754.png",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 419900,
          "productDesc": "东方航空，北京直飞巴厘岛；含全程早餐+境外接送机服务",
          "marketPrice": 0
      }, {
          "prodCode": "42246",
          "prodName": "北京-大阪进东京出7/8天往返机票(全日空）",
          "thumb": "http://p.lailaihui.com/addca8d5-7b5f-47e8-b559-647d57f89c88.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 269900,
          "productDesc": "精选五星全日空航班，大阪进东京出，不走回头路，樱花季+五一多团期任选",
          "marketPrice": 0
      }, {
          "prodCode": "41480",
          "prodName": "北京-贝加尔湖3晚4日自由行",
          "thumb": "http://p.lailaihui.com/2013/3/8/201303081716511384.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 309900,
          "productDesc": "北京直飞往返贝加尔湖，贴心赠送目的地机场接送，赠送团队签证",
          "marketPrice": 0
      }, {
          "prodCode": "41505",
          "prodName": "北京-吴哥6天4晚自由行四星酒店",
          "thumb": "http://p.lailaihui.com/2012/8/29/201208291622118871.jpg",
          "label": "端午节",
          "referDate": "",
          "minPrice": 319900,
          "productDesc": "北京出发直飞往返吴哥窟，多团期出发任您选，吴哥落地签说走就走",
          "marketPrice": 0
      }, {
          "prodCode": "41637",
          "prodName": "菲律宾个人旅游签证（单次）北京领区",
          "thumb": "http://p.lailaihui.com/2015/3/26/201503261619378866.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 28000,
          "productDesc": "单次入境、3个有效期（以使馆签发为准）。停留期30天（具体可停留天数以当地移民局签发为准）",
          "marketPrice": 0
      }, {
          "prodCode": "41663",
          "prodName": "北京-香港5天4晚自由行（四星酒店）",
          "thumb": "http://p.lailaihui.com/LineBigPhoto/4145/4.jpg",
          "label": "限量抢购",
          "referDate": "",
          "minPrice": 199900,
          "productDesc": "北京直飞香港，四星酒店，7*24小时来来会电话管家",
          "marketPrice": 0
      }, {
          "prodCode": "42370",
          "prodName": "北京-香港5天4晚自由行（晚对晚/4晚经济型酒店）",
          "thumb": "http://p.lailaihui.com/LineBigPhoto/4544/2.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 169900,
          "productDesc": "北京直飞香港，5天尽情享受香港美食美景！",
          "marketPrice": 0
      }, {
          "prodCode": "42394",
          "prodName": "北京-塞班岛6天往返单机票",
          "thumb": "http://p.lailaihui.com/LineBigPhoto/715/1.jpg",
          "label": "来来爆款",
          "referDate": "",
          "minPrice": 399900,
          "productDesc": "更多购物选择：含23kg托运+10kg手提，韩亚航空机票住宿随心搭，七色海，白沙滩等你来！",
          "marketPrice": 0
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
