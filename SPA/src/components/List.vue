<template>
    <router-link :to="{path: 'detail'}">
        <div class="llh-classical-banner" :data-pId="ProductId">
            
            <span class="lazy" :style="{backgroundImage:'url('+thumb+')'}"></span>
            <div class="ui-badge">{{label}}</div>
            <div class="llh-classical-banner-title">
                <h3>{{prodName}}</h3>
                <span><em>RMB </em><em>{{minPrice/100}}</em><em> 起</em></span>
            </div>
            
        </div> 
    </router-link>

</template>

<script>
export default {
  props: ['ProductId', 'thumb', 'label','prodName', 'referDate', 'minPrice']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
