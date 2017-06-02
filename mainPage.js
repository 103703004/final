var appNav = new Vue({
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