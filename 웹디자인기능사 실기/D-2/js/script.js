$(".menu ul li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow");
    },
    function() {
        $(this).children("ul").stop().slideUp("fast");
    }
)

// count 변수
let currentIndex = 0;
  $(".slide-wrap").append($(".slider").first().clone(true)); // .slide-wrap에 .slider 첫 번째 슬라이드 클론 추가..?

  setInterval(() => {
    // 슬라이드 애니메이션
    currentIndex++;
    $(".slide-wrap").animate({ marginLeft: -100 * currentIndex + "%" }, 600);

    // 슬라이드 초기화
    if (currentIndex == 3) {
      setTimeout(() => {
        $(".slide-wrap").animate({ marginLeft: 0 }, 0);
        currentIndex = 0;
      }, 700);
    }
  }, 3000); // 3000ms(3초)


$(".popup-open").on("click", function() {
    $("#popup").css("display", "flex");
});
$(".popup-close").on("click", function() {
    $("#popup").css("display", "none");
});