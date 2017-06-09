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
        var 滿福 = {lat: 24.990531,lng: 121.573829};
        var 華越 = {lat: 24.986972,lng:121.578663}
        var 越南大食館 = {lat: 24.987102,lng:121.568384}
        var 西貢 = {lat: 24.999856,lng:121.555121}
        var 僑緣 = {lat: 24.999262,lng:121.555791}
        var 大東海 = {lat: 24.983877,lng:121.561730}
        var 順化 = {lat: 24.985032,lng:121.562611}
        var 無名小店 = {lat: 24.982199,lng:121.558811}
        var 景美越南小吃 = {lat: 24.990548,lng:121.542094}
        var map1 = new google.maps.Map(document.getElementById('map1'), {
          zoom: 13,
          center: 西貢
        });
        var marker = new google.maps.Marker({
          position: 滿福,
          map: map1,
        });
        var marker = new google.maps.Marker({
          position: 華越,
          map: map1
        });
        var marker = new google.maps.Marker({
          position: 越南大食館,
          map: map1
        });
        var marker = new google.maps.Marker({
          position: 西貢,
          map: map1
        });
        var marker = new google.maps.Marker({
          position: 僑緣,
          map: map1
        });
        var marker = new google.maps.Marker({
          position: 大東海,
          map: map1
        });
        var marker = new google.maps.Marker({
          position: 順化,
          map: map1
        });
        var marker = new google.maps.Marker({
          position: 無名小店,
          map: map1
        });
        var marker = new google.maps.Marker({
          position: 景美越南小吃,
          map: map1
        });
      }
