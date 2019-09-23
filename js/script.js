$(function () {
    // jumpボタンをクリックするとトップに移動
    $(".jump-box").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    })

    // トップの方にスクロールするとボタンが消える
    $(window).scroll(function () {
        var target = $(".seasonal-menu").offset().top - 500;
        var scroll = $(window).scrollTop();
        if (scroll < target) {
            $(".jump-box").fadeOut(200);
        } else {
            $(".jump-box").fadeIn(200);
        }
    })




});