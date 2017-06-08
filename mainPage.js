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

if(aid === "特色美食"){
    $("#mapName").removeClass("active")
    $("#foodName").addClass("active")
    $("#map").removeClass("active")
    $("#food").addClass("active")
}

if(aid === "推薦店家"){
    $("#mapName").removeClass("active")
    $("#shopName").addClass("active")
    $("#map").removeClass("active")
    $('#recommend').addClass("active")
}

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
