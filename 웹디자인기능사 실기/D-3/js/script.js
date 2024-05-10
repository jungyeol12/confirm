$(function () {
    // 슬라이드
    let nowIndex = 0

    setInterval(() => {
        let nextIndex = (nowIndex + 1) % 3
        console.log(nextIndex)

        $(".slider").eq(nowIndex).fadeOut(1200) // 슬라이더의 0번째
        $(".slider").eq(nextIndex).fadeIn(1200).css("display", "flex")

        nowIndex = nextIndex
    }, 1000)

    // 메뉴
    $(".menu > ul > li").on("mouseover", function () {
        $(".menu > ul > li > ul").stop().fadeIn()
        $(".menu-bg").stop().fadeIn()
    })
    $(".menu > ul > li").on("mouseout", function () {
        $(".menu > ul > li > ul").stop().fadeOut()
        $(".menu-bg").stop().fadeOut()
    })

    $(".tab ul li").on("click", function() {
        $(this).addClass("on").siblings().removeClass("on")
        $(".board-content div").eq($(this).index()).show()
            .siblings().hide()
    })

    // 팝업
    $(".popup-open").on("click", function() {
        $(".popup").css("display", "flex")
    })
    $(".popup-close").on("click", function() {
        $(".popup").css("display", "none")
    })
})