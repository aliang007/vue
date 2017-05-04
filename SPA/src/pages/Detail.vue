
<!-- Detail.vue -->
<template>
    <div class="detail">

        <h1>我是详情页</h1>

        <footer class="ui-footer llh-trave-footer">
                <ul class="ui-row-flex">
                    <li class="ui-col-2">
                        <div class="llh-trave-footer-total ui-center">
                            <span>RMB <em>2,499</em></span>
                            <span>套餐总计</span>
                        </div>
                    </li>
                    <li class="ui-col-2">
                        <button class="ui-btn-lg ui-btn-danger ui-info-outline js-box-cart"><i class="llh-icon-liwu"></i><span>套餐附赠</span></button>
                        <button class="ui-btn-lg ui-btn-danger">立即预订</button>
                    </li>
                </ul>
            </footer>
            <section class="ui-container" id='ui-container'>
            	<div class="ui-slider llh-ui-slider">
            	    <ul class="ui-slider-content">
            	        <li class="current"><span style="background-image:url(https://img.alicdn.com/tps/TB1vg9.KVXXXXaWXVXXXXXXXXXX-1125-352.jpg_q50.jpg)"></span></li>
            	        <li><span style="background-image:url(https://gw.alicdn.com/tps/i2/TB1qd2XKVXXXXaqXVXXdIns_XXX-1125-352.jpg_q50.jpg)"></span></li>
            	        <li><span style="background-image:url(https://img.alicdn.com/imgextra/i3/2634283647/TB2cETeiXXXXXc7XXXXXXXXXXXX_!!2634283647.jpg_q50.jpg)"></span></li>
            	        <li><span style="background-image:url(https://gw.alicdn.com/tps/i1/TB1SJfcKVXXXXb4XFXXdIns_XXX-1125-352.jpg_q50.jpg)"></span></li>
            	        <li><span style="background-image:url(https://img.alicdn.com/tps/TB1BVjpKVXXXXbdXXXXXXXXXXXX-1125-352.jpg_q50.jpg)"></span></li>
            	    </ul>
                    <ul class="llh-slider-desc">
                        <li>
                            <i class="llh-icon-xiangji"></i>
                            <span class="llh-slider-active">1</span>
                            /
                            <span class="llh-slider-num">5</span>
                        </li>
                        <li>产品编号&nbsp;<span>2622</span></li>
                    </ul>
            	</div>

            	<div class="llh-trave-header">
            		<div class="llh-trave-title">
            			<hgroup>
        					<h1>上海 — 东京经典自由行</h1>
        					<h6 class='ui-txt-info llh-title-sub' >精品酒店住宿，赠送接送机，1元个签无忧保险，北京直飞</h6>
        				</hgroup>
            		</div>
            		<div class="llh-trave-price ui-border-b">
        				<p class="ui-txt-highlight llh-fsize-title-lg">RMB <span class="llh-txt-s">2499</span> <span class="ui-txt-info llh-fsize-tips"> 起/人</span></p>
        			</div>
                    <ul class="ui-list ui-list-text ui-list-link ui-list-active">
                        <li>
                            <div class="llh-promotion-wrap">
                                <div class="ui-badge">来来会2周年庆</div>
                                <em class="ui-txt-info">下单成交立减300元，相当于85元！</em>
                            </div>
                            <div class="llh-promotion-wrap">
                                <div class="ui-badge">满额返劵</div>
                                <em class="ui-txt-info">购自营自由行满5000元返500元优惠劵</em>
                            </div>
                        </li>
                    </ul>
            	</div>

                <div class="llh-trave-setting">
                    <div class="llh-item-box llh-trave-address-plans">
                        <div class="llh-item-box-body">
                            <ul class="llh-item-box ui-row">
                                <li class="ui-col ui-col-33 ui-border-b">出发地</li>
                                <li class="ui-col ui-col-67 ui-border-b">
                                    <select class="llh-select" name="" id="">
                                        <option>请选择出发地</option>
                                        <option>上海</option>
                                        <option>北京/天津</option>
                                    </select>
                                </li>
                                <li class="ui-col ui-col-33">套餐类型</li>
                                <li class="ui-col ui-col-67">
                                    <select class="llh-select" name="" id="">
                                        <option>请选择套餐类型</option>
                                        <option>4 晚 5 日当地精品型酒店</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="llh-item-box llh-trave-timepeople">
                        <div class="llh-item-box-body">
                            <div class="llh-trave-time ui-border-b">
                                <i class="ui-icon-calendar"></i>
                                <div>2015-08-06（周四）出发</div>
                            </div>
                            <div class="llh-trave-people">
                                <i class="llh-icon-renshu"></i>
                                <div class="llh-trave-people-info">
                                    <span class="llh-trave-adult">1成人</span>
                                    <span class="llh-trave-child">1儿童</span>
                                    <span class="llh-trave-baby ui-txt-info">1婴儿</span>
                                </div>
                            </div>
                            <div class="ui-btn-wrap">
                                <button class="ui-btn ui-btn-danger" id="timepeople-btn">修改</button>
                            </div>
                        </div>
                    </div>

                    <div class="llh-item-box llh-trave-plane">
                        <div class="llh-item-box-header ui-border-b">
                            <i class="llh-icon-hangban"></i>
                            <h2 class="1font-size-title-lg">机票</h2>
                            <span class="llh-item-warning ui-txt-info">
                                <i class="ui-icon-info"></i>时间为所在地时间
                            </span>
                        </div>
                        <div class="llh-item-box-body ui-border-b">
                            <ul class="ui-list ui-list-text">
                                <li>
                                    <div class="llh-trave-flight-info">
                                        <p><span class="llh-flight-time">08/09</span><i class="ui-icon-calendar"></i><span class="llh-flight-name">吉祥航空 HO1385</span></p>
                                        <div>
                                            <div class="llh-flight-out">
                                                <p>上海</p>
                                                <p class="ui-txt-info llh-fsize-tips">浦东机场 T2</p>
                                                <p>20:50</p>
                                            </div>
                                            <div class="llh-flight-in">
                                                <p>东京</p>
                                                <p class="ui-txt-info llh-fsize-tips">羽田机场</p>
                                                <p>00:15</p>
                                                 <div class="ui-badge-warning">次日</div>
                                            </div>
                                            <div class="llh-flight-icon">
                                                <i class="llh-icon-hangbanf"></i>
                                                <span>3 小时 25 分</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="llh-trave-flight-info">
                                        <p><span class="llh-flight-time">08/12</span><i class="ui-icon-calendar"></i><span class="llh-flight-name">吉祥航空 HO1385</span></p>
                                        <div>
                                            <div class="llh-flight-out">
                                                <p>东京</p>
                                                <p class="ui-txt-info llh-fsize-tips">羽田机场</p>
                                                <p>19:50</p>
                                            </div>
                                            <div class="llh-flight-in">
                                                <p>上海</p>
                                                <p class="ui-txt-info llh-fsize-tips">浦东机场 T2</p>
                                                <p>23:15</p>
                                            </div>
                                            <div class="llh-flight-icon">
                                                <i class="llh-icon-hangbanf"></i>
                                                <span>3 小时 25 分</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="javascript:;"><em>退改签&预定限制</em></a>
                        </div>
                        <div class="llh-trave-plane-footer">
                            <button class="ui-btn ui-btn-danger" id="plane-btn">更换航班</button>
                        </div>
                    </div>
                    <div class="llh-item-warning">你的航班是隔夜航班，请留意你的酒店入住日期。</div>

                    <div class="llh-item-box llh-item-box-ul llh-trave-luggage">
                        <div class="llh-item-box-header ui-border-b">
                            <i class="llh-icon-xingli"></i>
                            <h2 class="1font-size-title-lg">行李</h2>
                            <span class="llh-item-warning llh-fsize-title-lg">
                                <em>＋RMB 600</em>
                            </span>
                        </div>
                        <div class="llh-item-box-body">
                            <ul class="ui-row">
                                <li class="ui-col ui-col-25 ui-border-b">去程</li>
                                <li class="ui-col ui-col-75 ui-border-b">
                                    <select class="llh-select" name="" id="">
                                        <option>0份</option>
                                        <option>1份</option>
                                    </select>
                                </li>
                                <li class="ui-col ui-col-25">返程</li>
                                <li class="ui-col ui-col-75">
                                    <select class="llh-select" name="" id="">
                                        <option>0份</option>
                                        <option>1份</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="llh-item-warning">据所选航空公司规定：每人可携带 7kg 随身行李无需托运。托运行李 20kg／人。如有托运需要，建议购买行李托运单项。</div>


                    <div class="llh-item-box llh-trave-hotel">
                        <div class="ui-border-b llh-trave-hotel-info">
                            <div class="llh-item-box-header ui-border-b">
                                <i class="llh-icon-jiudian"></i>
                                <h2 class="1font-size-title-lg">酒店</h2>
                                <span class="llh-item-warning ui-txt-info">
                                    <i class="ui-icon-info"></i>时间为所在地时间
                                </span>
                            </div>
                            <div class="llh-item-box-body ui-border-b" style="padding-bottom:1px;">
                                <ui>
                                    <li>
                                        <div class="llh-hotel-time">
                                            <div class="ui-badge">东京</div>
                                            入住<span class="llh-hotel-time-in">08/07</span>离店<span class="llh-hotel-time-out">08/11</span>(<span class="llh-hotel-time-day">4</span>晚)
                                        </div>
                                        <div class="llh-hotel-namestar">
                                            <h2 class="llh-fsize-title llh-hotel-name">滨松町静居酒店</h2>
                                            <div class="llh-hotel-star">
                                                <i class="ui-icon-star-fill"></i>
                                                <i class="ui-icon-star-fill"></i>
                                                <i class="ui-icon-star-fill"></i>
                                                <i class="ui-icon-star-fill"></i>
                                                <i class="ui-icon-star-fill"></i>
                                            </div>
                                        </div>
                                        <div class="ui-txt-info" style="margin-bottom: 12px;">Kuretake Inn Premium Hama Hotel</div>
                                        <div class="llh-hotel-img lazy" data-original="https://img.alicdn.com/imgextra/i2/2039117195/TB22GupepXXXXXpXpXXXXXXXXXX_!!2039117195.jpg_640x640q75.jpg"></div>
                                    </li>
                                    <li class="llh-trave-hotel-txtdesc">
                                        <i class="llh-icon-didian"></i>
                                        <p class="ui-txt-info">105-0014 东京都, Minato-ku Shiba 1-8-18</p>
                                    </li>
                                    <li class="llh-trave-hotel-txtdesc">
                                        <i class="llh-icon-xinxi"></i>
                                        <p class="ui-txt-info">滨松町静居酒店位置较好，距离涩谷打车14分钟，车程约6.0公里。舒适型酒滨松，町静居酒店位置较好。</p>
                                    </li>
                                    <li class="llh-trave-hotel-handlebtn">
                                        <a href="javascript:;" id="reserveRule-btn"><em>预定政策</em></a>
                                        <a href="javascript:;" id="hotel-detail"><em>酒店详情</em></a>
                                    </li>
                                    <li style="margin-bottom:0">
                                        <div class="ui-form-item ui-form-item-checkbox">
                                            <label class="ui-checkbox-s" for="total">
                                                <input type="checkbox" id="total">
                                                酒店早餐
                                            </label>
                                            <span class="llh-item-warning llh-fsize-title-lg" style="right: 0">
                                                <em>＋RMB 150</em>
                                            </span>
                                        </div>
                                    </li>
                                </ui>
                            </div>
                            <div class="llh-trave-hotal-footer">
                                <button class="ui-btn ui-btn-danger" id="plane-btn">更换酒店</button>
                            </div>
                        </div>
                        <div class="llh-item-box-ul ui-border-b">
                            <div class="llh-item-box-header">
                                <i class="llh-icon-chuang"></i>
                                <h2 class="1font-size-title-lg">房间</h2>
                                <span class="llh-item-warning llh-fsize-title-lg">
                                    <em>＋RMB 600</em>
                                </span>
                            </div>
                            <div class="llh-item-box-body" style="padding-top: 0">
                                <ul class="ui-row">
                                    <li class="ui-col ui-col-33">房型数</li>
                                    <li class="ui-col ui-col-67">
                                        <select class="llh-select" name="" id="">
                                            <option>1 间</option>
                                            <option>2 间</option>
                                        </select>
                                    </li>
                                    <li class="ui-col ui-col-33">房型偏好</li>
                                    <li class="ui-col ui-col-67">
                                        <select class="llh-select" name="" id="">
                                            <option>尽量安排大床房间</option>
                                            <option>尽量安排大床房间</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="llh-item-box-ul">
                            <div class="llh-item-box-header">
                                <i class="llh-icon-xiong"></i>
                                <h2 class="1font-size-title-lg">儿童</h2>
                                <span class="llh-item-warning llh-fsize-title-lg">
                                    <em>＋RMB 150</em>
                                </span>
                            </div>
                            <div class="llh-item-box-body" style="padding-top: 0">
                                <ul class="ui-row">
                                    <li class="ui-col ui-col-33">床位安排</li>
                                    <li class="ui-col ui-col-67">
                                        <select class="llh-select" name="" id="">
                                            <option>儿童占床</option>
                                            <option>儿童不占床</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="llh-accordion">
                        <input type="checkbox" id="play-checkbox" checked>
                        <label class="llh-accordion-header ui-border-b" for="play-checkbox">
                            <i class="llh-icon-tuijianwanfa"></i>
                            <h2 class="1font-size-title-lg">推荐玩法</h2>
                        </label>
                        <div class="llh-accordion-body">
                            <div class="llh-play-desc">
                                <ui class="ui-tiled llh-play-img">
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                                </ui>
                                <p>参观韩国的“故宫”景福宫，韩国首尔规模最大、最古老的宫殿之一。在景福宫，昌德宫和宗庙之间，是首尔有着 600 年历史的韩国传统居住区——北村韩屋村，接下来前往三清洞，这里的画廊、博物馆、古玩店等使这里充满了文化气息。午餐时间来到仁寺洞，品尝传统韩食物、传统茶。饱餐过后，开始下午的行程，首先来到的是有李舜臣将军和世宗大王铜像的光华门广场。穿过光华门广场既是清溪川广场，这里的八石潭、光之地道等都非常值得一看。紧接着前往首尔的地标性建筑——年历史的韩国传统居住区——北村韩屋村，接下来前往三清洞，这里的画廊、博物馆、古玩店等使这里充满了文化气息。午餐时间来到仁寺洞，品尝传统韩食物、传统茶。饱餐过后，开始下午的行程，首先来到的是有李舜臣将军和世宗大王铜像的光华门广场。穿过光华门广场既是清溪川广场，这里的八石潭、光之地道等都非常值得一看。紧接着前往首尔的地标性建筑——</p>
                            </div>
                        </div>
                    </div>

                    <div class="llh-accordion">
                        <input type="checkbox" id="cost-checkbox">
                        <label class="llh-accordion-header ui-border-b" for="cost-checkbox">
                            <i class="llh-icon-feiyongshuoming"></i>
                            <h2 class="1font-size-title-lg">费用说明</h2>
                        </label>
                        <div class="llh-accordion-body">
                            <div class="llh-play-desc">
                                <ui class="ui-tiled llh-play-img">
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                                </ui>
                                <p>参观韩国的“故宫”景福宫，韩国首尔规模最大、最古老的宫殿之一。在景福宫，昌德宫和宗庙之间，是首尔有着 600 年历史的韩国传统居住区——北村韩屋村，接下来前往三清洞，这里的画廊、博物馆、古玩店等使这里充满了文化气息。午餐时间来到仁寺洞，品尝传统韩食物、传统茶。饱餐过后，开始下午的行程，首先来到的是有李舜臣将军和世宗大王铜像的光华门广场。穿过光华门广场既是清溪川广场，这里的八石潭、光之地道等都非常值得一看。紧接着前往首尔的地标性建筑——</p>
                            </div>
                        </div>
                    </div>

                    <div class="llh-accordion">
                        <input type="checkbox" id="reserved-checkbox">
                        <label class="llh-accordion-header ui-border-b" for="reserved-checkbox">
                            <i class="llh-icon-yudingxinxi"></i>
                            <h2 class="1font-size-title-lg">预订信息</h2>
                        </label>
                        <div class="llh-accordion-body">
                            <div class="llh-play-desc">
                                <ui class="ui-tiled llh-play-img">
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                                </ui>
                                <p>参观韩国的“故宫”景福宫，韩国首尔规模最大、最古老的宫殿之一。在景福宫，昌德宫和宗庙之间，是首尔有着 600 年历史的韩国传统居住区——北村韩屋村，接下来前往三清洞，这里的画廊、博物馆、古玩店等使这里充满了文化气息。午餐时间来到仁寺洞，品尝传统韩食物、传统茶。饱餐过后，开始下午的行程，首先来到的是有李舜臣将军和世宗大王铜像的光华门广场。穿过光华门广场既是清溪川广场，这里的八石潭、光之地道等都非常值得一看。紧接着前往首尔的地标性建筑——</p>
                            </div>
                        </div>
                    </div>

                    <div class="llh-accordion">
                        <input type="checkbox" id="visa-checkbox">
                        <label class="llh-accordion-header ui-border-b" for="visa-checkbox">
                            <i class="llh-icon-qianzheng1"></i>
                            <h2 class="1font-size-title-lg">签证说明</h2>
                        </label>
                        <div class="llh-accordion-body">
                            <div class="llh-play-desc">
                                <ui class="ui-tiled llh-play-img">
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                                    <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                                </ui>
                                <p>参观韩国的“故宫”景福宫，韩国首尔规模最大、最古老的宫殿之一。在景福宫，昌德宫和宗庙之间，是首尔有着 600 年历史的韩国传统居住区——北村韩屋村，接下来前往三清洞，这里的画廊、博物馆、古玩店等使这里充满了文化气息。午餐时间来到仁寺洞，品尝传统韩食物、传统茶。饱餐过后，开始下午的行程，首先来到的是有李舜臣将军和世宗大王铜像的光华门广场。穿过光华门广场既是清溪川广场，这里的八石潭、光之地道等都非常值得一看。紧接着前往首尔的地标性建筑——</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    </div>
</template>

<style scoped>
  
</style>

<script>

</script>