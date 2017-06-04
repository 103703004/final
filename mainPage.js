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

function initMap() {
        var uluru = {lat: 24.987090,lng: 121.568844};
        var a = {lat: 24.986943,lng:121.579404}
        var map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map1,
        });
        var marker = new google.maps.Marker({
          position: a,
          map: map1
        });
      }
