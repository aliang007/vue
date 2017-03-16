<template>
  <li class="llh-classical-banner" :data-pId="ProductId">
    <router-link to="/detail">
      <span class="lazy" v-bind:style="{backgroundImage:'url('+thumb+')'}"></span>
      <div class="ui-badge">{{label}}</div>
      <div class="llh-classical-banner-title">
          <h3>{{prodName}}</h3>
          <span><em>RMB </em><em>{{minPrice/100}}</em><em> 起</em></span>
      </div>
    </router-link>
  </li>
</template>

<script>



export default {
  props: ['ProductId', 'thumb', 'label','prodName', 'referDate', 'minPrice']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.llh-classical-wrap .llh-classical-banner a{
    position: relative;
    display: block;
    padding-top: 42.67%;
    margin-bottom: 10px
}



.llh-classical-wrap .llh-classical-banner a>span {
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center
}

.llh-classical-wrap .llh-classical-banner .ui-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    text-align: center;
    background: #e25550;
    color: #fff;
    font-size: 11px;
    vertical-align: middle;
    -webkit-border-radius: 2px;
    padding: 2px 3px;
}

.llh-classical-wrap .llh-classical-banner .llh-classical-banner-title {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    background-image: linear-gradient(-180deg, transparent 0%, #000 100%);
}
.llh-classical-wrap .llh-classical-banner .llh-classical-banner-title
 em{
  color: #e25550;
}
.llh-classical-wrap .llh-classical-banner .llh-classical-banner-title h3 {
    font-size: 18px;
    margin-bottom: 5px
}

.llh-classical-wrap .llh-classical-banner .llh-classical-banner-title span {
    font-size: 15px
}

</style>
