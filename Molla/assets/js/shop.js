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


$(document).ready(function () {
    $(".secondSide .cog .open").click(function(){
        $(".secondSide").css("transform","translateX(0px)")
        $(".secondSide .cog .open").css("display","none")
        $(".secondSide .cog .close").css("display","flex")
    })
    $(".secondSide .cog .close").click(function(){
        $(".secondSide").css("transform","translateX(-297px)")
        $(".secondSide .cog .open").css("display","flex")
        $(".secondSide .cog .close").css("display","none")
    })
})
$(window).resize(function() {
    if ($(window).width() > 991) {
        $(".secondSide .cog .open").css("display","none")
        $(".secondSide .cog .close").css("display","none")
        $(".secondSide").css("transform","translateX(-297px)")
    } else {
        $(".secondSide .cog .open").css("display","flex")
    }
  });
  