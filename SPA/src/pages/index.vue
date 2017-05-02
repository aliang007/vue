<template>
  <div class="index">
    <div class="ui-slider llh-ui-slider">
        <ul class="ui-slider-content">
            <li class="current">
                <a href="http://m.lailaihui.com/html/ycloset"><span
                        style="background-image:url(http://img.lailaihui.com/zhuanti/ycloset_app/ycloset_y.jpg?imageView2/4/w/750/h/274|imageMogr2/interlace/1)"></span></a>
            </li>
            <li class="current">
                <a href="http://m.lailaihui.com/html/tjp"><span
                        style="background-image:url(http://img.lailaihui.com/zhuanti/tejiapiao/tjp_banner.jpg?imageView2/4/w/750/h/274|imageMogr2/interlace/1)"></span></a>
            </li>
            <li class="current">
                <a href="http://m.lailaihui.com/html/visa"><span
                        style="background-image:url(http://img.lailaihui.com/zhuanti/Visa/visa-yd-banner.jpg?imageView2/4/w/750/h/274|imageMogr2/interlace/1)"></span></a>
            </li>
        </ul>
    </div>
    <div class="llh-nearby-wrap">
        <div class="llh-nearby-hd">
            <hgroup class="hgroup-wrap">
                <h2>周末不浪费</h2>
                <h6 class="ui-txt-info">轻松周末，简单旅行</h6>
            </hgroup>
        </div>
        <div class="llh-nearby-bd">
            <ul class="ui-grid-halve">
                <li>
                    <a href="/detail">
                        <div class="ui-grid-halve-img">
                            <span class="lazy" data-original="http://p.lailaihui.com/m/wap/week_taiguo.jpg" style="background-image: url(&quot;http://p.lailaihui.com/m/wap/week_taiguo.jpg&quot;);"></span>
                        </div>
                        <h3><em>泰国</em></h3>
                        <span class="ui-txt-info">RMB 1899起</span>
                    </a>
                </li>
                <li>
                    <a href="/detail">
                        <div class="ui-grid-halve-img">
                            <span class="lazy" data-original="http://p.lailaihui.com/m/wap/week_xianggang.jpg" style="background-image: url(&quot;http://p.lailaihui.com/m/wap/week_xianggang.jpg&quot;);"></span>
                        </div>
                        <h3><em>香港</em></h3>
                        <span class="ui-txt-info">RMB 1149起</span>
                    </a>
                </li>
                <li>
                    <a href="/detail">
                        <div class="ui-grid-halve-img">
                            <span class="lazy" data-original="http://p.lailaihui.com/m/wap/week_changtan.jpg" style="background-image: url(&quot;http://p.lailaihui.com/m/wap/week_changtan.jpg&quot;);"></span>
                        </div>
                        <h3><em>长滩岛</em></h3>
                        <span class="ui-txt-info">RMB 2900起</span>
                    </a>
                </li>
                <li>
                    <a href="/detail">
                        <div class="ui-grid-halve-img">
                            <span class="lazy" data-original="http://img.lailaihui.com/m/2017/riben.jpg" style="background-image: url(&quot;http://img.lailaihui.com/m/2017/riben.jpg&quot;);"></span>
                        </div>
                        <h3><em>日本</em></h3>
                        <span class="ui-txt-info">RMB 1500起</span>
                    </a>
                </li>
            </ul>
            <p class="ttc"><a href="/list">查看更多</a></p>
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
      title: "index",
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

<style scoped>
  @import 'http://m.lailaihui.com/static/css/lib/frozen.css';
  @import 'http://m.lailaihui.com/static/css/index.css';
.ttc { text-align:center; line-height:50px; font-size:40px;}
</style>
