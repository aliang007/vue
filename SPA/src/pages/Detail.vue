
<!-- Detail.vue -->
<template>
    <section class="ui-container" id='ui-container'>
    	<div class="ui-slider llh-ui-slider">
    	    <ul class="ui-slider-content" style="width: 100%;transform: translate(-0px, 0px) translateZ(0px);">
    	        <li class="current"><span style="background-image:url(https://img.alicdn.com/tps/TB1vg9.KVXXXXaWXVXXXXXXXXXX-1125-352.jpg_q50.jpg)"></span></li>

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

            <div class="llh-item-box ">
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
                        <ul>
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
                        </ul>
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
                        <ul class="ui-tiled llh-play-img">
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                        </ul>
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
                        <ul class="ui-tiled llh-play-img">
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                        </ul>
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
                        <ul class="ui-tiled llh-play-img">
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                        </ul>
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
                        <ul class="ui-tiled llh-play-img">
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/1c3e57/b2d3eb/"></span></li>
                            <li><span class="lazy" data-original="http://placeholder.qiniudn.com/165x100/9cc728/0f96f7/"></span></li>
                        </ul>
                        <p>参观韩国的“故宫”景福宫，韩国首尔规模最大、最古老的宫殿之一。在景福宫，昌德宫和宗庙之间，是首尔有着 600 年历史的韩国传统居住区——北村韩屋村，接下来前往三清洞，这里的画廊、博物馆、古玩店等使这里充满了文化气息。午餐时间来到仁寺洞，品尝传统韩食物、传统茶。饱餐过后，开始下午的行程，首先来到的是有李舜臣将军和世宗大王铜像的光华门广场。穿过光华门广场既是清溪川广场，这里的八石潭、光之地道等都非常值得一看。紧接着前往首尔的地标性建筑——</p>
                    </div>
                </div>
            </div>
        </div>
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
    </section>
</template>

<style scoped>
@font-face {
    font-family: 'llh-iconfont';
    src: url("//at.alicdn.com/t/font_1454313145_100568.eot");
    src: url("//at.alicdn.com/t/font_1454313145_100568.eot?#iefix") format("embedded-opentype"),url("//at.alicdn.com/t/font_1454313145_100568.woff") format("woff"),url("//at.alicdn.com/t/font_1454313145_100568.ttf") format("truetype"),url("//at.alicdn.com/t/font_1454313145_100568.svg#llh-iconfont") format("svg")
}

[class*="llh-icon-"] {
    font-family: "llh-iconfont" !important;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale
}

[class*="llh-icon-"] {
    display: inline-block
}

.llh-icon-qukuanji:before {
    content: "\e63e"
}

.llh-icon-qianzheng:before {
    content: "\e63f"
}

.llh-icon-wangzhanshouye:before {
    content: "\e66a"
}

.llh-icon-weibo:before {
    content: "\e667"
}

.llh-icon-mianfeixishu:before {
    content: "\e647"
}

.llh-icon-youyongchi:before {
    content: "\e648"
}

.llh-icon-yugang:before {
    content: "\e649"
}

.llh-icon-xiangji:before {
    content: "\e66b"
}

.llh-icon-dianhua:before {
    content: "\e64b"
}

.llh-icon-pingpangqiu:before {
    content: "\e64e"
}

.llh-icon-iconfontcolor67:before {
    content: "\e64f"
}

.llh-icon-gouwu:before {
    content: "\e650"
}

.llh-icon-anmo:before {
    content: "\e651"
}

.llh-icon-huobiduihuan:before {
    content: "\e654"
}

.llh-icon-iconxican01:before {
    content: "\e655"
}

.llh-icon-zhoubianyou:before {
    content: "\e656"
}

.llh-icon-chuifengji:before {
    content: "\e657"
}

.llh-icon-jiuba:before {
    content: "\e658"
}

.llh-icon-kafeiting:before {
    content: "\e659"
}

.llh-icon-wifi:before {
    content: "\e65a"
}

.llh-icon-tingchechang:before {
    content: "\e65c"
}

.llh-icon-wifi1:before {
    content: "\e65f"
}

.llh-icon-xizao:before {
    content: "\e660"
}

.llh-icon-xin:before {
    content: "\e661"
}

.llh-icon-baoxian:before {
    content: "\e664"
}

.llh-icon-jiantouxiangxia:before {
    content: "\e64c"
}

.llh-icon-duihao:before {
    content: "\e644"
}

.llh-icon-youhuiquan:before {
    content: "\e642"
}

.llh-icon-yonghuf:before {
    content: "\e64d"
}

.llh-icon-xiaocha:before {
    content: "\e601"
}

.llh-icon-chanpinshuoming:before {
    content: "\e602"
}

.llh-icon-qq:before {
    content: "\e603"
}

.llh-icon-zhifubao:before {
    content: "\e604"
}

.llh-icon-weixin:before {
    content: "\e600"
}

.llh-icon-qzone:before {
    content: "\e605"
}

.llh-icon-youlun:before {
    content: "\e666"
}

.llh-icon-nantouxiang:before {
    content: "\e606"
}

.llh-icon-nvtouxiang:before {
    content: "\e607"
}

.llh-icon-chuang:before {
    content: "\e608"
}

.llh-icon-didian:before {
    content: "\e609"
}

.llh-icon-dianhua1:before {
    content: "\e60a"
}

.llh-icon-dingdanzhongxin:before {
    content: "\e60b"
}

.llh-icon-duihao1:before {
    content: "\e60c"
}

.llh-icon-duihaoyuantian:before {
    content: "\e60d"
}

.llh-icon-duihaoyuan:before {
    content: "\e60e"
}

.llh-icon-feiyongshuoming:before {
    content: "\e60f"
}

.llh-icon-gouwuche:before {
    content: "\e610"
}

.llh-icon-guanbixian:before {
    content: "\e611"
}

.llh-icon-guanbi:before {
    content: "\e612"
}

.llh-icon-hangbanf:before {
    content: "\e613"
}

.llh-icon-hangban:before {
    content: "\e614"
}

.llh-icon-jishiqianggou:before {
    content: "\e615"
}

.llh-icon-jiayuan:before {
    content: "\e616"
}

.llh-icon-jiudian:before {
    content: "\e617"
}

.llh-icon-liwu:before {
    content: "\e618"
}

.llh-icon-qianzheng1:before {
    content: "\e619"
}

.llh-icon-renshu:before {
    content: "\e61a"
}

.llh-icon-riqi:before {
    content: "\e61b"
}

.llh-icon-sanjiaoxiangshang:before {
    content: "\e61c"
}

.llh-icon-sanjiaoxiangyou:before {
    content: "\e61d"
}

.llh-icon-sanjiaoxiangzuo:before {
    content: "\e61e"
}

.llh-icon-shandian:before {
    content: "\e61f"
}

.llh-icon-shenfenzheng:before {
    content: "\e620"
}

.llh-icon-shouye:before {
    content: "\e621"
}

.llh-icon-sousuof:before {
    content: "\e622"
}

.llh-icon-sousuo:before {
    content: "\e623"
}

.llh-icon-tuijianwanfa:before {
    content: "\e624"
}

.llh-icon-wodeshoucang:before {
    content: "\e625"
}

.llh-icon-wodexiaoxi:before {
    content: "\e626"
}

.llh-icon-xiangqing:before {
    content: "\e627"
}

.llh-icon-xiangshang:before {
    content: "\e628"
}

.llh-icon-xiangxia:before {
    content: "\e629"
}

.llh-icon-xiangxiasanjiao:before {
    content: "\e62a"
}

.llh-icon-xiangyou:before {
    content: "\e62b"
}

.llh-icon-xiangzuo:before {
    content: "\e62c"
}

.llh-icon-xinxi:before {
    content: "\e62d"
}

.llh-icon-xingli:before {
    content: "\e62e"
}

.llh-icon-xiong:before {
    content: "\e62f"
}

.llh-icon-youhuiquanfcopy3:before {
    content: "\e630"
}

.llh-icon-youhuiquanfcopy4:before {
    content: "\e631"
}

.llh-icon-youhuiquan1:before {
    content: "\e632"
}

.llh-icon-yudingxinxi:before {
    content: "\e633"
}

.llh-icon-yuanjiantoushang:before {
    content: "\e634"
}

.llh-icon-yuanjiantouxia:before {
    content: "\e635"
}

.llh-icon-yuanjiantouyoucopy:before {
    content: "\e636"
}

.llh-icon-yuanjiantouyou:before {
    content: "\e637"
}

.llh-icon-yuanjiantouzuo:before {
    content: "\e638"
}

.llh-icon-zeng:before {
    content: "\e639"
}

.llh-icon-zhanghaoshezhi:before {
    content: "\e63a"
}

.llh-icon-zhifuchenggong:before {
    content: "\e63b"
}

.llh-icon-zhifushibai:before {
    content: "\e63c"
}

.llh-icon-ok:before {
    content: "\e63d"
}

.llh-icon-jiaotong:before {
    content: "\e668"
}

.llh-icon-duihaojiao:before {
    content: "\e669"
}

.llh-icon-lianxirenxinxi:before {
    content: "\e643"
}

.llh-icon-24xiaoshireshui:before {
    content: "\e66c"
}

.llh-icon-anmoshi:before {
    content: "\e66d"
}

.llh-icon-baoxianxiang:before {
    content: "\e66e"
}

.llh-icon-canting:before {
    content: "\e66f"
}

.llh-icon-canjirenkefang:before {
    content: "\e670"
}

.llh-icon-chashi:before {
    content: "\e671"
}

.llh-icon-chuifengji1:before {
    content: "\e672"
}

.llh-icon-datangba:before {
    content: "\e673"
}

.llh-icon-diantifuwu:before {
    content: "\e674"
}

.llh-icon-chuansuojichangbanche:before {
    content: "\e675"
}

.llh-icon-dianziyouxishi:before {
    content: "\e676"
}

.llh-icon-dulimuyujian:before {
    content: "\e677"
}

.llh-icon-dulixiezitai:before {
    content: "\e678"
}

.llh-icon-ertongleyuan:before {
    content: "\e679"
}

.llh-icon-ganxifuwu:before {
    content: "\e67a"
}

.llh-icon-guojichangtudianhua:before {
    content: "\e67b"
}

.llh-icon-guoneichangtudianhua:before {
    content: "\e67c"
}

.llh-icon-huiyiting:before {
    content: "\e67d"
}

.llh-icon-jianshenshi:before {
    content: "\e67e"
}

.llh-icon-jiaochefuwu:before {
    content: "\e67f"
}

.llh-icon-jiaoxingfuwu:before {
    content: "\e680"
}

.llh-icon-jiejifuwu:before {
    content: "\e681"
}

.llh-icon-jiuba1:before {
    content: "\e682"
}

.llh-icon-kafeihuchahu:before {
    content: "\e683"
}

.llh-icon-kafeiting1:before {
    content: "\e684"
}

.llh-icon-lifameirongzhongxin:before {
    content: "\e685"
}

.llh-icon-minijiuba:before {
    content: "\e686"
}

.llh-icon-mianfeipingzhuangshui:before {
    content: "\e687"
}

.llh-icon-mianfeixishuyongpin:before {
    content: "\e688"
}

.llh-icon-piaowu:before {
    content: "\e689"
}

.llh-icon-pingpangqiushi:before {
    content: "\e68a"
}

.llh-icon-qiantaibaoxianxiang:before {
    content: "\e68c"
}

.llh-icon-qianshui:before {
    content: "\e68d"
}

.llh-icon-qukuanji1:before {
    content: "\e68e"
}

.llh-icon-riguangyuchang:before {
    content: "\e68f"
}

.llh-icon-sangnayushi:before {
    content: "\e690"
}

.llh-icon-shangchang:before {
    content: "\e691"
}

.llh-icon-shangwuzhongxin:before {
    content: "\e692"
}

.llh-icon-shaokao:before {
    content: "\e693"
}

.llh-icon-shiwaiyouyongchi:before {
    content: "\e694"
}

.llh-icon-shuishangyundong:before {
    content: "\e695"
}

.llh-icon-songcanfuwu:before {
    content: "\e696"
}

.llh-icon-tingchechang1:before {
    content: "\e697"
}

.llh-icon-tuoxie:before {
    content: "\e698"
}

.llh-icon-wangqiuchang:before {
    content: "\e699"
}

.llh-icon-xiyifuwu:before {
    content: "\e69a"
}

.llh-icon-xicanting:before {
    content: "\e69b"
}

.llh-icon-xianhuadian:before {
    content: "\e69c"
}

.llh-icon-xinglijicun:before {
    content: "\e69d"
}

.llh-icon-youzhengfuwu:before {
    content: "\e69e"
}

.llh-icon-youkewuxianshangwangdegonggongquyu:before {
    content: "\e69f"
}

.llh-icon-yugang1:before {
    content: "\e6a0"
}

.llh-icon-yuyi:before {
    content: "\e6a1"
}

.llh-icon-yundouyunyiban:before {
    content: "\e6a2"
}

.llh-icon-zhongcanting:before {
    content: "\e6a3"
}

.llh-icon-zhongyangkongdiao:before {
    content: "\e6a4"
}

.llh-icon-zhuanzhixingliyuan:before {
    content: "\e6a5"
}

.llh-icon-zhuoqiushi:before {
    content: "\e6a6"
}

.llh-icon-zuyu:before {
    content: "\e6a7"
}

.llh-icon-ktv:before {
    content: "\e6a8"
}

.llh-icon-spa:before {
    content: "\e6a9"
}

.llh-icon-dianshi:before {
    content: "\e640"
}

.llh-icon-putongfentikongdiao:before {
    content: "\e6aa"
}

.llh-icon-waibiduihuanfuwu:before {
    content: "\e641"
}

.llh-icon-yonghuf1:before {
    content: "\e645"
}

.llh-icon-tishi1:before {
    content: "\e646"
}

.llh-icon-tishi2:before {
    content: "\e64a"
}

.llh-icon-riqixuanzeyou:before {
    content: "\e652"
}

.llh-icon-riqixuanzezuo:before {
    content: "\e653"
}

.llh-icon-zhengfangxing:before {
    content: '\e65d'
}

.llh-icon-dingdan:before {
    content: '\ee65b'
}

.mobile-pjax-page {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #eee;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    -webkit-transition: all .5s ease;
    transition: all .5s ease
}

.mobile-pjax-hide {
    display: none
}

.mobile-pjax-fadeIn {
    opacity: 1;
    pointer-events: auto
}

.ui-container {
    position: relative;
    z-index: 2;
    height: 100%;
    box-sizing: border-box
}

.hide {
    display: none
}

.show {
    display: block
}

.llh-fsize-h1 {
    font-size: 18px
}

.llh-fsize-title {
    font-size: 15px
}

.llh-fsize-title-lg {
    font-size: 17px
}

.llh-fsize-title {
    font-size: 15px
}

.llh-fsize-base {
    font-size: 16px
}

.llh-fsize-info {
    font-size: 16px
}

.llh-fsize-info-s {
    font-size: 14px
}

.llh-fsize-sub {
    font-size: 13px
}

.llh-fsize-tips {
    font-size: 12px
}

.llh-fsize-min {
    font-size: 11px
}

.llh-select {
    position: relative;
    background: #f3f3f3;
    background: -moz-linear-gradient(top, #fff 0%, #f3f3f3 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #fff), color-stop(100%, #f3f3f3));
    background: -webkit-linear-gradient(top, #fff 0%, #f3f3f3 100%);
    background: -o-linear-gradient(top, #fff 0%, #f3f3f3 100%);
    background: -ms-linear-gradient(top, #fff 0%, #f3f3f3 100%);
    background: linear-gradient(to bottom, #fff 0%, #f3f3f3 100%);
    border: 1px solid #dfdfdf;
    border-radius: 2px
}

.llh-select:focus {
    outline: none;
    background-color: transparent;
    color: #222
}

.llh-select option {
    font-weight: normal
}

.llh-item-box {
    margin: 15px 10px;
    background-color: #fff;
    box-shadow: 0px 1px 1px 0px rgba(204,204,204,0.5);
    border-radius: 4px
}

.llh-item-box .llh-item-box-header {
    position: relative;
    text-align: left;
    padding: 0 10px;
    height: 43px;
    line-height: 43px
}

.llh-item-box .llh-item-box-header i {
    font-size: 18px;
    color: #e25550;
    width: 22px;
    line-height: 20px;
    vertical-align: middle;
    margin-right: 15px;
    line-height: initial;
    width: initial;
    margin-bottom: 2px
}

.llh-item-box .llh-item-box-header h2 {
    display: inline-block;
    vertical-align: middle
}

.llh-item-box .llh-item-warning {
    position: absolute;
    right: 10px;
    top: 50%;
    margin: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
}

.llh-item-box .llh-item-warning i {
    font-size: 18px;
    color: #9b9b9b;
    margin: 0;
    height: 16px;
    line-height: 16px;
    width: 20px;
    vertical-align: text-bottom
}

.llh-item-box .llh-item-box-body {
    padding: 10px
}

.llh-item-box .llh-item-box-body select {
    height: 28px;
    line-height: 28px;
    width: 100%;
    font-size: 14px
}

.llh-item-box .llh-item-box-body ul.ui-row {
    margin: 0;
    background-color: #fff;
    font-size: 14px
}

.llh-item-box .llh-item-box-body ul.ui-row li {
    height: 40px;
    line-height: 40px
}

.llh-item-box .llh-item-box-body ul.ui-row li:nth-child(odd) {
    padding-left: 10px
}

.llh-item-box .llh-item-box-body ul.ui-row li:nth-child(even) {
    padding-right: 10px
}

.llh-item-box .llh-item-box-body ul.ui-row li>span,.llh-item-box .llh-item-box-body ul.ui-row li .llh-fsize-sub {
    padding-left: 6px
}

.llh-item-box .llh-item-box-footer {
    padding: 10px
}

.llh-item-box-ul .llh-item-box-body {
    padding: 10px 0
}

.llh-item-box-ul .llh-item-box-body ul.ui-row li:nth-child(odd) {
    padding-left: 28px
}

.llh-item-box-ul .llh-item-box-body ul.ui-row li:nth-child(even) {
    padding-right: 10px
}

.llh-item-warning {
    margin: -5px 10px -2px;
    color: #9b9b9b;
    background-color: transparent
}

.llh-accordion {
    background-color: #fff;
    margin: 15px 0;
    padding: 0 10px;
    box-shadow: 0px 1px 1px 0px rgba(204,204,204,0.5)
}

.llh-accordion>input[type=checkbox] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0
}

.llh-accordion>input[type=checkbox]:checked ~ .llh-accordion-body {
    height: auto
}

.llh-accordion>input[type=checkbox]:checked ~ .llh-accordion-header:after {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.llh-accordion .llh-accordion-header {
    position: relative;
    text-align: left;
    padding: 0 10px;
    height: 43px;
    line-height: 43px;
    display: block
}

.llh-accordion .llh-accordion-header i {
    font-size: 18px;
    color: #e25550;
    width: 22px;
    line-height: 20px;
    vertical-align: middle;
    margin-right: 15px;
    line-height: initial;
    width: initial;
    margin-bottom: 2px
}

.llh-accordion .llh-accordion-header h2 {
    display: inline-block;
    vertical-align: middle
}

.llh-accordion .llh-accordion-header:after {
    font-family: "iconfont" !important;
    font-size: 32px;
    line-height: 43px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    display: inline-block;
    color: #ccc;
    vertical-align: middle;
    position: absolute;
    right: 2px;
    color: #9B9B9B;
    content: "";
    -webkit-transform-origin: center 47%;
    transform-origin: center 47%;
    -webkit-transition: all .25s ease;
    transition: all .25s ease
}

.llh-accordion .llh-accordion-body {
    padding: 0 10px;
    height: 0;
    color: #999999;
    overflow: hidden;
    position: relative
}

.llh-ui-dialog-full {
    box-sizing: border-box;
    padding: 10px
}

.llh-ui-dialog-full .ui-dialog-cnt {
    width: 100%;
    height: 100%;
    position: relative
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-hd {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: #fff;
    text-align: left;
    padding-left: 18px;
    box-sizing: border-box;
    height: 76px;
    z-index: 2
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-hd h1,.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-hd h5 {
    color: #313131
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-hd h5 {
    line-height: initial
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-ft {
    bottom: 0;
    position: absolute;
    height: 76px;
    background-image: -webkit-linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 41%, #fff 100%);
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 41%, #fff 100%);
    background-size: cover;
    -webkit-box-pack: end;
    -webkit-box-orient: vertical;
    z-index: 2
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-ft i {
    font-size: 56px;
    color: #C4C4C4;
    display: -webkit-box
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-bd {
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-hd ~ .ui-dialog-bd {
    padding-top: 88px
}

.llh-ui-dialog-full .ui-dialog-cnt .ui-dialog-ft ~ .ui-dialog-bd {
    padding-bottom: 62px
}

.llh-order-coupon li {
    background-color: #bca06f;
    color: #fff;
    padding: 17px 0;
    text-align: center;
    border-radius: 5px;
    margin: 0 10px 15px;
    position: relative;
    overflow: hidden
}

.llh-order-coupon li p {
    font-size: 13px;
    margin-top: 10px
}

.llh-order-coupon li h1 {
    font-size: 27px
}

.llh-order-coupon li>i {
    position: absolute;
    top: 6px;
    right: 6px;
    color: #fff;
    font-size: 15px
}

.llh-order-coupon li .llh-order-recommend,.llh-order-coupon li .llh-order-notvisible {
    height: 18px;
    line-height: 18px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    padding: 0 50px;
    font-size: 12px
}

.llh-order-coupon li .llh-order-recommend {
    background-color: #000;
    transform-origin: 39% 287%
}

.llh-order-coupon li .llh-order-notvisible {
    background-color: #9b9b9b;
    transform-origin: 36% 346%
}

.llh-order-coupon li .llh-emptydesc {
    margin-top: 20px
}

.llh-progress {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    margin: 20px 20px 0
}

.llh-progress>div {
    margin-left: 15px;
    height: 12px;
    background-color: #7c5e2b;
    border-radius: 1.5rem;
    -webkit-box-flex: 1
}

.llh-progress>div>span {
    width: 50%;
    background-color: #fff;
    height: 100%;
    -webkit-box-align: start;
    display: -webkit-box;
    border-radius: 1.5rem
}

.llh-black-dialog .ui-dialog-cnt {
    background-color: rgba(0,0,0,0.85)
}

.llh-black-dialog .ui-dialog-cnt .ui-dialog-bd {
    padding: 10px 22px
}

.input-group .input-group-addon,.input-group .input-group-control {
    display: table-cell
}

.input-group {
    display: inline-table;
    vertical-align: middle;
    border-radius: 2px;
    border: 1px solid #c9c9c9;
    line-height: initial
}

.input-group .input-group-addon {
    font-size: 20px;
    font-weight: 200;
    color: #b4b4b4;
    text-align: center;
    vertical-align: text-top;
    background-color: #fbfbfb;
    width: 26px;
    line-height: initial
}

.input-group .input-group-addon:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.input-group .input-group-addon:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.input-group .input-group-control {
    height: 30px;
    width: 35px;
    text-align: center;
    outline: none;
    border: none;
    border-radius: 0;
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    line-height: initial
}

.popup-tips-mod {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 70px;
    z-index: 101
}

.popup-tips-mod h4 {
    font-size: 14px;
    padding-right: 26px
}

.popup-tips-mod .present {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    line-height: 24px;
    text-align: center;
    background: #C8C8C8;
    border-radius: 3px;
    display: block;
    color: #fff
}

.popup-tips-mod .box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%
}

.popup-tips-mod .arrow {
    position: absolute;
    left: 30px;
    top: -1px;
    width: 28px;
    height: 26px;
    overflow: hidden;
    display: block
}

.popup-tips-mod .arrow .arrow-bottom {
    position: absolute;
    left: 0;
    top: -18px;
    width: 26px;
    height: 26px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2),0px 0px 2px 0px rgba(0,0,0,0.2);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.popup-tips-mod .ui-list {
    margin: 0 10px;
    width: auto;
    border-radius: 4px;
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.15),0px 2px 4px 0px rgba(0,0,0,0.16);
    padding-top: 16px
}

.popup-tips-mod .ui-list li {
    margin: 0 28px;
    padding: 14px 0
}

.popup-tips-mod .ui-list li .ui-form-item {
    height: 24px;
    line-height: 24px;
    padding: 0
}

.popup-tips-mod .ui-list .ui-form-item .ui-icon-close {
    top: -8px;
    right: -10px;
    font-size: 45px;
    color: #ccc
}

.popup-tips-mod .list-text .c-text {
    position: absolute;
    right: 0;
    top: 0
}

.popup-tips-mod .list-text .form-free {
    color: #9B9B9B
}

.popup-tips-mod .list-text .form-free del {
    margin-left: 5px
}

.popup-tips-mod .list-text .form-free .c-text {
    color: #FF5F5F
}

.order-fixed-mod .ft-order-cart {
    padding: 10px 0 10px 10px
}

.order-fixed-mod .ft-order-cart .box-cart {
    float: left;
    width: 42px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 4px
}

.order-fixed-mod .ft-order-cart .box-cart .wrap {
    position: relative;
    width: 100%;
    height: 100%
}

.order-fixed-mod .ft-order-cart .box-cart .llh-icon-gouwuche {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    font-size: 18px;
    color: #e25550;
    margin: auto
}

.order-fixed-mod .ft-order-cart .box-cart .order-num-tips {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -18px;
    margin-left: 2px;
    min-width: 16px;
    line-height: 16px;
    height: 16px;
    background: #E25550;
    border-radius: 50%;
    color: #fff;
    text-align: center
}

.order-fixed-mod .ft-order-cart .total-cart {
    margin-left: 54px
}

.order-fixed-mod .ft-order-cart .total-cart .money {
    line-height: 26px;
    font-size: 17px
}

.order-fixed-mod .ui-col-2 {
    text-align: right
}

.order-fixed-mod .ui-col-2 .ui-btn-lg {
    width: 102px;
    height: 32px;
    line-height: 32px;
    margin: 16px 14px 16px 0;
    display: inline-block
}

.mc-ta-lock {
    -webkit-touch-action: none;
    touch-action: none
}

.mc-persp,.mc-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0
}

.mc-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99998;
    pointer-events: none;
    opacity: 0;
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    transition: all .25s ease
}

.mc-wrap.show {
    opacity: 1;
    pointer-events: auto
}

.mc-wrap.show .mc-container {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.mc-mask {
    z-index: 1;
    background: rgba(0,0,0,0.7)
}

.mc-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    font-size: 12px;
    text-shadow: none;
    background-color: #fff;
    box-sizing: border-box;
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-transform: translate3d(0, 100%, 0);
    -moz-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    -webkit-transition: all .25s ease;
    -moz-transition: all .25s ease;
    -ms-transition: all .25s ease;
    -o-transition: all .25s ease;
    transition: all .25s ease
}

.mc-container .mc-hd {
    position: relative
}

.mc-container .mc-hd a.close {
    position: absolute;
    right: 10px;
    top: 7px;
    padding: 5px;
    color: #9B9B9B
}

.mc-container .mc-hd .mc-hd-tt {
    height: 42px
}

.mc-container .mc-hd .mc-hd-tt h2 {
    line-height: 42px;
    padding-left: 10px;
    position: relative
}

.mc-container .mc-hd .mc-hd-tt h2 .tips-info {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    font-size: 12px
}

.mc-container .mc-bd {
    padding: 0 10px
}

.mc-handler {
    width: 100%;
    margin: 15px 0 20px;
    text-align: center
}

.mc-handler span {
    font-size: 18px;
    color: #E25550;
    margin: 0 10px 0 14px;
    vertical-align: middle
}

.mc-handler i {
    color: #CCCCCC;
    font-size: 12px;
    line-height: 20px;
    width: 20px;
    vertical-align: middle
}

.mc-week-wrap {
    display: -webkit-box;
    background: #F5F5F5;
    border-radius: 4.87px;
    height: 27px;
    font-size: 14px;
    margin-bottom: 10px
}

.mc-week-wrap>div {
    display: -webkit-box;
    -webkit-box-flex: 1;
    -webkit-box-pack: center;
    -webkit-box-align: center
}

.mc-week-wrap .mc-we {
    color: #E25550
}

.mc-day-row {
    display: -webkit-box;
    font-size: 15px
}

.mc-day-row>div {
    position: relative;
    display: -webkit-box;
    -webkit-box-flex: 1
}

.mc-day-row>div .mc-i {
    width: 100%;
    padding-top: 5px;
    display: -webkit-box;
    -webkit-box-pack: start;
    -webkit-box-orient: vertical;
    -webkit-box-align: center
}

.mc-day-row>div .mc-i>div {
    text-align: center
}

.mc-day-row>div .mc-i .tag {
    width: 32px;
    color: #E25550;
    display: block;
    text-align: center
}

.mc-day-row .mc-day-wrap {
    color: #9B9B9B
}

.mc-day-row .mc-day-wrap.mc-day-enable {
    color: #333333;
    cursor: pointer
}

.mc-day-row .mc-day-wrap-null {
    color: transparent
}

.mc-mode-tag .mc-day-row {
    border-bottom: 1px solid #e0e0e0
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .mc-mode-tag .mc-day-row {
        border-bottom:none;
        background-repeat: repeat-x;
        -webkit-background-size: 100% 1px;
        background-position: left bottom;
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #e0e0e0))
    }
}

.mc-mode-tag .mc-i {
    -webkit-box-align: start
}

.mc-mode-tag .mc-i .mc-day {
    width: 54px;
    padding-top: 5px;
    box-sizing: border-box
}

.mc-mode-tag .llh-riqixuanzeyou .mc-day,.mc-mode-tag .llh-riqixuanzezuo .mc-day,.mc-mode-tag .llh-riqixuanzeyou-home .mc-day {
    position: relative;
    z-index: 2;
    color: #fff;
    top: -32px
}

.mc-mode-tag .llh-riqixuanzeyou .mc-i:before,.mc-mode-tag .llh-riqixuanzezuo .mc-i:before,.mc-mode-tag .llh-riqixuanzeyou-home .mc-i:before {
    font-size: 32px;
    font-family: "llh-iconfont" !important;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: #E25550;
    content: '\e652'
}

.mc-mode-tag .llh-riqixuanzeyou-home .mc-i:before {
    color: #C8C8C8
}

.mc-mode-tag .llh-riqixuanzezuo .mc-i:before {
    content: '\e653'
}

.mc-mode-normal .mc-day-row>div.selected .mc-day {
    background-color: #E25550;
    color: #fff;
    border-radius: 50%
}

.mc-mode-normal .mc-day-row>div .mc-i {
    -webkit-box-align: center
}

.mc-mode-normal .mc-day-row>div .mc-i .mc-day {
    height: 32px;
    width: 32px;
    line-height: 32px;
    border-radius: 50%
}

.llh-trave-header {
    background-color: #fff;
    padding: 15px 0 5px;
    background-image: -webkit-gradient(linear, 50% 0, 0 100%, from(transparent), color-stop(0.5, transparent), color-stop(0.5, #eee), to(#eee)),-webkit-gradient(linear, 50% 0, 100% 100%, from(transparent), color-stop(0.5, transparent), color-stop(0.5, #eee), to(#eee));
    background-size: 10px 5px;
    background-repeat: repeat-x;
    background-position: 0 100%
}

.llh-trave-header>div {
    padding: 0 10px
}

.llh-trave-header .llh-trave-title h1 {
    font-size: 18px;
    margin-bottom: 10px
}

.llh-trave-header .llh-trave-title .llh-title-sub {
    font-size: 13px
}

.llh-trave-header .llh-trave-price p {
    padding: 10px 0
}

.llh-trave-header .ui-list li {
    -webkit-box-orient: vertical;
    -webkit-box-align: start
}

.llh-trave-header .ui-list li .llh-promotion-wrap:not(:last-child) {
    margin-bottom: 10px
}

.llh-slider-desc {
    position: absolute;
    display: -webkit-box;
    -webkit-box-pack: justify;
    width: 100%;
    bottom: 10px;
    left: 0;
    padding: 0 10px;
    font-size: 12px;
    color: #fff;
    box-sizing: border-box
}

.llh-trave-address-plans {
    margin: 15px 0
}

.llh-trave-timepeople {
    position: relative
}

.llh-trave-timepeople .llh-item-box-body {
    padding: 0
}

.llh-trave-timepeople .llh-item-box-body>div:not(.ui-btn-wrap) {
    padding: 10px;
    font-size: 0
}

.llh-trave-timepeople .llh-item-box-body>div:not(.ui-btn-wrap) i {
    font-size: 18px;
    color: #e25550;
    width: 22px;
    line-height: 20px;
    vertical-align: middle;
    margin-right: 15px
}

.llh-trave-timepeople .llh-item-box-body>div:not(.ui-btn-wrap)>div {
    font-size: 13px;
    display: inline-block;
    vertical-align: middle
}

.llh-trave-timepeople .llh-item-box-body>div:not(.ui-btn-wrap) .llh-trave-people-info span {
    margin-right: 5px
}

.llh-trave-timepeople .llh-item-box-body .ui-btn-wrap {
    position: absolute;
    top: 50%;
    right: 0;
    background: #fff;
    padding-right: 10px;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
}

.llh-trave-timepeople .llh-item-box-body .ui-btn-wrap .ui-btn {
    width: 68px;
    height: 28px;
    line-height: 28px
}

.llh-trave-plane .llh-item-box-body li {
    margin-left: 0;
    padding-right: 0;
    padding-bottom: 0
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info {
    width: 100%
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>p span {
    margin-right: 10px
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>p i {
    font-size: 18px;
    color: #e25550;
    width: 22px;
    line-height: 20px;
    vertical-align: middle;
    margin-right: 15px;
    margin-right: 10px
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div {
    position: relative;
    overflow: hidden;
    padding: 15px 0
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-out,.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-in {
    position: relative;
    float: left;
    background-color: #fff;
    padding-right: 10px;
    text-align: left;
    z-index: 10
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-out p,.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-in p {
    font-size: 18px
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-out p:nth-child(2),.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-in p:nth-child(2) {
    font-size: 12px;
    margin: 5px 0
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-out .ui-badge-warning,.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-in .ui-badge-warning {
    position: absolute;
    bottom: 3px;
    left: 0;
    transform: translate3d(-75%, 0, 0)
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-in {
    text-align: right;
    float: right;
    padding-right: 0;
    padding-left: 10px
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-icon {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-icon:before,.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-icon:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 9;
    display: inline-block;
    width: 50%;
    height: 1px;
    background-color: #e0e0e0
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-icon:after {
    left: initial;
    right: 0
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-icon i {
    position: relative;
    background-color: #fff;
    padding: 0 10px;
    z-index: 10;
    font-size: 24px;
    color: #c3c3c3
}

.llh-trave-plane .llh-item-box-body .llh-trave-flight-info>div .llh-flight-icon span {
    position: absolute;
    bottom: -17px;
    left: 50%;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0)
}

.llh-trave-plane .llh-trave-plane-footer {
    text-align: center;
    height: 47px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center
}

.llh-trave-plane .llh-trave-plane-footer .ui-btn {
    width: 110px
}

.llh-trave-plane .llh-trave-plane-footer .ui-btn i {
    font-size: 18px;
    line-height: 28px;
    vertical-align: top;
    color: #fff
}

.trave-plane-textTips {
    line-height: 20px;
    color: #9b9b9b;
    text-align: center;
    padding-bottom: 20px
}

.llh-trave-hotel .llh-trave-hotel-info li {
    margin-bottom: 12px
}

.llh-trave-hotel .llh-trave-hotel-info li>div {
    margin-bottom: 8px
}

.llh-trave-hotel .llh-trave-hotel-info li>div:first-child {
    margin-top: 8px
}

.llh-trave-hotel .llh-trave-hotel-info .llh-hotel-time .ui-badge {
    margin-right: 10px
}

.llh-trave-hotel .llh-trave-hotel-info .llh-hotel-time span:not(:last-child) {
    margin-left: 5px;
    margin-right: 10px
}

.llh-trave-hotel .llh-trave-hotel-info .llh-hotel-namestar .llh-hotel-name {
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle
}

.llh-trave-hotel .llh-trave-hotel-info .llh-hotel-namestar .llh-hotel-star {
    font-size: 0;
    display: inline-block
}

.llh-trave-hotel .llh-trave-hotel-info .llh-hotel-namestar .llh-hotel-star i.ui-icon-star-fill {
    font-size: 12px;
    color: #f5a623;
    margin-right: 2px;
    line-height: 12px
}

.llh-trave-hotel .llh-trave-hotel-info .llh-hotel-img {
    width: 100%;
    padding-top: 40%;
    overflow: hidden;
    background-position: center;
    background-size: cover
}

.llh-trave-hotel .llh-trave-hotel-info .llh-trave-hotel-txtdesc {
    margin-bottom: 8px
}

.llh-trave-hotel .llh-trave-hotel-info .llh-trave-hotel-txtdesc i {
    font-size: 12px;
    color: #e25550;
    line-height: 16px;
    float: left
}

.llh-trave-hotel .llh-trave-hotel-info .llh-trave-hotel-txtdesc p {
    line-height: 16px;
    margin-left: 16px
}

.llh-trave-hotel .llh-trave-hotel-info .llh-trave-hotel-handlebtn {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin-bottom: 5px;
    margin-top: 18px
}

.llh-trave-hotel .llh-trave-hotal-footer {
    text-align: center;
    height: 47px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center
}

.llh-trave-hotel .llh-trave-hotal-footer .ui-btn {
    width: 110px
}

.llh-trave-hotel .llh-trave-hotal-footer .ui-btn i {
    font-size: 18px;
    line-height: 28px;
    vertical-align: top;
    color: #fff
}

.llh-play-desc {
    padding: 15px 0
}

.llh-play-desc .llh-play-img {
    margin-bottom: 10px
}

.llh-play-desc .llh-play-img li:nth-child(even) {
    margin-left: 5px
}

.llh-play-desc .llh-play-img li span {
    display: block;
    width: 100%;
    padding-top: 60.6%;
    overflow: hidden;
    background-position: center;
    background-size: cover
}

.play-text-more {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 355px;
    height: 88px;
    background-image: linear-gradient(to bottom, rgba(238,238,238,0) 0, #fff 100%)
}

.play-text-more .btn-more {
    display: block;
    margin-top: 54px;
    line-height: 28px;
    font-size: 14px;
    color: #e25550;
    text-align: center
}

.llh-trave-footer {
    padding: 0 10px
}

.llh-trave-footer li {
    line-height: 64px
}

.llh-trave-footer li:last-child {
    text-align: right
}

.llh-trave-footer .ui-btn-lg {
    border-radius: 2px;
    width: 110px;
    display: inline-block;
    vertical-align: middle
}

.llh-trave-footer .ui-info-outline {
    font-size: 12px;
    line-height: initial;
    width: 70px;
    margin-right: 5px
}

.llh-trave-footer .ui-info-outline i {
    font-size: 17px;
    line-height: 20px;
    display: block
}

.llh-trave-footer .llh-trave-footer-total {
    color: #e25550;
    height: 64px;
    line-height: 64px;
    text-align: left;
    -webkit-box-align: start;
    box-align: start
}

.llh-trave-footer .llh-trave-footer-total span {
    display: block;
    line-height: initial
}

.llh-trave-footer .llh-trave-footer-total span:first-child {
    font-size: 17px;
    margin-bottom: 5px
}

#plane-page .ui-header {
    text-align: center;
    line-height: initial
}

#plane-page .ui-header h1 {
    display: inline-block;
    font-size: 17px;
    line-height: 30px
}

#plane-page .ui-header h6 {
    line-height: 12px
}

#hotel-page .ui-header {
    text-align: center;
    line-height: initial
}

#hotel-page .ui-header h1 {
    display: inline-block;
    font-size: 17px;
    line-height: 30px
}

#hotel-page .ui-header h6 {
    line-height: 12px
}

#timepeople-page .llh-item-box-body {
    padding-top: 0
}

#timepeople-page .llh-item-box-body .llh-timeout-input {
    position: relative;
    width: 100%;
    height: 32px;
    line-height: 32px;
    background-image: linear-gradient(-180deg, #fff 0%, #F3F3F3 100%);
    border: 1px solid #DFDFDF;
    border-radius: 2px;
    overflow: hidden
}

#timepeople-page .llh-item-box-body .llh-timeout-input input {
    width: 100%;
    height: 100%;
    padding-left: 40px;
    outline: none;
    border: none;
    background: none;
    box-sizing: border-box
}

#timepeople-page .llh-item-box-body .llh-timeout-input i {
    position: absolute;
    font-size: 16px;
    color: #e25550;
    line-height: 16px;
    top: 50%;
    -webkit-transform: translate3d(10px, -50%, 0);
    transform: translate3d(10px, -50%, 0)
}

#timepeople-page .llh-item-box-body li:nth-child(even) {
    padding-right: 0
}

#timepeople-page .llh-item-box-body li span.ui-txt-info {
    margin-left: 10px
}

#timepeople-page .llh-item-box-body li em {
    margin-left: 20px
}

#timepeople-page .ui-footer {
    height: 47px;
    padding-right: 10px;
    -webkit-box-align: end
}

#timepeople-page .ui-footer .ui-btn {
    width: 92px
}

.poi-list-text {
    line-height: 44px;
    padding-left: 20px;
    font-size: 14px
}

.llh-addition {
    background: #fff
}

.llh-addition .ui-list {
    overflow: hidden
}

.llh-addition .ui-list li {
    margin: 0 10px
}

.llh-addition .addition-more {
    text-align: center;
    line-height: 50px;
    font-size: 13px;
    margin: 0 10px
}

.llh-addition .ui-btn {
    width: 65px
}

.llh-addition .ui-list-info {
    line-height: 18px;
    padding-top: 5px;
    padding-bottom: 5px
}

.llh-addition .rmb {
    line-height: 16px
}

.llh-next-footer {
    height: 48px
}

.llh-next-footer .total-wrap li {
    line-height: 48px
}

.llh-next-footer .total-wrap .txt .money {
    margin-left: 10px;
    font-size: 17px;
    display: inline-block;
    vertical-align: top
}

.llh-next-footer .total-wrap .ui-btn-lg {
    width: 92px;
    height: 32px;
    line-height: 32px
}

.llh-ticket-tab li {
    display: inline-block;
    margin: 0 5px 5px 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 2px;
    background: #fff;
    position: relative;
    padding: 0 15px !important;
    overflow: hidden
}

.llh-ticket-tab li.active {
    border-color: #e25550
}

.llh-ticket-tab li.active i {
    display: block
}

.llh-ticket-tab li i {
    display: none;
    position: absolute;
    right: -1px;
    bottom: -9px;
    color: #e25550
}
</style>

<script>

</script>