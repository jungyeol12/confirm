$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown("slow");
    },
    function() {
        $(".sub-menu").stop().slideUp("fast");
    }
)

var slide = $(".slide div");
var index = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 2000);

function autoslide() {
    $(slide[index]).stop().animate({
        "top": "-100%"
    }, 1000, function() {
        $(this).css({"top": "100%"});
    });
    index++;
    if(index > size) index = 0;
    $(slide[index]).stop().animate({
        "top": "0"
    },1000);
}


$(".openPop").click(
    function() {
        $("#popup").show();
    }
)

$(".closePop").click(
    function() {
        $("#popup").hide();
    }
)