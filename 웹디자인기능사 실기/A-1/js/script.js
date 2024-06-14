$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown("slow");
    },
    function() {
        $(".sub-menu").stop().slideUp("fast");
    }
)

var slide = $(".slide img");
var index = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 2000);

function autoslide() {
    $(slide[index]).stop().animate({
        top: "-100%"
    }, 1000, function() {
        $(this).css({top: "100%"});
    });
    index++;
    if(index > size) index = 0;
    $(slide[index]).stop().animate({
        top: "0"
    }, 1000);
}

$(".popup-open").on("click", function() {
    $("#popup").css("display", "flex");
});
$(".popup-close").on("click", function() {
    $("#popup").css("display", "none");
});

$(".tab ul li:first-child").click(
    function() {
        $(this).addClass("on");
        $(".tab ul li:last-child").removeClass("on");

        $(".notice").show();
        $(".gallery").hide();
    }
)

$(".tab ul li:last-child").click(
    function() {
        $(this).addClass("on");
        $(".tab ul li:first-child").removeClass("on");

        $(".notice").hide();
        $(".gallery").show();
    }
)