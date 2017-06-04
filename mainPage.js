var food1 = new Vue({
    el: "#food1",

    data: {
        activities: {}
    },

    methods: {

    },
    created: function created() {
        var vm = this;
        foodRef.on("value", function (dataSnapshot) {
            var msg = dataSnapshot.val();
            //console.log(msg);
            vm.activities = msg;
        })

    }
})

var shop1 = new Vue({
    el: "#shop1",

    data: {
        activities: {}
    },

    methods: {

    },
    created: function created() {
        var vm = this;
        shopRef.on("value", function (dataSnapshot) {
            var msg = dataSnapshot.val();
            //console.log(msg);
            vm.activities = msg;
        })

    }
})