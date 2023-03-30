$(document).ready(function () {
    $("#topCenter .left .iconBar i").click(function () {
        $(".sidebar").animate({ left: '280px' });
        $(this).data('clicked', true);
    });

    $(".sidebar .close i").click(function () {
        $(".sidebar").animate({ left: '-280px' });
        $(this).data('clicked', true);
    });

    $(window).resize(function () {
        if ($(window).width() > 991) {
            $(".sidebar").animate({ left: '-280px' });
        }
        //     else if ($("#topCenter .left .iconBar i").data('clicked') && $(window).width() < 991) {
        //         $(".sidebar").animate({ left: '280px' });
        //     }
        //     else if($(".sidebar .close i").data('clicked')){
        //         $(".sidebar").animate({left: '-280px'})
        //     }
    });
});
$(document).ready(function () {
    $(".headings .menu").click(function () {
        $(".sections .menu").removeClass("d-none")
        $(".sections .catog").addClass("d-none")
    })
    $(".headings .catog").click(function () {
        $(".sections .catog").removeClass("d-none")
        $(".sections .menu").addClass("d-none")
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
//     $(".sections .menu .caret i").each(function(index){
//         $(this).click(function(){
//             $(".sections .menu .content").each(function(){
//                 $(this).slideToggle()
//                 return;
//             });
//         })
//     })
// });

//borderofImages
$(document).ready(function () {
    $("#aboutProduct .leftSide .img").click(function () {
        $("#aboutProduct .leftSide .img").removeClass("first")
        $(this).addClass("first")
    })
})

//scaler of image
const scaler = document.querySelector('.scaleble-image');
const imageBlock = document.querySelector('.image-container');

const blockOffsetLeft = imageBlock.offsetLeft;
const blockOffsetTop = imageBlock.offsetTop;

scaler.addEventListener('mousemove', function (e) {

    const x = e.clientX - blockOffsetLeft + 5;
    const y = e.clientY - blockOffsetTop + 5;

    scaler.style.transform = `translate(-${x}px, -${y}px) scale(1.5)`;
});
scaler.addEventListener('mouseout', function () {
    scaler.style.transform = 'translate(0px, 0px) scale(1)';
});

//tabemenu
$(document).ready(function () {
    $("#productDetail .headers p").click(function () {
        $("#productDetail .headers p").removeClass("first")
        $(this).addClass("first")
        let headId = $(this).attr("data-id")

        $("#productDetail .contents .cont").each(function () {
            let contentId = $(this).attr("data-id");
            if (contentId == headId) {
                $("#productDetail .contents .cont").addClass("d-none")
                $(this).removeClass("d-none")
            }
        })
    })
})

//slider
$('.menu').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        700: {
            items: 3,
            nav: false
        },
        1100: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})