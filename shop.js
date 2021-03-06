function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var aid = getParameterByName('aid');
//console.log(aid)

var app = new Vue({
    el: "#app",

    data: {
        activities: {}
    },

    methods: {
    },
    created: function created() {
        var vm = this;
        shopRef.on("value", function (dataSnapshot) {
            dataSnapshot.forEach(function (msgSnapshot) {

                // setup login status 
                var msg = msgSnapshot.val()
                var t = msg.title;
                //console.log(msg)
                //console.log(msgSnapshot.key)
                if(t === aid){
                    vm.$set(vm.activities, msgSnapshot.key, msg)
                }                
            })
        })
        shopRef.child(aid).child("相關美食").on("value", function (dataSnapshot) {
            var msg = dataSnapshot.val();
            //console.log(msg);
            vm.activity = msg;
        })
    }
})