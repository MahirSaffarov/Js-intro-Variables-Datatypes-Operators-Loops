$(document).ready(function () {
    $("#topCenter .left .iconBar i").click(function () {
        $(".sidebar").animate({ left: '280px' });
        $(this).data('clicked', true);
    });

    $(".sidebar .close i").click(function () {
        $(".sidebar").animate({ left: '-280px' });
        $(this).data('clicked', true);
    });

    // $(window).resize(function () {
    //     if ($(window).width() > 991) {
    //         $(".sidebar").animate({ left: '-280px' });
    //     }
    //     else if ($("#topCenter .left .iconBar i").data('clicked') && $(window).width() < 991) {
    //         $(".sidebar").animate({ left: '280px' });
    //     }
    //     else if($(".sidebar .close i").data('clicked')){
    //         $(".sidebar").animate({left: '-280px'})
    //     }
    // });
});
$(document).ready(function () {
    $(".headings .menus").click(function () {
        $(".sections .menus").removeClass("d-none")
        $(".sections .catog").addClass("d-none")
    })
    $(".headings .catog").click(function () {
        $(".sections .catog").removeClass("d-none")
        $(".sections .menus").addClass("d-none")
    })
});
$(document).ready(function () {
    $("#topBottom .left").mouseover(function () {
        $("#topBottom .left .iconBar .bar").css("display", "none")
        $("#topBottom .left .iconBar .close").css("display", "block")
    })
    $("#topBottom .left").mouseout(function () {
        $("#topBottom .left .iconBar .bar").css("display", "block")
        $("#topBottom .left .iconBar .close").css("display", "none")
    })

})
// $(document).ready(function () {
//     $(".sections .menus .caret i").each(function(index){
//         $(this).click(function(){
//             $(".sections .menus .content").each(function(){
//                 $(this).slideToggle()
//                 return;
//             });
//         })
//     })
// });



//slide
$(document).ready(function () {
    $("#sliderPart .slide .rightSide i").click(function () {
        $("#sliderPart .slide .slide-1").animate({ left: '-780px' });
        $("#sliderPart .slide .slide-2").animate({ left: '-780px' });
        $("#sliderPart .slide .slide-2 .text").addClass("addAnimation")
        $("#sliderPart .slide .slide-1 .text").removeClass("addAnimation")
    })
    $("#sliderPart .slide .leftSide i").click(function () {
        $("#sliderPart .slide .slide-1").animate({ left: '0px' });
        $("#sliderPart .slide .slide-2").animate({ left: '0px' });
        $("#sliderPart .slide .slide-1 .text").addClass("addAnimation")
        $("#sliderPart .slide .slide-2 .text").removeClass("addAnimation")
    })
})

//tabmenu
$('.menu').owlCarousel({
    loop:true,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true,
        loop:true
      },
      600:{
        items:3,
        nav:true,
        loop:true
      },
      1000:{
        items:4,
        nav:true,
        loop:true
      }
    }
  });
  $('.menu').on('mousedown', function(e) {
    if (e.which === 1) {
      $(this).addClass('grabbing');
      $(this).data('down', true);
      $(this).data('x', e.clientX);
      $(this).data('scrollLeft', this.scrollLeft);
    }
  });
  
  $('.menu').on('mouseup', function(e) {
    if (e.which === 1) {
      $(this).removeClass('grabbing');
      $(this).data('down', false);
    }
  });
  
  $('.menu').on('mousemove', function(e) {
    if ($(this).data('down') === true) {
      this.scrollLeft = $(this).data('scrollLeft') - (e.clientX - $(this).data('x'));
    }
  });
  
$(document).ready(function () {
    $("#tabMenu .header h3").mouseover(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#fcb941")
        }
    })
    $("#tabMenu .header h3").mouseout(function () {
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#CCCCCC")
        }
    })
    $("#tabMenu .header h3").click(function () {

        $("#tabMenu .header .first").removeClass("first")
        $(this).css("color", "#333333")
        $(this).addClass("first");
        if ($(this).attr("class") != "first") {
            $(this).css("color", "#CCCCCC")
        }
    })
})
let translate = 0;
let headers = document.querySelectorAll("#tabMenu .header h3");
headers.forEach(function (header) {
    header.addEventListener("click", function () {
        let headId = header.getAttribute("data-id");
        let menus = document.querySelectorAll("#tabMenu .menu");
        menus.forEach(function (menu) {
            if (menu.getAttribute("data-id") === headId) {
                menu.classList.remove("d-none");
                translate = 0;
            } else {
                menu.classList.add("d-none");
                translate = 0;
            }
        });
    });
});



let right = document.querySelectorAll("#tabMenu .carousel .right i")
let left = document.querySelectorAll("#tabMenu .carousel .left i")
let menus = document.querySelectorAll("#tabMenu .menu")


function rightButton() {
    menus.forEach(menu => {
        if (!menu.classList.contains("d-none")) {
            // let show = menu.querySelectorAll("#tabMenu .menu .show")
            // let hide = menu.querySelectorAll("#tabMenu .menu .hide")
            // if (show[show.length - 1].nextElementSibling != null) {
                // show[0].classList.add("hide")
                // show[0].classList.remove("show")
                // show[show.length - 1].nextElementSibling.classList.remove("hide")
                // show[show.length - 1].nextElementSibling.classList.add("show")
                translate -= 290;
                menu.style.transform = `translate(${translate}px)`;
                // left.style.display = "flex"
                // right.style.display = "none"
            // }
        }
    })

}
function leftButton() {
    menus.forEach(menu => {
        if (!menu.classList.contains("d-none")) {
            // let show = menu.querySelectorAll("#tabMenu .menu .show")
            // let hide = menu.querySelectorAll("#tabMenu .menu .hide")
            // if (show[0].previousElementSibling.classList != "right") {
                // show[0].previousElementSibling.classList.add("show")
                // show[0].previousElementSibling.classList.remove("hide")
                // show[show.length - 1].classList.remove("show")
                // show[show.length - 1].classList.add("hide")
                translate += 290;
                menu.style.transform = `translate(${translate}px)`;
            // }
            // left.style.display = "flex"
            // right.style.display = "none"
        }
    })

}

right.forEach(element => {
    element.addEventListener("click", rightButton);

});
left.forEach(element => {
    element.addEventListener("click", leftButton);

});


//brands
$('.brands').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true,
            loop:false
        },
        600:{
            items:4,
            nav:false,
            loop:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
})

//trendPro
let heads = document.querySelectorAll("#trendPro .headers p");
heads.forEach(function (head) {
    head.addEventListener("click", function () {
        let headId = head.getAttribute("data-id");
        let menus = document.querySelectorAll("#trendPro .menu");
        menus.forEach(function (menu) {
            if (menu.getAttribute("data-id") === headId) {
                menu.classList.remove("d-none");
            } else {
                menu.classList.add("d-none");
            }
        });
    });
});

//sellingPro
let allP = document.querySelectorAll("#sellingPro .headers .right p");
allP.forEach(function (p) {
    p.addEventListener("click", function () {
        let headId = p.getAttribute("data-id");
        let menus = document.querySelectorAll("#sellingPro .menu");
        menus.forEach(function (menu) {
            if (menu.getAttribute("data-id") === headId) {
                menu.classList.remove("d-none");
            } else {
                menu.classList.add("d-none");
            }
        });
    });
});
