<template>
  <section class="ui-container" id='ui-container'>

      <div class="ui-slider llh-ui-slider">
    	    <ul class="ui-slider-content" style="width: 300%;transform: translate(-0px, 0px) translateZ(0px);">
    	        <li class="current"><span style="background-image:url(https://img.alicdn.com/tps/TB1vg9.KVXXXXaWXVXXXXXXXXXX-1125-352.jpg_q50.jpg)"></span></li>
    	        <li><span style="background-image:url(https://gw.alicdn.com/tps/i2/TB1qd2XKVXXXXaqXVXXdIns_XXX-1125-352.jpg_q50.jpg)"></span></li>
    	        <li><span style="background-image:url(https://img.alicdn.com/imgextra/i3/2634283647/TB2cETeiXXXXXc7XXXXXXXXXXXX_!!2634283647.jpg_q50.jpg)"></span></li>
    	    </ul>
    	</div>

        <div class="llh-nav">
  			<ul class="ui-row-flex">
  				<li class="ui-col ui-border"><span style="background-image:url(http://m.lailaihui.com/static/imgs/pic-index-1.png)"></span></li>
  				<li class="ui-col ui-border"><span style="background-image:url(http://m.lailaihui.com/static/imgs/pic-index-2.png)"></span></li>
  			</ul>
  		</div>

        <div class="llh-hot-wrap">
  			<div class="llh-hot-hd">
  				<span><i class="llh-icon-jishiqianggou"></i>爆款抢购</span>
  			</div>
  			<div class="llh-hot-bd">
  				<div class="swiper-container">
  					<div class="swiper-wrapper">
  						<div class="swiper-slide"></div>
  						<div class="swiper-slide"></div>
  						<div class="swiper-slide"></div>
  					</div>
  				</div>
  			</div>
  		</div>

      <div class="llh-nearby-wrap">
			<div class="llh-nearby-hd">
				<hgroup class="hgroup-wrap">
					<h2 onclick="window.location.href='/list'">周末好去处 <i class="llh-icon-yuanjiantouzuo"></i></h2>
					<h6 class='ui-txt-info' >发现离家最近的好地方</h6>
				</hgroup>
			</div>
			<div class="llh-nearby-bd">
				<ul class="ui-grid-halve">
				    <li onclick="window.location.href='/detail'" v-for="item in weekWhere">
				        <div class="ui-grid-halve-img">
				            <img :src="item.thumb"/>
				        </div>
				        <h3><em>{{item.prodName}}</em></h3>
				        <span class="ui-txt-info">{{item.minPrice/100}}起</span>
				    </li>

				</ul>
			</div>
		</div>

		<div class="llh-classical-wrap">
			<div class="llh-classical-hd">
				<hgroup class="hgroup-wrap">
					<h2 onclick="window.location.href='/list'">经典旅游线路 <i class="llh-icon-yuanjiantouzuo"></i></h2>
					<h6 class='ui-txt-info' >发现离家最近的好地方</h6>
				</hgroup>
			</div>
			<div class="llh-classical-bd">
				<div onclick="window.location.href='/detail'" class="llh-classical-banner">
					<span :style="{backgroundImage: 'url(http://placeholder.qiniudn.com/375x160)'}"></span>
					 <div class="ui-badge">春节出发</div>
					 <div class="llh-classical-banner-title">
					 	<h3>上海－香港4日往返机票</h3>
					 	<span><em>RMB </em><em>899</em><em> 起</em></span>
					 </div>
				</div>
                <ul class="ui-list" id="classical-list">
                    <li onclick="window.location.href='/detail'" class="ui-border-b" v-for="product in otherPrds">
                	    <div class="ui-list-img">
                	        <span :style="{backgroundImage: 'url('+product.thumb+')'}"></span>
                	        <div class="ui-badge">{{product.label}}</div>
                	    </div>
                        <div class="ui-list-info">
                            <div>
                               <h6 class="ui-nowrap">{{product.prodName}}</h6>
                               <p class="llh-classical-time">2015年5-6月多团期出发</p>
                            </div>
                             <p class="ui-txt-highlight llh-txt-xl"><span class="llh-txt-s">RNB </span> {{product.minPrice/100}} <span class="llh-txt-s"> 元起</span></p>
                        </div>
                	</li>
                </ul>
				<a href="/list" class="ui-txt-info" id="classical-load-btn">更多经典线路</a>
			</div>
		</div>

  </section>
</template>

<script>
import Headr from '../components/Header'
import List from '../components/List'

export default {
  data(){
    return {
      title: "index",
      weekWhere: [
          {
              "prodCode": "/search?destCountry=泰国",
              "prodName": "泰国",
              "thumb": "http://p.lailaihui.com/m/wap/week_taiguo.jpg",
              "minPrice": 189900
          },
          {
              "prodCode": "/search?destination=香港",
              "prodName": "香港",
              "thumb": "http://p.lailaihui.com/m/wap/week_xianggang.jpg",
              "minPrice": 114900
          },
          {
              "prodCode": "/search?destination=长滩岛",
              "prodName": "长滩岛",
              "thumb": "http://p.lailaihui.com/m/wap/week_changtan.jpg",
              "minPrice": 290000
          },
          {
              "prodCode": "/search?destCountry=日本",
              "prodName": "日本",
              "thumb": "http://img.lailaihui.com/m/2017/riben.jpg",
              "minPrice": 150000
          }
      ],
      otherPrds: [
         {
             "prodCode": "40119",
             "prodName": "北京-长滩岛6天4晚自由行",
             "thumb": "http://p.lailaihui.com/LineBigPhoto/4561/3.jpg",
             "label": "良心路线",
             "referDate": "",
             "minPrice": 366900
         },
         {
             "prodCode": "40042",
             "prodName": "北京-香港4天3晚自由行",
             "thumb": "http://p.lailaihui.com/LineBigPhoto/4544/6.jpg",
             "label": "超值特惠",
             "referDate": "",
             "minPrice": 147900
         },
         {
             "prodCode": "39722",
             "prodName": "北京-岘港6天4晚自由行(东方航空直飞）",
             "thumb": "http://p.lailaihui.com/904b0329-024b-4a4e-8740-544e43e04117.jpg",
             "label": "超值特惠",
             "referDate": "",
             "minPrice": 249900
         },
         {
             "prodCode": "42160",
             "prodName": "北京-芽庄6天4晚自由行（三星酒店/越南航空直飞）",
             "thumb": "http://p.lailaihui.com/LineBigPhoto/4542/1.jpg",
             "label": "人气好货",
             "referDate": "",
             "minPrice": 329900
         },


         {
             "prodCode": "41028",
             "prodName": "北京-沙巴6天4晚自由行(2人起订)",
             "thumb": "http://p.lailaihui.com/LineBigPhoto/4136/4.jpg",
             "label": "来来爆款",
             "referDate": "",
             "minPrice": 359900
         },


         {
             "prodCode": "41527",
             "prodName": "北京-塞班岛7天5晚自由行",
             "thumb": "http://p.lailaihui.com/LineBigPhoto/715/4.jpg",
             "label": "人气好货",
             "referDate": "",
             "minPrice": 699900
         }
      ],
    }
  },
  components: {
    Headr,
    List
  },
  mounted(){


  }
}
</script>

<style scoped>

  @import 'http://m.lailaihui.com/static/css/index.css';

</style>
