
<!-- Detail.vue -->
<template>
    <div class="detail">
      <section class="ui-container" id="ui-container">
          <div class="llh-tubiao llh-guding">
              <i class="llh-icon-youhuiquanfcopy3"></i>
              <!--首页icon-->
              <a href="/" class=""><i class="llh-icon-shouye hide"></i></a>
              <!--返回icon-->
              <i class="llh-icon-fanhui " onclick="history.back();"></i>
              <!--搜索icon-->
              <!--收藏icon-->
              <i class="llh-icon-20151209tubiaolianx"></i>
              <i class="llh-icon-wodeshoucang hide"></i>
          </div>
          <div class="ui-slider llh-ui-slider">
              <ul class="ui-slider-content" style="width: 500%; transition-property: transform; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                  <li class="current"><span style="background-image:url(http://p.lailaihui.com/LineBigPhoto/4561/3.jpg?imageView2/4/w/750/h/300|imageMogr2/interlace/1)"></span>
                  </li>
                  <li><span style="background-image:url(http://p.lailaihui.com/LineBigPhoto/4592/3.jpg?imageView2/4/w/750/h/300|imageMogr2/interlace/1)"></span>
                  </li>
                  <li><span style="background-image:url(http://p.lailaihui.com/LineBigPhoto/4455/4.jpg?imageView2/4/w/750/h/300|imageMogr2/interlace/1)"></span>
                  </li>
                  <li><span style="background-image:url(http://p.lailaihui.com/LineBigPhoto/4337/6.jpg?imageView2/4/w/750/h/300|imageMogr2/interlace/1)"></span>
                  </li>
                  <li><span style="background-image:url(http://p.lailaihui.com/LineBigPhoto/4292/5.jpg?imageView2/4/w/750/h/300|imageMogr2/interlace/1)"></span>
                  </li>
              </ul>
              <ul class="llh-slider-desc">
                  <li>
                      <i class="llh-icon-xiangji"></i>
                      <span class="llh-slider-active">1</span> /
                      <span class="llh-slider-num">5</span>
                  </li>
                  <li>产品编号&nbsp;<span>40119</span>
                      <input type="hidden" id="defDepaDate" value="">
                      <input type="hidden" id="defAdultNum" value="0">
                      <input type="hidden" id="defChildNum" value="0">
                      <input type="hidden" id="defBabyNum" value="0">
                      <input type="hidden" id="prodCode" value="40119">
                      <input type="hidden" id="destCode" value="changtandao">
                      <input type="hidden" id="isMultiple" value="false">
                      <input type="hidden" id="isUpgrade" value="false">
                      <input type="hidden" id="isHotelPackage" value="true">
                      <input type="hidden" id="isAirPackage" value="false">
                      <input type="hidden" id="hotelsJSON" value="[{'breakfastAmount':0,'childAddBedAmount':0,'childAmount':0,'childNoBedAmount':0,'havBreakfast':0,'hotelCode':'42111','isSelected':0,'nights':0,'package':false,'roomAmount':0,'roomNum':0,'singleAmount':0,'star':0}]">
                      <input type="hidden" id="airTicketCodesJSON" value="['39595']">
                      <input type="hidden" id="travelPlacesJSON" value="['长滩岛']">
                      <input type="hidden" id="isWXShare" value="false">
                  </li>
              </ul>
          </div>
          <div class="llh-trave-header">
              <div class="llh-trave-title">
                  <hgroup>
                      <div class="title-h1box">
                          <h1>北京-长滩岛6天4晚自由行</h1>
                          <div>
                              <label>来来爆款</label>
                              <label>人气好货</label>
                          </div>
                      </div>
                      <h6 class="ui-txt-info llh-title-sub">北京直飞不转机,太平洋宿雾航空。</h6>
                  </hgroup>
              </div>
              <div class="llh-trave-price">
                  <p class="ui-txt-highlight llh-fsize-title-lg">RMB <span class="llh-txt-s">4599</span> <span class="ui-txt-info llh-fsize-tips"> 起/人</span></p>
              </div>
              <!-- 活动 -->
              <section id="cur-activity"></section>
          </div>
          <div class="llh-trave-setting">
              <div class="llh-item-box llh-trave-address-plans">
                  <div class="llh-item-box-body">
                      <ul class="llh-item-box ui-row">
                          <li class="ui-col ui-col-33 ui-border-b">出发地</li>
                          <li class="ui-col ui-col-67 ui-border-b">
                              <select class="llh-select" name="" id="departureSelect">
                                  <option value="beijing" prodcode="40119" selected="">北京</option>
                                  <option value="shanghai" prodcode="42568">上海</option>
                              </select>
                          </li>
                          <li class="ui-col ui-col-33">套餐类型</li>
                          <li class="ui-col ui-col-67">
                              <select class="llh-select" name="" id="mealSelect">
                                  <option value="">北京-长滩岛6天4晚自由行</option>
                              </select>
                          </li>
                      </ul>
                  </div>
              </div>
              <!-- 当前出发日期与人数 -->
              <section id="cur-timepeople">
                  <div class="llh-item-box llh-trave-timepeople">
                      <div class="llh-item-box-body">
                          <div class="llh-trave-time ui-border-b">
                              <i class="ui-icon-calendar"></i>
                              <div>2017-04-12（周三）出发</div>
                          </div>
                          <div class="llh-trave-people">
                              <i class="llh-icon-renshu"></i>
                              <div class="llh-trave-people-info">
                                  <span class="llh-trave-adult">2成人</span>
                                  <span class="llh-trave-child ui-txt-info">0儿童</span>
                              </div>
                          </div>
                          <div class="ui-btn-wrap">
                              <button class="ui-btn ui-btn-danger" id="timepeople-btn">修改</button>
                          </div>
                          <div id="llh-shuomingM" style="display: none;">预订满<b class="llh-numP"></b>人，立享抢购价 RMB <b class="llh-moneyP"></b>/人</div>
                      </div>
                  </div>
              </section>
              <!-- 机票&酒店 -->
              <section id="cur-ticket">
                  <div class="llh-item-box llh-trave-plane">
                      <div class="llh-item-box-header ui-border-b">
                          <i class="llh-icon-hangban"></i>
                          <h2 class="1font-size-title-lg">
                              机票
                          </h2>
                          <span class="llh-item-warning ui-txt-info llh-tongzhi">
                                      <i class="ui-icon-info"></i><b>最终以出团通知为准,所有时间均为当地时间</b>
                                  </span>
                      </div>
                      <div class="llh-item-box-body ui-border-b">
                          <ul class="ui-list ui-list-text">
                              <li>
                                  <div class="llh-trave-flight-info">
                                      <p><span class="llh-flight-time">04/12</span><img src="/static/imgs/plane-icon/image5J.png" class="icon-plane"><span class="llh-flight-name">菲律宾宿雾航空 5J669</span>
                                      </p>
                                      <div>
                                          <div class="llh-flight-out">
                                              <p>北京</p>
                                              <p class="ui-txt-info llh-fsize-tips"></p>
                                              <p>05:15</p>
                                          </div>
                                          <div class="llh-flight-in">
                                              <p>卡立波</p>
                                              <p class="ui-txt-info llh-fsize-tips"></p>
                                              <p>10:10</p>
                                          </div>
                                          <div class="llh-flight-icon">
                                              <i class="llh-icon-hangbanf"></i>
                                              <span> 4:55     </span>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="llh-trave-flight-info">
                                      <p><span class="llh-flight-time">04/16</span><img src="/static/imgs/plane-icon/image5J.png" class="icon-plane"><span class="llh-flight-name">菲律宾宿雾航空 5J668</span>
                                      </p>
                                      <div>
                                          <div class="llh-flight-out">
                                              <p>卡立波</p>
                                              <p class="ui-txt-info llh-fsize-tips"></p>
                                              <p>23:40</p>
                                          </div>
                                          <div class="llh-flight-in">
                                              <p>北京</p>
                                              <p class="ui-txt-info llh-fsize-tips"></p>
                                              <p>04:15</p>
                                              <div class="ui-badge-warning">+1日</div>
                                          </div>
                                          <div class="llh-flight-icon">
                                              <i class="llh-icon-hangbanf"></i>
                                              <span> 4:55     </span>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          <a href="javascript:;" data-id="aid-0"><em>退改签&amp;预订限制</em></a>
                      </div>
                  </div>
                  <div class="llh-item-warning hide" id="gapDayTip">你的航班是隔夜航班，请留意你的酒店入住日期。</div>
              </section>
              <section id="cur-hotel">
                  <div class="llh-item-box llh-trave-hotel">
                      <div class="ui-border-b llh-trave-hotel-info">
                          <div class="llh-item-box-header ui-border-b">
                              <i class="llh-icon-jiudian"></i>
                              <h2 class="1font-size-title-lg">
                                  参考酒店
                              </h2>
                              <span class="llh-item-warning ui-txt-info llh-tongzhi">
                                  <i class="ui-icon-info"></i><b>最终以出团通知为准,所有时间均为当地时间</b>
                              </span>
                          </div>
                          <div class="llh-item-box-body" style="padding-bottom:1px;">
                              <ui>
                                  <li>
                                      <div class="llh-hotel-time">
                                          <div class="ui-badge">长滩岛</div>
                                          入住<span class="llh-hotel-time-in">04/12</span>离店<span class="llh-hotel-time-out">04/16</span>(<span class="llh-hotel-time-day">4</span>晚)
                                      </div>
                                      <div class="llh-hotel-namestar">
                                          <h2 class="llh-fsize-title llh-hotel-name hotel-detail-btn" data-id="hid-00">
                                              长滩岛阿兰达度假村</h2>
                                          <div class="llh-hotel-star">
                                              <i class="ui-icon-star-fill"></i><i class="ui-icon-star-fill"></i><i class="ui-icon-star-fill"></i><i class="ui-icon-star-fill"></i>
                                          </div>
                                      </div>
                                      <div class="ui-txt-info hotel-detail-btn" data-id="hid-00" style="margin-bottom: 12px;">
                                          Alta Vista De Boracay
                                      </div>
                                      <div class="llh-hotel-img lazy hotel-detail-btn" data-id="hid-00" data-original="http://p.lailaihui.com/36c1ba45-2b4c-4d82-a0ee-51cd483f365a.png"></div>
                                  </li>
                                  <li class="llh-trave-hotel-txtdesc">
                                      <i class="llh-icon-didian"></i>
                                      <p class="ui-txt-info">菲律宾, Barangay Yapak | Malay, Aklan, Aklan Province 5608 , Philippines</p>
                                  </li>
                                  <li class="llh-trave-hotel-txtdesc">
                                      <i class="llh-icon-xinxi"></i>
                                      <p class="ui-txt-info">1、入住时间：14:00起 &nbsp; 退房时间：12:00前 2、酒店座落在长滩岛著名的白色沙滩S1附近，占地8000平方米，是长滩岛上一处幽静的绿洲，可欣赏周围美景，酒店拥有无边泳池，和一个西式餐厅，那里是最适合欣赏夕阳和落日的地方 3、此酒店为参考，旺季会选择同级别酒店 4、此酒店房型为标准房型
                                      </p>
                                  </li>
                                  <li class="llh-trave-hotel-handlebtn">
                                      <a href="javascript:;" class="reserveRule-btn" data-id="hid-00"><em>预订政策</em></a>
                                      <a href="javascript:;" class="hotel-detail-btn" data-id="hid-00"><em>酒店详情</em></a>
                                  </li>
                              </ui>
                          </div>
                      </div>
                      <div class="llh-item-box-ul ui-border-b">
                          <div class="llh-item-box-header">
                              <i class="llh-icon-chuang"></i>
                              <h2 class="1font-size-title-lg">房间</h2>
                              <span class="llh-item-warning llh-fsize-title-lg">
                                          <em id="singleRoomAmount"></em>
                                      </span>
                          </div>
                          <div class="llh-item-box-body" style="padding-top: 0">
                              <ul class="ui-row">
                                  <li class="ui-col ui-col-33">房型数</li>
                                  <li class="ui-col ui-col-67">
                                      <select class="llh-select" name="" id="roomNum">
                                          <option value="1">1间</option>
                                          <option value="2">2间</option>
                                      </select>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="llh-trave-hotal-footer">
                          <button class="ui-btn ui-btn-danger" id="hotel-btn">
                              更多参考酒店
                          </button>
                      </div>
                  </div>
              </section>
              <div class="llh-accordion">
                  <input type="checkbox" id="cost-checkbox" checked="">
                  <label class="llh-accordion-header ui-border-b" for="cost-checkbox">
                      <i class="llh-icon-feiyongshuoming"></i>
                      <h2 class="1font-size-title-lg">费用说明</h2>
                  </label>
                  <div class="llh-accordion-body">
                      <div class="llh-play-desc" style="height: 200px;">
                          <p><strong>【费用包含】</strong></p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">1、机票：北京-长滩岛往返机票经济舱含税，每位客人免费行李托运额为15公斤（不含餐食，饮料，毛毯）；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">2、酒店：长滩岛4晚酒店双人标准间住宿（酒店入住时间为14:00、退房时间为中午12:00）；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">3、品种多样，营养美味的西式自助早餐；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">4、7*24小时<a href="http://www.lailaihui.com/" target="_blank">来来会</a>电话管家。<br>
              【备注】<br>
              由于是凌晨航班， 请客人务必于出发前一天前准备前往机场集合，办理乘机手续以免误机；<br>
              页面航班时刻仅供参考，具体航班时间请以最终出票时间为准；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">酒店为参考酒店，具体酒店以出团通知为准，此报价我司可能会安排同等级参考酒店外的其他同级酒店，请您谅解。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">【重要提示】<br>
              1、&nbsp;目前接到菲律宾领馆通知，<strong>所有入口岸的中国游客需携带本人身份证</strong>，儿童无身份证的携带户口本原件以备检查，因为新的签证纸上会打有身份证号码。因为此产品不包含签证，所以还需请客人携带好护照原件以及菲律宾另纸签证，前往机场。请务必携带！<br>
              2、此产品为特价产品，不退不换，请慎重购买！</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><strong>【费用不包含】</strong></span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">1、护照费，签证费；机场至酒店接送；<br>
              2、全程单房差：1200元起/人&nbsp;&nbsp;节假日单房差以实际支付价为准！（如客人单人报名，所产生单房差费用，需客人承担），0-2岁为怀抱婴儿，婴儿票价为1500元/人；<br>
              3、酒店服务人员小费及酒店内其它收费设施的使用费；<br>
              4、出入境的行李海关课税，超重行李的托运费、管理费等；<br>
              5、洗衣，理发，电话，饮料，烟酒，付费电视，行李搬运费等私人费用；<br>
              6、所含费用中未提到的其它费用；<br>
              7、因不可抗拒的客观原因和非我公司原因（如天灾、战争、罢工等）或航空公司航班延误或取消、领馆签证延误、报名人数不足、签证等特殊情况，我公司有权取消或变更行程，一切超出费用（如在外延期签证费、住、食及交通费、国家航空运价调整等）我公司有权追加差价；<br>
              8、在境外的一切个人消费；<br>
              9、国际段行李托运费及全程飞机餐食。<br>
              <strong>10、菲律宾机场税（750比索，约120元）、码头税、清洁税费以及接送船费全部自理。</strong></span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">菲律宾长滩岛自由行产品取消规则：</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">1、因本产品需提前预订舱位，限时特卖，故选购后即不退不换，谨慎购买；<br>
              2、如因护照，签证等问题导致客户无法按时出行，概不退款；<br>
              3、如遇部分航班紧张无票或酒店无房，我们会为您调换其他航班和酒店，确保您正常出行。&nbsp;</span></span>
                          </p>
                      </div>
                      <p class="play-text-more"> <span class="btn-more">查看更多</span> </p>
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
                          <p><strong>【预订须知】</strong></p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">1、预订成功后，请您于30分钟内付款，如没有及时付款订单将会自动取消；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">2、付款成功后，请您于将出行人的护照首页复印件发送至service@lailaihui.com；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">3、我们将会在出发前1-3天发送《出团通知书》到您的邮箱；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">4、产品页面所展示的航班时间及酒店仅为参考，最终航班及酒店请以《出团通知书》为准；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">5、本产品暂不接受18周岁以下单独出行的未成年人及70周岁以上老人报名预订。请确保出行人身体条件适合本次外出旅游度假，如出行人为孕妇或有心脏病、高血压、呼吸系统疾病等病史，请在征得医院专业医生同意后出行；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">6、本产品报价适用持有大陆居民身份证并持有因私护照的游客。如您持有其他国家或地区的护照，我司保留因此调整价格权利；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><strong>机票说明：</strong></span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">1、本产品所包含的机票是底价折扣机票，出票后不得改期、换人及退票；<br>
              2、本产品所包含的机票，每人可携带1件7KG随身行李或者1个手提包，有免费托运行李。<br>
              <strong>酒店说明：</strong><br>
              1、本产品价格基于2人成行入住双人标准间，如您需要入住单人间需要补缴单人房差，全程1600元/人起（节日单询）；<br>
              2、如单人报名参团出现自然单间，需由旅游者自行承担单间房差全程1600元/人起（节日单询）；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><strong>签证说明</strong>：</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">1、本产品不包含证件及签证服务，您可与机加酒产品一起预订附加签证服务；<br>
              2、如您没有选择附加的签证服务，请您确保出发时持有有效期在半年以上的护照并在出发前获得有效签证。因自行办理的证件、签证或签注原因造成无法出行，将由旅游者自行承担相关损失。</span></span>
                          </p>
                      </div>
                  </div>
              </div>
              <div class="llh-accordion">
                  <input type="checkbox" id="prodDesc-checkbox">
                  <label class="llh-accordion-header ui-border-b" for="prodDesc-checkbox">
                      <i class="llh-icon-chanpinshuoming"></i>
                      <h2 class="1font-size-title-lg">产品说明</h2>
                  </label>
                  <div class="llh-accordion-body">
                      <div class="llh-play-desc">
                          <p><strong>【出行提示】</strong>
                              <br>
                              <strong>行前准备 &nbsp;&nbsp;</strong>
                              <br> 马上要出发了，准备好了吗？
                              <br> 1、►护照 &nbsp;►签证 &nbsp;►外币 &nbsp;►《出团通知》
                              <br> 2、了解当地资讯，旅行也需要提前预习！
                              <br> 3、有了这些出行更方便，不要忘记准备呦！
                              <br> ►
                              <strong>小费：</strong>机场及酒店行李小费为自理
                              <br> ►
                              <strong>通讯设备：</strong>如果想随时随地查询资讯和与家人联络，还是要提前预订随身WIFI或购买当地电话卡。
                              <br> ►
                              <strong>货币：</strong>菲律宾货币是比索，和人民币的汇率是6.8PHP=1RMB。和美元的汇率是46.8PHP=1USD,菲律宾的汇率是很不稳定的；可在中国换好美元，到达当地换比索最为核算。</p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><strong>出入境</strong></span></span>
                          </p>
                          <p>1、<span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">请您于航班起飞前2.5小时到达机场办理登机以及出入境相关手续，若您从外阜出发，建议您提前一天抵达机场；</span></span>
                          </p>
                          <p>2、<span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">如若您选择的出行时间进入雨季，航班可能因为天气等原因受到影响，造成延误或取消，请您实时关注航班变化，与所乘航空公司密切沟通，保持信息畅通；</span></span>
                          </p>
                          <p>3、<span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">办理出入境手续时，请您携带本人护照原件，并在护照“注意事项”页（封底）“持照人签名”处签署本人姓名，否则北京及各国边防有权拒绝入境；</span></span>
                          </p>
                          <p>4、<span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">如果您是港澳台同胞不要忘记携带回乡证、护照，如果您是外籍人士，请您检查是否有回到中国的有效签证；</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><strong>酒店</strong></span></span>
                          </p>
                          <p>1、<span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">行程中所列酒店星级标准为当地酒店评定标准，酒店房间的面积比较小，空间有限；</span></span>
                          </p>
                          <p>2、<span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">根据国际惯例，酒店的入住时间为下午14：00之后，退房时间为中午12：00之前，请在入住时向酒店前台确认退房时间，如超时需支付附加费；</span></span>
                          </p>
                          <p>3、<span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">入住时，酒店可能会要求您支付一定押金或用信用卡担保，在您退房时若没有其他额外费用产生，酒店会退还给您押金；入住期间发生的其他费用请离店时到酒店前台支付，具体收费规定以酒店前台为准；</span></span>
                          </p>
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
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">菲律宾签证需要以下材料：</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">1、护照原件（护照有效期在半年以上）</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">2、每人2张2寸彩色白底免冠照片（近半年拍摄，不带眼镜）</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">3、身份证正反面复印件</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">4、在职证明</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">5、菲律宾签</span></span><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">证申请表</span></span>
                          </p>
                          <p><span style="color:#FF0000"><strong>需客人自行办理菲律宾个人旅游签证，或购买代办签证单项服务。<br>
              如购买代办签证服务最晚需出行前8个工作日将资料寄至指定地点。</strong></span></p>
                          <p><strong>您在选择好日期和出行人数后会生成订单，在订单下面会有签证单项和往返接送单项供您选择！</strong></p>
                      </div>
                  </div>
              </div>
              <div class="llh-accordion">
                  <input type="checkbox" id="play-checkbox">
                  <label class="llh-accordion-header ui-border-b" for="play-checkbox">
                      <i class="llh-icon-tuijianwanfa"></i>
                      <h2 class="1font-size-title-lg">推荐玩法</h2>
                  </label>
                  <div class="llh-accordion-body">
                      <div class="llh-play-desc">
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">第1天 北京-卡里波&nbsp;</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">请于凌晨2：00点到达首都国际机场2号航站楼。搭乘宿务太平洋航空公司航班飞往长滩岛。抵达长滩岛卡里波机场后，乘车开往码头（2小时）换乘螃蟹船（15分钟）前往美丽的长滩岛。抵达后前往酒店稍做休息，即可开始探索美丽的长滩岛。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">推荐玩法：【风帆出海看美丽的夕阳西下】</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><img alt="菲律宾-长滩岛" src="http://pic3.40017.cn/line/admin/2015/06/03/18/Txi4lY_450x250_00.jpg" style="height:145px; width:275px"></span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">长滩的落日是无与伦比的。需要注意的是，一定要提前准备好相机，落日稍纵即逝。一般在4点半-5点半左右。还有一定要占据有力地形哦。这时乘坐无动力风帆船，自由驶向大海，远处海天一色，徐徐的海风撩发。时间就在无声无息中慢慢流淌开来。在这里每天都可以看到有人扬帆出海，五颜六色的风帆船，不用引擎，整个船身随着海风吹徐的力量，船夫适时调整风帆，缓缓的依风向，控制着风帆船的前进，可以躺在风帆的两侧享受海风观看日落。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">第2天长滩岛 自由活动<br>
              推荐玩法：【长滩巡礼】从岛上繁华的商业区、热闹的D’mall购物中心走到星期五沙滩, 星期五海滩是长滩岛沙质细、柔、白、美沙滩地段，当地人称为“粉末沙”。漫步于牛乳湖的享受，您可悠闲躺在椰林沙滩下，享受海天一色、碧海蓝天的海景或漫步在美丽宁静的白色沙滩上，看夕阳西下，美不胜收。在沙滩上您还可以看到有名的礁岩——圣母焦岩，岩礁矗立在海中，当地的居民在上面供奉了一尊圣母像，所以取名圣母岩礁。退潮时候，甚至可以直接走到礁岩处，也因为圣母岩礁位于海中，能清楚眺望整片白沙海滩，以及清澈见底的海水，拥有绝佳的地理位置，是拍照留念的好地方。<br>
              <em>景点</em>&nbsp;圣母岩礁</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><img alt="菲律宾-长滩岛-圣母岩礁" src="http://pic3.40017.cn/line/admin/2014/10/22/14/sbKGtr_450x250_00.jpg" style="height:145px; width:275px"></span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">菲律宾长滩岛 有名的礁岩圣母岩礁（Willy's Rock），岩礁矗立在海中，当地的居民在上面供奉了一尊圣母像，所以取名圣母岩礁。礁石位于S1，退潮时候，甚至可以直接走到礁岩处，也因为圣母岩礁位于海中，能清楚眺望整片白沙海滩，以及清澈见底的海水，拥有绝佳的地理位置，是长滩白沙滩上的标志性景点，每天早上涨潮时礁石就到水里了，有看到人在它周围浮潜，等到退潮时就能爬上去拜拜上面的圣母像，日落时分人特别的多。像一道分界线，由它开始一侧热闹，一侧安静。 &nbsp;</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">第3天长滩岛&nbsp;</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">全天&nbsp;早餐后，全天自由活动。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">推荐玩法：【甜蜜芒果冰+出海】，来到美丽的海边，搭乘长滩特色的风帆船，由当地人掌舵，带您环游碧蓝的大海。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">第4天长滩岛&nbsp;</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">全天&nbsp;早餐后，全天自由活动。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">推荐玩法：【长滩浮潜】</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif"><img alt="长滩岛" src="http://pic3.40017.cn/line/admin/2015/05/20/10/g4rt2v_450x250_00.jpg" style="height:145px; width:275px"></span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">准备好浮潜工具，进入水中可以看到珊瑚铺满海底，透明的海水中，各种色彩斑斓品种多样的热带鱼，和它们一起遨游，感受自然的无拘无束，恣意放松。感兴趣的朋友自由活动时间可以前往鳄鱼岛，它如同一条超级大鳄鱼一样栩栩如生，很不错的浮潜地点哦。玩的项目价格比较适中，菲律宾人的服务态度很好，玩的项目质量一般还是有保障的。​</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">第5天 长滩岛-北京&nbsp;参考航班：卡里波-北京 5J668 2340/0415+1</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">您需要在12:00办理好房间的退房手续，随后即可自由活动。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">让我们向此美丽的岛屿说“我还会再来长滩”，随后我们依依不舍的乘螃蟹船（15分钟）到达码头后由专车送往长滩岛卡里波大机场（2个小时），搭乘宿务太平洋航空公司航班返回北京，结束愉快的旅程。</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">第6天 北京</span></span>
                          </p>
                          <p><span style="font-size:12px"><span style="font-family:arial,helvetica,sans-serif">抵达北京，返回温暖的家。</span></span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
</template>

<style scoped>
@import 'http://m.lailaihui.com/static/css/lib/frozen.css?_v=20160623171921';
@import 'http://m.lailaihui.com/static/css/trave-all.css?_v=20160623171921';
@import 'http://m.lailaihui.com/static/css/hotel-detail.css?_v=20160623171921';
    .detail {
      line-height: 30px;
      padding: 40px 100px;
    }
    #ui-container{display:none}
</style>
<script>

    import Hd from '../components/Header'

    export default {
        components: {
            Hd
        }
    }
</script>