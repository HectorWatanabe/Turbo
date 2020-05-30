$(document).ready(function(){

    $(window).scroll(function () { 
        var position_y = $(window).scrollTop();
        
        if(position_y > 1){
            $("header .navbar").addClass("active");
        }else{
            $("header .navbar").removeClass("active");
        }
    });
});