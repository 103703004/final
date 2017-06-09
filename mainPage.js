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

if (aid === "特色美食") {
    $("#mapName").removeClass("active")
    $("#foodName").addClass("active")
    $("#map").removeClass("active")
    $("#food").addClass("active")
}

if (aid === "推薦店家") {
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
    var 滿福 = { lat: 24.990531, lng: 121.573829 };
    var 華越 = { lat: 24.986972, lng: 121.578663 }
    var 越南大食館 = { lat: 24.987102, lng: 121.568384 }
    var 西貢 = { lat: 24.999856, lng: 121.555121 }
    var 僑緣 = { lat: 24.999262, lng: 121.555791 }
    var 大東海 = { lat: 24.983877, lng: 121.561730 }
    var 順化 = { lat: 24.985032, lng: 121.562611 }
    var 無名小店 = { lat: 24.982199, lng: 121.558811 }
    var 景美越南小吃 = { lat: 24.990548, lng: 121.542094 }
    var map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 13,
        center: 西貢
    });
    var infoWindow = new google.maps.InfoWindow;
    var marker1 = new google.maps.Marker({
        position: 滿福,
        map: map1,
    });
    marker1.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "滿福台越小館"
        infowincontent.href = "shop.html?aid=滿福台越小館"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker1);
    });
    var marker2 = new google.maps.Marker({
        position: 華越,
        map: map1
    });
    marker2.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "華越美食"
        infowincontent.href = "shop.html?aid=華越美食"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker2);
    });
    var marker3 = new google.maps.Marker({
        position: 越南大食館,
        map: map1
    });
    marker3.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "越南大食館"
        infowincontent.href = "shop.html?aid=越南大食館"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker3);
    });
    var marker4 = new google.maps.Marker({
        position: 西貢,
        map: map1
    });
    marker4.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "西貢越南美食"
        infowincontent.href = "shop.html?aid=西貢越南美食"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker4);
    });
    var marker5 = new google.maps.Marker({
        position: 僑緣,
        map: map1
    });
    marker5.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "僑緣越南美食"
        infowincontent.href = "shop.html?aid=僑緣越南美食"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker5);
    });
    var marker6 = new google.maps.Marker({
        position: 大東海,
        map: map1
    });
    marker6.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "大東海越南餐廳"
        infowincontent.href = "shop.html?aid=大東海越南餐廳"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker6);
    });
    var marker7 = new google.maps.Marker({
        position: 順化,
        map: map1
    });
    marker7.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "順化米線"
        infowincontent.href = "shop.html?aid=順化米線"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker7);
    });
    var marker8 = new google.maps.Marker({
        position: 無名小店,
        map: map1
    });
    marker8.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "道地越南小吃"
        infowincontent.href = "shop.html?aid=道地越南小吃"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker8);
    });
    var marker = new google.maps.Marker({
        position: 景美越南小吃,
        map: map1
    });
    marker.addListener('click', function () {
        var infowincontent = document.createElement('a');
        infowincontent.textContent = "景美越南小吃"
        infowincontent.href = "shop.html?aid=景美越南小吃"
        infoWindow.setContent(infowincontent);
        infoWindow.open(map1, marker);
    });

}
