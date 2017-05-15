$("#menuIcon").on("click",function(){
    //$("ul").css("display","none");
    $("ul").toggle();
    $(".foodNav").hide();
    $(".shopNav").hide();
});

$("#firstNav").on("click",function(){
    $(".foodNav").toggle();
});

$("#secNav").on("click",function(){
    $(".shopNav").toggle();
});