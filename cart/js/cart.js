/**
 * Created by jacksoft on 16/10/22.
 */

var vm = new Vue({
    el: '#app',
    data: {
        productList: [],
        totalMoney: 0,
        checkAllFlag: false,
        delFlag: false,
        productIndex:0
    },
    mounted: function() {
        this.cartView();
    },
    filters: {
        formatMoney: function(value) {
            return '￥' + value.toFixed(2);
        }
    },
    methods: {	//类似reader
    	
    	// 获取数据初始化
        cartView: function() {
            this.$http.get("data/cartData.json").then(res => {
                var data = JSON.parse(res.body);
                this.productList = data.result.list;
            });
            
        },
        
        // 点击数量+-改版对应价格
        changeMoney: function(product, way) {
            if (way > 0) {
                product.productQuentity++;
            } else {
                product.productQuentity--;
                if (product.productQuentity < 1) {
                    product.productQuentity = 1;
                }
            };
            this.calcTotalMoney()
            
        },
        
        // 是否选中商品
        selectedProduct: function(item) {
            if (typeof item.checked == 'undefined') {

                // 全局注册
                // Vue.set(item, 'checked', true)

                // 局部注册变量
                this.$set(item, 'checked', true)

            } else {
                item.checked = !item.checked;

            }
            this.calcTotalMoney()
        },
        
        // 全选与取消全选
        checkAll: function(flag) {
            this.checkAllFlag = flag
                this.productList.forEach( (item,index)=> {
                    if (typeof item.checked == 'undefined') {
                        // 局部注册变量
                        this.$set(item, 'checked', this.checkAllFlag)

                    } else {
                        item.checked = this.checkAllFlag;

                    }
                });
            this.calcTotalMoney()
                
        },
        calcTotalMoney: function(){
        	this.totalMoney = 0;
        	this.productList.forEach( (item, index)=> {
				if (item.checked) {
					this.totalMoney += item.productPrice * item.productQuentity
				}
        	});
        },
        delProduct: function(index){
        	console.log(this.productIndex)
        	this.productList.splice(this.productIndex, 1);
        	this.delFlag = false;
            this.calcTotalMoney()
        	
        }
        

    }
});

Vue.filter('money', function(value, type) {
    return '￥' + value.toFixed(2) + type
})
