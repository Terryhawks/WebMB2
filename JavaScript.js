// JS Menu
var menuButton = $(".menu-button");
var menu = $("nav .menu ul");

function clickMenu() {
    menuButton.click(function () {
        menu.toggle();
    })
    menu.click(function () {
        menu.toggle();
    })
}

$(document).ready(function () {
    var width = $(window).width()
    if (width < 990) {
        clickMenu();
    }
})

// Check Width
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block")
    } else {
        menu.css("display", "none")
    }
    clickMenu();
})

//Scroll FX
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("white")
            $("nav .img.black").show
            $("nav .img.white").hide
        } else {
            $("nav").addClass("black")
            $("nav .img.black").hide
            $("nav .img.white").show
        }
    })
})