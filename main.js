$("footer").on("click", function () {
    $(".contact").toggle();
    $("footer i").toggleClass('fa-caret-up fa-caret-down');
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAZexUoWbiC2J7RJf9qGAhvxkEnqDqqzfk",
    authDomain: "webfinal-e58b9.firebaseapp.com",
    databaseURL: "https://webfinal-e58b9.firebaseio.com",
    projectId: "webfinal-e58b9",
    storageBucket: "webfinal-e58b9.appspot.com",
    messagingSenderId: "198736994181"
};
firebase.initializeApp(config);

var db = firebase.database();
var rootRef = db.ref();
var foodRef = db.ref("food");
var shopRef = db.ref("shop")

var errorCallback = function (error) { alert(error.message) }

var appNav = new Vue({
    el: "#appNav",

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

var appNav1 = new Vue({
    el: "#appNav1",

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