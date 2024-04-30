$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown("slow");
    },
    function() {
        $(".sub-menu").stop().slideUp("fast");
    }
);

var slide = $(".slider");
var index = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[index]).stop().animate({
        top: "300px"
    }, 1000, function() {
        $(this).css({top: "-300px"});
    });
    index++;
    if(index > size) {
        index = 0;
    }
    $(slide[index]).stop().animate({
        top: 0
    }, 1000);
}

$(".tab-news").click(function() {
    $(this).css({
        "border-bottom":"0",
        "background-color":"white"
    });
    $(".tab-gallery").css({
        "border-bottom":"1px solid #000",
        "background-color": "#888"
    });
    $(".gallery").hide();
    $(".news").show();
})

$(".tab-gallery").click(function() {
    $(this).css({
        "border-bottom":"0",
        "background-color":"white"
    });
    $(".tab-news").css({
        "border-bottom":"1px solid #000",
        "background-color": "#888"
    });
    $(".gallery").css({
        "display":"flex"
    });
    $(".news").hide();
    $(".gallery").show();
})