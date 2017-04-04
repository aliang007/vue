var vm = new Vue({
    el: ".container",
    data: {
        limitNum: 3,
        currentIndex: 0,
        addressList: [],
        isNextFlag: false,
        loadMoreFlag: false,
        shippingMethod: 1,
    },
    mounted: function() {
        this.$nextTick(function() {
            this.getAddressList();
        });
    },
    computed: {
        filterAddress: function() {
            return this.addressList.slice(0, this.limitNum);
        }
    },
    methods: {
        getAddressList: function() {
            this.$http.get("data/address.json").then((response) => {
                var res = JSON.parse(response.data);
                if (res.status == "0") {
                    this.addressList = res.result;
                }
            })
        },
        setAddressDefault: function(id) {
            this.addressList.forEach(function(item, index) {
                if (item.addressId == id) {
                    item.isDefault = true;
                } else {
                    item.isDefault = false;
                }

            });

        }
    }
});
